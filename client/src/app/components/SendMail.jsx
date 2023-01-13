import { useState } from 'react';
// ANTD
import { Row, Modal, Button, Space, Select } from 'antd';
// SPRITE
import {
  SettingsInputContainer,
  SettingLabel,
  SettingInput,
  SettingTextarea,
  SettingSelect,
} from 'utils/Sprites';
// STYLE
import { StyledModalTitle } from 'app/components/Layout/PageLayout.style';
import styled from 'styled-components/macro';
import { EXTRA_LIGHT_GRAY_COLOR, TEXT_GRAY_COLOR } from 'styles/StyleConstants';
import { useMountEffect } from 'hook/useMountEffect';

export const StyledReceivers = styled(Space)`
  background: ${EXTRA_LIGHT_GRAY_COLOR};
  border-radius: 4px;
  font-size: 12px;
  padding: 16px;
  gap: 8px;
  width: 100%;

  span:before {
    content: '・';
    display: inline-block;
    margin-right: 3px;
    vertical-align: middle;
  }
`;

export const StyledDehighlightText = styled.span`
  color: ${TEXT_GRAY_COLOR};
`;

const SendMail = ({ selectedRowKeys }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);
  const [mailContent, setMailContent] = useState('');

  useMountEffect(() => {});
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
      <Button
        className="icon-btn"
        icon={<span className="material-symbols-outlined fill-icon">send</span>}
        onClick={e => {
          e.stopPropagation();
          showModal();
        }}
      >
        {'メッセージを送る'}
      </Button>

      <Modal
        title={<StyledModalTitle>{'メッセージを送る'}</StyledModalTitle>}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={572}
        className="modalStyle"
        cancelText="キャンセル"
        okText="送信する"
      >
        {/* 送信先 */}
        <Row className="mb-6">
          <SettingsInputContainer label={<SettingLabel label={'送信先（12件）'} />}>
            <StyledReceivers direction="vertical" size={3}>
              <span>{'araki@gmai.com（荒木 雄大）'}</span>
              <span>{'yamada@gmail.com（山田 花子）'}</span>
              <span>{'tanaka@gmail.com（田中 太郎）'}</span>
              <span>{'suzuki@gmail.com（鈴木 一郎）'}</span>
              <span>{'araki@gmai.com（荒木 雄大）'}</span>
            </StyledReceivers>
          </SettingsInputContainer>
        </Row>
        {/* テンプレート */}
        <Row className="mb-6">
          <SettingsInputContainer label={<SettingLabel label={'テンプレート'} />}>
            <SettingSelect value={'選択してください'} />
          </SettingsInputContainer>
        </Row>
        {/* FROM: */}
        <Row className="mb-6">
          <SettingsInputContainer label={<SettingLabel label={'FROM:'} />}>
            <span>{'noreply@congrant.com（寄付会費決済サービス「コングラント」）'}</span>
          </SettingsInputContainer>
        </Row>
        {/* CC: */}
        <Row className="mb-6">
          <SettingsInputContainer label={<SettingLabel label={'CC:'} />}>
            <SettingInput placeholder={'info@*******.com'} />
          </SettingsInputContainer>
        </Row>
        {/* 件名 */}
        <Row className="mb-6">
          <SettingsInputContainer label={<SettingLabel label={'件名'} required />}>
            <SettingInput placeholder={'ご支援ありがとうございました'} />
          </SettingsInputContainer>
        </Row>
        {/* 本文 */}
        <Row className="mb-6">
          <SettingsInputContainer label={<SettingLabel label={'本文'} required />}>
            <Space direction="vertical" style={{ width: '100%' }}>
              <StyledDehighlightText>
                XXXX様
                <br />
                <br />
                NPO法人コングラントからメッセージが届きました。
                <br />
                --------------------------------------------------------
              </StyledDehighlightText>
            </Space>
          </SettingsInputContainer>
        </Row>
        <Row>
          <SettingsInputContainer label={<SettingLabel label={'本文'} required />}>
            <SettingSelect
              className="mb-1"
              style={{ width: 216 }}
              onChange={value => {
                setSelectedTag(selectedTagValue => {
                  setMailContent(mailcontentValue => `${mailcontentValue} ${value}`);
                  return value;
                });
              }}
            >
              <Select.Option value={'差込タグ 1'}>{'差込タグ 1'}</Select.Option>
              <Select.Option value={'差込タグ 2'}>{'差込タグ 2'}</Select.Option>
            </SettingSelect>
            <SettingTextarea
              rows="10"
              onChange={e => {
                setMailContent(e.target.value);
              }}
              value={mailContent}
            />
          </SettingsInputContainer>
        </Row>
      </Modal>
    </>
  );
};

export default SendMail;
