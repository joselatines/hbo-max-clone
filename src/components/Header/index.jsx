import Image from 'next/image';
import { Bg, Container, Content } from './styles';
import Button from '../shared/Button/styles';
import imgHeader from '../../../public/img/header.jpg';

export default function Header() {
	return (
		<Container>
			<Bg>
				<Image src={imgHeader} />
			</Bg>
			<Content>
				<p>
					<b>The stories we love and new ones to discover</b> <br />
					Stream the best movies, series, originals, and more
				</p>
				<Button>start watching</Button>
			</Content>
		</Container>
	);
}
