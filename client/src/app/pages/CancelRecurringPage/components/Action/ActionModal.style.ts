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
`;
