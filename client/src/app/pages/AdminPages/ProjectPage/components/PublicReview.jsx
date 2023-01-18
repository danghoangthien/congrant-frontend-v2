import { useState } from 'react';
// ANTD
import { Row, Col, Modal, Button, Radio, Space, Checkbox } from 'antd';
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

const statusOkTextMap = ['通知メールを送信', '確認画面へ進む'];

const Examination = () => {
  const [isModalOpen, showModal, handleOk, handleCancel] = useModalActions({});
  const [status, setStatus] = useState(1);
  return (
    <>
      {/* モーダル起動ボタン・Modal Open Button */}
      <Button
        onClick={showModal}
        type="primary"
        className="fade"
        style={{ backgroundColor: PRIMARY_ADMIN_COLOR, borderColor: PRIMARY_ADMIN_COLOR }}
      >
        <span>{'審査'}</span>
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
        okText={statusOkTextMap[status - 1]}
      >
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingLabel label={'審査結果'} required />}>
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <Radio.Group
                onChange={e => {
                  console.log('[Radio.Group] e', e);
                  setStatus(e.target.value);
                }}
                value={status}
              >
                <Space direction="horizontal">
                  <Radio value={1}>{'承認'}</Radio>
                  <Radio value={2}>{'保留（承認不可）'}</Radio>
                </Space>
              </Radio.Group>
            </Col>
          </SettingsInputContainer>
        </Row>
        {status === 1 && (
          <>
            <Row className="item mb-2">
              <Checkbox.Group
                options={[
                  { label: 'giving100', value: 1 },
                  { label: 'givingSDGs', value: 2 },
                  { label: 'ぷらす8”', value: 3 },
                ]}
                defaultValue={[1]}
              />
            </Row>
          </>
        )}
        {status === 2 && (
          <>
            <Row className="item mb-2" justify="space-between" align="middle">
              {/* 左の部分・Left Part */}
              <Col>
                <span>{'修正内容'}</span>
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
            <Row className="item mb-2">
              <SettingCheckbox>{'通知メールを送信する'}</SettingCheckbox>
            </Row>
          </>
        )}
      </Modal>
    </>
  );
};

export default Examination;
