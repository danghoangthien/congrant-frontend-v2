import styled from 'styled-components/macro';
import { Tabs } from 'antd';

import { PLACEHOLDER_COLOR } from 'styles/StyleConstants';

export const StyledBulkCreateTabs = styled(Tabs)`
  .ant-tabs-nav {
    // padding-left: 60px;
    margin-bottom: 34px;
  }

  .ant-tabs-nav-wrap {
    justify-content: center;
  }

  .ant-tabs-nav:before {
    display: none;
  }

  & .ant-tabs-top > .ant-tabs-nav::before,
  & .ant-tabs-top > div > .ant-tabs-nav::before {
    border-bottom: none;
  }

  .ant-tabs-tab {
    border: none !important;
    background: none !important;
  }

  .ant-tabs-card {
    .ant-tabs-nav .ant-tabs-tab {
      background: none;
    }
  }

  .ant-tabs-tab-btn {
    font-size: 16px;
    font-weight: 600;
    color: ${PLACEHOLDER_COLOR};
  }
`;

export const DescriptionStyle = styled.div`
  width: 100%;

  & .ant-descriptions-view {
    border: none;
  }

  & .ant-descriptions-header {
    margin-bottom: 16px;
  }

  & .ant-descriptions-item-label {
    font-weight: 600;
  }

  & .ant-descriptions-title {
    font-size: 20px;
  }

  & .ant-descriptions-item-label {
    width: 200px;
  }

  & .ant-select {
    width: 100%;
  }

  & .ant-descriptions-bordered .ant-descriptions-item-content,
  .ant-descriptions-bordered .ant-descriptions-item-label {
    padding: 12px;
  }
`;
