import styled from 'styled-components/macro';
import { StyleConstants, ScreenSizes, PRIMARY_COLOR } from 'styles/StyleConstants';

export const FundingPageLayout = styled.div`
  width: 100%;
  & .item {
    flex-shrink: 0;
    flex-grow: 1;
  }
  & .ant-pagination-item {
    border-color: white;
  }
  & .ant-pagination-item-link {
    border-color: white;
  }
  & .ant-pagination-item-active {
    a {
      color: ${PRIMARY_COLOR};
    }
    border-color: ${PRIMARY_COLOR} !important;
  }
  & .decoupled-pagination {
    text-align: right;
  }

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
    width: 200px;
  }
`;
