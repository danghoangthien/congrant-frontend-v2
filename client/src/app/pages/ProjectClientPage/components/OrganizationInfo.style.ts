import styled from 'styled-components/macro';

export const OrganizationInfoStyle = styled.div`
  margin-top: 115px;

  & .organization-logo {
    margin-bottom: 10px;
    text-align: center;
    height: 120px;

    .ant-image {
      height: 100%;

      img {
        height: 100%;
        object-fit: contain;
      }
    }
  }

  .organization-name {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    margin-bottom: 10px;
  }

  .ant-descriptions-item-label,
  .ant-descriptions-item-content {
    color: #737373;
  }

  .ant-descriptions-item-label {
    margin-right: 7px;
    display: flex;
    align-items: center;

    .icon {
      font-size: 20px;
      color: #a5a5a5;
    }
  }

  .ant-descriptions-item-label::after {
    display: none;
  }

  .ant-descriptions-row > th,
  .ant-descriptions-row > td {
    width: 100%;
    display: block;
    padding-bottom: 4px;
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
`;
