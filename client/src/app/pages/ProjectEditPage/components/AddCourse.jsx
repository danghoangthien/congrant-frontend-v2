import { useState } from 'react';
// ANTD
import { Row, Col, Modal, Button, Input, Checkbox } from 'antd';
// HOOKS
import useModalActions from 'hook/useModalActions';
// SPRITE
import {
  SettingsInputContainer,
  SettingLabel,
  SettingInput,
  SettingInfoLabel,
  SettingTextarea,
} from 'utils/Sprites';
// COMPONENT
import { StyledModalTitle } from 'app/components/Layout/PageLayout.style';
import ImageUpload from 'app/components/ImageUpload';

const AddCourse = () => {
  const [isModalOpen, showModal, handleOk, handleCancel] = useModalActions({});

  return (
    <>
      {/* ボタン・Add course button */}
      <Button onClick={showModal} type="primary" className="icon-btn">
        <span className="material-symbols-outlined">add</span>
        <span>{'追加'}</span>
      </Button>

      {/* コース追加モーダル・Add Course Modal */}
      <Modal
        title={<StyledModalTitle>{'コース登録'}</StyledModalTitle>}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={650}
        className="modalStyle"
        cancelText="キャンセル"
        okText="登録する"
      >
        <Row>
          <Col className="mb-6" span={24}>
            <SettingsInputContainer label={<SettingLabel label={'名称'} required />}>
              <SettingInput placeholder={'example'} />
            </SettingsInputContainer>
          </Col>
          <Col className="mb-6" span={24}>
            <SettingsInputContainer label={<SettingLabel label={'金額'} required />}>
              <SettingInput placeholder={'3,000'} suffix="円" />
            </SettingsInputContainer>
          </Col>
          <Col className="mb-6" span={24}>
            <SettingsInputContainer label={<SettingLabel label={'コース詳細'} />}>
              <SettingTextarea
                rows={3}
                placeholder={
                  '限定10個のコースです\n・代表直筆のお礼の手紙をお送りします\n・活動報告会へご招待させていただきます'
                }
              />
            </SettingsInputContainer>
          </Col>
          <Col className="mb-6" span={24}>
            <SettingsInputContainer label={<SettingInfoLabel label={'イメージ画像'} />}>
              <ImageUpload width="600px" />
            </SettingsInputContainer>
          </Col>
          <Col span={24}>
            <SettingsInputContainer label={<SettingLabel label={'個数制限'} />}>
              <Row align="middle" justify="space-between">
                <Col>
                  <Checkbox checked>{'個数制限を設ける'}</Checkbox>
                </Col>
                <Col>
                  <Input style={{ width: 254 }} placeholder={'30'} suffix="個" />
                </Col>
              </Row>
            </SettingsInputContainer>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default AddCourse;
