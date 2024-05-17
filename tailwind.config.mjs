/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			colors: {
				'blue-ribbon': {
					'50': '#edf8ff',
					'100': '#d6efff',
					'200': '#b5e4ff',
					'300': '#83d5ff',
					'400': '#48bcff',
					'500': '#1e9aff',
					'600': '#067aff',
					'700': '#0066ff',
					'800': '#084ec5',
					'900': '#0d469b',
					'950': '#0e2b5d',
				},
				'purple-heart': {
					'50': '#f3f1ff',
					'100': '#ebe5ff',
					'200': '#d9ceff',
					'300': '#bea6ff',
					'400': '#9f75ff',
					'500': '#843dff',
					'600': '#7916ff',
					'700': '#6b04fd',
					'800': '#5a03d5',
					'900': '#4b05ad',
					'950': '#2c0076',
				},
				'mirage': {
					'50': '#f4f6fb',
					'100': '#e8ecf6',
					'200': '#cbd8ec',
					'300': '#9db6dc',
					'400': '#6990c7',
					'500': '#4672b1',
					'600': '#345995',
					'700': '#2b4779',
					'800': '#273e65',
					'900': '#253555',
					'950': '#111827',
				},
			},
		},

	},
	plugins: [
		require('flowbite/plugin')
	],
}
