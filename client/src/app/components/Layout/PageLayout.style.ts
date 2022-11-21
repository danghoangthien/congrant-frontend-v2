import styled from 'styled-components/macro';
import { StyleConstants, ScreenSizes, PRIMARY_COLOR } from 'styles/StyleConstants';

export const PageLayout = styled.div`
  width: 100%;
  & .item {
    flex-shrink: 0;
    flex-grow: 1;
  }
  // & .ant-pagination-item-active {
  //   a {
  //     color: ${PRIMARY_COLOR};
  //   }
  //   border-color: ${PRIMARY_COLOR} !important;
  // }
  & .ant-card {
    border-radius: 10px;
  }
  & .modalStyle .ant-modal-content {
    border-radius: 10px;
  }

  & .text-right {
    text-align: right;
  }

  & .selected-status-ops {
    background-color: #000;
    color: #fff;
    & .ant-checkbox-wrapper {
      color: #fff;
    }
  }
  & .display-inline-flex {
    display: inline-flex;
  }
  & .free-search {
    width: 216px;
    border-radius: 4px;

    svg {
      font-size: 16px;
    }
  }
  & .ant-descriptions-item-label {
    width: 200px;
  }
  & .switch-btn {
    .ant-btn {
      border: none;
      border-radius: 0;
      border: 1px solid #d9d9d6;
      &.active {
        border-color: #63b233;
      }
      &:first-of-type {
        border-top-left-radius: 2px;
        border-bottom-left-radius: 2px;
      }
      &:last-of-type {
        border-top-right-radius: 2px;
        border-bottom-right-radius: 2px;
      }
    }
  }
  & .table-title {
    font-size: 16px;
    font-weight: 600;
  }
`;

export const StyledModalTitle = styled.span`
  font-size: 20px;
  font-weight: 600;
`;
