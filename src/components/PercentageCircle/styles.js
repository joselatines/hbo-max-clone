import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	justify-content: space-around;

	.circular-chart {
		display: block;
		margin: 10px auto;
		max-width: 80%;
		max-height: 250px;
	}

	.circle-bg {
		fill: none;
		stroke: #fff;
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
		fill: #fff;
		font-size: 0.4em;
		text-anchor: middle;
	}
`;
