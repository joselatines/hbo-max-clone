import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper';

import { Container, Title, SubTitle, Text } from './styles';

import img from '/public/img/poster.jpg';
import MediaCard from '../MediaCard';

export default function CarrouselContainer({ title, subtitle, elements }) {
	return (
		<Container>
			<Text>
				{title && <Title>{title}</Title>}
				{subtitle && <SubTitle>{subtitle}</SubTitle>}
			</Text>
			<div>
				<Swiper
					slidesPerView={6}
					spaceBetween={30}
					slidesPerGroup={3}
					loop={true}
					loopFillGroupWithBlank={true}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					modules={[Pagination, Navigation]}
					className='mySwiper'
				>
					{elements.length >= 1 &&
						elements.map(({ poster_path, id }) => (
							<SwiperSlide key={id}>
								<MediaCard img={poster_path} />
							</SwiperSlide>
						))}
				</Swiper>
			</div>
		</Container>
	);
}
