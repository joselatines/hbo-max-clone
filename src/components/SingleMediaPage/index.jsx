import { getImage } from '../../utils/functions';
import MediaCard from '../MediaCard';
import Loader from '../shared/Loader';
import { ImageWrapper, Content, Info } from './styles';

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

	return (
		<>
			{genres ? (
				<div>
					<ImageWrapper image={getImage(backdrop_path)}></ImageWrapper>
					<Content>
						<MediaCard image={poster_path} redirect={false} />

						<div>
							<h1>{title}</h1>
							<Info>
								{genres.length !== 0 &&
									genres.map(({ name }) => <span key={name}>{name} </span>)}
								| <span>{release_date}</span> | <span>{vote_average}/10</span>
							</Info>
							<p>{overview}</p>
						</div>
					</Content>
				</div>
			) : (
				<span></span>
			)}
		</>
	);
}
