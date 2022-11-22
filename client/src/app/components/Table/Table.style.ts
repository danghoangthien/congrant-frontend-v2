import styled from 'styled-components/macro';

export const TableStyle = styled.div`
  & .ant-pagination-item-link .anticon {
    vertical-align: 0.125em;
  }

  & .index-table-wrapper {
    position: relative;
  }

  & .index-table-toolbar {
    position: fixed;
    bottom: 0;
    width: 100%;
    transform: translateX(-24px);
  }

  & .check-all-btn {
    text-decoration: underline;
    background: none;
    padding: 0;
    color: #ffffff;
    box-shadow: none;
    cursor: pointer;

    &:hover {
      text-decoration: none;
    }
  }
`;
