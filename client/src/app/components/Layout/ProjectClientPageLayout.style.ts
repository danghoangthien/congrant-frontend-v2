import styled from 'styled-components/macro';
import { PRIMARY_COLOR } from 'styles/StyleConstants';

export const ProjectClientPageStyle = styled.div`
  height: 100%;
  padding-bottom: 118px;
  color: #222222;

  font-family: 'Noto Sans JP', sans-serif;

  & .project-client-container {
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
    padding: 0 20px;
  }

  & .project-title {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  & .copy-right {
    font-size: 13px;
    font-weight: 400;
  }

  & main {
    min-height: 100%;
    border-top: 1px solid #e7e7e7;
    padding: 34px 20px 100px;
  }

  & .project-client-footer {
    background: none;
    border-top: 1px solid #dddddd;
  }

  & .project-client-header {
    background: none;
    width: 100%;
    max-width: 1080px;
    padding: 0 20px;
    margin: 0 auto;

    & .organization-logo {
      margin-right: 20px;
      width: 200px;

      .ant-image {
        height: 42px;
        line-height: 1;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }

    & .organization-name {
      font-weight: 500;
    }
  }

  & .project-description {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.6875;
  }

  & .badge {
    .ant-space-item {
      display: flex;
    }
  }

  & .content-tabs {
    .ant-tabs-nav {
      margin-bottom: 32px;
    }

    .ant-tabs-tab-btn {
      font-size: 16px;
      font-weight: 700;
      color: #929292;
    }

    .ant-tabs-tab-active {
      .ant-tabs-tab-btn {
        color: ${PRIMARY_COLOR};
      }
    }

    .ant-tabs-tab {
      padding-bottom: 20px;
    }
  }

  & .footer-logo {
    width: 200px;

    .ant-image {
      height: 42px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }

  & .project-content-main {
    padding-right: 60px;
  }
`;
