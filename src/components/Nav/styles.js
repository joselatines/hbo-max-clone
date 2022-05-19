import styled from 'styled-components';

export const Container = styled.nav`
	background-color: ${({ theme }) => theme.colors.nav};
	padding: 0.5rem 2.5rem;

	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	gap: 1rem;

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

	transition: all ${({ theme }) => theme.transitions.smoothShort};
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
			background: rgba(0, 0, 0, 0.25);
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

export const InputContainer = styled.div`
	/* From uiverse.io by @alexruix */

	display: flex;
	line-height: 28px;
	align-items: center;
	position: relative;
	max-width: 190px;

	input {
		width: 100%;
		height: 40px;
		line-height: 28px;
		padding: 0 1rem;
		padding-left: 2.5rem;
		border: 2px solid transparent;
		border-radius: 8px;
		outline: none;
		background-color: #f3f3f4;
		color: #0d0c22;
		transition: 0.3s ease;
		&::placeholder {
			color: #9e9ea7;
		}
	}

	input input:focus,
	input:hover {
		outline: none;
		border-color: ${({ theme }) => theme.colors.primary};
		background-color: #fff;
		box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
	}

	.icon {
		position: absolute;
		left: 1rem;
		fill: #9e9ea7;
		width: 1rem;
		height: 1rem;

		cursor: pointer;
	}
`;
