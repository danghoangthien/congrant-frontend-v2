import styled from 'styled-components/macro';
import { Tag } from 'antd';
import {
  BLUE_COLOR,
  EXTRA_LIGHT_BLUE_COLOR,
  LIGHT_BLUE_COLOR,
  ORANGE_COLOR,
  LIGHT_ORANGE_COLOR,
  EXTRA_LIGHT_ORANGE_COLOR,
  PINK_COLOR,
  LIGHT_PINK_COLOR,
  EXTRA_LIGHT_PINK_COLOR,
} from 'styles/StyleConstants';

export const StyledDonationTypeTag = styled(Tag)`
  &.once {
    color: ${BLUE_COLOR};
    background: ${EXTRA_LIGHT_BLUE_COLOR};
    border: 1px solid ${LIGHT_BLUE_COLOR};
  }
  &.monthly {
    color: ${ORANGE_COLOR};
    background: ${EXTRA_LIGHT_ORANGE_COLOR};
    border: 1px solid ${LIGHT_ORANGE_COLOR};
  }
  &.yearly {
    color: ${PINK_COLOR};
    background: ${EXTRA_LIGHT_PINK_COLOR};
    border: 1px solid ${LIGHT_PINK_COLOR};
  }
`;
