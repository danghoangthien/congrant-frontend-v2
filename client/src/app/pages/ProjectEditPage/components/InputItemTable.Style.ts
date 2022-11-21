import styled from 'styled-components/macro';

export const SlyledInputTable = styled.div<{}>`
  & .small-table {
    .ant-table-thead > tr > th,
    .ant-table-tbody > tr > td,
    .ant-table tfoot > tr > th,
    .ant-table tfoot > tr > td {
      padding: 12px 12px;
      font-size: 14px;
    }

    .ant-radio-wrapper {
      font-size: 14px;
    }
  }
`;
