import styled from 'styled-components/macro';
import { ScreenSizes } from 'styles/StyleConstants';

export const ProjectClientPageStyle = styled.div`
  height: 100%;
  color: #222222;
  font-family: 'Roboto', 'Noto Sans JP', sans-serif;
  overflow: hidden;
  line-height: 1.7;

  @media screen and (min-width: 992px) {
    padding-top: 64px;
  }

  @media screen and (max-width: ${ScreenSizes.medium}) {
    padding-bottom: 63px;
  }

  & .share-container {
    margin-right: 12px;
    line-height: 1;

    @media screen and (max-width: ${ScreenSizes.medium}) {
      // margin-bottom: 14px;
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
    text-align: center;

    @media screen and (max-width: ${ScreenSizes.medium}) {
      font-size: 22px;
      margin-bottom: 20px;
    }
  }

  & .copy-right {
    font-size: 13px;
    font-weight: 400;
    color: #666666;

    .external-link {
      font-weight: 700;
      color: #2952a2;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  & main {
    min-height: 100%;
    padding: 50px 20px 100px;

    @media screen and (max-width: ${ScreenSizes.medium}) {
      padding: 25px 20px 30px;
    }
  }

  & .project-client-footer {
    background: none;
    border-top: 1px solid #dddddd;
  }

  & .project-client-header {
    border-bottom: 1px solid #e7e7e7;
    background: #ffffff;
    width: 100%;
    padding: 0 20px;

    @media screen and (min-width: 992px) {
      position: fixed;
      top: 0;
      left 0;
      right: 0;
      z-index: 99;
    }

    .header-wrapper {
      max-width: 1100px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      height: 100%;
    }

    .h-btn {
      font-weight: 700;
      border-radius: 7px;
      transition: all 0.3s ease;

      &:hover {
        opacity: 0.8;
      }
    }

    .logo-wrapper {
      display: flex;
      align-items: center;
    }

    & .organization-logo {
      // margin-right: 20px;
      // width: 200px;
      display: flex;
      align-items: center;
      justify-content: center;

      .ant-image {
        height: 42px;
        line-height: 1;
        margin-right: 20px;

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
    margin-bottom: 24px;

    @media screen and (max-width: ${ScreenSizes.medium}) {
      font-weight: 400;
      line-height: 2;
      margin-bottom: 20px;
    }
  }

  & .badge {
    .ant-space-item {
      display: flex;
    }
  }

  & .content-tabs {
    .ant-tabs-nav {
      margin-bottom: 20px;
    }

    .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
      font-size: 16px;
      font-weight: 700;
    }

    .ant-tabs-tab-btn {
      font-size: 16px;
      color: #929292;
    }

    .ant-tabs-tab {
      padding-bottom: 20px;
    }
  }

  & .footer-logo {
    // width: 200px;

    .ant-image {
      // height: 35px;

      // img {
      //   width: 100%;
      //   height: 100%;
      //   object-fit: contain;
      // }

      @media screen and (max-width: ${ScreenSizes.medium}) {
        // height: 27px;
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
    width: 30.2%;

    @media screen and (max-width: ${ScreenSizes.medium}) {
      width: 100%;
    }
  }

  .fixed-btn-wrapper {
    background: #ffffff;
    padding: 10px 12px;
    border-top: 1px solid #e7e7e7;
    box-shadow: 0px -4px 8px 0px rgba(0, 0, 0, 0.08);
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 99;

    .ant-btn {
      border-radius: 7px;
      font-weight: 700;
      height: 42px;
    }
  }
`;
