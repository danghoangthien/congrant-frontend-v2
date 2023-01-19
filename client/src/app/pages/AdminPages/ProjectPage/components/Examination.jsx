import { useState } from 'react';
// ANTD
import { Row, Col, Modal, Button, Radio, Space } from 'antd';
// HOOKS
import useModalActions from 'hook/useModalActions';
// SPRITE
import {
  SettingsInputContainer,
  SettingLabel,
  SettingSelect,
  SettingTextarea,
} from 'utils/Sprites';
import { SettingCheckbox } from 'utils/Sprites/RecurringFormElement';
// STYLE
import { StyledModalTitle } from 'app/components/Layout/PageLayout.style';
// CONST
import { PRIMARY_ADMIN_COLOR } from 'styles/StyleConstants';
import ScreeningConfirmation from './ScreeningConfirmation';
import PendingConfirmation from './PendingConfirmation';

const statusOkTextMap = ['変更する', '変更する', '確認画面へ進む', '確認画面へ進む'];

const Examination = ({ btn_text }) => {
  const [isModalOpen, showModal, handleCancel] = useModalActions({});
  const [status, setStatus] = useState(1);
  const handleOk = () => {
    if (status === 3) {
      // go to preview
    }
  };
  return (
    <>
      {/* モーダル起動ボタン・Modal Open Button */}
      <Button
        onClick={showModal}
        type="primary"
        className="fade"
        style={{ backgroundColor: PRIMARY_ADMIN_COLOR, borderColor: PRIMARY_ADMIN_COLOR }}
      >
        <span>{btn_text || '審査'}</span>
      </Button>
      {/* モーダル・Modal */}
      <Modal
        title={<StyledModalTitle>{'コングラント審査'}</StyledModalTitle>}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={650}
        className="modalStyle"
        cancelText="キャンセル"
        footer={[
          <Button key="cancel" type="text" onClick={handleCancel}>
            {'キャンセル'}
          </Button>,
          <>
            {status === 4 && <ScreeningConfirmation />}
            {status === 3 && <PendingConfirmation />}
            {[1, 2].includes(status) && (
              <Button key="ok" className="active" type="primary" onClick={handleOk}>
                <span>{statusOkTextMap[status - 1]}</span>
              </Button>
            )}
          </>,
        ]}
      >
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingLabel label={'審査状況'} />}>
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <Radio.Group
                onChange={e => {
                  console.log('[Radio.Group] e', e);
                  setStatus(e.target.value);
                }}
                value={status}
              >
                <Space direction="horizontal">
                  <Radio value={1}>{'審査中'}</Radio>
                  <Radio value={2}>{'OK'}</Radio>
                  <Radio value={3}>{'保留'}</Radio>
                  <Radio value={4}>{'NG（利用不可）'}</Radio>
                </Space>
              </Radio.Group>
            </Col>
          </SettingsInputContainer>
        </Row>
        {status === 3 && (
          <>
            <Row className="item mb-2" justify="space-between" align="middle">
              {/* 左の部分・Left Part */}
              <Col>
                <span>{'保留理由'}</span>
              </Col>
              {/* 右の部分・Right Part */}
              <Col>
                <SettingSelect
                  style={{ width: '100%' }}
                  size="medium"
                  placeholder={'テンプレートを選択'}
                />
              </Col>
            </Row>
            <Row className="item mb-2">
              <SettingTextarea rows="5" value={''} />
            </Row>
          </>
        )}
        {status === 4 && (
          <>
            <Row className="item mb-2" justify="space-between" align="middle">
              {/* 左の部分・Left Part */}
              <Col>
                <span>{'NG理由'}</span>
              </Col>
              {/* 右の部分・Right Part */}
              <Col>
                <SettingSelect
                  style={{ width: '100%' }}
                  size="medium"
                  placeholder={'テンプレートを選択'}
                />
              </Col>
            </Row>
            <Row className="item mb-2">
              <SettingTextarea rows="5" value={''} />
            </Row>
          </>
        )}
        <Row className="item mb-2">
          <SettingCheckbox>{'通知メールを送信する'}</SettingCheckbox>
        </Row>
      </Modal>
    </>
  );
};

export default Examination;
