import Head from 'next/head';
import Nav from '../Nav';
import Footer from '../shared/Footer';

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<link rel='shortcut icon' href='/favicon.ico' />
			</Head>
			<Nav />
			<main>{children}</main>
			<Footer />
			<style jsx>{`
				main {
					padding: 50px; // Use [margin: -50px] for full screen images / elements
					overflow-x: hidden; // This is for images full screen (ignoring padding body)
					min-height: 90vh;
				}

				@media screen and (max-width: 40em) {
					main {
						padding: 100px 10px 70px; // Use [margin: -50px] for full screen images / element
						min-height: 50vh;
					}
				}
			`}</style>
		</>
	);
}
