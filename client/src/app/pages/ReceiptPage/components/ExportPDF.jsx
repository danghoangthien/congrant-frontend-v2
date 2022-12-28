import { useState } from 'react';
import { Row, Col, Modal, Button, Space } from 'antd';
import { SettingsInputContainer, SettingLabel, SettingInput, SettingTextarea } from 'utils/Sprites';
import useModalActions from 'hook/useModalActions';
import { StyledModalTitle } from 'app/components/Layout/PageLayout.style';

const ExportPDF = ({ title }) => {
  const [isModalOpen, showModal, handleOk, handleCancel] = useModalActions({});

  return (
    <>
      <Button
        onClick={e => {
          e.stopPropagation();
          showModal();
        }}
        type="primary"
      >
        <span>{'PDF'}</span>
      </Button>

      <Modal
        title={<StyledModalTitle>{'領収書ダウンロードURLの送信'}</StyledModalTitle>}
        visible={isModalOpen}
        width={650}
        className="modalStyle"
        // cancelText="キャンセル"
        footer={
          <Space>
            <Button onClick={handleCancel}>{'キャンセル'}</Button>
            <Button
              onClick={handleOk}
              type="primary"
              className="icon-btn"
              icon={<span className="material-symbols-outlined fill-icon">send</span>}
            >
              {'送信する'}
            </Button>
          </Space>
        }
      >
        <Row>
          <Col span={24} className="mb-6">
            <span>{'領収書のダウンロードURLを送信します。'}</span>
          </Col>
          <Col span={24} className="mb-6">
            <SettingsInputContainer label={<SettingLabel label={'送信対象'} />}>
              <div>{'・田中太郎（tanaka@gmail.com)'}</div>
              <div>{'・山田花子（yamada@gmail.com）'}</div>
            </SettingsInputContainer>
          </Col>
          <Col span={24} className="mb-6">
            <SettingsInputContainer label={<SettingLabel label={'件名'} required />}>
              <SettingInput value={'領収書ダウンロードURLのご案内'} />
            </SettingsInputContainer>
          </Col>

          <SettingsInputContainer label={<SettingLabel label={'本文'} required />}>
            <Row>
              <div style={{ color: 'rgba(0, 0, 0, 0.5)' }} className="mb-4">
                XXXX様 <br />
                <br />
                NPO法人コングラントからメッセージが届きました。
                <br />
                {'--------------------------------------------------------'}
              </div>
              <SettingTextarea
                autoSize={{ minRows: 4 }}
                rows="5"
                defaultValue={
                  'いつも当団体を応援してくださりありがとうございます\n\n先日いただいたご支援の領収書をお送りします。\nお手数をおかけしますが、以下のURLからダウンロードしてください。\n\n今後とも応援よろしくお願いいたします。'
                }
              />
              <div style={{ color: 'rgba(0, 0, 0, 0.5)' }}>
                {'--------------------------------------------------------'}
                <br />
                {'領収書ダウンロードURL（他の人に教えないでください）'}
                <br />
                {
                  'https://***********************************************************************************'
                }
                <br />
                {'--------------------------------------------------------'}
              </div>
            </Row>
          </SettingsInputContainer>
        </Row>
      </Modal>
    </>
  );
};

export default ExportPDF;
