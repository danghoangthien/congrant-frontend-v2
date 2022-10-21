import styled from 'styled-components/macro';

export const StyledDetail = styled.div`
  & .supporter-detail-ttl {
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 0;

    &.-sml {
      font-size: 20px;
    }
  }

  & .detail-table {
    th {
      padding: 12px 12px;
    }
  }
`;
