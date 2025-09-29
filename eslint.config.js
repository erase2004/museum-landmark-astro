import { defineConfig } from 'astro/config';
import astro from 'eslint-plugin-astro';
import prettier from 'eslint-config-prettier/flat'

export default defineConfig([
  ...astro.configs.recommended,
  ...astro.configs['jsx-a11y-recommended'],
  prettier
]);