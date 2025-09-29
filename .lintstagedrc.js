/**
 * @type {import('lint-staged').Configuration}
 */
export default {
  "src/**/*.{js,ts,jsx,tsx,astro}": "eslint --fix",
  "src/**/*.{js,ts,jsx,tsx,astro,css}": "prettier --write --ignore-unknown"
}