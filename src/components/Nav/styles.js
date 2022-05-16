import styled from 'styled-components';

export const Container = styled.nav`
	background-color: ${({ theme }) => theme.colors.nav};
	padding: 0.5rem 2.5rem;

	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;

	position: fixed;
	min-width: 100%;
	z-index: 90;
`;
export const Column = styled.div``;

export const UlContainer = styled.div`
	position: fixed;
	top: 0;
	left: ${({ active }) => (active ? 0 : '-100%')};
	z-index: 80;

	transition: ${({ theme }) => theme.transitions.smoothShort};
	ul {
		list-style-type: none;

		display: flex;
		flex-direction: column;
		align-items: flex-start;

		padding: 1rem 5rem 0 3rem;
		overflow: hidden;
		min-height: 100vh;
		/* 	padding: 2rem 3rem; */
		background-color: ${({ theme }) => theme.colors.nav};
		// Black layer effect
		&::after {
			content: '';
			display: ${({ active }) => (active ? 'block' : 'none')};
			min-height: 100vh;
			min-width: 100vw;

			position: fixed;
			top: 0;
			left: 0;
			z-index: -1;

			backdrop-filter: blur(1px);
			-webkit-backdrop-filter: blur(1px);
			background: rgba(0, 0, 0, 0.15);
			/* opacity: 0.2; */
		}
		li {
			cursor: pointer;
		}
	}
`;

export const Flex = styled.div`
	display: flex;
	gap: 2rem;
	place-items: center;
`;
export const ImgWrapper = styled.div`
	max-width: 10vw;
	min-width: 5rem;

	cursor: pointer;
`;
