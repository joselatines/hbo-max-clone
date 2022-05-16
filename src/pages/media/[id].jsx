import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Loader from '../../components/shared/Loader';

import { getSingleMedia } from '../../services/media';
const LazySingleMediaPage = dynamic(() => import('../../components/SingleMediaPage'), {
	loading: () => <Loader />,
});

export default function MediaPage() {
	const [mediaData, setMediaData] = useState({}); // Where the media data is going to bed saved

	const router = useRouter();
	const { id } = router.query; // Get the media id

	useEffect(() => {
		getSingleMedia(id).then(res => setMediaData(res));
	}, [id]);

	return <LazySingleMediaPage mediaData={mediaData} />;
}
