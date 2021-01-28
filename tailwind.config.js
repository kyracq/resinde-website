module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      purple: {
        DEFAULT: "#7d71f2",
      },
      magenta: {
        DEFAULT: "#f02e65",
      },
      blue: {
        DEFAULT: "#0148e8",
      },
      yellow: {
        DEFAULT: "#ffcf2e",
      },
      white: {
        DEFAULT: "#ffffff",
      },
      black: {
        DEFAULT: "#000000",
      },
    },
    screens: {
      mobile: { max: "767px" },
    },
    extend: {
      borderWidth: {
        6: "6px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
