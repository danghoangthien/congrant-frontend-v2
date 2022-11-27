import styled from 'styled-components/macro';
import { Card } from 'antd';
import { ScreenSizes } from 'styles/StyleConstants';

export const CourseInfoStyle = styled.div`
  margin-top: 18px;
`;

export const CourseBox = styled(Card)`
  margin-top: 18px;

  .ant-btn {
    @media screen and (max-width: ${ScreenSizes.medium}) {
      font-size: 14px;
    }
  }

  .ant-descriptions-header {
    margin-bottom: 10px;
  }

  .ant-descriptions-item-container {
    align-items: center;
  }

  .course-description {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.7;
  }

  &.out-number {
    background: #d9d9d6;
  }

  .ant-descriptions-item {
    @media screen and (max-width: ${ScreenSizes.medium}) {
      display: block;
      width: 100%;
    }
  }
`;
