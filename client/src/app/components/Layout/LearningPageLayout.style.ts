import styled from 'styled-components/macro';
// CONST
import { WARNING_COLOR, EXTRA_DARK_GRAY, PRIMARY_COLOR, LIGHT_GRAY, TEXT_GRAY_COLOR } from 'styles/StyleConstants';
// ANTD
import { Modal } from 'antd';

export const LearningPageLayout = styled.div`
  width: 100%;
  min-height: 100%;
  background: #262626;

  .page-head {
    padding: 48px 64px 72px;
    position: relative;
    overflow: hidden;

    .head-wrapper {
      position: relative;
      z-index: 1;
    }

    .bnr {
      width: 942px;
      position: absolute;
      right: -258px;
      top: -129px;

      img {
        width: 100%;
      }
    }

    .logo {
      margin-bottom: 30px;
    }

    h1 {
      color: ${WARNING_COLOR};
      font-size: 38px;
      font-weight: 600;
      margin-bottom: 20px;
    }

    .head-description {
      font-size: 16px;
      font-weight: 600;
      color: #ffffff;
      line-height: 1.5;
    }
  }

  .segmented {
    width: 100%;
    background: ${EXTRA_DARK_GRAY};
    padding: 8px 10px;
    margin-bottom: 40px;

    .ant-segmented {
      background: none;
      width: 100%;

      .ant-segmented-group {
        justify-content: center;
      }

      .ant-segmented-item-label {
        font-size: 16px;
        font-weight: 600;
        color: #ffffff;
        min-height: 42px;
        line-height: 42px;
      }
      .ant-segmented-thumb {
        background-color: ${PRIMARY_COLOR};
      }

      .ant-segmented-item-selected {
        background-color: ${PRIMARY_COLOR};
      }
    }
  }

  .learning-content-wrapper {
    width: 100%;
    max-width: 1150px;
    padding: 0 10px;
    margin: 0 auto;
  }

  .learning-card {
    background: none;
    border: none;
    cursor: pointer;

    .ant-image {
      border-radius: 4px;
      overflow: hidden;

      img {
        transition: all 0.3s ease;
      }
    }

    .learning-tag {
      display: inline-block;
      background: ${LIGHT_GRAY};
      color: ${PRIMARY_COLOR};
      font-size: 12px;
      font-weight: 600;
      padding: 4px 10px;
      border-radius: 4px;
    }

    .learning-date {
      font-size: 14px;
      color: #ffffff;
    }

    .learning-title {
      font-size: 16px;
      color: #ffffff;
      line-height: 1.5;
      font-weight: 600;
    }

    .learning-txt {
      font-size: 12px;
      color: #ffffff;
    }

    &:hover {
      .ant-image img {
        transform: scale(1.05);
      }
    }
  }
`;

export const LearningModal = styled(Modal)`
  .content-wrapper {
    padding: 64px 40px;
  }

  .ant-modal-close {
    right: -50px;
    color: #ffffff;

    .icon {
      transition: transform 0.3s ease-in-out;

      &:hover {
        transform: rotate(90deg);
      }
    }
  }

  .learning-tag {
    display: inline-block;
    background: ${LIGHT_GRAY};
    color: ${PRIMARY_COLOR};
    font-size: 12px;
    font-weight: 600;
    padding: 4px 10px;
    border-radius: 4px;
  }

  .learning-date {
    font-size: 14px;
    color: ${TEXT_GRAY_COLOR};
  }

  .learning-title {
    font-size: 24px;
    line-height: 1.5;
    font-weight: 600;
    letter-spacing: 0.07em;
  }

  .learning-txt {
    font-size: 14px;
  }

  .learning-description {
    font-size: 12px;
    letter-spacing: 0.07em;
  }

  .ant-modal-content {
    border-radius: 0;
  }
`;
