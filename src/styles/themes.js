const font = {
	style: '-apple-system',
	size: {
		default: '1px',
		xxl: '5em', //80px
		xl: '3em', //48px
		lg3: '2.7em', //43.2px
		lg2: '2.5em', //40px
		lg1: '1.625em', //26px
		lg: '1.5em', //24px
		md: '1.25em', //18px
		sm: '1em', //16px
		xs: '0.75em', //12px
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
		secondary: '#FEAE24',
		danger: '#0202',
		bg: '#000',
		gray: '#ddd',
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
		secondary: '#FEAE24',
		danger: '#ef233c',
		bg: '#F1F2F8',
		gray: '#ddd',
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
