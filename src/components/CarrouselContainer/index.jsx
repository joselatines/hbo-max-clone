import Carrousel from './Carrousel';
import { Container, Title, SubTitle, Text } from './styles';

export default function CarrouselContainer({ title, subtitle, elements }) {
	return (
		<Container>
			<Text>
				{title && <Title>{title}</Title>}
				{subtitle && <SubTitle>{subtitle}</SubTitle>}
			</Text>
			<Carrousel elements={elements} />
		</Container>
	);
}
