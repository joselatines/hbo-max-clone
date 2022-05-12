import Footer from '../Footer';
import Nav from '../Nav';

export default function Layout({ children }) {
	return (
		<>
			<Nav />
			<main style={{ padding: '3rem ' }}>{children}</main>
			<Footer />
		</>
	);
}
