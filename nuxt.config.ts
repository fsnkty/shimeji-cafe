// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  nitro: {
    preset: 'cloudflare_module',
    cloudflare: {
      deployConfig: true,
      wrangler: {
        d1_databases: [
          {
            binding: 'DB',
            database_name: 'shimeji-cafe',
            database_id: '44f42673-9e94-4a50-bfb5-f95311c2a599'
          }
        ]
      }
    }
  },
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