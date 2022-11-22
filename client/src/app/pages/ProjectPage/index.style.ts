import styled from 'styled-components/macro';
import { LIGHT_GRAY } from 'styles/StyleConstants';

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
  a {
    color: rgba(0, 0, 0, 0.5);
  }
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
      border-bottom: 1px solid ${LIGHT_GRAY};
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
