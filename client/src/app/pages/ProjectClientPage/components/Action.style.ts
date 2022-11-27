import styled from 'styled-components/macro';
import { Button } from 'antd';
import { ScreenSizes } from 'styles/StyleConstants';

export const ActionButton = styled(Button)`
  font-size: 13px;
  font-weight: 700 !important;
  box-shadow: none !important;
  display: flex;
  align-items: center;
  padding: 4px 5px;

  .icon {
    margin-right: 6px;

    @media screen and (max-width: ${ScreenSizes.medium}) {
      font-size: 20px;
    }
  }

  @media screen and (max-width: ${ScreenSizes.medium}) {
    font-size: 12px;
  }
`;
