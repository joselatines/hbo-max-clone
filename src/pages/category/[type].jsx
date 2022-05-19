import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getPopular } from '../../services/media';

const LazyMediaCard = dynamic(() => import('../../components/MediaCard'), {
	loading: () => <Loader />,
});

import Button from '../../components/shared/Button/styles';
import Loader from '../../components/shared/Loader';

export default function Category() {
	const [mediaData, setMediaData] = useState([]); // Where the media data is going to bed saved
	const [page, setPage] = useState(1);

	const router = useRouter();
	const { type } = router.query; // Get the media type

	const txt = type === 'movie' ? 'movies' : 'TV Series';

	const changePage = direction => {
		if (direction === 'next') if (page < 1000) setPage(prev => prev + 1);
		if (direction === 'prev') if (page > 1) setPage(prev => prev - 1);
	};

	useEffect(() => {
		getPopular(type, page).then(res => setMediaData(res));
	}, [type, page]);

	return (
		<div className='Container'>
			<h2>Popular {txt}</h2>
			<div>
				{mediaData &&
					mediaData.map(el => (
						<div style={{ maxWidth: '10rem' }} key={el.id}>
							<LazyMediaCard
								image={el.poster_path}
								id={el.id}
								redirect={true}
							/>
						</div>
					))}
			</div>
			<div>
				<Button onClick={() => changePage('prev')}>Prev</Button>
				<Button onClick={() => changePage('next')}>Next</Button>
			</div>
			<style jsx>{`
				.Container {
					display: grid;
					gap: 1.5rem;
					place-items: center;
				}
				div {
					display: flex;
					flex-wrap: wrap;
					gap: 1.3rem;
					justify-content: center;
					align-items: center;
				}
			`}</style>
		</div>
	);
}
