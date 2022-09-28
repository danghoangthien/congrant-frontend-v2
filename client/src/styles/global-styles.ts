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
    background-color: #ffffff;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  .ant-btn>span {
    display: inline-flex;
    align-items: center;
  }

  .ant-pagination-prev .ant-pagination-item-link,
  .ant-pagination-next .ant-pagination-item-link,
  .ant-pagination-item, .ant-pagination-total-text  {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  & .display-inline-flex {
    display: inline-flex;
  }
`;
