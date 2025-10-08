import { defineConfig } from 'eslint/config'
import eslint from '@eslint/js'
import eslintPluginAstro from 'eslint-plugin-astro';
import prettier from 'eslint-config-prettier/flat';
import tseslint from 'typescript-eslint';

export default defineConfig(
  {
    ignores: ['**/dist', '**/node_modules', '**/.astro', '**/.github'],
  },

  // JavaScript
  eslint.configs.recommended,
  // TypeScript
  ...tseslint.configs.recommended,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          "args": "all",
          "argsIgnorePattern": "^_",
          "caughtErrors": "all",
          "caughtErrorsIgnorePattern": "^_",
          "destructuredArrayIgnorePattern": "^_",
          "varsIgnorePattern": "^_",
          "ignoreRestSiblings": true
        }
      ]
    }
  },
  // Allow triple-slash references in `*.d.ts` files.
	{
		files: ['**/*.d.ts'],
		rules: {
			'@typescript-eslint/triple-slash-reference': 'off',
		},
	},
  
  // Astro
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs['jsx-a11y-recommended'],
  {
    rules: {
      "astro/jsx-a11y/anchor-is-valid": "warn",
      "astro/jsx-a11y/iframe-has-title": "warn"
    }
  },
  prettier
);