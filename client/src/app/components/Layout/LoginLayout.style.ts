import styled from 'styled-components/macro';
import {
  BACKGROUND_COLOR_1,
  WHITE_COLOR,
  PLACEHOLDER_COLOR,
  PRIMARY_COLOR,
} from 'styles/StyleConstants';
import { Input } from 'antd';

export const LoginPageLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  background-color: ${BACKGROUND_COLOR_1};
  padding: 64px;

  & .link-btn {
    padding: 0;
    margin: 0;

    &:hover {
      text-decoration: underline;
    }
  }

  & .usage-wrapper {
    .ant-tabs-top > .ant-tabs-nav::before,
    .ant-tabs-bottom > .ant-tabs-nav::before,
    .ant-tabs-top > div > .ant-tabs-nav::before,
    .ant-tabs-bottom > div > .ant-tabs-nav::before {
      display: none;
    }

    .ant-tabs {
      width: 100%;
    }

    .ant-tabs-nav {
      margin-bottom: 32px;
    }

    .ant-tabs-tab-btn {
      color: ${PLACEHOLDER_COLOR};
      font-weight: 600;
      font-size: 16px;
    }

    .ant-tabs-tab-active .ant-tabs-tab-btn {
      color: ${PRIMARY_COLOR};
    }

    .ant-tabs {
      .ant-tabs-nav .ant-tabs-tab {
        padding: 0;
        margin: 0;
      }

      .ant-tag {
        margin-right: 0;
      }
    }
  }

  & .login-wrapper {
    .ant-tabs-card.ant-tabs-top > .ant-tabs-nav .ant-tabs-tab,
    .ant-tabs-card.ant-tabs-top > div > .ant-tabs-nav .ant-tabs-tab {
      border-radius: 8px 8px 0 0;
    }

    & .ant-tabs-top > .ant-tabs-nav::before {
      display: none;
    }

    & .ant-tabs-tab {
      border-radius: 8px 8px 0 0;
    }
  }

  & .login-card {
    width: 480px;
    border: none;
    border-radius: 8px;
  }

  .ant-tabs-nav {
    margin-bottom: 0;
  }

  .ant-tabs-content-holder {
    background: ${WHITE_COLOR};
    border-radius: 0 0 8px 8px;
  }

  .ant-tabs-card > .ant-tabs-nav .ant-tabs-tab,
  .ant-tabs-card > div > .ant-tabs-nav .ant-tabs-tab {
    padding: 11px 16px;
  }

  .logo-icon {
    width: 200px;
  }

  .logo-wrapper {
    display: flex;
    align-items: center;
    max-width: 1000px;
    min-width: 480px;
    overflow: hidden;
    margin: 0 auto;
    border-radius: 12px;
  }

  // .login-container {
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;
  //   width: 480px;
  //   // background-color: white;
  //   // box-shadow: 0 0 40px rgba(0, 0, 0, 0.16);
  //   overflow: hidden;
  //   margin: 0 auto;
  //   border-radius: 12px;
  // }

  & .ant-tabs {
    &-nav {
      display: flex;

      .ant-tabs-tab {
        flex-grow: 1;
        // margin-right: 0px;
        width: 100%;
        text-align: center;
        align-items: center;
        justify-content: center;
        border: none;
        // margin: 0 2px;
      }
      &-list {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 1023px) {
    .login-box {
      flex-direction: column;
      box-shadow: none;
    }
    #login-form {
      max-width: 100%;
    }
  }
`;

export const StyledVericationBox = styled(Input)`
  width: 88px;
  height: 88px;
  font-size: 32px !important;
  font-weight: 600;
  text-align: center;
`;
