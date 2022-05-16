import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import SingleMediaPage from '../../components/SingleMediaPage';
import { getSingleMedia } from '../../services/media';

export default function MediaPage() {
	const [mediaData, setMediaData] = useState({}); // Where the media data is going to bed saved

	const router = useRouter();
	const { id } = router.query; // Get the media id

	useEffect(() => {
		getSingleMedia(id).then(res => setMediaData(res));
	}, []);

	return <SingleMediaPage mediaData={mediaData} />;
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
