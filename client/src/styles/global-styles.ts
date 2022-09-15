import { createGlobalStyle } from 'styled-components';
/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background-color: #000000;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
`;
