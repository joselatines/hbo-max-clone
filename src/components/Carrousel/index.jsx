import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper';

import { Container, Title, SubTitle, Text } from './styles';
import useWindowWidth from '../../hooks/useWindowWith';
import Loader from '../shared/Loader';

const LazyMediaCard = dynamic(() => import('../MediaCard'), {
	loading: () => <Loader />,
});

Carrousel.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	elements: PropTypes.array.isRequired,
};

Carrousel.defaultProps = {
	title: 'Pass a title through prop',
};

export default function Carrousel({ title, subtitle, elements }) {
	const smallScreen = useWindowWidth(700);

	return (
		<Container>
			<Text>
				{title && <Title>{title}</Title>}
				{subtitle && <SubTitle>{subtitle}</SubTitle>}
			</Text>
			<div>
				<Swiper
					slidesPerView={smallScreen ? 4 : 6}
					spaceBetween={smallScreen ? 5 : 15}
					slidesPerGroup={smallScreen ? 4 : 6}
					loop={true}
					loopFillGroupWithBlank={false}
					/* 	pagination={{
						clickable: false,
					}} */
					navigation={true}
					modules={[Pagination, Navigation]}
					className='mySwiper'
				>
					{elements.map(el => (
						<SwiperSlide key={el.id}>
							<LazyMediaCard
								image={el.poster_path}
								id={el.id}
								title={el.title ? el.title : el.name}
								redirect={true}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</Container>
	);
}
