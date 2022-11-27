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

import { PROJECT_TYPE_COLORS, PROJECT_PAYMENT_TYPE_COLORS } from 'utils/consts';

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

export const StyledProjectTypeTag = styled(Tag)`
  color: ${props => PROJECT_TYPE_COLORS[props.projectType][2]};
  background: ${props => PROJECT_TYPE_COLORS[props.projectType][0]};
  border: 1px solid ${props => PROJECT_TYPE_COLORS[props.projectType][1]};
  margin-right: 0px;
`;

export const StyledProjectPaymentTypeTag = styled(Tag)`
  color: #ffffff;
  background: ${props => PROJECT_PAYMENT_TYPE_COLORS[props.projectPaymentType]};
  border: 1px solid ${props => PROJECT_PAYMENT_TYPE_COLORS[props.projectPaymentType]};
  border-radius: 2px;
  margin-right: 0px;
`;
