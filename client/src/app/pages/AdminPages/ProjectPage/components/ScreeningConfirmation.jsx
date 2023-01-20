// ANTD
import { Row, Col, Modal, Button, Image, Card, Descriptions } from 'antd';
// HOOKS
import useModalActions from 'hook/useModalActions';
// SPRITE
import { SettingsInputContainer, SettingLabel } from 'utils/Sprites';
// STYLE
import styled from 'styled-components/macro';
import { StyledModalTitle } from 'app/components/Layout/PageLayout.style';
import {
  PreviewLayout,
  StyledTemplateTitle,
  StyledContentText,
  StyledContent,
  StyledHeading,
  StyledContentBox,
} from 'app/components/Layout/AdminLayoutPage.style';
// IMAGE
import Logo from 'styles/assets/logo_congrant.svg';
import LogoGray from 'styles/assets/logo_congrant_gray.svg';

const StyledDescriptions = styled(Descriptions)`
  width: 100%;

  .ant-descriptions-item-label,
  .ant-descriptions-item-content {
    border: none !important;
    padding: 12px !important;
  }

  .ant-descriptions-item-label {
    font-weight: 600;
  }

  .ant-descriptions-view {
    border: none;
  }
`;

const Preview = props => {
  const [isModalOpen, showModal, handleOk, handleCancel] = useModalActions({});

  return (
    <>
      {/* モーダル起動ボタン・Modal Open Button */}
      <Button onClick={showModal} type="primary" {...props}>
        <span>{'確認画面へ進む'}</span>
      </Button>

      {/* モーダル・Modal */}
      <Modal
        title={<StyledModalTitle>{'確認画面：審査保留'}</StyledModalTitle>}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={650}
        className="modalStyle"
        cancelButtonProps={{ type: 'text' }}
        cancelText="修正する"
        okText={'送信する'}
      >
        <Row className="mb-2">
          <Col span={24} className="mb-5">
            <strong style={{ fontSize: 16 }}>
              {'以下の通知メールが団体に送信されます。確認して送信してください。'}
            </strong>
          </Col>
          <SettingsInputContainer label={<SettingLabel label={'件名'} />}>
            <Col className="mb-5" sm={24} md={24} lg={24}>
              <StyledContentText>
                {'【コングラント】プロジェクトの修正をお願いします'}
              </StyledContentText>
            </Col>
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingLabel label={'メール本文'} />}>
            <PreviewLayout>
              <table className="previewTable">
                <thead>
                  <tr>
                    <th className="py-6">
                      <Image src={Logo} alt="コングラントロゴ" preview={false} width={200} />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Card bordered={false}>
                        <StyledTemplateTitle>
                          {'プロジェクトの修正をお願いします'}
                        </StyledTemplateTitle>
                        <StyledContent>
                          認定NPO法人コングラント様
                          <br />
                          <br />
                          以下のプロジェクトについて審査を行った結果、公開は「保留」になりました。
                        </StyledContent>
                        <StyledContent className="mb-10">
                          <StyledDescriptions bordered column={1} size="small">
                            <StyledDescriptions.Item label="プロジェクトID">
                              1234
                            </StyledDescriptions.Item>
                            <StyledDescriptions.Item label="プロジェクト名">
                              <span className="link">
                                NPO法人コングラントへのご寄付をお願いします。
                              </span>
                            </StyledDescriptions.Item>
                          </StyledDescriptions>
                        </StyledContent>
                        <StyledContent>
                          <StyledHeading>修正内容</StyledHeading>
                          以下をご確認いただき修正を行ってください。
                          <br />
                          <strong>修正完了後、再度公開申請をお願いします。</strong>
                        </StyledContent>
                        <StyledContent>
                          <StyledContentBox>
                            ・具体的な活動内容・活動実績をご記載ください
                            <br />
                            ・具体的な寄付の利用用途をご記載ください
                          </StyledContentBox>
                        </StyledContent>
                        <StyledContent>
                          お困りの場合は、<span className="link">よくある質問</span>
                          をご覧いただくか、
                          <br />
                          <span className="link">support@congrant.com</span>
                          までご連絡下さい。
                        </StyledContent>
                      </Card>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th>
                      <div className="pa-6">
                        <div className="mb-4">
                          <Image
                            src={LogoGray}
                            alt="コングラントロゴ"
                            preview={false}
                            width={110}
                          />
                        </div>
                        <div>
                          このメールは寄付・会費決済サービスの
                          <strong>{'コングラント'}</strong>
                          を使用して配信されています。
                        </div>
                      </div>
                    </th>
                  </tr>
                </tfoot>
              </table>
            </PreviewLayout>
          </SettingsInputContainer>
        </Row>
      </Modal>
    </>
  );
};

export default Preview;