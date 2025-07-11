# 2FA Authenticator

A secure, client-side, browser-based application for generating Time-based One-Time Passwords (TOTP), commonly used for Two-Factor Authentication (2FA).

This tool provides a simple and secure way to generate your 2FA codes without needing a phone or a dedicated desktop application. Since it runs entirely in your browser, your secret keys are never sent to any server, ensuring your accounts remain secure.

## ✨ Key Features

- **Real-time TOTP Generation**: Generates 6-digit codes based on the standard TOTP algorithm.
- **Client-Side Security**: Your 2FA secret key is processed entirely in your browser and is never stored or transmitted.
- **Visual Timer**: A progress bar shows the time remaining until a new code is generated (typically 30 seconds).
- **Copy to Clipboard**: Easily copy the generated code with a single click.
- **Input Validation**: Provides instant feedback for invalid or malformed secret keys.
- **Responsive Design**: Works seamlessly on both desktop and mobile browsers.
- **Modern Tech Stack**: Built with React 19, Vite, and TypeScript.

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) (included with Node.js)

### Installation & Running Locally

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/pylarco/2fa.git
    cd 2fa-authenticator
    ```
    *Note: The repository URL is based on information from the source code. Replace with the correct URL if different.*

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## 🛠️ How to Use

1.  **Get your 2FA Secret Key**: When you enable 2FA on a service (like Google, GitHub, etc.), you are usually given a QR code and a "manual entry" key or "secret key". Copy this secret key. It's a string of letters and numbers.
2.  **Paste the Key**: Open the Authenticator app in your browser and paste the secret key into the input field.
3.  **Generate Code**: The app will immediately generate a 6-digit TOTP code.
4.  **Copy Code**: Click the copy button next to the code.
5.  **Use the Code**: Paste the code into the 2FA prompt on the service you are logging into.

The code will automatically refresh every 30 seconds.

## 🔒 Security Notice

This application is designed with security as a top priority.

- **No Server-Side Processing**: All TOTP generation logic happens locally in your browser using JavaScript.
- **No Data Transmission**: Your secret keys are **never** sent over the network.
- **No Storage**: The secret key is held only in the application's memory while the tab is open. It is **not** stored in `localStorage`, cookies, or any other persistent browser storage. Closing the browser tab will clear the key.

For maximum security, it is recommended to run this application locally on your machine or host it on a trusted private server.

## 🏗️ Tech Stack

- **Frontend**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (via CDN)
- **TOTP Logic**: [otpauth](https://github.com/hectorm/otpauth) library

## 📂 Project Structure