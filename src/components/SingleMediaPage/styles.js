import styled from 'styled-components';

export const Container = styled.div`
	position: relative;

	margin: 0 -60px; // ignore padding layout
	padding: 60px;

	display: grid;
	gap: 2rem;
	grid-template-columns: auto 1fr;
	grid-template-rows: 1fr;
	place-items: center;

	margin-bottom: 2rem;

	@media only screen and (max-width: 40em) {
		padding: 5px;
		grid-template-columns: auto;
		grid-template-rows: 1fr auto;
	}
`;

export const ImageWrapper = styled.div`
	z-index: -1;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;

	background-image: url(${({ image }) => image && image});
	background-color: ${({ theme }) => theme.colors.bg};
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

	filter: blur(3px) brightness(60%);
`;
export const Content = styled.article`
	text-align: center;
	display: grid;
	place-items: center;
`;
export const Info = styled.div`
	color: ${({ theme }) => theme.colors.gray};
	text-transform: uppercase;
	font-size: smaller;
	margin-bottom: 1rem;
`;
export const Poster = styled.div`
	min-width: 20vw;
`;

export const Score = styled.div`
	.flex-wrapper {
		display: flex;
		flex-flow: row nowrap;
	}

	.single-chart {
		width: 13%;
		justify-content: space-around;
	}

	.circular-chart {
		display: block;
		margin: 10px auto;
		max-width: 80%;
		max-height: 250px;
	}

	.circle-bg {
		fill: none;
		stroke: #eee;
		stroke-width: 3.8;
	}

	.circle {
		fill: none;
		stroke-width: 2.8;
		stroke-linecap: round;
		animation: progress 1s ease-out forwards;
	}

	@keyframes progress {
		0% {
			stroke-dasharray: 0 100;
		}
	}

	.circular-chart.bad .circle {
		stroke: #ff0000;
	}

	.circular-chart.regular .circle {
		stroke: #ff9f00;
	}

	.circular-chart.top .circle {
		stroke: #4cc790;
	}

	.percentage {
		fill: #666;
		font-family: sans-serif;
		font-size: 0.5em;
		text-anchor: middle;
	}
`;
