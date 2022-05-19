import { Container, Content } from './styles';
import Button from '../shared/Button/styles';
import imgHeader from '../../../public/img/header.png';

export default function Header() {
	return (
		<Container image={imgHeader}>
			<Content>
				<div>
					<b>The stories we love and new ones to discover</b> <br />
					<p>Stream the best movies, series, originals, and more</p>
				</div>
				<Button>Start watching</Button>
			</Content>
		</Container>
	);
}
