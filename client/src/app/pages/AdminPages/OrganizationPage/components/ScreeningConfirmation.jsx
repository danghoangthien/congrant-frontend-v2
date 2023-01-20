// ANTD
import { Row, Col, Modal, Button, Image, Card } from 'antd';
// HOOKS
import useModalActions from 'hook/useModalActions';
// SPRITE
import { SettingsInputContainer, SettingLabel } from 'utils/Sprites';
// STYLE
import { StyledModalTitle } from 'app/components/Layout/PageLayout.style';
// IMAGE
import Logo from 'styles/assets/logo_congrant.svg';
import LogoGray from 'styles/assets/logo_congrant_gray.svg';

import {
  PreviewLayout,
  StyledTemplateTitle,
  StyledContentText,
  StyledContent,
  // StyledContentBox,
} from 'app/components/Layout/AdminLayoutPage.style';

const Preview = props => {
  const [isModalOpen, showModal, handleOk, handleCancel] = useModalActions({});

  return (
    <>
      {/* モーダル起動ボタン・Modal Open Button */}
      <Button onClick={showModal} type="primary" {...props}>
        <span>{'確認画面：審査保留'}</span>
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
        okText={'登録'}
      >
        <Row className="mb-2">
          <Col span={24} className="mb-5">
            <strong style={{ fontSize: 16 }}>
              {'以下の通知メールが団体に送信されます。確認して送信してください。'}
            </strong>
          </Col>
          <SettingsInputContainer label={<SettingLabel label={'件名'} />}>
            <Col className="mb-5" sm={24} md={24} lg={24}>
              <StyledContentText>{'【コングラント】審査結果について'}</StyledContentText>
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
                        <StyledTemplateTitle>{'審査結果について'}</StyledTemplateTitle>
                        <StyledContent>
                          認定NPO法人コングラント様
                          <br />
                          <br />
                          貴団体のコングラント利用審査の結果についてご案内いたします。
                          <br />
                          審査の結果、誠に恐れ入りますがコングラントの利用を承認できませんでした。
                          <br />
                          <br />
                          審査理由につきましてはセキュリティの関係で回答はできかねます。
                          何卒ご理解の程よろしくお願いします。
                          <br />
                          <br />
                          この度はコングラントの利用を検討いただき誠にありがとうございました。
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
