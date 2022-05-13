import styled from 'styled-components';

export const Container = styled.nav`
	display: flex;
	justify-content: space-between;
	gap: 2rem;

	p {
		color: ${({ theme }) => theme.colors.gray};
	}
`;
