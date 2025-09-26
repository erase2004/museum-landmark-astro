// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import favicons from 'astro-favicons';
import { title } from './src/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  site: "https://museum.acgn-stock.com",

  image: {
    responsiveStyles: true
  },
  integrations: [favicons({
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
	})]
});