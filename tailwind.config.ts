import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			animation: {
				float: 'float 3s ease-in-out infinite', // Nama animasi "float"
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0)' }, // Posisi awal & akhir
					'50%': { transform: 'translateY(-15px)' }, // Posisi di tengah
				},
			},
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
			},
		},
	},
	plugins: [],
} satisfies Config;
