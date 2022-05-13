import { API_KEY, base_URL, lang } from './config';

export const getPopular = async (mediaType = 'movie', page = '1') => {
	try {

		const res = await fetch(`${base_URL}/${mediaType}/popular?api_key=${API_KEY}&language=${lang}&page=${page}`);

		if (res.status === 200) {
			const data = await res.json();
			return data;
		} else return undefined;

	} catch (err) {
		console.error('Something went wrong', err);
	}
};

export const getSingleMedia = async id => {
	try {
		const data = {};

		const res = await fetch(`${base_URL}/movie/${id}?api_key=${API_KEY}&language=${lang}`);
		data = await res.json();

		// If an element is not in [movies] endpoint search in another endpoint [tv]
		if (res.status === 404) {
			const res = await fetch(`${base_URL}/tv/${id}?api_key=${API_KEY}&language=${lang}`);
			data = await res.json();
			return data; // Returns [tv] media element
		}

		return data; // Returns [movie] media element

	} catch (err) {
		console.error('Something went wrong', err);
	}
};
