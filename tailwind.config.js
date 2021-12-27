module.exports = {
	darkMode: 'class',
	content: ['./pages/**/*.tsx', './components/**/*.tsx'],
	theme: {
		fontFamily: {
			kaushan: ['Kaushan Script'],
		},
		extend: {
			colors: {
				green: {
					DEFAULT: '#00f260',
				},
				dark: {
					DEFAULT: '#010101',
					100: '#151E27',
					200: '#1D2733',
					300: '#16181d',
					500: '#0f1115',
					700: '#202125',
				},
			},
			container: {
				center: true,
				padding: 20,
			},
			screens: {
				'2xl': 'none',
			}
		},
	},
	variants: {},
	plugins: [],
};
