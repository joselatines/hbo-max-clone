import { useRouter } from 'next/router';
import { getSingleMedia } from '../../services/mediaServices';

export default function MediaPage({ media }) {
	const router = useRouter();
	const { id } = router.query;
	console.log(media);
	return (
		<div>
			<h1>Index {id}</h1>
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
	// Need type of media and an id
	const data = await getSingleMedia();
	return {
		props: { media: data }, // will be passed to the page component as props
	};
}
