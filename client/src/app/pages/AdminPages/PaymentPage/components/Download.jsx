import { useState } from 'react';
// ANTD
import { Row, Col, Modal, Button, DatePicker } from 'antd';
// HOOKS
import useModalActions from 'hook/useModalActions';
// SPRITE
import { SettingsInputContainer, SettingLabel, SettingInput } from 'utils/Sprites';
// STYLE
import { StyledModalTitle } from 'app/components/Layout/PageLayout.style';
import dayjs from 'dayjs';

const monthFormat = 'YYYY-MM';

const Download = ({ btn_text }) => {
  const [isModalOpen, showModal, handleOk, handleCancel] = useModalActions({});

  return (
    <>
      {/* モーダル起動ボタン・Modal Open Button */}
      <Button
        icon={<span className="material-symbols-outlined fill-icon">{'file_download'}</span>}
        className="icon-btn"
        type="primary"
        onClick={showModal}
      >
        <span>{'テレコム振込リストダウンロード'}</span>
      </Button>

      {/* モーダル・Modal */}
      <Modal
        title={<StyledModalTitle>{'テレコム振込リストダウンロード'}</StyledModalTitle>}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={650}
        className="modalStyle"
        cancelText="キャンセル"
        cancelButtonProps={{ type: 'text' }}
        okText="ダウンロード"
        wrapClassName="admin-modal"
      >
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingLabel label={'入金月'} />}>
            <Col sm={24} md={24} lg={24}>
              <DatePicker
                defaultValue={dayjs('2023/01', monthFormat)}
                format={monthFormat}
                size="large"
                style={{ width: '600px' }}
                picker="month"
              />
            </Col>
          </SettingsInputContainer>
        </Row>
      </Modal>
    </>
  );
};

export default Download;
