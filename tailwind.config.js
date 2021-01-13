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
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',    
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
