import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
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
					<DefaultSeo {...SEO} />
					<GlobalStyles />
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</>
	);
}
