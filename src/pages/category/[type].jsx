import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import MediaCard from '../../components/MediaCard';
import { getPopular } from '../../services/media';

export default function Category() {
	const [mediaData, setMediaData] = useState([{}]); // Where the media data is going to bed saved

	const router = useRouter();
	const { type } = router.query; // Get the media id

	const txt = type === 'movie' ? 'movies' : 'TV Series';

	useEffect(() => {
		getPopular(type).then(res => setMediaData(res));
	}, [type]);

	return (
		<div>
			<h2 style={{ marginBottom: '1rem' }}>Popular {txt}</h2>
			<div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
				{mediaData &&
					mediaData.map(({ poster_path, id }) => (
						<div style={{ maxWidth: '10rem' }} key={id}>
							<MediaCard image={poster_path} id={id} redirect={true}>
								Hola
							</MediaCard>
						</div>
					))}
			</div>
		</div>
	);
}

/* export async function getStaticPaths() {
	return {
		paths: [
			// String variant:
			'/media/951470',
			// Object variant:
			{ params: { id: '324668' } },
		],
		fallback: true,
	};
}

export async function getStaticProps(ctx) {
	return {
		props: {}, // will be passed to the page component as props
	};
} */
