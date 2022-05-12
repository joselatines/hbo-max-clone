import { API_KEY, base_URL, lang } from './config';

export const getPopular = async mediaType => {
	const res = await fetch(
		`${base_URL}/${mediaType}/popular?api_key=${API_KEY}&language=${lang}&page=1`
	);
	const data = await res.json();
	return data;
};
