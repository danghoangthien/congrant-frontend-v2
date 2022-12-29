import { useState } from 'react';
// ANTD
import { Modal } from 'antd';
// STYLE
import styled from 'styled-components/macro';

const StyledNoticeModal = styled(Modal)`
  .text {
    font-family: 'Noto Sans JP', sans-serif;
    line-height: 1.7;
  }

  .ant-modal-close-x {
    width: 40px;
    height: 40px;
  }
`;

const NoticeLink = styled.span`
  .txt {
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const NoticeModal = ({ text, title, content }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* BUTTON */}
      <NoticeLink onClick={showModal} size="small">
        <span className="txt">{text}</span>
        <span className="material-symbols-outlined fill-icon icon">info</span>
      </NoticeLink>

      {/* MODAL */}
      <StyledNoticeModal
        width={400}
        visible={isModalOpen}
        title=""
        onCancel={handleCancel}
        footer={null}
        bodyStyle={{ padding: '40px 24px' }}
        closeIcon={<span className="material-symbols-outlined">close</span>}
      >
        <div className="mb-2" style={{ fontSize: 18, fontWeight: 700 }}>
          {title}
        </div>
        <div className="text">{content}</div>
      </StyledNoticeModal>
    </>
  );
};

export default NoticeModal;
