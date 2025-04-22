module.exports = {
    content: ["./*.html"], // or "./**/*.{html,js}"
    theme: {
      extend: {
        fontFamily: {
          manrope: ['Manrope', 'sans-serif'],
        },
      },
    },
    plugins: [require("daisyui")], // Optional, only if using DaisyUI
  }
  