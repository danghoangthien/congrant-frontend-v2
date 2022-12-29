import { Row, Col, Modal, Button, Space } from 'antd';
import useModalActions from 'hook/useModalActions';
import { SettingsInputContainer, SettingLabel, SettingSelect } from 'utils/Sprites';
import styled from 'styled-components/macro';
import { StyledModalTitle } from 'app/components/Layout/PageLayout.style';

export const StyledHighlightText = styled.span`
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
`;

const NewBulkReceipt = () => {
  const [isModalOpen, showModal, handleOk, handleCancel] = useModalActions({});

  return (
    <>
      <Space
        onClick={e => {
          e.stopPropagation();
          showModal();
        }}
      >
        <span
          className="material-symbols-outlined fill-icon"
          style={{ fontSize: '16px', verticalAlign: 'middle' }}
        >
          list
        </span>
        <span>{'領収書作成'}</span>
      </Space>
      <Modal
        title={<StyledModalTitle>{'領収書の作成'}</StyledModalTitle>}
        visible={isModalOpen}
        width={650}
        className="modalStyle"
        // cancelText="キャンセル"
        footer={
          <Space>
            <Button onClick={handleCancel}>{'キャンセル'}</Button>
            <Button
              onClick={() => {
                handleOk();
                window.location.replace('/app/receipts-create');
              }}
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
            <Space direction="vertical">
              <StyledHighlightText>{'寄付レコードから領収書を作成します。'}</StyledHighlightText>
              <span>{'領収書テンプレートを選択してください。'}</span>
            </Space>
            <span>{'領収書のダウンロードURLを送信します。'}</span>
          </Col>
          <Col span={24} className="mb-6">
            <SettingsInputContainer label={<SettingLabel label={'領収書テンプレート'} required />}>
              <Row style={{ width: '100%' }} gutter={12}>
                <Col xs={12}>
                  <SettingSelect value={'標準領収書'}></SettingSelect>
                </Col>
                <Col xs={4}>
                  <Button className="icon-btn">
                    <span className="material-symbols-outlined fill-icon">remove_red_eye</span>
                    <span>{'プレビュー'}</span>
                  </Button>
                </Col>
              </Row>
            </SettingsInputContainer>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default NewBulkReceipt;
