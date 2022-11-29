import styled from 'styled-components/macro';
import { ScreenSizes } from 'styles/StyleConstants';

export const PaymentPageStyle = styled.div`
  height: 100%;
  color: #222222;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.7;

  .ant-divider {
    border-top-color: #222222;

    @media screen and (max-width: ${ScreenSizes.medium}) {
      margin: 14px 0;
    }
  }

  .ant-btn {
    box-shadow: none;
    font-size: 16px;
    font-weight: 700;
  }

  input {
    ::placeholder {
      color: #999999;
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: #999999;
    }

    ::-ms-input-placeholder {
      /* Microsoft Edge */
      color: #999999;
    }
  }

  a:hover {
    text-decoration: underline;
  }

  & .project-client-header {
    background: #ffffff;
    width: 100%;
    max-width: 1080px;
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

  & main {
    min-height: 100%;
    border-top: 1px solid #e7e7e7;
    padding: 40px 20px;
    background: #f5f5f3;

    @media screen and (max-width: ${ScreenSizes.medium}) {
      padding: 25px 20px 30px;
    }
  }

  & .payment-container {
    width: 100%;
    max-width: 1060px;
    margin: 0 auto;
  }

  & #google_translate_element {
    line-height: 1;
  }

  & .payment-box {
    background: #ffffff;
    border: none;
    border-radius: 0;

    > .ant-card-body {
      padding: 40px;

      @media screen and (max-width: ${ScreenSizes.medium}) {
        padding: 40px 20px;
      }
    }
  }

  // FORM
  .payment-form-title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 30px;

    @media screen and (max-width: ${ScreenSizes.medium}) {
      font-size: 20px;
      margin-bottom: 20px;
    }
  }

  .total-money-title {
    font-size: 16px;
    font-weight: 700;

    @media screen and (max-width: ${ScreenSizes.medium}) {
      font-size: 15px;
    }
  }

  .total-money-amount {
    font-size: 22px;
    font-weight: 700;

    @media screen and (max-width: ${ScreenSizes.medium}) {
      font-size: 21px;
    }
  }

  .horizontal-input-wrapper {
    @media screen and (max-width: ${ScreenSizes.medium}) {
      .ant-col {
        margin-bottom: 10px;
      }
    }
  }
`;
