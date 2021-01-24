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
    fontFamily: {
      'display': 'Montserrat, Arial, sans-serif',
      'body': 'Open Sans, Arial, sans-serif',
    },
    borderWidth: {
      '6': '6px',
    },
    borderRadius: {
      'none': '0',
      'sm': '25rem',
      DEFAULT: '50rem',
      'lg': '9999px',
      'full': '9999px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
