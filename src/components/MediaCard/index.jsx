import Image from 'next/image';
import { Container, Overlay } from './styles';
import imgHeader from '/public/img/poster.jpg';
import overlay from '/public/img/mediaOverlay.png';

export default function MediaCard({ id, image }) {
	return (
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
	);
}
