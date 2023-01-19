// ANTD
import { Row, Col, Modal, Button } from 'antd';
// HOOKS
import useModalActions from 'hook/useModalActions';
// SPRITE
import { SettingsInputContainer, SettingLabel, SettingInput, SettingTextarea } from 'utils/Sprites';
// STYLE
import { StyledModalTitle } from 'app/components/Layout/PageLayout.style';
import { GRAY_COLOR } from 'styles/StyleConstants';
import styled from 'styled-components/macro';
import LogoText from 'styles/assets/logo_text.svg';
import LogoIcon from 'styles/assets/logo_icon.svg';

const PreviewLayout = styled.div`
  table.previewTable {
    width: 100%;
    background-color: #ffffff;
    border-collapse: collapse;
    border-width: 1px;
    border-color: ${GRAY_COLOR};
    border-style: solid;
    color: #000000;
  }

  table.previewTable td,
  table.previewTable th {
    border-width: 1px;
    border-color: ${GRAY_COLOR};
    border-style: solid;
    padding: 5px;
  }

  table.previewTable thead {
  }
  table.previewTable tfoot th {
    font-weight: 300;
    font-size: 12px;
    line-height: 22px;
    background-color: #f0f0ee;
  }
`;

export const StyledHighlightText = styled.span`
  font-size: 12px;
  font-weight: 600;
  line-height: 22px;
  padding: 24px;
`;

export const StyledTemplateTitle = styled.span`
  font-weight: 600;
  font-size: 28px;
  line-height: 42px;
  padding: 24px;
`;

export const StyledContentText = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
`;

export const StyledContent = styled.p`
  padding: 24px;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
`;

export const StyledContentBox = styled.p`
  padding: 24px;
  background: #fafaf8;
  border-radius: 4px;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
`;
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
        cancelText="修正する"
        okText={'送信する'}
      >
        <Row className="item mb-2">
          <Col span={24} className="item mb-5">
            <StyledHighlightText style={{ padding: '0' }}>
              {'以下の通知メールが団体に送信されます。確認して送信してください。'}
            </StyledHighlightText>
          </Col>
          <SettingsInputContainer label={<SettingLabel label={'件名'} />}>
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <StyledContentText>{'【コングラント】審査結果について'}</StyledContentText>
            </Col>
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingLabel label={'メール本文'} />}>
            <PreviewLayout>
              <table className="previewTable">
                <thead>
                  <tr>
                    <th className="py-8">
                      <img className="logo-icon" src={LogoIcon} alt="コングラントロゴ" />
                      <img className="logo-text" src={LogoText} alt="コングラントロゴ" />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <StyledTemplateTitle>
                        {'審査結果：ご利用を承認できませんでした'}
                      </StyledTemplateTitle>
                      <StyledContent>
                        認定NPO法人コングラント様
                        <br />
                        以下の理由により、審査を完了できませんでした。
                      </StyledContent>
                      <StyledContentBox>
                        貴団体のホームページで以下の情報が確認できませんでした。
                        <br />
                        ・
                        <br />
                        <br />
                        <br />
                        コングラントのご利用には団体のホームページ上で最低限以下5点の情報を公開いただく必要があります。
                        <br />
                        ・活動内容・実績
                        <br />
                        ・団体名
                        <br />
                        ・代表者氏名 ・団体所在地
                        <br />
                        ・メールアドレス（またはお問い合わせフォーム）
                      </StyledContentBox>
                      <StyledContent>
                        お困りの場合は、よくある質問をご覧いただくか、<a>support@congrant.com</a>
                        までご連絡下さい。
                      </StyledContent>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th>
                      {'このメールは寄付・会費決済サービスの'}
                      <StyledHighlightText>{'コングラント'}</StyledHighlightText>
                      {'を使用して配信されています。'}
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
