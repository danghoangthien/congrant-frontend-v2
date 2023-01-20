import { useState } from 'react';
// ANTD
import { Row, Col, Modal, Button, Radio, Space, Checkbox } from 'antd';
// HOOKS
import useModalActions from 'hook/useModalActions';
// SPRITE
import { SettingsInputContainer, SettingLabel } from 'utils/Sprites';
// STYLE
import { StyledModalTitle } from 'app/components/Layout/PageLayout.style';

const Examination = () => {
  const [isModalOpen, showModal, handleOk, handleCancel] = useModalActions({});
  const [status, setStatus] = useState(1);
  return (
    <>
      {/* モーダル起動ボタン・Modal Open Button */}
      <Button onClick={showModal}>
        <span>{'編集'}</span>
      </Button>

      {/* モーダル・Modal */}
      <Modal
        title={<StyledModalTitle>{'プロジェクト編集'}</StyledModalTitle>}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={650}
        footer={
          <Space>
            <Button type="text" onClick={handleCancel}>
              キャンセル
            </Button>
            <Button type="primary" onClick={handleOk}>
              登録
            </Button>
          </Space>
        }
      >
        <Row className="mb-2">
          {' '}
          <Col className="mb-6" sm={24} md={24} lg={24}>
            <SettingsInputContainer label={<SettingLabel label={'公開ステータス'} />}>
              <Radio.Group
                onChange={e => {
                  setStatus(e.target.value);
                }}
                value={status}
              >
                <Space direction="horizontal">
                  <Radio value={1}>{'公開'}</Radio>
                  <Radio value={2}>{'非公開'}</Radio>
                </Space>
              </Radio.Group>
            </SettingsInputContainer>
          </Col>{' '}
          <Col sm={24} md={24} lg={24}>
            <SettingsInputContainer label={<SettingLabel label={'オプション'} />}>
              <Checkbox.Group
                options={[
                  { label: 'giving100', value: 1 },
                  { label: 'givingSDGs', value: 2 },
                  { label: 'ぷらす8”', value: 3 },
                ]}
                defaultValue={[1]}
              />
            </SettingsInputContainer>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default Examination;
