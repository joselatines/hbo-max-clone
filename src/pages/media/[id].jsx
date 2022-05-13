import { useRouter } from 'next/router';
import { getSingleMedia } from '../../services/mediaServices';

export default function MediaPage() {
	const router = useRouter();
	const { id } = router.query;
	console.log(router);
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
			'/media/123',
			// Object variant:
			{ params: { id: '444' } },
		],
		fallback: true,
	};
}

export async function getStaticProps(ctx) {
	console.log(ctx);
	// Need type of media and an id
	const res = await getSingleMedia();
	return {
		props: { popularMovies: 'd' }, // will be passed to the page component as props
	};
}
