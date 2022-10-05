import styled from 'styled-components/macro';
import { createGlobalStyle } from 'styled-components';

import { StyleConstants, ScreenSizes, PRIMARY_COLOR } from 'styles/StyleConstants';
/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: "游ゴシック体", "Yu Gothic", YuGothic, "ヒラギノ角ゴシック ProN", "Hiragino Kaku Gothic ProN", "Hiragino Sans", "メイリオ", Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
    background-color: #ffffff;
  }

  body.fontLoaded {
    font-family: "游ゴシック体", "Yu Gothic", YuGothic, "ヒラギノ角ゴシック ProN", "Hiragino Kaku Gothic ProN", "Hiragino Sans", "メイリオ", Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
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
  .ant-layout-content {
    background: #F4F6F7;
  }
  .ant-table-thead>tr>th {
    font-weight: 700;
  }
  .common-table-wrapper {
    position: relative;
    .selected-status-ops {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
    }
  }
  .bold {
    font-weight: 700;
  }
`;

export const StyledPrimaryIcon = styled.span`
  & .anticon {
    color: ${PRIMARY_COLOR};
  }
`;

export const StyledWarningIcon = styled.span`
  & .anticon {
    color: #ff4d4f;
  }
`;
