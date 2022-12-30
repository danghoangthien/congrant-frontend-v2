import { Row, Col, Modal, Button, Space } from 'antd';
import useModalActions from 'hook/useModalActions';
import { SettingsInputContainer, SettingLabel, SettingSelect } from 'utils/Sprites';
// STYLE
import { StyledModalTitle } from 'app/components/Layout/PageLayout.style';
import styled from 'styled-components/macro';

export const StyledHighlightText = styled.span`
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
`;

const NewSingleReceipt = () => {
  const [isModalOpen, showModal, handleOk, handleCancel] = useModalActions({});

  return (
    <>
      <Space
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <Button
          onClick={e => {
            showModal();
          }}
          type="primary"
        >
          <span>{'領収書作成'}</span>
        </Button>

        <Modal
          title={<StyledModalTitle>{'領収書の作成'}</StyledModalTitle>}
          visible={isModalOpen}
          width={650}
          className="modalStyle"
          // cancelText="キャンセル"
          onCancel={handleCancel}
          footer={
            <Space>
              <Button onClick={handleCancel}>{'キャンセル'}</Button>
              <Button
                onClick={() => {
                  handleOk();
                  window.location.replace('/app/receipts-create');
                }}
                type="primary"
              >
                {'確認画面へ'}
              </Button>
            </Space>
          }
        >
          <Row>
            <Col span={24} className="mb-8">
              <StyledHighlightText>{'寄付レコードから領収書を作成します。'}</StyledHighlightText>
              <div>{'領収書テンプレートを選択してください。'}</div>
            </Col>
            <Col span={24}>
              <SettingsInputContainer
                label={<SettingLabel label={'領収書テンプレート'} required />}
              >
                <Row gutter={8}>
                  <Col flex="auto">
                    <SettingSelect value={'標準領収書'}></SettingSelect>
                  </Col>
                  <Col>
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
      </Space>
    </>
  );
};

export default NewSingleReceipt;
