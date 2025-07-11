# Directory Structure
```
.env.local
App.tsx
components/icons/AlertTriangleIcon.tsx
components/icons/CheckIcon.tsx
components/icons/ClipboardIcon.tsx
components/icons/GithubIcon.tsx
components/ProgressBar.tsx
components/TOTPGenerator.tsx
constants.ts
docs/repomix.md
hooks/useTOTP.ts
index.html
index.tsx
package.json
README.md
src/App.tsx
src/components/icons/AlertTriangleIcon.tsx
src/components/icons/CheckIcon.tsx
src/components/icons/ClipboardIcon.tsx
src/components/icons/GithubIcon.tsx
src/components/ProgressBar.tsx
src/components/TOTPGenerator.tsx
src/constants.ts
src/hooks/useTOTP.ts
src/index.tsx
tsconfig.json
vite.config.ts
```

# Files

## File: .env.local
````
GEMINI_API_KEY=PLACEHOLDER_API_KEY
````

## File: App.tsx
````typescript
import React from 'react';
import { TOTPGenerator } from './components/TOTPGenerator';
import { GithubIcon } from './components/icons/GithubIcon';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900">
      <header className="mb-8 text-center">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 mb-2">
          Authenticator
        </h1>
        <p className="text-slate-400 text-lg">
          Generate your Time-based One-Time Passwords (TOTP) securely.
        </p>
      </header>
      
      <main className="w-full max-w-md">
        <TOTPGenerator />
      </main>

      <footer className="mt-12 text-center text-slate-500">
        <p>&copy; {new Date().getFullYear()} Secure Auth App. All rights reserved.</p>
        <a 
          href="https://github.com/your-repo" // Replace with actual repo link if available
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center text-sky-400 hover:text-sky-300 transition-colors mt-2"
        >
          <GithubIcon className="w-5 h-5 mr-2" />
          View on GitHub
        </a>
      </footer>
    </div>
  );
};

export default App;
````

## File: components/icons/AlertTriangleIcon.tsx
````typescript
import React from 'react';

interface IconProps {
  className?: string;
}

export const AlertTriangleIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className={className || "w-6 h-6"}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" 
    />
  </svg>
);
````

## File: components/icons/CheckIcon.tsx
````typescript
import React from 'react';

interface IconProps {
  className?: string;
}

export const CheckIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className || "w-6 h-6"}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);
````

## File: components/icons/ClipboardIcon.tsx
````typescript
import React from 'react';

interface IconProps {
  className?: string;
}

export const ClipboardIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className || "w-6 h-6"}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
    />
  </svg>
);
````

## File: components/icons/GithubIcon.tsx
````typescript
import React from 'react';

interface IconProps {
  className?: string;
}

export const GithubIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 16 16" 
    fill="currentColor" 
    className={className || "w-6 h-6"}
    aria-hidden="true"
  >
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
  </svg>
);
````

## File: components/ProgressBar.tsx
````typescript
import React from 'react';

interface ProgressBarProps {
  percentage: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
  const cappedPercentage = Math.max(0, Math.min(100, percentage));

  return (
    <div className="w-full bg-slate-700 rounded-full h-2.5 overflow-hidden">
      <div
        className="bg-sky-500 h-2.5 rounded-full transition-all duration-200 ease-linear"
        style={{ width: `${cappedPercentage}%` }}
      ></div>
    </div>
  );
};
````

## File: components/TOTPGenerator.tsx
````typescript
import React, { useState } from 'react';
import { useTOTP } from '../hooks/useTOTP';
import { ClipboardIcon } from './icons/ClipboardIcon';
import { CheckIcon } from './icons/CheckIcon';
import { ProgressBar } from './ProgressBar';
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
          <p className="mt-2 text-sm text-red-400 flex items-center">
            <AlertTriangleIcon className="w-4 h-4 mr-1.5 flex-shrink-0" />
            {error}
          </p>
        )}
      </div>

      {isValidSecret && token && (
        <div className="space-y-4 pt-4 border-t border-slate-700">
          <div className="text-center">
            <p className="text-sm text-slate-400 mb-1">Current TOTP Code</p>
            <div className="flex items-center justify-center space-x-3">
              <p className="text-5xl font-mono tracking-wider text-sky-400 bg-slate-700 px-4 py-2 rounded-lg">
                {token.slice(0, 3)} {token.slice(3, 6)}
              </p>
              <button
                onClick={handleCopyCode}
                title={isCopied ? "Copied!" : "Copy code"}
                className={`p-3 rounded-lg transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800
                            ${isCopied 
                              ? 'bg-green-500 hover:bg-green-600 text-white focus:ring-green-400' 
                              : 'bg-sky-500 hover:bg-sky-600 text-white focus:ring-sky-400'}`}
              >
                {isCopied ? <CheckIcon className="w-6 h-6" /> : <ClipboardIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
          
          <div>
            <ProgressBar percentage={progress} />
            <p className="text-xs text-slate-500 text-center mt-1">
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
````

## File: constants.ts
````typescript
export const TOTP_PERIOD: number = 30; // Standard TOTP period in seconds
export const TOTP_DIGITS: number = 6;  // Standard TOTP digits
export const TOTP_ALGORITHM: string = 'SHA1'; // Standard TOTP algorithm
````

## File: docs/repomix.md
````markdown
This file is a merged representation of a subset of the codebase, containing files not matching ignore patterns, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching these patterns are excluded: node_modules, dist, build, public, repomix.config.json, .gitignore, .repomixignore, bun.lockb, metadata.json, package-lock.json, tsconfig.tsbuildinfo
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
.env.local
App.tsx
components/icons/AlertTriangleIcon.tsx
components/icons/CheckIcon.tsx
components/icons/ClipboardIcon.tsx
components/icons/GithubIcon.tsx
components/ProgressBar.tsx
components/TOTPGenerator.tsx
constants.ts
hooks/useTOTP.ts
index.html
index.tsx
package.json
README.md
src/App.tsx
src/components/icons/AlertTriangleIcon.tsx
src/components/icons/CheckIcon.tsx
src/components/icons/ClipboardIcon.tsx
src/components/icons/GithubIcon.tsx
src/components/ProgressBar.tsx
src/components/TOTPGenerator.tsx
src/constants.ts
src/hooks/useTOTP.ts
src/index.tsx
tsconfig.json
vite.config.ts
```

# Files

## File: .env.local
```
GEMINI_API_KEY=PLACEHOLDER_API_KEY
```

## File: App.tsx
```typescript
import React from 'react';
import { TOTPGenerator } from './components/TOTPGenerator';
import { GithubIcon } from './components/icons/GithubIcon';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900">
      <header className="mb-8 text-center">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 mb-2">
          Authenticator
        </h1>
        <p className="text-slate-400 text-lg">
          Generate your Time-based One-Time Passwords (TOTP) securely.
        </p>
      </header>
      
      <main className="w-full max-w-md">
        <TOTPGenerator />
      </main>

      <footer className="mt-12 text-center text-slate-500">
        <p>&copy; {new Date().getFullYear()} Secure Auth App. All rights reserved.</p>
        <a 
          href="https://github.com/your-repo" // Replace with actual repo link if available
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center text-sky-400 hover:text-sky-300 transition-colors mt-2"
        >
          <GithubIcon className="w-5 h-5 mr-2" />
          View on GitHub
        </a>
      </footer>
    </div>
  );
};

export default App;
```

## File: components/icons/AlertTriangleIcon.tsx
```typescript
import React from 'react';

interface IconProps {
  className?: string;
}

export const AlertTriangleIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className={className || "w-6 h-6"}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" 
    />
  </svg>
);
```

## File: components/icons/CheckIcon.tsx
```typescript
import React from 'react';

interface IconProps {
  className?: string;
}

export const CheckIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className || "w-6 h-6"}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);
```

## File: components/icons/ClipboardIcon.tsx
```typescript
import React from 'react';

interface IconProps {
  className?: string;
}

export const ClipboardIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className || "w-6 h-6"}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
    />
  </svg>
);
```

## File: components/icons/GithubIcon.tsx
```typescript
import React from 'react';

interface IconProps {
  className?: string;
}

export const GithubIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 16 16" 
    fill="currentColor" 
    className={className || "w-6 h-6"}
    aria-hidden="true"
  >
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
  </svg>
);
```

## File: components/ProgressBar.tsx
```typescript
import React from 'react';

interface ProgressBarProps {
  percentage: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
  const cappedPercentage = Math.max(0, Math.min(100, percentage));

  return (
    <div className="w-full bg-slate-700 rounded-full h-2.5 overflow-hidden">
      <div
        className="bg-sky-500 h-2.5 rounded-full transition-all duration-200 ease-linear"
        style={{ width: `${cappedPercentage}%` }}
      ></div>
    </div>
  );
};
```

## File: components/TOTPGenerator.tsx
```typescript
import React, { useState } from 'react';
import { useTOTP } from '../hooks/useTOTP';
import { ClipboardIcon } from './icons/ClipboardIcon';
import { CheckIcon } from './icons/CheckIcon';
import { ProgressBar } from './ProgressBar';
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
          <p className="mt-2 text-sm text-red-400 flex items-center">
            <AlertTriangleIcon className="w-4 h-4 mr-1.5 flex-shrink-0" />
            {error}
          </p>
        )}
      </div>

      {isValidSecret && token && (
        <div className="space-y-4 pt-4 border-t border-slate-700">
          <div className="text-center">
            <p className="text-sm text-slate-400 mb-1">Current TOTP Code</p>
            <div className="flex items-center justify-center space-x-3">
              <p className="text-5xl font-mono tracking-wider text-sky-400 bg-slate-700 px-4 py-2 rounded-lg">
                {token.slice(0, 3)} {token.slice(3, 6)}
              </p>
              <button
                onClick={handleCopyCode}
                title={isCopied ? "Copied!" : "Copy code"}
                className={`p-3 rounded-lg transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800
                            ${isCopied 
                              ? 'bg-green-500 hover:bg-green-600 text-white focus:ring-green-400' 
                              : 'bg-sky-500 hover:bg-sky-600 text-white focus:ring-sky-400'}`}
              >
                {isCopied ? <CheckIcon className="w-6 h-6" /> : <ClipboardIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
          
          <div>
            <ProgressBar percentage={progress} />
            <p className="text-xs text-slate-500 text-center mt-1">
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
```

## File: constants.ts
```typescript
export const TOTP_PERIOD: number = 30; // Standard TOTP period in seconds
export const TOTP_DIGITS: number = 6;  // Standard TOTP digits
export const TOTP_ALGORITHM: string = 'SHA1'; // Standard TOTP algorithm
```

## File: hooks/useTOTP.ts
```typescript
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
```

## File: index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>2FA Authenticator</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body {
      font-family: 'Inter', sans-serif; /* A nice default sans-serif font often used with Tailwind */
    }
    /* For Webkit browsers like Chrome, Safari */
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #1e293b; /* slate-800 */
    }
    ::-webkit-scrollbar-thumb {
      background: #334155; /* slate-700 */
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #475569; /* slate-600 */
    }
  </style>
<script type="importmap">
{
  "imports": {
    "react/": "https://esm.sh/react@^19.1.0/",
    "react": "https://esm.sh/react@^19.1.0",
    "react-dom/": "https://esm.sh/react-dom@^19.1.0/",
    "otpauth": "https://esm.sh/otpauth@^9.4.0"
  }
}
</script>
<link rel="stylesheet" href="/index.css">
</head>
<body class="bg-slate-900 text-slate-100">
  <div id="root"></div>
  <script type="module" src="/src/index.tsx"></script>
<script type="module" src="/index.tsx"></script>
</body>
</html>
```

## File: index.tsx
```typescript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## File: package.json
```json
{
  "name": "2fa-authenticator",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@types/react-dom": "^19.1.6",
    "otpauth": "^9.4.0",
    "react": "^19.1.0",
    "react-dom": "^19.1.0"
  },
  "devDependencies": {
    "@types/node": "^22.14.0",
    "@types/react": "^19.1.8",
    "typescript": "~5.7.2",
    "vite": "^6.2.0"
  }
}
```

## File: README.md
```markdown
# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
```

## File: src/App.tsx
```typescript
import React from 'react';
import { TOTPGenerator } from './components/TOTPGenerator';
import { GithubIcon } from './components/icons/GithubIcon';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900">
      <header className="mb-8 text-center">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 mb-2">
          Authenticator
        </h1>
        <p className="text-slate-400 text-lg">
          Generate your Time-based One-Time Passwords (TOTP) securely.
        </p>
      </header>
      
      <main className="w-full max-w-md">
        <TOTPGenerator />
      </main>

      <footer className="mt-12 text-center text-slate-500">
        <p>&copy; {new Date().getFullYear()} Secure Auth App. All rights reserved.</p>
        <a 
          href="https://github.com/pylarco/2fa" // Replace with actual repo link if available
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center text-sky-400 hover:text-sky-300 transition-colors mt-2"
        >
          <GithubIcon className="w-5 h-5 mr-2" />
          View on GitHub
        </a>
      </footer>
    </div>
  );
};

export default App;
```

## File: src/components/icons/AlertTriangleIcon.tsx
```typescript
import React from 'react';

interface IconProps {
  className?: string;
}

export const AlertTriangleIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className={className || "w-6 h-6"}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" 
    />
  </svg>
);
```

## File: src/components/icons/CheckIcon.tsx
```typescript
import React from 'react';

interface IconProps {
  className?: string;
}

export const CheckIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className || "w-6 h-6"}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);
```

## File: src/components/icons/ClipboardIcon.tsx
```typescript
import React from 'react';

interface IconProps {
  className?: string;
}

export const ClipboardIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className || "w-6 h-6"}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
    />
  </svg>
);
```

## File: src/components/icons/GithubIcon.tsx
```typescript
import React from 'react';

interface IconProps {
  className?: string;
}

export const GithubIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 16 16" 
    fill="currentColor" 
    className={className || "w-6 h-6"}
    aria-hidden="true"
  >
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
  </svg>
);
```

## File: src/components/ProgressBar.tsx
```typescript
// This file is no longer needed and can be deleted.
// The progress bar functionality has been integrated directly into TOTPGenerator.tsx
// as a "water fill" effect.
```

## File: src/components/TOTPGenerator.tsx
```typescript
import React, { useState } from 'react';
import { useTOTP } from '../hooks/useTOTP';
import { ClipboardIcon } from './icons/ClipboardIcon';
import { CheckIcon } from './icons/CheckIcon';
// ProgressBar import correctly removed
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
      } catch (err) { // Added curly braces here
        console.error('Failed to copy code: ', err);
        // TODO: Show error toast or message to user
      }
    }
  };

  // console.log('Current progress for fill:', progress); // Optional: for user to uncomment for debugging

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
          aria-label="2FA Secret Key Input"
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
                style={{ minHeight: '76px' }} // Ensures consistent height for the code display area
              >
                <div
                  className="absolute bottom-0 left-0 right-0 bg-pink-600 border-2 border-yellow-400 transition-all duration-200 ease-linear" // DEBUG: The 'water' fill with highly visible styles
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
                className={`p-3 rounded-lg transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800
                            ${isCopied
                              ? 'bg-green-500 hover:bg-green-600 text-white focus:ring-green-400'
                              : 'bg-sky-500 hover:bg-sky-600 text-white focus:ring-sky-400'}`}
              >
                {isCopied ? <CheckIcon className="w-6 h-6" /> : <ClipboardIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>

          <div>
            {/* ProgressBar component is correctly removed */}
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
```

## File: src/constants.ts
```typescript
export const TOTP_PERIOD: number = 30; // Standard TOTP period in seconds
export const TOTP_DIGITS: number = 6;  // Standard TOTP digits
export const TOTP_ALGORITHM: string = 'SHA1'; // Standard TOTP algorithm
```

## File: src/hooks/useTOTP.ts
```typescript
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
```

## File: src/index.tsx
```typescript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## File: tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "experimentalDecorators": true,
    "useDefineForClassFields": false,
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "allowJs": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true,

    "paths": {
      "@/*" :  ["./*"]
    }
  }
}
```

## File: vite.config.ts
```typescript
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
```
````

## File: hooks/useTOTP.ts
````typescript
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
````

## File: index.html
````html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>2FA Authenticator</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body {
      font-family: 'Inter', sans-serif; /* A nice default sans-serif font often used with Tailwind */
    }
    /* For Webkit browsers like Chrome, Safari */
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #1e293b; /* slate-800 */
    }
    ::-webkit-scrollbar-thumb {
      background: #334155; /* slate-700 */
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #475569; /* slate-600 */
    }
  </style>
<script type="importmap">
{
  "imports": {
    "react/": "https://esm.sh/react@^19.1.0/",
    "react": "https://esm.sh/react@^19.1.0",
    "react-dom/": "https://esm.sh/react-dom@^19.1.0/",
    "otpauth": "https://esm.sh/otpauth@^9.4.0"
  }
}
</script>
<link rel="stylesheet" href="/index.css">
</head>
<body class="bg-slate-900 text-slate-100">
  <div id="root"></div>
  <script type="module" src="/src/index.tsx"></script>
<script type="module" src="/index.tsx"></script>
</body>
</html>
````

## File: index.tsx
````typescript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
````

## File: package.json
````json
{
  "name": "2fa-authenticator",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@types/react-dom": "^19.1.6",
    "otpauth": "^9.4.0",
    "react": "^19.1.0",
    "react-dom": "^19.1.0"
  },
  "devDependencies": {
    "@types/node": "^22.14.0",
    "@types/react": "^19.1.8",
    "typescript": "~5.7.2",
    "vite": "^6.2.0"
  }
}
````

## File: README.md
````markdown
# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
````

## File: src/App.tsx
````typescript
import React from 'react';
import { TOTPGenerator } from './components/TOTPGenerator';
import { GithubIcon } from './components/icons/GithubIcon';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900">
      <header className="mb-8 text-center">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 mb-2">
          Authenticator
        </h1>
        <p className="text-slate-400 text-lg">
          Generate your Time-based One-Time Passwords (TOTP) securely.
        </p>
      </header>
      
      <main className="w-full max-w-md">
        <TOTPGenerator />
      </main>

      <footer className="mt-12 text-center text-slate-500">
        <p>&copy; {new Date().getFullYear()} Secure Auth App. All rights reserved.</p>
        <a 
          href="https://github.com/pylarco/2fa" // Replace with actual repo link if available
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center text-sky-400 hover:text-sky-300 transition-colors mt-2"
        >
          <GithubIcon className="w-5 h-5 mr-2" />
          View on GitHub
        </a>
      </footer>
    </div>
  );
};

export default App;
````

## File: src/components/icons/AlertTriangleIcon.tsx
````typescript
import React from 'react';

interface IconProps {
  className?: string;
}

export const AlertTriangleIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className={className || "w-6 h-6"}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" 
    />
  </svg>
);
````

## File: src/components/icons/CheckIcon.tsx
````typescript
import React from 'react';

interface IconProps {
  className?: string;
}

export const CheckIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className || "w-6 h-6"}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);
````

## File: src/components/icons/ClipboardIcon.tsx
````typescript
import React from 'react';

interface IconProps {
  className?: string;
}

export const ClipboardIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className || "w-6 h-6"}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
    />
  </svg>
);
````

## File: src/components/icons/GithubIcon.tsx
````typescript
import React from 'react';

interface IconProps {
  className?: string;
}

export const GithubIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 16 16" 
    fill="currentColor" 
    className={className || "w-6 h-6"}
    aria-hidden="true"
  >
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
  </svg>
);
````

## File: src/components/ProgressBar.tsx
````typescript
// This file is no longer needed and can be deleted.
// The progress bar functionality has been integrated directly into TOTPGenerator.tsx
// as a "water fill" effect.
````

## File: src/components/TOTPGenerator.tsx
````typescript
import React, { useState } from 'react';
import { useTOTP } from '../hooks/useTOTP';
import { ClipboardIcon } from './icons/ClipboardIcon';
import { CheckIcon } from './icons/CheckIcon';
// ProgressBar import correctly removed
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
      } catch (err) { // Added curly braces here
        console.error('Failed to copy code: ', err);
        // TODO: Show error toast or message to user
      }
    }
  };

  // console.log('Current progress for fill:', progress); // Optional: for user to uncomment for debugging

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
          aria-label="2FA Secret Key Input"
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
                style={{ minHeight: '76px' }} // Ensures consistent height for the code display area
              >
                <div
                  className="absolute bottom-0 left-0 right-0 bg-pink-600 border-2 border-yellow-400 transition-all duration-200 ease-linear" // DEBUG: The 'water' fill with highly visible styles
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
                className={`p-3 rounded-lg transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800
                            ${isCopied
                              ? 'bg-green-500 hover:bg-green-600 text-white focus:ring-green-400'
                              : 'bg-sky-500 hover:bg-sky-600 text-white focus:ring-sky-400'}`}
              >
                {isCopied ? <CheckIcon className="w-6 h-6" /> : <ClipboardIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>

          <div>
            {/* ProgressBar component is correctly removed */}
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
````

## File: src/constants.ts
````typescript
export const TOTP_PERIOD: number = 30; // Standard TOTP period in seconds
export const TOTP_DIGITS: number = 6;  // Standard TOTP digits
export const TOTP_ALGORITHM: string = 'SHA1'; // Standard TOTP algorithm
````

## File: src/hooks/useTOTP.ts
````typescript
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
````

## File: src/index.tsx
````typescript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
````

## File: tsconfig.json
````json
{
  "compilerOptions": {
    "target": "ES2020",
    "experimentalDecorators": true,
    "useDefineForClassFields": false,
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "allowJs": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true,

    "paths": {
      "@/*" :  ["./*"]
    }
  }
}
````

## File: vite.config.ts
````typescript
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
````
