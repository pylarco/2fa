import React, { useState } from 'react';
import { useTOTP } from '../hooks/useTOTP';
import { ClipboardIcon } from './icons/ClipboardIcon';
import { CheckIcon } from './icons/CheckIcon';
import { AlertTriangleIcon } from './icons/AlertTriangleIcon';

export const TOTPGenerator: React.FC = () => {
  const [secretKey, setSecretKey] = useState<string>('');
  const { token, timeRemaining, progress, error, isValidSecret } = useTOTP(secretKey);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopyCode = async () => {
    if (token) {
      try {
        await navigator.clipboard.writeText(token);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy code: ', err);
        // TODO: Show error toast or message to user
      }
    }
  };

  return (
    <div className="bg-slate-800 shadow-2xl rounded-xl p-6 md:p-8 space-y-6 transform transition-all hover:scale-[1.01]">
      <div>
        <label htmlFor="secretKey" className="block text-sm font-medium text-slate-300 mb-1">
          Enter your 2FA Secret Key
        </label>
        <input
          type="text"
          id="secretKey"
          value={secretKey}
          onChange={(e) => setSecretKey(e.target.value)}
          placeholder="e.g., BK5VTVQ7D2RBXXXX"
          className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-100 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-shadow"
        />
        {error && (
          <p role="alert" className="mt-2 text-sm text-red-400 flex items-center">
            <AlertTriangleIcon className="w-4 h-4 mr-1.5 flex-shrink-0" />
            {error}
          </p>
        )}
      </div>

      {isValidSecret && token && (
        <div className="space-y-4 pt-4 border-t border-slate-700">
          <div className="text-center">
            <p className="text-sm text-slate-400 mb-1" id="totp-code-label">Current TOTP Code</p>
            <div className="flex items-center justify-center space-x-3">
              <div
                aria-labelledby="totp-code-label"
                className="relative overflow-hidden bg-slate-700 px-6 py-3 rounded-lg flex-grow flex justify-center items-center"
                style={{ minHeight: '76px' }} // Ensures consistent height
              >
                <div
                  className="absolute bottom-0 left-0 right-0 bg-sky-500/50 transition-all duration-200 ease-linear"
                  style={{ height: `${progress}%` }}
                  aria-hidden="true"
                />
                <span className="relative z-10 text-5xl font-mono tracking-wider text-white">
                  {token.slice(0, 3)} {token.slice(3, 6)}
                </span>
              </div>
              <button
                onClick={handleCopyCode}
                title={isCopied ? "Copied!" : "Copy code"}
                aria-label={isCopied ? "Code copied to clipboard" : "Copy TOTP code to clipboard"}
                className={`p-3 rounded-lg transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 ${
                  isCopied
                    ? 'bg-green-500 hover:bg-green-600 text-white focus:ring-green-400'
                    : 'bg-sky-500 hover:bg-sky-600 text-white focus:ring-sky-400'
                }`}
              >
                {isCopied ? <CheckIcon className="w-6 h-6" /> : <ClipboardIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
          
          <div>
            <p className="text-xs text-slate-500 text-center mt-2" aria-live="polite">
              Code refreshes in {timeRemaining}s
            </p>
          </div>
        </div>
      )}
      
      {!isValidSecret && secretKey && !error && (
         <div className="text-center py-8">
            <p className="text-slate-400">Enter a valid secret key to generate codes.</p>
        </div>
      )}

      {!secretKey && (
        <div className="text-center py-8 border-t border-slate-700">
            <p className="text-slate-400 text-lg">Your generated codes will appear here.</p>
            <p className="text-sm text-slate-500 mt-1">Codes are time-sensitive and refresh automatically.</p>
        </div>
      )}
    </div>
  );
};