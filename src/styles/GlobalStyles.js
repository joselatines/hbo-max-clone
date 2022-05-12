import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
	
    body {
       	background-color: ${({ theme }) => theme.colors.bg};
       	color: ${({ theme }) => theme.colors.font};
		font-family: ${({ theme }) =>
			theme.font
				.style}, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica ,sans-serif;;

		@media screen and (min-width: 320px) {
    		font-size: calc(${({ theme }) =>
					theme.font.size.default}+ 6 * ((100vw - 320px) / 680));	
		}

		@media screen and (min-width: 1000px) {
   			font-size: 22px;
		}
		// Project styles
    }
	`;
