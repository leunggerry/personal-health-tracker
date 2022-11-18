/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
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
				'Open Sans': ['Open Sans', 'sans-serif'],
			},
		},
	},
	plugins: [require('flowbite/plugin')],
};
