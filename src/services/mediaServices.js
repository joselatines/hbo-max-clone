import { API_KEY, base_URL, lang } from './config';

export const getPopular = async (mediaType = 'movie', page = '1') => {
	const res = await fetch(
		`${base_URL}/${mediaType}/popular?api_key=${API_KEY}&language=${lang}&page=${page}`
	);
	const data = await res.json();
	return data;
};

export const getSingleMedia = async (mediaType = 'movie', id) => {
	const res = await fetch(
		`${base_URL}/${mediaType}/${id}?api_key=${API_KEY}&language=${lang}&page=${page}`
	);
	const data = await res.json();
	return data;
};
