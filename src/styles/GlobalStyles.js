import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
	
    body {
       /* 	background-color: ${({ theme }) => theme.colors.bg}; */
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
		background: ${({ theme }) => theme.colors.bg};
		background: rgb(0,0,0);
		background: -moz-linear-gradient(99deg, rgba(0,0,0,1) 36%, rgba(71,19,193,1) 70%, rgba(121,93,255,1) 100%);
		background: -webkit-linear-gradient(99deg, rgba(0,0,0,1) 36%, rgba(71,19,193,1) 70%, rgba(121,93,255,1) 100%);
		background: linear-gradient(99deg, rgba(0,0,0,1) 36%, rgba(71,19,193,1) 70%, rgba(121,93,255,1) 100%);
		filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#795dff",GradientType=1);
				a {
			text-decoration: none;
			color: inherit;
			transition: ${({ theme }) => theme.transitions.smoothShort};
			&:hover {
				color:${({ theme }) => theme.colors.secondary};
			}
		}
	}
	`;
