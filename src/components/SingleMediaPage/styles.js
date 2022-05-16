import styled from 'styled-components';

export const ImageWrapper = styled.div`
	margin: -10px -60px; // ignore padding layout
	z-index: -1;
	/* 	overflow-x: hidden; */
	background-image: url(${({ image }) => image && image});
	background-color: ${({ theme }) => theme.colors.bg};
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

	filter: blur(5px) brightness(80%);

	min-height: 60vh;
`;
export const Content = styled.article`
	text-align: center;
	position: relative;
	bottom: 10rem;
	display: flex;
	flex-direction: column;
	place-items: center;
`;
export const Info = styled.div`
	color: ${({ theme }) => theme.colors.gray};
	text-transform: uppercase;
	font-size: smaller;
	margin-bottom: 1rem;
`;
export const Overview = styled.p``;
