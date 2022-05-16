import { Bar, Container } from './styles';

export default function Hamburger({ setToggleNav, toggleNav }) {
	return (
		<Container onClick={() => setToggleNav(!toggleNav)}>
			<Bar toggle={toggleNav}></Bar>
			<Bar toggle={toggleNav}></Bar>
			<Bar toggle={toggleNav}></Bar>
		</Container>
	);
}
