/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
};

module.exports = {
	images: {
		domains: ['image.tmdb.org', 'media.istockphoto.com'],
	},
	nextConfig: nextConfig,
};
