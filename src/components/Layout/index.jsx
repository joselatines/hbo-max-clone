import Footer from '../Footer';
import Nav from '../Nav';

export default function Layout({ children }) {
	return (
		<>
			<Nav />
			<main>{children}</main>

			<Footer />
			<style jsx>{`
				main {
					padding: 60px; // Use [margin: -60px] for full screen images / elements
					overflow-x: hidden; // This is for images full screen (ignoring padding body)
				}
			`}</style>
		</>
	);
}
