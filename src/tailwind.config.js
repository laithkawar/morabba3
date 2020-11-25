/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      // colors: {
      //   purple: 'rebeccapurple'
      // },
      fontFamily: {
        sans: ['Tajawal', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')]
};
