import Header from '../components/Header';
import CarrouselContainer from '../components/CarrouselContainer';
import MediaCard from '../components/MediaCard';
import { getPopular } from '../services/mediaServices';

export default function Home({ data }) {
	const carrousels = [
		{
			title: 'Popular movies',
			subtitle: 'Fachero',
			type: 'popular-movies',
		},
		{
			title: 'Popular movies',
			subtitle: 'Fachero',
			type: 'popular-movies',
		},
	];
	return (
		<>
			<Header />
			{/* // [...carrouselData] pass all the key with its values */}
			{carrousels.map(({ ...carrouselData }) => (
				<CarrouselContainer {...carrouselData} />
			))}
		</>
	);
}

export async function getServerSideProps(ctx) {
	const data = await getPopular();
	return {
		props: { data }, // will be passed to the page component as props
	};
}
