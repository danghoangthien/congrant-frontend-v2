import styled from 'styled-components/macro';
import { List } from 'antd';
import { ScreenSizes } from 'styles/StyleConstants';

export const ActivityStyle = styled.div`
  .thumb-image {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .activity-list {
    width: 100%;

    .ant-list-item {
      padding: 8px 0;

      .ant-card {
        transition: all 0.3s ease;
      }

      &:hover {
        .ant-card {
          box-shadow: 0px 0 10px rgba(0, 0, 0, 0.16);
        }
      }

      &:first-child {
        padding-top: 0;
      }
    }
  }
`;

export const ActivityItem = styled(List.Item)`
  width: 100%;
  cursor: pointer;

  .date {
    color: #8c8c8c;
    margin-bottom: 5px;
  }

  .title {
    font-size: 18px;
    font-weight: bold;
    line-height: 1.44;
    margin-bottom: 10px;
  }

  .text {
    line-height: 1.6875;
    font-size: 16px;
    color: #272323;
  }
`;
