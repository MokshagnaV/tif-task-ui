/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        body: "#444957",
        heading: "#0E2368",
        red: "#E23744",
        button: "#424961",
        footerBody: "#646874",
      },
      fontFamily: {
        "source-sans": ["Source Sans 3", ...defaultTheme.fontFamily.sans],
        "open-sans": ["Open Sans", ...defaultTheme.fontFamily.sans],
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
        roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
