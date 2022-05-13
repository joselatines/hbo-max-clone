import Header from '../components/Header';
import CarrouselContainer from '../components/CarrouselContainer';
import { getPopular } from '../services/mediaServices';

export default function Home({ mediaElements }) {
	return (
		<>
			<Header />
			
			{/* 	<CarrouselContainer
				elements={mediaElements}
				title='Popular movies'
				subtitle='fachero'
			/> */}
		</>
	);
}

export async function getServerSideProps(ctx) {
	const data = await getPopular();

	return {
		props: { mediaElements: data.results.slice(0, 5) }, // will be passed to the page component as props
	};
}
