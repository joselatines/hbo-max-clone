import styled from 'styled-components';

export const Container = styled.header`
	min-height: 80vh;
	max-height: 90vh;
	display: grid;
	padding: 3rem 0;
	align-items: end;
`;
export const ImgWrapper = styled.div`
	min-width: 100%;
`;
export const Bg = styled.div`
	position: absolute; // Relative to the body
	top: 0;
	left: 0;
	z-index: -1;
	overflow: hidden;
	max-height: 90vh;

	img {
		object-fit: cover;
	}

	filter: brightness(90%);
	-webkit-filter: brightness(90%);
	-moz-filter: brightness(90%);
`;

export const Content = styled.div`
	font-size: ${({ theme }) => theme.font.size.md};
	b {
		font-size: smaller;
	}
	p {
		margin: 1rem;
	}
`;
