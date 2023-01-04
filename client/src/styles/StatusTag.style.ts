import styled from 'styled-components/macro';
import { Tag } from 'antd';
import {
  EXTRA_DARK_GRAY_COLOR,
  PRIMARY_COLOR,
  WARNING_COLOR,
  EXTRA_LIGHT_PRIMARY_COLOR,
  EXTRA_LIGHT_GRAY_COLOR,
  GRAY_COLOR,
} from 'styles/StyleConstants';

export const StyledStatusTag = styled(Tag)`
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: #ffffff;
  border-radius: 40px;
  padding: 0 12px;
  height: 22px;
  line-height: 22px;
  white-space: nowrap;
  border: none;

  &.public {
    background: ${PRIMARY_COLOR};
  }
  &.review {
    background: ${WARNING_COLOR};
  }
  &.non-public {
    background: ${EXTRA_DARK_GRAY_COLOR};
  }
`;

export const StyledStatusTag2 = styled(Tag)`
  &.public {
    background: ${EXTRA_LIGHT_PRIMARY_COLOR};
    border: 1px solid ${PRIMARY_COLOR};
    color: ${PRIMARY_COLOR};
  }
  &.non-public {
    background: ${EXTRA_LIGHT_GRAY_COLOR};
    border: 1px solid ${GRAY_COLOR};
  }
`;
