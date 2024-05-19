/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				'background-brown': '#FCF3E4',
				'main-text': '#24130F',
				'secondary-text': '#4A2B24',
				'button-text': '#65372A',
				'button-color': '#FFB54C',
				'button-color-secondary': '#F9DFB9',
				'button-color-tertiary': '#65372A',
				'button-color-tertiary-lighter': '#894b39',
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			width: {
				'1200': '1200px',
			},
		}
	},
	plugins: [
		require('daisyui'),
	],
}