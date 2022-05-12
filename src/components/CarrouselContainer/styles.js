import styled from 'styled-components';

export const Container = styled.div`
	margin: 2rem 0;
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
