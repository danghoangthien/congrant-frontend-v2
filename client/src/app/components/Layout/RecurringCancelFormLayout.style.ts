import styled from 'styled-components/macro';
import { ScreenSizes } from 'styles/StyleConstants';

export const RecurringCancelFormStyle = styled.div`
  color: #222222;
  background: #f0f0ee;
  font-family: 'Roboto', 'Noto Sans JP', sans-serif;
  padding-top: 64px;
  line-height: 1.7;

  & main {
    padding: 50px 20px 100px;

    @media screen and (max-width: ${ScreenSizes.medium}) {
      padding: 25px 20px 30px;
    }
  }

  & .project-client-footer {
    background: #f0f0ee;
    border-top: 1px solid #dddddd;
  }

  & .project-client-header {
    border-bottom: 1px solid #e7e7e7;
    background: #ffffff;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    padding: 0 20px;

    .header-wrapper {
      max-width: 1100px;
      margin: 0 auto;
      display: flex;
      align-items: center;
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

  & .footer-logo {
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

  & #google_translate_element {
    line-height: 1;
  }
`;
