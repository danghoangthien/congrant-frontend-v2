import styled from 'styled-components/macro';
import { StyleConstants, ScreenSizes, PRIMARY_COLOR } from 'styles/StyleConstants';

export const LoginPageLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;

  .logo-wrapper {
    display: flex;
    align-items: center;
    max-width: 1000px;
    min-width: 480px;
    overflow: hidden;
    margin: 0 auto;
    border-radius: 12px;
  }
  .login-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1000px;
    background-color: white;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.16);
    overflow: hidden;
    margin: 0 auto;
    border-radius: 12px;

    & .ant-tabs {
      width: 100%;
      &-nav {
        display: flex;

        .ant-tabs-tab {
          flex-grow: 1;
          margin-right: 0px;
          width: 100%;
          text-align: center;
          align-items: center;
          justify-content: center;
        }
        &-list {
          width: 100%;
        }
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

export const StyledVericationBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  width: 88px;
  height: 88px;

  /* Neutral/White */

  background: #ffffff;
  /* Neutral/Gray */

  border: 1px solid #d9d9d7;
  border-radius: 4px;
  .verification-number {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 22px;
    /* identical to box height, or 157% */

    text-align: center;
    width: 100%;
    /* Text/Gray */

    color: rgba(0, 0, 0, 0.5);
  }
`;
