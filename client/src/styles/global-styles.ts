import styled from 'styled-components/macro';
import { createGlobalStyle } from 'styled-components';

import {
  PRIMARY_COLOR,
  WARNING_COLOR,
  BORDER_RADIUS,
  GRAY_COLOR,
  LIGHT_GRAY_COLOR,
  TEXT_COLOR,
  TEXT_GRAY_COLOR,
  PLACEHOLDER_COLOR,
  PRIMARY_ADMIN_COLOR,
  DANGER_COLOR,
} from 'styles/StyleConstants';

/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    // line-height: 1.5;
    font-size: 16px;
    font-weight: 400;
    // color: rgba(0,0,0,0.85);
  }

  h2 {
    font-size: 40px;
  }

  *::selection {
    background: highlight;
    color: inherit;
  }

  body {
    font-family: system-ui;
  }

  // OTHER CLASS
  .fade {
    transition: all 0.3s ease;

    &:hover {
      opacity: 0.8;
    }
  }

  // FONTS
  .roboto-mono {
    font-family: 'Roboto Mono', monospace;
  }

  // TAGS
  strong {
    font-weight: 600;
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
    font-weight: 600;
  }

  // buttons
  .filter-button {
    display: flex;
    align-items: center;
    box-shadow: none !important;

    .material-symbols-outlined {
      font-size: 18px;
      margin-right: 10px;
    }
  }

  .action-btn {
    padding: 0px 10px;
  }

  .icon-btn {
    display: inline-flex;
    align-items: center;

    .material-symbols-outlined {
      font-size: 18px;
      margin-right: 8px;
    }

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

  // IMAGE
  .img-cover {
    overflow: hidden;
    display: block;
    position: relative;
  }
  
  .img-cover img {
    object-fit: cover;
    position: absolute;
    top: -10000%;
    right: -10000%;
    bottom: -10000%;
    left:-10000%;
    margin: auto auto;
    min-width: 1000%;
    min-height: 1000%;
    width: 100%;
    -webkit-transform: scale(.1);
    -moz-transform: scale(.1);
    -ms-transform: scale(.1);
    -o-transform: scale(.1);
    transform: scale(.1);
  }

  .thumb-image {
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  // BUTTON
  // .ant-btn {
  //   box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043);
  // }

  .less-shadow-btn {
    box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.016);
  }

  .ant-primary-btn {
    // box-shadow: 0 2px 0 rgb(0 0 0 / 1.6%);
    box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043);
  }

  .ant-btn-sm {
    padding: 0 9px;
  }

  .icon-btn {
    display: flex;
    align-items: center;
  }

  .fill-icon {
    font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48;
  }

  .more-menu-btn {
    display: flex;
    align-items: center;
    justify-content:center;

    span {
      font-size: 16px;
    }
  }

  // CARD
  .ant-card {
    // border: 1px solid ${GRAY_COLOR};
    overflow: hidden;
  }

  // MODAL
  .ant-modal-header {
    border-radius: 8px 8px 0 0;
    padding: 18px 24px;
  }
  .ant-modal-content {
    border-radius: 8px;
  }

  .ant-modal-title {
    font-size: 20px;
    font-weight: 600;
  }

  .modal-inner-title {
    font-weight: 600;
    font-size: 14px;
    color: ${TEXT_GRAY_COLOR};
  }

  .admin-modal {
    .ant-radio-checked .ant-radio-inner {
      border-color: ${PRIMARY_ADMIN_COLOR};
    }

    .ant-radio-inner::after {
      background-color: ${PRIMARY_ADMIN_COLOR};
    }

    .ant-btn-primary {
      background-color: ${PRIMARY_ADMIN_COLOR};
      border-color: ${PRIMARY_ADMIN_COLOR};

      &:hover {
        opacity: 0.8;
      }
    }

    .ant-btn:hover:not(.ant-btn-primary),
    .ant-btn:focus:not(.ant-btn-primary) {
      color: ${PRIMARY_ADMIN_COLOR};
      border-color: ${PRIMARY_ADMIN_COLOR};
    }
  }

  // BREADCRUMB
  & .bread-crumb {
    border: 1px solid ${GRAY_COLOR};
    overflow: hidden;
    border-radius: ${BORDER_RADIUS};
      
    li:not(:last-of-type) .bread-crumb-content {
      border-right: 1px solid ${GRAY_COLOR};
    }

    .bread-crumb-content {
      background: ${PRIMARY_COLOR};
      padding: 4px 16px;
      font-weight: 600;
      display: flex;
      align-items: center;
    }

    span.bread-crumb-content {
      color: #ffffff;
    }

    div.bread-crumb-content {
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
      font-family: 'Roboto Mono', monospace;
    }
  }

  // ALIGNMENT
  .center-text {
    text-align: center;
  }

  // ANTD TABLE
  .ant-table-thead>tr>th {
    border-color: ${LIGHT_GRAY_COLOR};
    border-top: 1px solid transparent;
    background: #fafaf8;
    font-weight: 600;
  }
  
  .ant-table-thead>tr>th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan]):before {
    background-color: ${LIGHT_GRAY_COLOR};
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

  .common-table {
    .ant-table-thead > tr > th, .ant-table-tbody > tr > td, .ant-table tfoot > tr > th, .ant-table tfoot > tr > td {
      padding: 17px 24px;
    }

    &.-sml {
      .ant-table-thead > tr > th, .ant-table-tbody > tr > td, .ant-table tfoot > tr > th, .ant-table tfoot > tr > td {
        padding: 17px 12px;
      }

      .ant-table-selection-col {
        width: 48px;
      }
    }
  }

  .clickable-table {
    .ant-table-row {
      cursor: pointer;
    }
  }

  .style-table {
    .ant-table-pagination.ant-pagination {
      margin: 16px 24px;
    }

    .ant-pagination-item-link .anticon {
      vertical-align: 0.125em;
    }
  }

  // POP-UP MENU

  // ANTD INPUT
  .ant-input {
    ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
      color: ${PLACEHOLDER_COLOR};
    }
    :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
      color: ${PLACEHOLDER_COLOR};
      opacity: 1;
    }
    ::-moz-placeholder { /* Mozilla Firefox 19+ */
      color: ${PLACEHOLDER_COLOR};
      opacity: 1;
    }
    :-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: ${PLACEHOLDER_COLOR};
    }
    ::-ms-input-placeholder { /* Microsoft Edge */
      color: ${PLACEHOLDER_COLOR};
    }
  }

  .site-input-split {
    font-size: 14px;
  }

  .num-range-input {
    >input,
    >span {
      height: 32px;
    }
  }

  // ANTD PICKER
  .ant-picker-separator {
    display: flex;
    align-items: center;
  }

  // ANTD SELECT
  .ant-select-selection-placeholder {
    color: ${PLACEHOLDER_COLOR};
  }

  // .ant-select {
  //   font-size: 16px;
  // }

  .ant-select-clear,
  .ant-select-multiple .ant-select-selection-item-remove {
    display: flex;
    align-items: center;
  }

  // LEFT MENU
  & .sub-user-menu-link {
    font-size: 14px;
    display: flex;
    align-items: center;

    svg {
      width: 16px;
      display: inline-block;
      margin-right: 8px;
    }
  }

  // ICON
  & .custom-icon {
    height: auto !important;
  }

  .info-icon {
    color: ${TEXT_COLOR};
    width: 13px;
  }

  // ACTION MENU
  & .action-menu {
    & .ant-dropdown-menu-title-content {
      display: flex;
      align-items: center;
    }
  }

  .ant-dropdown-menu-item,
  .ant-dropdown-menu-submenu-title {
    &.danger {
      background: ${DANGER_COLOR};
      color: #fff;
    }
  }

  // PAGINATION
  .ant-pagination-total-text {
    margin-right: 16px;
  }

  // TAB
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    text-shadow: none;
    font-weight: 600;
    font-size: 14px;
  }

  .ant-tabs-card>.ant-tabs-nav .ant-tabs-tab, 
  .ant-tabs-card>div>.ant-tabs-nav .ant-tabs-tab {
    border-color: ${GRAY_COLOR};
  }

  .ant-tabs-top > .ant-tabs-nav::before, .ant-tabs-bottom > .ant-tabs-nav::before, .ant-tabs-top > div > .ant-tabs-nav::before, .ant-tabs-bottom > div > .ant-tabs-nav::before {
    border-color: ${GRAY_COLOR};
  }

  .ant-tabs-tab {
    font-size: 16px;
  }

  // プロジェクト編集ページのタブ
  .project-edit-tab {
    .ant-tabs-nav {
      margin-bottom: 40px;
    }
  }

  // TITLE
  .page-title01 {
    font-size: 24px;
    font-weight: 600;
  }

  .page-title {
    font-size: 28px;
    font-weight: 600;
    display: flex;
    align-items: center;

    .icon {
      font-size: 30px;
    }
  }

  .sub-page-title {
    font-size: 28px;
    font-weight: 600;
    position: relative;
    padding-left: 24px;

    &:before {
      content: "";
      display: inline-block;
      width: 4px;
      height: 24px;
      background: ${PRIMARY_COLOR};
      border-radius: 6px;
      position: absolute;
      top: 11px;
      left: 8px;
    }

    &.-sml {
      font-size: 24px;
      padding-left: 18px;

      &:before {
        top: 7px;
        left: 0;
      }
    }
  }

  .page-sub-title {
    font-size: 20px;
    font-weight: 600;
  }

  // CHECKBOX
  .ant-checkbox-inner {
    border-radius: 2px;
  }

  .ant-checkbox-wrapper {
    // font-size: 16px;
  }

  .ant-checkbox-group {
    &.vertical {
      .ant-checkbox-wrapper {
        display: flex;

        &:not(:last-child) {
          margin-bottom: 10px;
        }
      }
    }
  }

  // RADIO
  .ant-radio-wrapper {
    font-size: 16px;
  }

  .ant-radio-checked .ant-radio-inner::after {
    transform: scale(0.6);
  }

  // SEARCH BUTTON
  & .free-search {
    width: 216px;
    border-radius: 4px;
    height: 32px;

    span {
      font-size: 18px;
    }
  }

  // LINK
  .supporter-link {
    font-weight: 600;
    font-size: 14px;
    color: ${PRIMARY_COLOR};
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  // UPLOAD TITLE
  .upload-picture-title {
    font-style: normal;
    font-size: 14px;
    line-height: 22px;
    /* identical to box height, or 157% */

    text-align: center;

    /* Text/Gray */

    color: rgba(0, 0, 0, 0.5);
  }

  // ANTD SPACE
  .ant-space-item {
    display: flex;
  }

  // DRAG DROP TR 
  tr.drop-over-downward td {
    border-bottom: 2px dashed #1890ff;
  }
  
  tr.drop-over-upward td {
    border-top: 2px dashed #1890ff;
  }

  // NOTIFICATION
  .custom-nofitication {
    .ant-notification-notice-message {
      font-weight: 600;
    }

    .ant-notification-notice-icon {
      line-height: 28px;
    }

    .ant-notification-notice-with-icon .ant-notification-notice-message,
    .ant-notification-notice-with-icon .ant-notification-notice-description {
      margin-left: 36px;
    }
  }

  // MESSAGE
  .ant-message .anticon {
    vertical-align: text-top;
  }

  .ant-message-custom-content.ant-message-info {
    display: flex;
    align-items: center;

    .icon {
      margin-right: 8px;
    }
  }

  .table-row-light {
    background-color: #ffffff;

    &:hover > td {
      background-color: initial !important;
    }
  }
  .table-row-dark {
    background-color: ${GRAY_COLOR};

    &:hover > td {
      background-color: initial !important;
    }
  }

  // UPLOAD
  .ant-upload-list-text .ant-upload-span > *,
  .ant-upload-list-picture .ant-upload-span > * {
    display: flex;
  }

  .ant-upload-list-item-name {
    width: auto;
    flex: none !important;
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
    width: 12px;
    height: 12px;
  }
`;
