// ANTD
import { Row, Col, Modal, Button, Radio, Space } from 'antd';
// HOOKS
import useModalActions from 'hook/useModalActions';
// SPRITE
import { SettingsInputContainer, SettingLabel, SettingInput, SettingTextarea } from 'utils/Sprites';
// STYLE
import { StyledModalTitle } from 'app/components/Layout/PageLayout.style';
// CONST
import { PRIMARY_ADMIN_COLOR } from 'styles/StyleConstants';

const RegisterEdit = props => {
  const [isModalOpen, showModal, handleOk, handleCancel] = useModalActions({});
  return (
    <>
      {/* モーダル起動ボタン・Modal Open Button */}
      <Button onClick={showModal} type="primary" {...props}>
        <span>{'編集'}</span>
      </Button>
      {/* モーダル・Modal */}
      <Modal
        title={<StyledModalTitle>{'メールテンプレート編集'}</StyledModalTitle>}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={650}
        className="modalStyle"
        footer={
          <Space>
            <Button type="text" onClick={handleCancel}>
              キャンセル
            </Button>
            <Button
              type="primary"
              className="fade"
              style={{ background: PRIMARY_ADMIN_COLOR, borderColor: PRIMARY_ADMIN_COLOR }}
              onClick={handleOk}
            >
              保存
            </Button>
          </Space>
        }
      >
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingLabel label={'テンプレート名'} required />}>
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <SettingInput placeholder={''} />
            </Col>
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingLabel label={'テキスト'} required />}>
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <SettingTextarea rows="5" value={''} />
            </Col>
          </SettingsInputContainer>
        </Row>
      </Modal>
    </>
  );
};

export default RegisterEdit;
