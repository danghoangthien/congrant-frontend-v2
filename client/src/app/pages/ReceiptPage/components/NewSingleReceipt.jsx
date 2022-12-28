import { Row, Col, Modal, Button, Space, Radio } from 'antd';
import useModalActions from 'hook/useModalActions';
import { SettingsInputContainer, SettingLabel, SettingSelect } from 'utils/Sprites';
import styled from 'styled-components/macro';
import { StyledModalTitle } from 'app/components/Layout/PageLayout.style';

export const StyledHighlightText = styled.span`
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
`;

export const StyledRadioContainer = styled(Space)`
  background: ${props => (props.checked ? '#FFFFFF' : '#FAFAF8')};
  border: 1px solid ${props => (props.checked ? '#63B233' : '#D9D9D7')};
  border-radius: 4px;
  padding: 24px 16px;
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
          title={<StyledModalTitle>{'領収書の作成（一括作成）'}</StyledModalTitle>}
          visible={isModalOpen}
          width={650}
          className="modalStyle"
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
                className="icon-btn"
                icon={<span className="material-symbols-outlined fill-icon">send</span>}
              >
                {'送信する'}
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
              <Space direction="vertical">
                <StyledHighlightText>
                  {'12件の寄付レコードから領収書を一括作成します。'}
                </StyledHighlightText>
                <span>{'作成する領収書の種類と、領収書テンプレートを選択してください。'}</span>
              </Space>
              <span>{'領収書のダウンロードURLを送信します。'}</span>
            </Col>
            <Col span={24} className="mb-6">
              <SettingsInputContainer
                label={<SettingLabel label={'作成する領収書の種類'} required />}
              >
                <Row className="mb-5" type="flex" gutter={12}>
                  <Col xs={12}>
                    <StyledRadioContainer checked direction="vertical">
                      <Radio value={1} checked>
                        <StyledHighlightText>{'都度領収書（寄付決済ごと）'}</StyledHighlightText>
                      </Radio>
                      <p>{'preview section'}</p>
                      <p>
                        <StyledHighlightText>{'1つの寄付決済につ'}</StyledHighlightText>
                        {'き1つの領収書ファイルを作成します。'}
                      </p>
                    </StyledRadioContainer>
                  </Col>
                  <Col xs={12}>
                    <StyledRadioContainer xs={12} direction="vertical">
                      <Radio value={2}>
                        <StyledHighlightText>{'合計領収書（サポーターごと）'}</StyledHighlightText>
                      </Radio>
                      <p>{'preview section'}</p>
                      <p>
                        <StyledHighlightText>{'1人のサポーターにつ'}</StyledHighlightText>
                        {'き1つの領収書ファイルを作成します。'}
                      </p>
                    </StyledRadioContainer>
                  </Col>
                </Row>
              </SettingsInputContainer>
            </Col>
            <Col span={24} className="mb-6">
              <SettingsInputContainer
                label={<SettingLabel label={'領収書テンプレート'} required />}
              >
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
      </Space>
    </>
  );
};

export default NewSingleReceipt;
