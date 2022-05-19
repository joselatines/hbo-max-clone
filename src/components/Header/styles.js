import styled from 'styled-components';

export const Container = styled.header`
	margin: 0 -50px; // ignore padding layout
	/* z-index: -1; */
	overflow-x: hidden;

	background-image: url(${({ image }) => image && image.src});
	background-color: ${({ theme }) => theme.colors.bg};
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

	display: grid;
	align-items: end;
	padding: 50px;
	min-height: 80vh;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	b {
		font-size: smaller;
		line-height: 0.8;
	}
	p {
		color: ${({ theme }) => theme.colors.gray};
		line-height: 0.8;
	}
`;
