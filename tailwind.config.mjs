import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './src/pages/404.astro'],
	darkMode: 'selector',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Atkinson Hyperlegible', ...defaultTheme.fontFamily.sans]
			}
		},
	},
	plugins: [],
}
