/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        boxShadow: {
          'neu': '20px 20px 60px #c8c9cc, -20px -20px 60px #ffffff',
          'clay': 'inset 8px 8px 16px rgba(255,255,255,0.6), inset -8px -8px 16px rgba(0,0,0,0.1), 8px 8px 16px rgba(0,0,0,0.1)',
        }
      },
    },
    plugins: [],
  }