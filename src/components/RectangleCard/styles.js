import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 2rem;

	p {
		color: ${({ theme }) => theme.colors.gray};
		font-size: ${({ theme }) => theme.font.size.sm};
		margin: 0.5rem 0 1rem;
	}
	div {
		width: 70%;
	}
`;

export const Title = styled.span`
	font-size: ${({ theme }) => theme.font.size.lg1};
	font-weight: ${({ theme }) => theme.font.wight.bold};
`;
