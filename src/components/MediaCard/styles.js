import styled from 'styled-components';

export const Container = styled.div`
	max-width: 20vw;
	min-width: 8vw;
	position: relative;
	transition: all ${({ theme }) => theme.transitions.shortSmooth};

	&:hover {
		filter: ${({ hover }) => hover && 'brightness(70%)'};
	}
`;
