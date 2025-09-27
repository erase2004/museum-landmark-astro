import astro from 'eslint-plugin-astro';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default [
  ...astro.configs.recommended,
  jsxA11y.flatConfigs.recommended,
];