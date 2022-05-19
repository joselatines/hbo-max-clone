import dynamic from 'next/dynamic';
import { getImage } from '../../utils/functions';
import PercentageCircle from '../PercentageCircle';

import Loader from '../shared/Loader';
import { ImageWrapper, Content, Info, Poster, Container } from './styles';
const LazyMediaCard = dynamic(() => import('../MediaCard'), {
	loading: () => <Loader />,
});

export default function SingleMediaPage({ mediaData }) {
	const {
		title,
		original_title,
		backdrop_path,
		poster_path,
		release_date,
		vote_average,
		genres,
		homepage,
		overview,
		tagline,
		name,
	} = mediaData;

	return (
		<>
			{mediaData && (
				<>
					<Container>
						<ImageWrapper image={getImage(backdrop_path)}></ImageWrapper>
						<Poster>
							<LazyMediaCard
								image={poster_path}
								redirect={false}
								title={title ? title : name}
							/>
						</Poster>
						<Content>
							<div>
								<h1>{title ? title : name}</h1>
								<Info>
									{genres &&
										genres.map(({ name }) => <span key={name}>{name} </span>)}
									| <span>{release_date}</span>
								</Info>
								<p>{tagline && tagline}</p>
								<div>
									<PercentageCircle score={vote_average} />
								</div>
							</div>
						</Content>
					</Container>
					<div>
						<h2>Synopsis</h2>
						<p>{overview}</p>
						<h2>About</h2>
						<ul>
							<li>Original title: {original_title ? original_title : name}</li>
							<li>
								Genres:{' '}
								{genres &&
									genres.map(({ name }) => <span key={name}>{name} </span>)}
							</li>
							{homepage && (
								<li>
									Website:{' '}
									<a href={homepage} target='_blank' rel='noopener noreferrer'>
										{homepage}
									</a>
								</li>
							)}
						</ul>
					</div>
				</>
			)}
		</>
	);
}
