import Header from '../components/Header';
import Carrousel from '../components/Carrousel';
import { getPopular } from '../services/mediaServices';
import OverviewMedia from '../components/overviewMedia';

export default function Home({ mediaElements }) {
	console.log(mediaElements);
	return (
		<>
			<Header />
			<Carrousel
				title='Popular movies'
				subtitle='The most popular series from our library - no subscription needed.'
				elements={mediaElements}
			/>
			<OverviewMedia title='Titulo' elements={mediaElements} />
		</>
	);
}

export async function getServerSideProps(ctx) {
	const data = await getPopular('movie');

	return {
		props: { mediaElements: data.results }, // will be passed to the page component as props
	};
}
