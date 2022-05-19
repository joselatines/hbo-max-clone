import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { Container } from './styles';
import { getImage } from '../../utils/functions';

MediaCard.propTypes = {
	image: PropTypes.string,
	id: PropTypes.number,
	title: PropTypes.string,
	redirect: PropTypes.bool,
};

MediaCard.defaultProps = {
	redirect: true,
};
export default function MediaCard({ image, id, redirect, title }) {
	return (
		<>
			{/* // Image exits => redirect? =>  Component */}
			{image !== '' && redirect ? (
				<Link href={`/media/${id}`}>
					<Container style={{ cursor: 'pointer' }} hover={redirect}>
						<Image
							alt={('media-', title)}
							src={getImage(image)}
							width={250}
							height={400}
						/>
					</Container>
				</Link>
			) : (
				<Container>
					<Image
						src={getImage(image)}
						alt={('movie-', id)}
						width={8}
						height={12}
						layout='responsive'
						objectFit='cover'
					/>
				</Container>
			)}
		</>
	);
}
