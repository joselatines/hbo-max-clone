import Header from '../components/Header';
import Carrousel from '../components/Carrousel';
import { getPopular } from '../services/MediaServices';
import OverviewMedia from '../components/OverviewMedia';
import RectangleCard from '../components/RectangleCard';
import imgTest from '../../public/img/header.jpg';

export default function Home({ popularMovies, popularTv }) {
	const rectangleTxt = [
		{
			title: 'Hit movies, shows, and so much more.',
			txt: 'The greatest TV & iconic movies, including HBO & MAX Originals, curated kids’experience, and so much more.',
		},
	];
	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
			<Header />
			<Carrousel
				title='Popular movies'
				subtitle='The most popular movies from our library'
				elements={popularMovies}
			/>
			<RectangleCard
				title={rectangleTxt[0].title}
				txt={rectangleTxt[0].txt}
				img={imgTest}
			/>
			<Carrousel
				title='Popular TV Series'
				subtitle='The most popular TV series from our library'
				elements={popularTv}
			/>
			<OverviewMedia title='Titulo' elements={popularMovies} />
		</div>
	);
}

export async function getServerSideProps(ctx) {
	const movies = await getPopular('movie');
	const tvs = await getPopular('tv');

	return {
		props: { popularMovies: movies, popularTv: tvs }, // will be passed to the page component as props
	};
}
