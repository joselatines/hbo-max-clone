import styled, { css } from 'styled-components';

export default function Hamburger({ setToggleNav, toggleNav }) {
	return (
		<Container onClick={() => setToggleNav(!toggleNav)}>
			<Bar togglenav={toggleNav} />
			<Bar togglenav={toggleNav} />
			<Bar togglenav={toggleNav} />
		</Container>
	);
}

const Container = styled.div`
	cursor: pointer;
	display: block;
	/* z-index: 100; */
`;
const Bar = styled.span`
	display: block;
	width: 25px;
	height: 3px;
	margin: 5px auto;
/* 	-webkit-transition: all 0.3s ease-in-out;
	transition: all 0.3s ease-in-out; */
	background-color: ${({ theme }) => theme.colors.font};
	// Effect
	${({ togglenav }) =>
		togglenav &&
		css`
			&:nth-child(2) {
				opacity: 0;
			}
			&:nth-child(1) {
				transform: translateY(8px) rotate(45deg);
			}
			&:nth-child(3) {
				transform: translateY(-8px) rotate(-45deg);
			}
		`}
`;
