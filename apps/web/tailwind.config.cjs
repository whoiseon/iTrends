/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [require('nativewind/preset')],
  important: 'html',
  theme: {
    extend: {
      boxShadow: {
        body: '0px 0px 40px 0px rgba(0, 0, 0, 0.03)',
      },
    },
  },
  plugins: [],
};
