import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';
import overlay from '/public/img/mediaOverlay.png';
import { Container, Overlay } from './styles';

MediaCard.propTypes = {
	image: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
};

export default function MediaCard({ image, id }) {
	return (
		<Link href={`/media/${id}`}>
			{image !== '' && (
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
			)}
		</Link>
	);
}
