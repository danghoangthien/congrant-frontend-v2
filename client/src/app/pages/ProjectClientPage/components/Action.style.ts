import styled from 'styled-components/macro';
import { Button } from 'antd';

export const ActionButton = styled(Button)`
  font-size: 13px;
  font-weight: 700;
  box-shadow: none !important;
  display: flex;
  align-items: center;
  padding: 4px 10px;

  .icon {
    margin-right: 6px;
  }
`;
