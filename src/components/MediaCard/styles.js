import styled from 'styled-components';

export const Overlay = styled.div`
	opacity: 0;
	position: absolute;
	bottom: 0;
	left: 0;
	display: grid;
	align-items: end;

	transition: all ${({ theme }) => theme.transitions.shortSmooth};
`;

export const Container = styled.div`
	cursor: pointer;

	max-width: 15vw;
	min-width: 8vw;
	position: relative;
	transition: all ${({ theme }) => theme.transitions.shortSmooth};
	&:hover {
		filter: brightness(90%);
		${Overlay} {
			opacity: 1;
		}
	}
`;
