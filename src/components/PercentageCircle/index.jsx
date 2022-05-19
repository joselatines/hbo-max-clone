import { Container } from './styles';

export default function PercentageCircle({ score }) {
	const scoreTo10 = scoreNumber => (scoreNumber * 100) / 10;

	const isScore = scoreNumber => {
		if (scoreNumber <= 3) return 'bad';

		if (scoreNumber >= 4 && scoreNumber < 8) return 'regular';

		if (scoreNumber > 8) return 'top';
	};

	return (
		<Container>
			<svg viewBox='0 0 36 36' className={`circular-chart ${isScore(score)}`}>
				<path
					className='circle-bg'
					d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831'
				/>
				<path
					className='circle'
					strokeDasharray={`${scoreTo10(score)}, 100`}
					d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831'
				/>
				<text x='18' y='20.35' className='percentage'>
					{score}/10
				</text>
			</svg>
		</Container>
	);
}
