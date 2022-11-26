import styled from 'styled-components/macro';
import { WHITE_COLOR, PRIMARY_COLOR, GRAY, TEXT_GRAY_COLOR } from 'styles/StyleConstants';
import { Segmented, Radio } from 'antd';

export const StyledSegmented = styled(Segmented)`
  width: 100%;
  border: 1px solid ${GRAY};
  padding: 0;
  overflow: hidden;

  & .ant-segmented-item {
    flex-grow: 1;
    border-radius: 0;
    box-shadow: none;
    color: ${TEXT_GRAY_COLOR};
    transition: none;
  }

  & .ant-segmented-item-selected {
    background: ${PRIMARY_COLOR};
    color: ${WHITE_COLOR};
    font-weight: 600;
  }

  & .ant-segmented-item-label {
    min-height: 32px;
    line-height: 32px;
  }
`;

export const StyledRadioGroup = styled(Radio.Group)`
  width: 100%;

  .ant-radio-button-wrapper {
    width: 50%;
    text-align: center;
  }

  .ant-radio-button-wrapper-checked:not([class*=' ant-radio-button-wrapper-disabled']) {
    font-weight: 600;
  }
`;
