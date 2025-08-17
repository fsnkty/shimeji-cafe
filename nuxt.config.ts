// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxtjs/tailwindcss',
  ],
  app: {
    head: {
      title: 'Shimeji Cafe',
      meta: [
        { name: 'description', content: 'fsnktys personal site' }
      ]
    }
  },
  appConfig: {
    appId: 'shimeji-cafe',
  },
  css: [
    './public/css/main.css'
  ],
  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: 'github-dark',
            dark: 'github-dark',
            light: 'github-light'
          },
          langs: ['json', 'js', 'ts', 'html', 'css', 'vue', 'bash', 'markdown', 'nix']
        }
      }
    }
  },
  fonts: {
    provider: 'local',
    families: [
      { name: 'azuki' },
      { name: 'azukiP' },
    ]
  },
})