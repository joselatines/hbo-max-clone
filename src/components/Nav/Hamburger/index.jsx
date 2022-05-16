import styled, { css } from 'styled-components';

export default function Hamburger({ setToggleNav, toggleNav, type }) {
	return (
		<Container onClick={() => setToggleNav(!toggleNav)}>
			<Bar toggle={toggleNav}></Bar>
			<Bar toggle={toggleNav}></Bar>
			<Bar toggle={toggleNav}></Bar>
		</Container>
	);
}

const Container = styled.div`
	cursor: pointer;
	display: block;
	/* z-index: 100; */
	&:hover {
		opacity: 0.8;
	}
`;
const Bar = styled.span`
	display: block;
	width: 25px;
	height: 2px;
	margin: 5px auto;
	/* 	-webkit-transition: all 0.3s ease-in-out;
	transition: all 0.3s ease-in-out; */
	background-color: ${({ theme }) => theme.colors.font};

	${({ type }) =>
		type === 'x' &&
		css`
			&:nth-child(2) {
				width: 18px;
				margin-left: 0;
			}
		`}

	${({ toggle }) =>
		toggle &&
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
