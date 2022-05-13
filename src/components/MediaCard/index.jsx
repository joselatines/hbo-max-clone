import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';
import overlay from '/public/img/mediaOverlay.png';
import { Container, Overlay } from './styles';

MediaCard.propTypes = {
	image: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
	redirect: PropTypes.boolean,
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
							src={`https://image.tmdb.org/t/p/w500${image}`}
							width={250}
							height={400}
							
							objectFit='cover'
						/>
						<Overlay>
							<Image src={overlay} />
						</Overlay>
					</Container>
				</Link>
			) : (
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
		</>
	);
}
