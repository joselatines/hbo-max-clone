import styled, { css } from 'styled-components';
const Button = styled.button`
	cursor: pointer;

	outline: none;
	font-size: ${({ size }) => (size ? size : '1em')};
	text-align: center;
	width: max-content;
	padding: 0.5em 1.5em;

	border: none;
	color: #fff;
	font-weight: ${({ theme }) => theme.font.weight.bold};
	background-size: 300% 100%;
	background-image: linear-gradient(
		to right,
		#8051f1,
		rgba(71, 19, 193, 1),
		#8051f1,
		rgba(121, 93, 255, 1)
	);
	box-shadow: 0 4px 15px 0 rgba(121, 93, 255, 0.75);

	border-radius: 50px;
	transition: all 0.4s ease-in-out;

	&:hover {
		background-position: 100% 0;
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
