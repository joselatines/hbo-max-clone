import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import Loader from '../../components/shared/Loader/index';
import { searchMedia } from '../../services/media';

const LazyMediaCard = dynamic(() => import('../../components/MediaCard'), {
	loading: () => <Loader />,
});

export default function MediaPage() {
	const [mediaData, setMediaData] = useState({});

	const router = useRouter();
	const { query } = router.query;
	const { movie, tv } = mediaData;

	useEffect(() => {
		searchMedia(query).then(res => setMediaData(res));
	}, [query]);

	return (
		<div>
			<span>You searched for: {query}</span>
			{movie && (
				<>
					{movie.length === 0 || tv.length === 0 ? (
						<h1>Sorry, nothing was founded</h1>
					) : (
						<div>
							<h1>Movies</h1>
							<div className='flex'>
								{movie.map(({ poster_path, id }) => (
									<LazyMediaCard
										key={id}
										image={poster_path}
										id={id}
										redirect={true}
									/>
								))}
							</div>

							<h1>Series</h1>
							<div className='flex'>
								{tv.map(({ poster_path, id, title, name }) => (
									<LazyMediaCard
										key={id}
										image={poster_path}
										id={id}
										title={title ? title : name}
										redirect={true}
									/>
								))}
							</div>
						</div>
					)}
				</>
			)}

			<style jsx>{`
				.Container {
					display: grid;
					gap: 1.5rem;
					place-items: center;
				}
				.flex {
					display: flex;
					flex-wrap: wrap;
					gap: 1.5rem;
					justify-content: center;
					align-items: center;
				}
			`}</style>
		</div>
	);
}
