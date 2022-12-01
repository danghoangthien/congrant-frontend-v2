import styled from 'styled-components/macro';
import { PRIMARY_COLOR, ScreenSizes } from 'styles/StyleConstants';

export const ProjectClientPageStyle = styled.div`
  height: 100%;
  color: #222222;
  font-family: 'Noto Sans JP', sans-serif;

  & .share-container {
    margin-right: 12px;
    line-height: 1;

    @media screen and (max-width: ${ScreenSizes.medium}) {
      margin-bottom: 14px;
      margin-right: 0;
    }
  }

  & .action-container {
    display: flex;
  }

  & .project-client-container {
    width: 100%;
    max-width: 1060px;
    margin: 0 auto;

    &.basic {
      max-width: 700px;
    }
  }

  & .project-title {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 30px;
    line-height: 1.4;

    @media screen and (max-width: ${ScreenSizes.medium}) {
      font-size: 22px;
    }
  }

  & .copy-right {
    font-size: 13px;
    font-weight: 400;
    color: #666666;
  }

  & main {
    min-height: 100%;
    border-top: 1px solid #e7e7e7;
    padding: 30px 20px 100px;

    @media screen and (max-width: ${ScreenSizes.medium}) {
      padding: 25px 20px 30px;
    }
  }

  & .project-client-footer {
    background: none;
    border-top: 1px solid #dddddd;
  }

  & .project-client-header {
    background: none;
    width: 100%;
    max-width: 1100px;
    padding: 0 20px;
    margin: 0 auto;
    display: flex;
    align-items: center;

    & .organization-logo {
      // margin-right: 20px;
      // width: 200px;
      display: flex;
      align-items: center;
      justify-content: center;

      .ant-image {
        height: 42px;
        line-height: 1;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        @media screen and (max-width: ${ScreenSizes.medium}) {
          height: 45px;
        }
      }

      @media screen and (max-width: ${ScreenSizes.medium}) {
        width: 152px;
      }
    }

    & .organization-name {
      font-weight: 500;
      font-size: 14px;

      @media screen and (max-width: ${ScreenSizes.medium}) {
        display: none;
      }
    }
  }

  & .project-description {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.6875;

    @media screen and (max-width: ${ScreenSizes.medium}) {
      font-weight: 400;
      line-height: 2;
    }
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
    // width: 200px;

    .ant-image {
      height: 35px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      @media screen and (max-width: ${ScreenSizes.medium}) {
        height: 27px;
      }
    }
  }

  & .project-content-main {
    // padding-right: 60px;
    padding-bottom: 60px;
    // @media screen and (max-width: ${ScreenSizes.medium}) {
    //   padding-bottom: 60px;
    // }
  }

  & #google_translate_element {
    line-height: 1;
  }

  .project-content-container {
    display: flex;
    justify-content: space-between;

    &.basic {
      display: block;

      .project-content-main {
        width: 100%;
      }
    }

    @media screen and (max-width: ${ScreenSizes.medium}) {
      display: block;
    }
  }

  .project-content-main {
    width: 66%;

    @media screen and (max-width: ${ScreenSizes.medium}) {
      width: 100%;
    }
  }

  .project-sider {
    width: 28.3%;

    @media screen and (max-width: ${ScreenSizes.medium}) {
      width: 100%;
    }
  }
`;
