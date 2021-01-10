export default {
  target: 'static',
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  plugins: ['~plugins/ga.client.js'],
  srcDir: 'src',
  // Auto load components. Docs: https://github.com/nuxt/components
  components: true,
  head: {
    title: 'مربع لتصميم الشعارات',
    meta: [
      { charset: 'utf-8' },
      {
        hid: 'description',
        name: 'description',
        content: 'مربع لتصميم الشعارات'
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge,chrome=1' }
    ],
    htmlAttrs: {
      lang: 'ar',
      dir: 'rtl'
    }
  },
  modules: [
    // Doc: https://github.com/pimlie/nuxt-rfg-icon
    'nuxt-rfg-icon',
    // Doc: https://github.com/rigor789/vue-scrollto
    'vue-scrollto/nuxt'
  ],
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // Doc: https://github.com/nuxt-community/google-fonts-module
    '@nuxtjs/google-fonts',
    // Doc: https://github.com/juliomrqz/nuxt-optimized-images
    '@aceforth/nuxt-optimized-images',
    // Doc: https://github.com/ivodolenc/nuxt-lazysizes
    'nuxt-lazysizes'
  ],
  // build: {
  //   // when this is enabled, you can inspect the size of the build
  //   analyze: true
  // },
  googleFonts: {
    families: { Tajawal: [400, 600, 800] }, // Loads Tajawal font with weights 400 and 700
    display: 'swap'
  },
  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: false,
    inlineImageLimit: 5000
  }
};
