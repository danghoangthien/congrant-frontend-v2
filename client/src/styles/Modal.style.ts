import styled from 'styled-components/macro';
import { Modal } from 'antd';

import { PRIMARY_COLOR, WHITE_COLOR } from 'styles/StyleConstants';

export const StyledModalTitle = styled.div`
  font-size: 24px;
`;

export const StyledModal = styled(Modal)`
  & .ant-modal-header {
    background: ${PRIMARY_COLOR};
    border-radius: 0;
    padding: 22px 32px;
  }

  & .ant-modal-close {
    top: 4px;
    right: 20px;
  }

  & .ant-modal-close-x {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & .material-symbols-outlined {
    font-size: 30px;
    color: ${WHITE_COLOR};
  }

  & .modal-title {
    color: ${WHITE_COLOR};
  }

  & .ant-modal-body {
    // padding: 24px 32px;
  }

  & .ant-modal-content {
    border-radius: 0;
  }

  & .input-wrapper {
    width: 100%;

    .ant-space-item {
      width: 100%;
    }
  }
`;
