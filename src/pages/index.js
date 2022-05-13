import Header from '../components/Header';
import Carrousel from '../components/Carrousel';
import { getPopular } from '../services/mediaServices';
import OverviewMedia from '../components/overviewMedia';

export default function Home({ popularMovies, popularTv }) {
	return (
		<>
			<Header />
			<Carrousel
				title='Popular movies'
				subtitle='The most popular movies from our library'
				elements={popularMovies}
			/>
			<Carrousel
				title='Popular TV Series'
				subtitle='The most popular TV series from our library'
				elements={popularTv}
			/>
			<OverviewMedia title='Titulo' elements={popularMovies} />
		</>
	);
}

export async function getServerSideProps(ctx) {
	const movies = await getPopular('movie');
	const tvs = await getPopular('tv');

	return {
		props: { popularMovies: movies.results, popularTv: tvs.results }, // will be passed to the page component as props
	};
}
