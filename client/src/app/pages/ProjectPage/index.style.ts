import styled from 'styled-components/macro';
import { Tag } from 'antd';
import { BORDER_COLOR } from 'styles/StyleConstants';

export const StatusTag = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: #ffffff;
  background: #63b233;
  border-radius: 40px;
  padding: 0 12px;
  height: 22px;
  white-space: nowrap;
`;

export const ProjectTitle = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.85);
`;

export const ProjectUrl = styled.div`
  font-weight: 600;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 12px;
`;

export const ProjectLaunchType = styled.div`
{
  height: 100%;
  box-sizing: border-box;
  padding: 24px 16px;
  border: 1px solid #d9d9d7;
  border-radius: 4px;
`;

export const ProjectLaunchTypeInfo = styled(Tag)`
  height: 30px;
  font-weight: 600;
  font-size: 16px;
  line-height: 30px;
  text-align: center;
  border-radius: 24px;
  color: rgba(0, 0, 0, 0.85);
  display: block;
  border: 0;
  width: 100%;
  padding: 0 15px;
`;

export const ProjectCard = styled.div`
  & .project-card-wrapper {
    .ant-card-body {
      padding: 0;
    }
  }
  & .project-card {
    padding: 24px;
    // cursor: pointer;
    transition: all 0.3s ease;

    .ant-image-img {
      transition: all 0.3s ease;
    }

    &:hover {
      .ant-image-img {
        transform: scale(1.05);
        opacity: 0.7;
      }
    }

    &:not(:last-of-type) {
      border-bottom: 1px solid ${BORDER_COLOR};
    }
  }
  & .project-head {
    display: flex;
  }
  & .project-sub-ttl {
    font-weight: 600;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
    margin-right: 8px;
  }
`;
