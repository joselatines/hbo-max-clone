import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getSingleMedia } from '../../services/mediaServices';

export default function MediaPage() {
	const [mediaData, setMediaData] = useState({}); // Where the media data is going to bed saved

	const router = useRouter();
	const { id } = router.query; // Get the media id
	console.log(mediaData);

	useEffect(() => {
		getSingleMedia(id).then(res => setMediaData(res));
	}, []);

	return (
		<div>
			<h1>
				Index {mediaData.overview} {mediaData.popularity}
			</h1>
		</div>
	);
}

export async function getStaticPaths() {
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
}
