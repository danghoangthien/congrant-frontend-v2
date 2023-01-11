import styled from 'styled-components/macro';
// ANTD
import { Card, Descriptions } from 'antd';
import {
  TEXT_GRAY_COLOR,
  GRAY_COLOR,
  EXTRA_LIGHT_GRAY_COLOR,
  LIGHT_GRAY_COLOR,
  BLUE_COLOR,
  EXTRA_LIGHT_BLUE_COLOR,
  ORANGE_COLOR,
  EXTRA_LIGHT_ORANGE_COLOR,
  EXTRA_LIGHT_PRIMARY_COLOR,
  PRIMARY_COLOR,
  DANGER_COLOR,
} from 'styles/StyleConstants';

export const StyledCard = styled(Card)`
  .card-box {
    padding: 32px;

    &:not(:last-of-type) {
      border-bottom: 1px solid ${GRAY_COLOR};
    }
  }

  .contract-status {
    display: inline-block;
    font-size: 20px;
    font-weight: 600;
    background: #fbeaf4;
    padding: 6px 20px;
    border-radius: 8px;

    &.trial {
      background: #fbeaf4;
    }
    &.free {
      color: ${PRIMARY_COLOR};
      background: ${EXTRA_LIGHT_PRIMARY_COLOR};
    }
    &.light {
      color: ${BLUE_COLOR};
      background: ${EXTRA_LIGHT_BLUE_COLOR};
    }
    &.standard {
      color: ${ORANGE_COLOR};
      background: ${EXTRA_LIGHT_ORANGE_COLOR};
    }
  }

  .box-ttl {
    font-size: 16px;
    font-weight: 600;
    color: ${TEXT_GRAY_COLOR};
  }

  .box-txt,
  .status-name {
    font-size: 16px;
    font-weight: 600;

    &.danger {
      color: ${DANGER_COLOR};
    }
  }
`;

export const StyledDescriptions = styled(Descriptions)`
  .descriptions-head {
    font-weight: 600;
    background: ${EXTRA_LIGHT_GRAY_COLOR};
  }

  .ant-descriptions-item {
    padding: 12px 24px;
    vertical-align: middle;

    &.center {
      .ant-descriptions-item-content {
        justify-content: center;
      }
    }
  }

  .big-txt {
    font-size: 20px;
    font-weight: 600;
  }

  .ant-descriptions-row {
    border-bottom: 1px solid ${LIGHT_GRAY_COLOR};
  }

  .plan-box {
    width: 100%;
  }

  .plan-box-ttl {
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 16px;

    &.-light {
      color: ${BLUE_COLOR};
    }

    &.-standard {
      color: ${ORANGE_COLOR};
    }
  }

  .plan-tag {
    display: inline-block;
    font-weight: 600;
    padding: 2px 10px;
    border-radius: 8px;

    &.-light {
      color: ${BLUE_COLOR};
      background: ${EXTRA_LIGHT_BLUE_COLOR};
    }

    &.-standard {
      color: ${ORANGE_COLOR};
      background: ${EXTRA_LIGHT_ORANGE_COLOR};
    }
  }
`;
