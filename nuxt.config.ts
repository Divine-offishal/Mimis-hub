export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/svg-sprite",
    'nuxt-svgo',
    "@nuxt/image",
    "nuxt-phosphor-icons",
    "@nuxtjs/kinde",
    "@nuxtjs/sanity"
  ],
  googleFonts: {
    families: {
      'Denk One': true,
    },
    download: true
  },
  sanity: {
    projectId: 'ydwd17tj'
  },
  svgo: {
    autoImportPath: './assets/svg/'
  },
  app: {
    head: {
      title: 'Mimis Hub',
      meta: [
        { name: 'description', content: 'This is a hub to get popular threads' },
        { name: 'keywords', content: 'Shirts, jewelry, Shorts' }
      ],
      // link: [
      //   { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      // ]
    }
  }
})
