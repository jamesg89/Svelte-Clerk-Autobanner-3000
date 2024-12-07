import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		container: {
			padding: {
			  DEFAULT: '1rem',
			  sm: '2rem',
			  lg: '4rem',
			  xl: '5rem',
			  '2xl': '6rem',
			},
		  },
		extend: {}
	},
	plugins: [
		typography,
		daisyui,
	],
	daisyui: {
		themes: ["business", "light"],
	},
} satisfies Config;
