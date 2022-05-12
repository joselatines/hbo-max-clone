import styled, { css } from 'styled-components';
const Button = styled.button`
	all: unset;
	cursor: pointer;

	font-size: ${({ size }) => (size ? size : '1em')};
	text-align: center;
	width: max-content;
	/* 
	background-color: ${({ color, theme }) =>
		color ? color : theme.colors.primary};
	background-color: ${({ danger, theme }) => danger && theme.colors.danger};
	color: ${({ color, theme }) => (color ? color : theme.colors.font)}; */

	padding: 0.5em 2em;
	border: 3px solid transparent;
	/* border-radius: 50px; */

	transition: all ${({ theme }) => theme.transitions.btn};

	// For icons
	display: flex;
	place-items: center;
	gap: 0.5em;

	// Project
	background-color: transparent;
	background-image: linear-gradient(
		to right,
		rgb(71, 16, 193) 0%,
		rgb(120, 87, 255) 51%,
		rgb(129, 155, 253) 100%
	);

	background-size: 200% auto;
	border-radius: 25px;

	text-transform: uppercase;
	font-weight: ${({ theme }) => theme.font.weight.medium};

	a {
		all: unset;
	}

	&:hover {
		transform: scale(1.05);
		background-position: right center;
	}

	${({ outline, theme }) =>
		outline &&
		css`
			background-color: transparent;
			color: ${theme.colors.primary};
			border: 3px solid ${theme.colors.primary};
			&:hover {
				color: ${theme.colors.white};
				background-color: ${theme.colors.primary};
			}
		`}
`;
export default Button;
