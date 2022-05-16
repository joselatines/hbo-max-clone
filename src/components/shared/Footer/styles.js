import styled from 'styled-components';

export const Container = styled.footer`
	display: flex;
	align-items: center;
	gap: 1rem;

	background-color: ${({ theme }) => theme.colors.bg};
	color: ${({ theme }) => theme.colors.font};
	padding: 3rem;

	ul {
		list-style-type: none;
		font-size: smaller;
		font-weight: lighter;
		li {
			transition: ${({ theme }) => theme.transitions.smoothShort};
			&:hover {
				transform: translateX(5px);
			}
		}
	}

	.water {
		font-size: smaller;
	}
`;

export const Row = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	gap: 2rem;
	width: 100%;
`;

export const Column = styled.div``;
export const Title = styled.span`
	font-weight: ${({ theme }) => theme.font.weight.medium};
	font-size: ${({ theme }) => theme.font.size.lg};
`;
export const Subtitle = styled(Title)`
	font-size: ${({ theme }) => theme.font.size.sm};
	font-weight: ${({ theme }) => theme.font.weight.regular};
`;
