export default {
  srcDir: 'src',
  // Auto load components. Docs: https://github.com/nuxt/components
  components: true,
  head: {
    title: 'Welcome to Morabba3!',
    meta: [
      { charset: 'utf-8' },
      {
        hid: 'description',
        name: 'description',
        content: 'A Nuxt.js example with Tailwind CSS v1.0 and Purgecss'
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge,chrome=1' }
    ],
    htmlAttrs: {
      lang: 'ar',
      dir: 'rtl'
    }
  },
  modules: [],
  buildModules: ['@nuxtjs/tailwindcss']
}
