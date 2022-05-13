import Image from 'next/image';
import { Container, Overlay } from './styles';
import imgHeader from '/public/img/poster.jpg';
import overlay from '/public/img/mediaOverlay.png';

export default function MediaCard({ img }) {
	return (
		<Container>
			<Image src={imgHeader} layout='fill' />
			<Overlay>
				<Image src={overlay} />
			</Overlay>
		</Container>
	);
}
