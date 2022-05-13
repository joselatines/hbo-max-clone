import PropTypes from 'prop-types';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper';

import { Container, Title, SubTitle, Text } from './styles';
import MediaCard from '../MediaCard';


export default function Carrousel({ title, subtitle, elements }) {
	return (
		<Container>
			<Text>
				{title && <Title>{title}</Title>}
				{subtitle && <SubTitle>{subtitle}</SubTitle>}
			</Text>
			<div>
				<Swiper
					slidesPerView={6}
					spaceBetween={20}
					slidesPerGroup={6}
					loop={true}
					loopFillGroupWithBlank={false}
					/* 	pagination={{
						clickable: false,
					}} */
					navigation={true}
					modules={[Pagination, Navigation]}
					className='mySwiper'
				>
					{elements.map(({ poster_path, id }) => (
						<SwiperSlide key={id}>
							<MediaCard image={poster_path} id={id} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</Container>
	);
}

Carrousel.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	elements: PropTypes.array.isRequired,
};

Carrousel.defaultProps = {
	title: 'Pass a title through prop',
};
