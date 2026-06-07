/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js", "./*.jsx", "./*.tsx"],
  theme: {
    extend: {
      colors: {
        levelup: {
          background: "#081425",
          surface: "#101B2C",
          card: "#091526",
          red: "#D11217",
          redAlt: "#D11218",
          redStrong: "#FF0018",
          redDark: "#93000E",
          blue: "#0077FF",
          blueDark: "#00346F",
          blueDeep: "#00234B",
          match: "#026605",
          text: "#FFFFFF",
          muted: "#868B94",
          mutedAlt: "#888D96",
          "muted-alt": "#888D96",
        },
      },
      backgroundImage: {
        "levelup-brand": "linear-gradient(97.45deg, #0077FF 0.69%, #FF0018 100.01%)",
        "levelup-cta": "linear-gradient(104.55deg, #00234B 25.34%, #93000E 97.29%)",
        "levelup-login": "linear-gradient(100.5deg, #00346F 25.34%, #DA0015 97.29%)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        "levelup-card": "0 24px 80px rgba(0, 0, 0, 0.24)",
      },
    },
  },
  plugins: [],
};
