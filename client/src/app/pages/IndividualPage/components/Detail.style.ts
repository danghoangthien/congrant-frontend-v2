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

  & .ant-tabs-nav {
    margin-bottom: 24px;
  }

  & .detail-table {
    th {
      padding: 12px 12px;
    }
  }

  & .ant-tabs-tab-btn {
    font-size: 14px;
  }
`;
