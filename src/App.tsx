
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