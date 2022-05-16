import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getPopular } from '../../services/media';
import MediaCard from '../../components/MediaCard';
import Button from '../../components/shared/Button/styles';

export default function Category() {
	const [mediaData, setMediaData] = useState([{}]); // Where the media data is going to bed saved
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
		<div>
			<h2 style={{ marginBottom: '1rem' }}>Popular {txt}</h2>
			<div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
				{mediaData &&
					mediaData.map(({ poster_path, id }) => (
						<div style={{ maxWidth: '10rem' }} key={id}>
							<MediaCard image={poster_path} id={id} redirect={true} />
						</div>
					))}
			</div>
			<Button onClick={() => changePage('prev')}>Prev</Button>
			<Button onClick={() => changePage('next')}>Next</Button>
		</div>
	);
}