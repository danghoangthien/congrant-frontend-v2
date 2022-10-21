import styled from 'styled-components/macro';
import { createGlobalStyle } from 'styled-components';

import { StyleConstants, ScreenSizes, PRIMARY_COLOR, WARNING_COLOR } from 'styles/StyleConstants';
/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
    font-size: 16px;
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
  & .display-inline-flex {
    display: inline-flex;
  }
  .ant-layout {
    background: #F4F6F7;
  }
  .ant-table-thead>tr>th {
    font-weight: 700;
    border-top: 1px solid transparent
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

  // buttons
  .filter-button {
    display: flex;
    align: center;

    >svg {
      width: 16px;
      margin-right: 10px;
    }
  }

  .action-btn {
    padding: 0px 10px;
  }

  .icon-btn {
    display: inline-flex;
    align-items: center;

    >svg {
      width: 16px;
      height: 16px;
      margin-right: 8px;
    }
  }

  .icon-only-btn {
    display: inline-flex;
    align-items: center;
    padding: 0px 7px;

    >svg {
      width: 16px;
      height: 16px;
    }
  }

  // input label
  .ant-form-item-label>label {
    color: rgba(0,0,0,0.5);
    font-weight: 600;
  }

  // tab
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    text-shadow: none;
    font-weight: 600;
  }
`;

export const StyledPrimaryIcon = styled.span`
  & .anticon,
  svg {
    color: ${PRIMARY_COLOR};
  }
`;

export const StyledWarningIcon = styled.span`
  & .anticon,
  svg {
    color: ${WARNING_COLOR};
  }
`;
