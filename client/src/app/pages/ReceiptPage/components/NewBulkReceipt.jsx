import { Row, Col, Modal, Button, Space, Radio, Image } from 'antd';
import useModalActions from 'hook/useModalActions';
import { SettingsInputContainer, SettingLabel, SettingSelect } from 'utils/Sprites';
// STYLE
import styled from 'styled-components/macro';
import { StyledModalTitle } from 'app/components/Layout/PageLayout.style';
// IMAGE
import receipt01 from 'styles/assets/receipt/receipt_dummy01.png';
import receipt02 from 'styles/assets/receipt/receipt_dummy02.png';

export const StyledHighlightText = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
`;

export const StyledRadioContainer = styled.div`
  background: ${props => (props.checked ? '#FFFFFF' : '#FAFAF8')};
  border: 1px solid ${props => (props.checked ? '#63B233' : '#D9D9D7')};
  border-radius: 4px;
  padding: 24px 16px;

  .ant-radio-wrapper {
    margin-right: 0;
  }

  .ant-radio {
    position: absolute;
    top: 5px;
    left: 0;
  }
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
          receipt
        </span>
        <span>{'領収書作成'}</span>
      </Space>

      <Modal
        title={<StyledModalTitle>{'領収書の作成（一括作成）'}</StyledModalTitle>}
        visible={isModalOpen}
        width={572}
        className="modalStyle"
        onCancel={handleCancel}
        // cancelText="キャンセル"
        footer={
          <Space
            onClick={e => {
              e.stopPropagation();
            }}
          >
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
        <Row
          onClick={e => {
            e.stopPropagation();
          }}
        >
          <Col span={24} className="mb-6">
            <StyledHighlightText>
              {'12件の寄付レコードから領収書を一括作成します。'}
            </StyledHighlightText>
            <div>{'作成する領収書の種類と、領収書テンプレートを選択してください。'}</div>
          </Col>
          <Col span={24} className="mb-8">
            <SettingsInputContainer
              label={<SettingLabel label={'作成する領収書の種類'} required />}
            >
              <Row type="flex" gutter={8}>
                <Col xs={12}>
                  <StyledRadioContainer checked direction="vertical">
                    <Radio value={1} checked>
                      <StyledHighlightText className="pl-4 mb-4">
                        {'都度領収書（寄付決済ごと）'}
                      </StyledHighlightText>
                      <Row className="mb-4" justify="center">
                        <Image width={150} src={receipt01} preview={false} />
                      </Row>
                      <div style={{ fontSize: 14 }}>
                        <span style={{ fontWeight: 600 }}>{'1つの寄付決済につ'}</span>
                        {'き1つの領収書ファイルを作成します。'}
                      </div>
                    </Radio>
                  </StyledRadioContainer>
                </Col>
                <Col xs={12}>
                  <StyledRadioContainer xs={12} direction="vertical">
                    <Radio value={2}>
                      <StyledHighlightText className="pl-4 mb-4">
                        {'合計領収書（サポーターごと）'}
                      </StyledHighlightText>
                      <Row className="mb-4" justify="center">
                        <Image width={150} src={receipt02} preview={false} />
                      </Row>
                      <div style={{ fontSize: 14 }}>
                        <span style={{ fontWeight: 600 }}>{'1人のサポーターにつ'}</span>
                        {'き1つの領収書ファイルを作成します。'}
                      </div>
                    </Radio>
                  </StyledRadioContainer>
                </Col>
              </Row>
            </SettingsInputContainer>
          </Col>
          <Col span={24}>
            <SettingsInputContainer label={<SettingLabel label={'領収書テンプレート'} required />}>
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
    </>
  );
};

export default NewBulkReceipt;
