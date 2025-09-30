import { defineConfig } from 'astro/config';
import astro from 'eslint-plugin-astro';
import prettier from 'eslint-config-prettier/flat'

export default defineConfig([
  ...astro.configs.recommended,
  ...astro.configs['jsx-a11y-recommended'],
  {
    rules: {
      "astro/jsx-a11y/anchor-is-valid": "warn",
      "astro/jsx-a11y/iframe-has-title": "warn"
    }
  },
  prettier,
]);