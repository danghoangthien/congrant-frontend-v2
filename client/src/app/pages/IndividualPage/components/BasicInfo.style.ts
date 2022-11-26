import styled from 'styled-components/macro';
import { LIGHT_GRAY } from 'styles/StyleConstants';

export const DescriptionStyle = styled.div`
  & .ant-descriptions-header {
    margin-bottom: 24px;
  }

  & .ant-descriptions-item-label {
    width: 160px;
  }

  & .ant-select {
    width: 100%;
  }

  & .ant-descriptions-bordered .ant-descriptions-item-content,
  .ant-descriptions-bordered .ant-descriptions-item-label {
    padding: 12px;
  }

  &.no-border {
    .ant-descriptions-header {
      margin-bottom: 16px;
    }

    .ant-descriptions-bordered .ant-descriptions-item-label,
    .ant-descriptions-bordered .ant-descriptions-item-content {
      border-right: none;
    }

    & .ant-descriptions-item-label {
      width: 200px;
    }

    .ant-descriptions-bordered .ant-descriptions-view {
      border: none;
    }

    .ant-descriptions-bordered .ant-descriptions-row:last-child {
      border-bottom: 1px solid ${LIGHT_GRAY};
    }
  }
`;
