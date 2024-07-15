import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				primary: {
					'50': '#faf5ff',
					'100': '#f2e9fe',
					'200': '#e7d7fd',
					'300': '#d5b7fb',
					'400': '#bb89f7',
					'500': '#a25cf0',
					'600': '#8c3be2',
					'700': '#762ac6',
					'800': '#60259a',
					'900': '#532182',
					'950': '#370b60'
				},
				secundary: {
					'50': '#fef8ee',
					'100': '#fef0d6',
					'200': '#fbdcad',
					'300': '#f8c379',
					'400': '#f49f43',
					'500': '#f1821c',
					'600': '#e26814',
					'700': '#bc5012',
					'800': '#953f17',
					'900': '#783616',
					'950': '#411909'
				}
			}
		}
	},
	plugins: []
};
export default config;
