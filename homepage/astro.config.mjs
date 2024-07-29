import { defineConfig, sharpImageService } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: 'https://uses.craftz.dog/',
  integrations: [sitemap(), react(), tailwind()],
  image: {
    service: sharpImageService()
  },

  markdown: {}
})
