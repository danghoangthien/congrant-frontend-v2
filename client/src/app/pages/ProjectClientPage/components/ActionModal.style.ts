import styled from 'styled-components/macro';
import { Modal } from 'antd';

export const ActionModal = styled(Modal)`
  .ant-modal-body {
    padding: 40px;
  }

  .modal-title {
    text-align: center;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  .iframe-box {
    .iframe-img {
      height: 126px;
      margin-bottom: 10px;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }

    .iframe-title {
      font-size: 14px;
      font-weight: 700;
      line-height: 1.5;
      margin-bottom: 10px;
    }
  }
`;
