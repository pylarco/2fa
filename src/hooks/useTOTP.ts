
import { useState, useEffect, useCallback } from 'react';
import { TOTP, Secret } from 'otpauth'; // Changed from default import
import { TOTP_PERIOD, TOTP_DIGITS, TOTP_ALGORITHM } from '../constants';

interface UseTOTPReturn {
  token: string | null;
  timeRemaining: number;
  progress: number;
  error: string | null;
  isValidSecret: boolean;
  generateToken: () => void;
}

// Helper to safely create TOTP instance
const createTOTPInstance = (secret: string): TOTP | null => { // Changed OTPAuth.TOTP to TOTP
  if (!secret || secret.length < 8) { // Basic validation
    return null;
  }
  try {
    // Used Secret directly instead of OTPAuth.Secret
    const otpSecret = Secret.fromBase32(secret.replace(/\s/g, '').toUpperCase());
    // Used new TOTP() directly instead of new OTPAuth.TOTP()
    return new TOTP({
      issuer: 'AuthenticatorApp',
      label: 'User',
      algorithm: TOTP_ALGORITHM,
      digits: TOTP_DIGITS,
      period: TOTP_PERIOD,
      secret: otpSecret,
    });
  } catch (e) {
    console.error("Error creating TOTP instance:", e);
    return null;
  }
};

export const useTOTP = (secretKey: string): UseTOTPReturn => {
  const [totpInstance, setTotpInstance] = useState<TOTP | null>(null); // Changed OTPAuth.TOTP to TOTP
  const [token, setToken] = useState<string | null>(null);
  const [timeRemaining, setTimeRemaining] = useState<number>(TOTP_PERIOD);
  const [progress, setProgress] = useState<number>(100);
  const [error, setError] = useState<string | null>(null);
  const [isValidSecret, setIsValidSecret] = useState<boolean>(false);

  useEffect(() => {
    if (secretKey) {
      const instance = createTOTPInstance(secretKey);
      setTotpInstance(instance);
      if (instance) {
        setIsValidSecret(true);
        setError(null);
      } else {
        setIsValidSecret(false);
        setError('Invalid or too short 2FA secret key. Please check and try again.');
        setToken(null);
        setTimeRemaining(TOTP_PERIOD);
        setProgress(100);
      }
    } else {
      setTotpInstance(null);
      setIsValidSecret(false);
      setError(null); // No error if input is empty, just no token
      setToken(null);
      setTimeRemaining(TOTP_PERIOD);
      setProgress(100);
    }
  }, [secretKey]);

  const generateToken = useCallback(() => {
    if (totpInstance) {
      try {
        const newToken = totpInstance.generate();
        setToken(newToken);
        setError(null);
      } catch (e) {
        console.error("Error generating token:", e);
        setError('Failed to generate token. The secret key might be malformed.');
        setToken(null);
      }
    } else {
      setToken(null);
    }
  }, [totpInstance]);

  useEffect(() => {
    if (totpInstance && isValidSecret) {
      generateToken(); // Initial token generation

      const intervalId = setInterval(() => {
        const currentEpochTime = Math.floor(Date.now() / 1000);
        const newTimeRemaining = TOTP_PERIOD - (currentEpochTime % TOTP_PERIOD);
        setTimeRemaining(newTimeRemaining);
        setProgress((newTimeRemaining / TOTP_PERIOD) * 100);

        if (newTimeRemaining === TOTP_PERIOD) { // Period just rolled over
          generateToken();
        }
      }, 1000);

      return () => clearInterval(intervalId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totpInstance, isValidSecret, generateToken]); // generateToken is memoized

  return { token, timeRemaining, progress, error, isValidSecret, generateToken };
};