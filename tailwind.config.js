/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#E87BF8",
          200: "#8456EC",
          300: "#501FC1",
          400: "#240D57",
        },
        secondary: {
          100: "#F6F2FF",
          200: "#EDE5FF",
          300: "#CCB6FF",
        },
        alert: {
          success: "#00805E",
          "success-100": "#D3FFE2",
          error: "#E61445",
          "error-100": "#FFE7D0",
        },
        neutral: {
          100: "#BDBDBD",
          200: "#F2F2F2",
          300: "#E0E0E0",
          400: "#BDBDBD",
          500: "#828282",
          600: "#4F4F4F",
        },
      },
    },
  },
  plugins: [],
};

