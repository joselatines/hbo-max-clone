import MediaCard from '../MediaCard';

export default function OverviewMedia({ title, elements }) {
	console.log(elements);
	return (
		<div>
			<h1>{title}</h1>
			<div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
				{elements.map(({ id, backdrop_path }) => (
					<MediaCard key={id} image={backdrop_path} />
				))}
			</div>
		</div>
	);
}
