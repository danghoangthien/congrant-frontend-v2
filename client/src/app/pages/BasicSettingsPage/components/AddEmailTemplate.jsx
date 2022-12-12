import { useState } from 'react';
// ANTD
import { Row, Modal, Button, Select } from 'antd';
// SPRITE
import {
  SettingsInputContainer,
  SettingLabel,
  SettingInput,
  SettingSelect,
  SettingTextarea,
} from 'utils/Sprites';
// STYLE
import { StyledModalTitle } from 'app/components/Layout/PageLayout.style';

const AddEmailTemplate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* モーダル起動ボタン・Modal Open Button */}
      <Button className="icon-btn" onClick={showModal} type="primary">
        <span className="material-symbols-outlined fill-icon">add</span>
        <span>{'追加'}</span>
      </Button>

      {/* モーダル・Modal */}
      <Modal
        title={<StyledModalTitle>{'メールテンプレート登録'}</StyledModalTitle>}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={650}
        className="modalStyle"
        cancelText="キャンセル"
        okText="登録する"
      >
        <Row className="item mb-6">
          <SettingsInputContainer label={<SettingLabel label={'テンプレート名'} required />}>
            <SettingInput placeholder={'領収書メールテンプレ'} />
          </SettingsInputContainer>
        </Row>
        <Row className="item mb-6">
          <SettingsInputContainer label={<SettingLabel label={'CC:'} />}>
            <SettingInput placeholder={'info@*******.com'} />
          </SettingsInputContainer>
        </Row>
        <Row className="item mb-6">
          <SettingsInputContainer label={<SettingLabel label={'件名'} required />}>
            <SettingInput placeholder={'ご支援ありがとうございました'} />
          </SettingsInputContainer>
        </Row>
        <Row className="item">
          <SettingsInputContainer label={<SettingLabel label={'本文'} required />}>
            <SettingSelect
              className="mb-2"
              size="large"
              defaultValue={'1'}
              style={{ width: '40%' }}
            >
              <Select.Option value="1">{'差込タグ'}</Select.Option>
            </SettingSelect>
            <SettingTextarea rows="10" placeholder={''} />
          </SettingsInputContainer>
        </Row>
      </Modal>
    </>
  );
};

export default AddEmailTemplate;
