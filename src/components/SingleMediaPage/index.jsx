import MediaCard from '../MediaCard';
import {
	Container,
	ImageWrapper,
	Content,
	Poster,
	Info,
	Overview,
	Title,
} from './styles';

export default function SingleMediaPage({ mediaData }) {
	const {
		title,
		backdrop_path,
		poster_path,
		release_date,
		vote_average,
		genres,
		overview,
	} = mediaData;
	console.log(genres);
	const imageURL = img => `https://image.tmdb.org/t/p/w500${img}`;
	return (
		<>
			{mediaData ? (
				<Container>
					<ImageWrapper image={imageURL(backdrop_path)}></ImageWrapper>
					<Content>
						<MediaCard image={poster_path} redirect={false} />

						<div>
							<h1>{title}</h1>
							<Info>
								{genres !== undefined &&
									genres.map(({ name }) => <span key={name}>{name} </span>)}
								| <span>{release_date}</span> | <span>{vote_average}/10</span>
							</Info>
							<p>{overview}</p>
						</div>
					</Content>
				</Container>
			) : (
				<h1>Loading</h1>
			)}
		</>
	);
}
