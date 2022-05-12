import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Layout from '../components/Layout';

import { GlobalStyles } from '../styles/GlobalStyles';
import { darkTheme, lightTheme } from '../styles/themes';

export default function App({ Component, pageProps }) {
	const [theme, setTheme] = useState('dark');

	const toggleTheme = () =>
		theme === 'light' ? setTheme('light') : setTheme('dark');

	return (
		<>
			<ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
				<Layout>
					<GlobalStyles />
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</>
	);
}
