// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import favicons from 'astro-favicons';
import { siteUrl, title } from './src/config';

import partytown from '@astrojs/partytown';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: siteUrl,
  cacheDir: './assets-cache',
  image: {
    service: {
      entrypoint: './src/utils/custom-sharp-service',
      config: {}
    },
    responsiveStyles: true,
  },
  integrations: [
    favicons({
      input: {
        favicons: [
          "src/assets/icons/logo.png"
        ]
      },
      name: title,
      short_name: 'Museum Landmark',
      icons: {
        favicons: true,
        android: true,
        appleIcon: true,
        appleStartup: true,
        windows: true,
        yandex: false
      },
      output: {
        images: true,
        files: true,
        html: true,
      },
    }),
    partytown({
      config: {
        forward: ['dataLayer.push', 'gtag']
      }
    }),
    preact({
      compat: true
    })
  ]
});