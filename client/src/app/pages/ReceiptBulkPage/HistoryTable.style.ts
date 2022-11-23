import styled from 'styled-components/macro';
import { GRAY } from 'styles/StyleConstants';

export const StyledTable = styled.div`
  & .ant-table-thead > tr > th {
    border-top: none;
  }

  & .ant-table-tbody > tr:last-child > td {
    border-bottom: none;
  }
`;
