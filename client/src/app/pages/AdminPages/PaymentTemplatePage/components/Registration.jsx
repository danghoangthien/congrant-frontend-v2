// ANTD
import { Row, Col, Modal, Button, Radio, Space } from 'antd';
// HOOKS
import useModalActions from 'hook/useModalActions';
// SPRITE
import { SettingsInputContainer, SettingLabel, SettingInput, SettingTextarea } from 'utils/Sprites';
// STYLE
import { StyledModalTitle } from 'app/components/Layout/PageLayout.style';

const Register = props => {
  const [isModalOpen, showModal, handleOk, handleCancel] = useModalActions({});
  return (
    <>
      {/* モーダル起動ボタン・Modal Open Button */}
      <Button onClick={showModal} type="primary" {...props}>
        <span>{'編集'}</span>
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
        okText={'登録'}
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

export default Register;
