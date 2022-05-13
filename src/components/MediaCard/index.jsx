import PropTypes from 'prop-types';
import Image from 'next/image';
import { Container, Overlay } from './styles';
import imgHeader from '/public/img/poster.jpg';
import overlay from '/public/img/mediaOverlay.png';
import Link from 'next/link';

MediaCard.propTypes = {
	image: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
};

export default function MediaCard({ image, id }) {
	return (
		<Link href={`/media/${id}`}>
			{image !== '' ? (
				<Container>
					<Image
						src={`https://image.tmdb.org/t/p/w500${image}`}
						width={250}
						height={400}
						objectFit='cover'
					/>
					<Overlay>
						<Image src={overlay} />
					</Overlay>
				</Container>
			) : (
				<div></div>
			)}
		</Link>
	);
}
