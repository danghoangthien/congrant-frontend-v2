import styled from 'styled-components/macro';
import { PRIMARY_COLOR } from 'styles/StyleConstants';

export const SupporterInfoStyle = styled.div`
  & .supporter-detail-box {
    display: flex;
    .supporter-detail-number {
      font-size: 14px;
    }
    .supporter-detail-name {
      font-size: 16px;
      font-weight: 600;
    }
  }
  & .supporter-detail-donation {
    .supporter-detail-donation-ttl {
      color: rgba(0, 0, 0, 0.5);
      font-size: 14px;
      font-weight: 600;
      margin-right: 8px;
    }

    .supporter-detail-donation-txt {
      color: ${PRIMARY_COLOR};
      font-size: 14px;
    }
  }
  & .supporter-detail-wrapper {
    padding-bottom: 24px;
  }
`;
