import styled from 'styled-components';

export const Container = styled.div`
	margin: 2rem 0;

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
`;

export const Title = styled.h3`
	font-weight: ${({ theme }) => theme.font.weight.bold};
	font-size: ${({ theme }) => theme.font.size.lg1};
	line-height: 0.8;
`;
export const SubTitle = styled.span`
	font-weight: ${({ theme }) => theme.font.weight.light};
	font-size: ${({ theme }) => theme.font.size.md};
`;
export const Text = styled.div`
	margin-bottom: 1rem;
`;
