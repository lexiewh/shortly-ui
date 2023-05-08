const defaultConfig = require('tailwindcss/defaultConfig')
const formsPlugin = require('@tailwindcss/forms')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss/types').Config} */
const config = {
	content: ['index.html', 'src/**/*.tsx'],
	theme: {
		fontFamily: {
			sans: ['Poppins', ...defaultConfig.theme.fontFamily.sans]
		},
		colors: {
			...colors,
			'primary-cyan': '#2acfcf',
			'darker-cyan': '#1e9494',
			'primary-violet': '#3b3054',
			'secondary-red': '#f46262',
			gray: '#bfbfbf',
			'gray-violet': '#9e9aa7',
			'dark-blue': '#35323e',
			'dark-violet': '#232127'
		}
	},
	experimental: { optimizeUniversalDefaults: true },
	plugins: [formsPlugin]
}
module.exports = config
