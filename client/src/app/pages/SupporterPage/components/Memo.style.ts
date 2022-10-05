import styled from 'styled-components/macro';
import { StyleConstants, ScreenSizes, PRIMARY_COLOR } from 'styles/StyleConstants';

export const StyledPrimaryIcon = styled.span`
  & .anticon {
    color: ${PRIMARY_COLOR};
  }
`;

export const StyledWarningIcon = styled.span`
  & .anticon {
    color: #ff4d4f;
  }
`;
