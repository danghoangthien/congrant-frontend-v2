import styled from 'styled-components/macro';
import { PRIMARY_COLOR, ScreenSizes } from 'styles/StyleConstants';

export const OrganizationInfoStyle = styled.div`
  & .organization-logo {
    margin-bottom: 10px;
    text-align: center;
    // height: 120px;
    padding: 30px;

    .ant-image {
      // height: 60px;

      img {
        height: 100%;
        object-fit: contain;
      }
    }

    @media screen and (max-width: ${ScreenSizes.medium}) {
      // height: 60px;
      margin-bottom: 35px;
    }
  }

  .organization-link {
    color: #737373;

    &:hover {
      text-decoration: underline;
    }
  }

  .organization-name {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    margin-bottom: 5px;
  }

  .ant-descriptions-item-label,
  .ant-descriptions-item-content {
    color: #737373;
  }

  .ant-descriptions-item-content {
    @media screen and (max-width: ${ScreenSizes.medium}) {
      font-size: 13px;
    }
  }

  .ant-descriptions-item-container {
    display: flex;
    align-items: center;
  }

  .ant-descriptions-item-label {
    margin-right: 7px;
    display: flex;
    align-items: center;

    .icon {
      font-size: 18px;
      color: #a5a5a5;

      @media screen and (max-width: ${ScreenSizes.medium}) {
        font-size: 16px;
      }
    }
  }

  .ant-descriptions-item-label::after {
    display: none;
  }

  .ant-descriptions-row > th,
  .ant-descriptions-row > td {
    width: 100%;
    display: block;
    padding-bottom: 1px;
  }

  .sns-link {
    .ant-image {
      transition: all 0.3s ease;
    }

    &:hover {
      .ant-image {
        transform: translateY(-2px);
        opacity: 0.8;
      }
    }
  }

  @media screen and (max-width: ${ScreenSizes.medium}) {
    margin: 0 -20px;

    .ant-card {
      border: none;
      border-top: 3px solid #f1f1f1;
    }

    .ant-card-body {
      padding: 20px 20px 0 !important;
    }
  }

  .project-client-container.basic & {
    .ant-card-body {
      display: flex;
      align-items: center;

      @media screen and (max-width: ${ScreenSizes.medium}) {
        display: block;
      }
    }

    .organization-logo {
      margin-right: 20px;
      width: 264px;
      margin-bottom: 0;

      .ant-image {
        // width: 200px;
      }

      @media screen and (max-width: ${ScreenSizes.medium}) {
        margin: 0 auto !important;
      }
    }

    .organization-info-wrapper {
      width: calc(100% - 284px);

      @media screen and (max-width: ${ScreenSizes.medium}) {
        width: 100%;
      }
    }
  }
`;
