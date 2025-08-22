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
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'description', content: 'fsnktys personal site' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
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
          theme: 'catppuccin-mocha',
          langs: ['json', 'js', 'ts', 'html', 'css', 'vue', 'bash', 'markdown', 'nix']
        }
      }
    }
  },
  fonts: {
    provider: 'local',
    defaults: {
      weights: [400],
      styles: ['normal'],
      subsets: [
        'latin',
        'latin-ext'
      ]
    },
    families: [
      { name: 'azuki' },
      { name: 'azukiP' },
    ]
  },
})