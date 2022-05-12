import { API_KEY, base_URL, lang } from './config';

export const getLatest = async mediaType => {
	const res = await fetch(`${base_URL}movie/latest?api_key=${API_KEY}&language=${lang}`);
	const data = res.json();
	return data;
};
