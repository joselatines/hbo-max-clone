import PropTypes from 'prop-types';
import Image from 'next/image';
import { Container } from './styles';
import Button from '../shared/Button/styles';

RectangleCard.propTypes = {
	title: PropTypes.string.isRequired,
	txt: PropTypes.string,
};

RectangleCard.defaultProps = {
	title: 'Pass a title through prop',
	txt: 'Pass a text through prop',
};

export default function RectangleCard({ title, txt, img }) {
	return (
		<Container>
			<div>
				<h3>{title}</h3>
				<p>{txt}</p>
				<Button>Watch</Button>
			</div>
			<Image src={img} alt='movie' width={550} height={320} />
		</Container>
	);
}
