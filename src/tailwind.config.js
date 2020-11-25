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
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',

    // If you really want to remove all unused styles, use the mode: 'all'
    // option and be very careful to provide the paths to all files that might
    // reference any classes or HTML elements
    mode: 'all'
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')]
};
