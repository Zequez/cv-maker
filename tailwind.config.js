const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

const focusedSiblingPlugin = plugin(function ({ addVariant, e }) {
  addVariant("focused-sibling", ({ container }) => {
    container.walkRules((rule) => {
      rule.selector = `:hover + .focused-sibling\\:${rule.selector.slice(
        1
      )}, :focus + .focused-sibling\\:${rule.selector.slice(1)}`;
    });
  });
});

module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.pug", "./src/**/*.md"],
  darkMode: false,
  theme: {
    listStyleType: {
      none: "none",
      disc: "disc",
      circle: "circle",
    },
    extend: {
      colors: {
        orange: "#fe750b",
        green: colors.green,
        teal: colors.teal,
      },
      screens: {
        print: { raw: "print" },
      },
    },
  },
  variants: {
    extend: {
      display: ["group-focus", "focused-sibling"],
      ringWidth: ["group-focus"],
    },
  },
  plugins: [require("@radishio/tailwindcss-marker"), focusedSiblingPlugin],
};
