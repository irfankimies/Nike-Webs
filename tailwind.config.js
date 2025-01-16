/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["selector", "[data-mode='dark']"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        text: "rgb(var(--text-color))",
        bg: "rgb(var(--bg-color))",
        "p-color": "rgb(var(--paragraph-color))",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
        "5xl": "0 8px 11px rgb(14 55 54 / 15%)",
        bottom:
          "-5px 10px 45px 5px rgba(75, 0, 130, 0.6), 5px 10px 15px -5px rgba(75, 0, 130, 0.7)",
        green:
          "0 8px 11px -5px rgba(50, 205, 50, 0.2), 5px 10px 15px -5px rgba(50, 205, 50, 0.2)",
        "coral-red":
          "0 8px 11px -5px rgba(255, 200, 180, 0.15), 5px 10px 15px -5px rgba(255, 200, 180, 0.15)",
      },
      backgroundImage: {
        hero: "url('assets/images/collection-background.svg')",
        card: "url('assets/images/thumbnail-background.svg')",
      },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [],
};
