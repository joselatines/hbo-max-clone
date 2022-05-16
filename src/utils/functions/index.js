export const getImage = urlImg => {
	if (urlImg === null || undefined)
		return 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg';

	return `https://image.tmdb.org/t/p/w500${urlImg}`;
};
