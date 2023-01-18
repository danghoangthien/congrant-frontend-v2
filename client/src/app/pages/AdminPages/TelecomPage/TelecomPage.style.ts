import styled from 'styled-components/macro';
// ANTD
import { Tag } from 'antd';

export const StyledBadgeDot = styled.div`
  & .ant-badge-status-dot {
    width: 12px;
    height: 12px;
  }
`;

export const StyledPaymentTypeTag = styled(Tag)`
  color: #fff;
`;
