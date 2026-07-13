import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';

export default tseslint.config(
	{
		ignores: [
			'.svelte-kit/',
			'.vercel/',
			'build/',
			'coverage/',
			'playwright-report/',
			'test-results/'
		]
	},
	js.configs.recommended,
	...tseslint.configs.recommended,
	...svelte.configs['flat/recommended'],
	{
		languageOptions: { globals: { ...globals.browser, ...globals.node } },
		rules: {
			'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
			// Static internal paths and provider URLs are intentional in this content-led Phase 1.
			'svelte/no-navigation-without-resolve': 'off',
			// Collections are immutable local content; DOM identity never changes in place.
			'svelte/require-each-key': 'off'
		}
	},
	{ files: ['**/*.svelte'], languageOptions: { parserOptions: { parser: tseslint.parser } } }
);
