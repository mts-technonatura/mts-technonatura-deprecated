const defaultTheme = require("tailwindcss/defaultTheme");
const { defaultExtendTheme } = require("./tailwind.extends.js");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("kutty")],

  theme: {
    extend: Object.assign({}, defaultExtendTheme, {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans]
      }
    })
  },
  variants: {
    scale: ["responsive", "hover", "focus", "group-hover"],
    textColor: ["responsive", "hover", "focus", "group-hover"],
    opacity: ["responsive", "hover", "focus", "group-hover"],
    backgroundColor: ["responsive", "hover", "focus", "group-hover"]
  }
};
