import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';
import overlay from '/public/img/mediaOverlay.png';
import { Container, Overlay } from './styles';
import { getImage } from '../../utils/functions';

MediaCard.propTypes = {
	image: PropTypes.string,
	id: PropTypes.number,
	redirect: PropTypes.bool,
};

MediaCard.defaultProps = {
	redirect: true,
};
export default function MediaCard({ image, id, redirect }) {
	return (
		<>
			{/* // Image exits => redirect? =>  Component */}
			{image !== '' && redirect ? (
				<Link href={`/media/${id}`}>
					<Container style={{ cursor: 'pointer' }}>
						<Image
							alt={('movie-', id)}
							src={getImage(image)}
							width={250}
							height={400}
							objectFit='cover'
						/>
						<Overlay>
							<Image src={overlay} alt={`overlay`} />
						</Overlay>
					</Container>
				</Link>
			) : (
				<Container>
					<Image
						src={getImage(image)}
						alt={('movie-', id)}
						width={250}
						height={400}
						objectFit='cover'
					/>
				</Container>
			)}
		</>
	);
}
