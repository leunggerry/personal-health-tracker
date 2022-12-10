/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	// Use the class to manually change darkMode
	darkMode: 'class',
	// darkMode: 'media',
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		screens: {
			xs: '375px',
			...defaultTheme.screens,
		},
		extend: {
			fontFamily: {
				sans: [
					'Martel Sans',
					'Merriweather Sans',
					...defaultTheme.fontFamily.sans,
				],
				// sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [require('flowbite/plugin')],
};
