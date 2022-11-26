import styled from 'styled-components/macro';

export const DonationInfoStyle = styled.div`
  .donation-info-title {
    font-weight: 700;
    font-size: 16px;
  }

  .donation-info-amount {
    font-weight: 700;

    .num {
      font-size: 44px;
    }
  }

  .ant-progress-bg {
    height: 20px !important;
    border-radius: 4px;
  }

  .ant-progress-outer {
    // position: relative;
    padding-right: 0;
  }

  .ant-progress-inner {
    border-radius: 4px;
  }

  .ant-progress-text {
    position: absolute;
    top: calc(50% + 2px);
    transform: translateY(-50%);
    left: 0;
    font-size: 12px;
    font-weight: 500;
    color: #ffffff;
  }

  .progress-wrapper {
    position: relative;
  }

  .target-amount {
    font-size: 15px;
    font-weight: 700;
  }

  .statistic {
    font-weight: 700;
    border-bottom: 1px solid #dddddd;
    padding: 10px 7px;

    .ant-space-item {
      line-height: 1;
    }

    .title {
      font-size: 16px;
    }

    .num {
      font-size: 23px;
    }
  }

  .expire-date {
    font-size: 14px;
    font-weight: 400;
  }

  .donate-btn {
    &:hover {
      opacity: 0.9;
    }
  }
`;
