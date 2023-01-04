import styled from 'styled-components/macro';
import {
  EXTRA_LIGHT_BLUE_COLOR,
  BLUE_COLOR,
  EXTRA_LIGHT_PINK_COLOR,
  PINK_COLOR,
  EXTRA_LIGHT_RED_COLOR,
  LIGHT_RED_COLOR,
  RED_COLOR,
  TEXT_COLOR,
  GRAY_COLOR,
  EXTRA_LIGHT_GRAY_COLOR,
  TEXT_GRAY_COLOR,
  LIGHT_GRAY_COLOR,
  PLACEHOLDER_COLOR,
  PRIMARY_COLOR,
  ORANGE_COLOR,
  EXTRA_LIGHT_ORANGE_COLOR,
} from 'styles/StyleConstants';
// ANTD
import { Card, List } from 'antd';

export const StyledFee = styled.div`
  display: flex;
  border-radius: 8px;
  overflow: hidden;

  .fee-txt {
    font-size: 20px;
    font-weight: 600;
    background: ${LIGHT_GRAY_COLOR};
    padding: 6px 16px;
    color: ${PLACEHOLDER_COLOR};

    .unit {
      font-size: 14px;
      display: inline-block;
      margin-left: 4px;
    }

    &.active {
      color: ${PRIMARY_COLOR};
      position: relative;

      &:after {
        content: '';
        width: 100%;
        height: 100%;
        border: 1px solid ${PRIMARY_COLOR};
        position: absolute;
        top: 0;
        left: 0;
      }
    }

    &:first-of-type.active:after {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }

    &:last-of-type.active:after {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }
  }
`;

export const StyledStatus = styled.span`
  font-size: 20px;
  font-weight: 600;
  border-radius: 8px;
  display: inline-block;
  padding: 6px 18px;

  &.before-inspect {
    color: ${ORANGE_COLOR};
    background: ${EXTRA_LIGHT_ORANGE_COLOR};
  }

  &.under-inspect {
    color: ${BLUE_COLOR};
    background: ${EXTRA_LIGHT_BLUE_COLOR};
  }

  &.under-trial {
    color: ${PINK_COLOR};
    background: ${EXTRA_LIGHT_PINK_COLOR};
  }
`;

export const StyledCard = styled(Card)`
  height: 100%;

  .ant-card-head-title {
    padding: 20px 0;
  }

  .card-txt {
    text-align: center;
    font-weight: 600;
    line-height: 1.57;
  }
`;

export const StyledList = styled(List)`
  .ant-list-items {
    border-top: 1px solid #f0f0ee;
    border-bottom: 1px solid #f0f0ee;
  }

  .ant-list-item {
    padding: 12px 24px;
  }

  .tag {
    width: 40px;
    height: 24px;
    line-height: 24px;
    border: 1px solid ${LIGHT_RED_COLOR};
    background: ${EXTRA_LIGHT_RED_COLOR};
    color: ${RED_COLOR};
    display: inline-block;
    text-align: center;
    border-radius: 2px;

    &.read {
      border: 1px solid ${GRAY_COLOR};
      background: ${EXTRA_LIGHT_GRAY_COLOR};
      color: ${TEXT_COLOR};
    }
  }
`;

export const StyledSummaryCard = styled(Card)`
  border: none !important;
  border-radius: 0;

  .ant-card-head {
    padding-bottom: 0;
    border-bottom: none;

    .ant-card-head-title {
      color: ${TEXT_GRAY_COLOR};
      padding: 24px 0 16px;
      font-size: 16px;
      font-weight: 600;
    }
  }

  .ant-card-body {
    padding: 0 24px 24px;
  }

  .card-txt {
    font-size: 20px;
    font-weight: 600;
    text-align: right;
  }
`;
