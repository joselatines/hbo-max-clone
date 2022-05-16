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
	}, [id]);

	return <SingleMediaPage mediaData={mediaData} />;
}
