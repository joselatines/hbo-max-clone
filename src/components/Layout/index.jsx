import Footer from '../Footer';
import Nav from '../Nav';

export default function Layout({ children }) {
	return (
		<>
			<Nav />
			<main>{children}</main>
			<Footer />
		</>
	);
}
