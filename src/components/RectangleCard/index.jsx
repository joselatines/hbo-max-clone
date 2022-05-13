import PropTypes from 'prop-types';
import Image from 'next/image';
import { Container } from './styles';

RectangleCard.propTypes = {
	title: PropTypes.string.isRequired,
	txt: PropTypes.string,
	img: PropTypes.array.isRequired,
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
			</div>
			<Image src={img} alt='movie' width={500} height={400} />
		</Container>
	);
}
