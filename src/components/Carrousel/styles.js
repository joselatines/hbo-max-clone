import styled from 'styled-components';

export const Container = styled.div`
	margin: 2rem 0;

	.swiper {
		width: 100%;
		height: 100%;
		&:hover {
			.swiper-button-next,
			.swiper-button-prev {
				opacity: 1;
			}
		}
	}
	.swiper-button-next,
	.swiper-button-prev {
		transition: all ${({ theme }) => theme.transitions.smoothShort};
		opacity: 0;
		background-color: rgba(0, 0, 0, 0.55);

		color: #fff;

		height: -webkit-fill-available;
		top: auto;
		padding: 1.5rem;
		right: 0;

		&:hover {
			background-color: rgba(0, 0, 0, 0.7);
		}
	}

	.swiper-button-prev {
		left: 0;
	}

	.swiper-slide {
		text-align: center;
		font-size: 18px;
		/* 	background: #fff; */

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
`;

export const Title = styled.h3`
	font-weight: ${({ theme }) => theme.font.weight.bold};
	font-size: ${({ theme }) => theme.font.size.lg};
	line-height: 0.8;
`;
export const SubTitle = styled.span`
	font-weight: ${({ theme }) => theme.font.weight.regular};
	font-size: ${({ theme }) => theme.font.size.sm};
	color: ${({ theme }) => theme.colors.gray};
`;
export const Text = styled.div`
	margin-bottom: 1rem;
`;
