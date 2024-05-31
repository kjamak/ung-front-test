import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  word-wrap: break-word;
  }
  body {
    font-family: 'Flama-Light', sans-serif;
    font-size: 16px;  
    font-weight: normal;
    letter-spacing: .03rem;
    margin: 0 auto;
  }
`;
