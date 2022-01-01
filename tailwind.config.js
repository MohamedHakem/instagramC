module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // prettier-ignore
        "insta_orange": "#c52d90",
        // prettier-ignore
        "insta_purple": "#f99c4b",
        // prettier-ignore
        "back_bg": "#f8fafc",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar"),
    // require("tailwind-scrollbar-hide"),
  ],
};
