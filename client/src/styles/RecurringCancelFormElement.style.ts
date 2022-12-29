import styled from 'styled-components/macro';
import { Input, Checkbox } from 'antd';

const { TextArea } = Input;

const REQUIRED_COLOR = '#fff5f1';

export const StyledRequired = styled.span`
  color: #eb1616;
  font-weight: 700;
  font-size: 10px;
`;

export const StyledLabel = styled.div`
  font-weight: 600;
  font-size: 16px;
`;

export const StyledCheckbox = styled(Checkbox)`
  font-size: 16px;
`;

export const StyledTextarea = styled(TextArea)`
  font-size: 16px;

  &.required {
    background: ${REQUIRED_COLOR};
  }
`;

export const StyledHelper = styled.div`
  color: #737373;
`;
