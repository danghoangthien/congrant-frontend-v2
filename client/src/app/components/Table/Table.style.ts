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
`;
