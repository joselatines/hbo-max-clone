const font = {
	style: '-apple-system',
	size: {
		default: '1px',
		xxl: '5rem', //80px
		xl: '3rem', //48px
		lg3: '2.7rem', //43.2px
		lg2: '2.5rem', //40px
		lg1: '1.625rem', //26px
		lg: '1.5rem', //24px
		md: '1.25rem', //18px
		sm: '1rem', //16px
		xs: '0.75rem', //12px
	},
	weight: {
		light: 300, // Most used
		regular: 400, // Most used
		medium: 500, // Most used

		bold: 700,
		black: 900,
		thin: 100,
	},
};
const transitions = {
	smoothShort: '0.3s ease-in-out',
	btn: '0.3s ease',
};

const mediaQueries = {
	table: '60em',
};

export const darkTheme = {
	colors: {
		primary: '#495fe8',
		secondary: '#101743',
		danger: '#0202',
		bg: '#000',
		gray: '#666666',
		darkTheme_gray: '#222',
		white: '#fff',
		black: '#000',
		nav: '#000',
		font: '#fff',
	},
	font,
	transitions,
	mediaQueries,
};


export const lightTheme = {
	colors: {
		primary: '#495fe8',
		secondary: '#101743',
		danger: '#ef233c',
		bg: '#F1F2F8',
		gray: '#666666',
		darkTheme_gray: '#222',
		white: '#fff',
		black: '#000',
		nav: '#fff',
		font: '#000',
	},
	font,
	transitions,
	mediaQueries,
};
