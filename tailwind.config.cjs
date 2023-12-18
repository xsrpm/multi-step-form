const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  colors:{
			'marine-blue': '#02295A',
			'purplish-blue':'#473DFF',
			'pastel-blue':'#ADBEFF',
			'light-blue':'#BFE2FD',
			'strawberry-red':'#ED3548',
			'cool-gray':'#9699AB',
			'light-gray':'#D6D9E6',
			'magnolia':'#F0F6FF',
			'alabaster':'#FAFBFF',
			'white':'#FFFFFF'
		  },
		  fontFamily: {
			'sans': ['"Ubuntu"', ...defaultTheme.fontFamily.sans],
		  },
		  backgroundImage: {
			'sidebar-desktop': "url('./assets/images/bg-sidebar-desktop.svg')",
			'sidebar-mobile': "url('./assets/images/bg-sidebar-mobile.svg')",
		  }
		},
	  },
	plugins: [],
}
