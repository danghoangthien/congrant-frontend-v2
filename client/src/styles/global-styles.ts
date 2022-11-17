import styled from 'styled-components/macro';
import { createGlobalStyle } from 'styled-components';

import {
  PRIMARY_COLOR,
  WARNING_COLOR,
  BORDER_RADIUS,
  CARD_BORDER_COLOR,
  BORDER_COLOR,
} from 'styles/StyleConstants';
/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    // line-height: 1.5;
    font-size: 16px;
    color: rgba(0,0,0,0.85);
  }

  body {
    font-family: "ヒラギノ角ゴシック", "Hiragino Kaku Gothic", "游ゴシック体", "Yu Gothic", YuGothic, "Hiragino Sans", "メイリオ", Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
  }

  .roboto-mono {
    font-family: 'Roboto Mono', monospace;
  }

  .ant-btn>span {
    display: inline-flex;
    align-items: center;
  }
  & .display-inline-flex {
    display: inline-flex;
  }
  .ant-layout {
    background: #F0F0EE;
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
    align-items: center;

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

  // TAB
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    text-shadow: none;
    font-weight: 600;
  }

  .page-title {
    font-size: 28px;
    font-weight: 600;
    display: flex;
    align-items: center;
  }

  .sub-page-title {
    font-size: 28px;
    font-weight: 600;
    position: relative;
    padding-left: 24px;
  }

  .page-sub-title {
    font-size: 20px;
    font-weight: 700;
  }

  // IMAGE
  .thumb-image {
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  // BUTTON
  .ant-btn {
    border-radius: ${BORDER_RADIUS};
  }
  .icon-btn {
    display: flex;
    align-items: center;
  }

  // CARD
  .ant-card {
    border: 1px solid ${CARD_BORDER_COLOR};
    border-radius: ${BORDER_RADIUS};
    overflow: hidden;
  }

  // MODAL
  .ant-modal-header {
    border-radius: 10px 10px 0 0;
  }
  .ant-modal-content {
    border-radius: 10px;
  }

  // BREADCRUMB
  & .bread-crumb {
    border: 1px solid ${CARD_BORDER_COLOR};
    border-radius: 4px;
    overflow: hidden;
      
    li:not(:last-of-type) .bread-crumb-content {
      border-right: 1px solid ${CARD_BORDER_COLOR};
    }

    .bread-crumb-content {
      background: ${PRIMARY_COLOR};
      padding: 5px 16px;
      font-weight: 600;
      display: flex;
      align-items: center;
    }
    span.bread-crumb-content {
      color: #ffffff;
    }

    a.bread-crumb-content {
      background: #ffffff;
      font-weight: 400;

      &:hover {
        color: ${PRIMARY_COLOR};
      }
    }
  }

  .ant-breadcrumb li:last-child a {
    color: rgba(0,0,0,.5);
  }

  // BADGE
  .common-badge {
    sup {
      color: rgba(0,0,0,.5);
      font-size: 12px;
    }
  }

  // ALIGNMENT
  .center-text {
    text-align: center;
  }

  // TABLE
  .ant-table-thead>tr>th {
    border-color: ${BORDER_COLOR};
    border-top: 1px solid transparent;
    background: #fafaf8;
    font-weight: 600;
  }
  
  .ant-table-thead>tr>th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan]):before {
    background-color: ${BORDER_COLOR};
  }

  .ant-table-thead>tr>th,
  .ant-table tfoot>tr>th {
    padding: 11px 12px;
  }

  .ant-table-tbody>tr>td,
  .ant-table tfoot>tr>td {
    padding: 17px 12px;
  }

  .table-card {
    padding-bottom: 36px;
  }

  // POP-UP MENU
  & .ant-menu-submenu-popup {
    & .ant-menu {
      border-radius: 4px;
    }
  }

  // ANTD INPUT
  .ant-input {
    border-radius: 4px;

    ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
      color: rgba(0,0,0,0.2);
    }
    :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
      color: rgba(0,0,0,0.2);
      opacity: 1;
    }
    ::-moz-placeholder { /* Mozilla Firefox 19+ */
      color: rgba(0,0,0,0.2);
      opacity: 1;
    }
    :-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: rgba(0,0,0,0.2);
    }
    ::-ms-input-placeholder { /* Microsoft Edge */
      color: rgba(0,0,0,0.2);
    }
  }

::placeholder { /* Most modern browsers support this now. */
   color:    #909;
}

  // ANTD PICKER
  .ant-picker {
    border-radius: 4px;
  }

  // ANTD SELECT
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border-radius: 4px;
  }

  .ant-select-single.ant-select-show-arrow .ant-select-selection-item, .ant-select-single.ant-select-show-arrow .ant-select-selection-placeholder {
    color: rgba(0,0,0,0.2);
  }

  // LEFT MENU
  & .sub-user-menu-link {
    font-size: 14px;
    font-weight: 300;
    display: flex;
    align-items: center;

    svg {
      width: 16px;
      display: inline-block;
      margin-right: 8px;
    }
  }

  // ICON
  .custom-icon {
    height: auto !important;
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

export const StyledBadgeDot = styled.div`
  & .ant-badge-status-dot {
    width: 10px;
    height: 10px;
  }
`;
