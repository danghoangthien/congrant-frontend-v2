import { useState } from 'react';
import { Row, Modal, Button, Col, Radio, Space, Checkbox } from 'antd';
import {
  SettingsInputContainer,
  SettingLabel,
  SettingInput,
  SettingInfoLabel,
} from 'utils/Sprites';
import { StyledModalTitle } from 'app/components/Layout/PageLayout.style';

const InviteUser = () => {
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
      <Button className="icon-btn" onClick={showModal} type="primary">
        <span className="material-symbols-outlined">add</span>
        <span>{'追加'}</span>
      </Button>

      {/* モーダル */}
      <Modal
        title={<StyledModalTitle>{'新規ユーザーの招待'}</StyledModalTitle>}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={650}
        className="modalStyle"
        cancelText="キャンセル"
        okText="招待を送信"
      >
        <Row>
          <Col className="mb-6" span={24}>
            <SettingsInputContainer label={<SettingLabel label={'メールアドレス'} required />}>
              <SettingInput placeholder={'例：tanaka@congrant.com'} />
            </SettingsInputContainer>
          </Col>
          <Col className="mb-6" span={24}>
            <SettingsInputContainer label={<SettingInfoLabel label={'権限'} required />}>
              <Radio.Group onChange={() => {}} defaultValue={1}>
                <Space direction="horizontal">
                  <Radio value={1}>{'管理者'}</Radio>
                  <Radio value={2}>{'一般'}</Radio>
                </Space>
              </Radio.Group>
            </SettingsInputContainer>
          </Col>
          <Col className="mb-6" span={24}>
            <SettingsInputContainer label={<SettingLabel label={'操作権限'} />}>
              <Space direction="vertical">
                <Checkbox checked>{'プロジェクトの変更'}</Checkbox>
                <Checkbox checked>{'基本設定の変更'}</Checkbox>
              </Space>
            </SettingsInputContainer>
          </Col>
          <Col className="mb-6" span={24}>
            <SettingsInputContainer label={<SettingInfoLabel label={'通知設定'} />}>
              <Space direction="vertical">
                <Checkbox checked>{'決済関連メールを受信する'}</Checkbox>
              </Space>
            </SettingsInputContainer>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default InviteUser;
