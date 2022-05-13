import PropTypes from 'prop-types';
import MediaCard from '../MediaCard';

OverviewMedia.propTypes = {
	elements: PropTypes.array.isRequired,
	title: PropTypes.string,
};

OverviewMedia.defaultProps = {
	title: 'Pass a title through prop',
};

export default function OverviewMedia({ title, elements }) {
	return (
		<div>
			<h1>{title}</h1>
			<div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
				{elements.map(({ id, poster_path }) => (
					<MediaCard key={id} image={poster_path} id={id} />
				))}
			</div>
		</div>
	);
}
