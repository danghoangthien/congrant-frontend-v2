import React, { useState } from 'react';
import { Row, Modal, Space, Button } from 'antd';
import useModalActions from 'hook/useModalActions';
import { SettingsInputContainer, SettingLabel } from 'utils/Sprites';
import { StyledModalTitle } from 'app/components/Layout/PageLayout.style';
import { StyledFormCheckbox } from 'styles/FormElement.style';
import SaveIcon from '@mui/icons-material/Save';

const attributes = [
  { label: '属性の追加', value: 0 },
  { label: '属性の削除', value: 1 },
];

const options = [
  { label: '属性1', value: 1 },
  { label: '属性1', value: 2 },
  { label: '属性1', value: 3 },
  { label: '属性1', value: 4 },
];

const BlogEditConfirm = () => {
  const [isModalOpen, showModal, handleOk, handleCancel] = useModalActions({});

  return (
    <>
      <Space onClick={() => showModal()}>
        <Button type="primary" className="icon-btn">
          <SaveIcon style={{ fontSize: '14px' }} className="mr-2" />
          <span>{'保存'}</span>
        </Button>
      </Space>

      <Modal
        title={<StyledModalTitle>{'活動報告記事の公開'}</StyledModalTitle>}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={572}
        className="modalStyle"
        cancelText="キャンセル"
        okText="公開する"
        style={{ borderRadius: '8px' }}
      >
        <Row className="item mb-6">
          <SettingsInputContainer label={<SettingLabel label={'記事タイトル'} />}>
            <p>{'マンスリーサポーター30人達成しました'}</p>
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingLabel label={'サポーターへの通知'} />}>
            <StyledFormCheckbox>{'記事公開をサポーターに通知する'}</StyledFormCheckbox>
            <p
              style={{
                color: 'rgba(0, 0, 0, 0.5)',
              }}
            >
              このプロジェクトに支援したサポーター全員に対して、記事公開がメールで通知されます。
              <br />
              通知したくない場合はチェックを外してください。
            </p>
          </SettingsInputContainer>
        </Row>
      </Modal>
    </>
  );
};

export default BlogEditConfirm;
