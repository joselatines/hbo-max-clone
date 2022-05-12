import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper';
import MediaCard from '../../MediaCard';
import img from '/public/img/poster.jpg';

export default function Carrousel({ elements = [{}, {}], type }) {
	return (
		<>
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
					elements.map(el => (
						<SwiperSlide>
							<MediaCard src={img} />
						</SwiperSlide>
					))}
				{/* <SwiperSlide>Slide 1</SwiperSlide>
				<SwiperSlide>Slide 2</SwiperSlide>
				<SwiperSlide>Slide 3</SwiperSlide>
				<SwiperSlide>Slide 4</SwiperSlide>
				<SwiperSlide>Slide 5</SwiperSlide>
				<SwiperSlide>Slide 6</SwiperSlide>
				<SwiperSlide>Slide 7</SwiperSlide>
				<SwiperSlide>Slide 8</SwiperSlide>
				<SwiperSlide>Slide 9</SwiperSlide> */}
			</Swiper>
			<style jsx>{`
				.swiper {
					width: 100%;
					height: 100%;
				}

				.swiper-slide {
					text-align: center;
					font-size: 18px;
					background: #fff;

					/* Center slide text vertically */
					display: -webkit-box;
					display: -ms-flexbox;
					display: -webkit-flex;
					display: flex;
					-webkit-box-pack: center;
					-ms-flex-pack: center;
					-webkit-justify-content: center;
					justify-content: center;
					-webkit-box-align: center;
					-ms-flex-align: center;
					-webkit-align-items: center;
					align-items: center;
				}

				.swiper-slide img {
					display: block;
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			`}</style>
		</>
	);
}

export async function getServerSideProps(ctx) {
	return {
		props: { data }, // will be passed to the page component as props
	};
}
