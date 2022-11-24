import styled from 'styled-components/macro';
import { StyleConstants, ScreenSizes, PRIMARY_COLOR } from 'styles/StyleConstants';

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
`;
