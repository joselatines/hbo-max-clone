import Header from '../components/Header';
import CarrouselContainer from '../components/CarrouselContainer';
import MediaCard from '../components/MediaCard';
import { getLatest } from '../services/mediaServices';

export default function Home({ data }) {
	console.log(data);
	return (
		<>
			<Header />
			<CarrouselContainer />
		</>
	);
}

export async function getServerSideProps(ctx) {
	const data = getLatest();
	return {
		props: { data }, // will be passed to the page component as props
	};
}
