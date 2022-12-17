import styled from 'styled-components/macro';
import { List } from 'antd';
import { ScreenSizes } from 'styles/StyleConstants';

export const CommentStyle = styled.div`
  width: 100%;

  .ant-list-item {
    padding: 24px 0;

    &:first-child {
      padding-top: 0;
    }
  }
`;

export const CommentItem = styled(List.Item)`
  .content-wrapper {
    padding: 0 10px;
  }

  .box-wrapper {
    padding-right: 30px;
    margin-bottom: 16px;
  }

  .title {
    font-size: 16px;
    font-weight: 700;
  }

  .date {
    font-size: 12px;
    color: #8c8c8c;
  }

  .text {
    font-size: 14px;
    line-height: 1.5;
  }
`;

export const ResponseList = styled(List)`
  width: 100%;

  .ant-list-item {
    border-bottom: none !important;
  }
`;

export const ResponseItem = styled(List.Item)`
  .ant-list-item-meta-content {
    background: #f5f5f3;
    padding: 20px;
    border-radius: 4px;
    position: relative;

    &:before {
      content: '';
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 6px 8px 6px 0;
      border-color: transparent #f5f5f3 transparent transparent;
      display: inline-block;
      position: absolute;
      top: 10px;
      left: -8px;
    }

    .ant-list-item-meta-description {
      color: #272323;
      font-size: 13px;
      line-height: 1.5;
    }
  }
`;
