import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
// ANTD
import { Row, Col, Image } from 'antd';
import { StyledButton, StyledSuccess, StyledShareBox, StyledBankBox } from './PaymentPage.style';
import './Models/index';
import SuccessImage from 'styles/assets/img_success.svg';
import Share from 'app/components/Share';
import Media from 'react-media';

const Success = () => {
  const history = useHistory();
  const { method } = useSelector(state => state['paymentMethod']);

  return (
    <StyledSuccess>
      <Row>
        {/* 画像 */}
        {method === '1' && (
          <Col span={24} className="mb-8">
            <Row justify="center">
              <Image src={SuccessImage} preview={false} />
            </Row>
          </Col>
        )}

        {/* テキスト */}
        <Col span={24} className="mb-8">
          <Row justify="center">
            <div className="mb-4" style={{ fontSize: '24px', fontWeight: '700' }}>
              お申し込みが完了しました
            </div>
            <div style={{ textAlign: 'center', lineHeight: '1.57' }}>
              <Media queries={{ small: '(max-width: 575px)' }}>
                {matches =>
                  matches.small ? (
                    <span>
                      ご支援いただき誠にありがとうございました。
                      <br />
                      いただいたご支援は
                      <br />
                      プロジェクトで大切に使わせていただきます。
                    </span>
                  ) : (
                    <span>
                      ご支援いただき誠にありがとうございました。
                      <br />
                      いただいたご支援はプロジェクトで大切に使わせていただきます。
                    </span>
                  )
                }
              </Media>
            </div>
          </Row>
        </Col>

        {method === '2' && (
          <Col span={24} className="mb-8">
            <StyledBankBox className="bank-box">
              <div className="bank-box-title">
                振込先情報
                <br />
                （メールでもお送りしています）
              </div>

              <div className="bank-box-txt">
                下記の口座へ1週間以内にお振込お願いします
                <br />
                <br />
                銀行名　：三菱UFJ銀行
                <br />
                支店名　：梅田支店
                <br />
                口座種別：普通
                <br />
                口座番号：1234567
                <br />
                口座名義：トクヒ）ニホンコングラントキョウカイ
              </div>
            </StyledBankBox>
          </Col>
        )}
        {/* シェア */}
        <Col span={24} className="mb-8">
          <StyledShareBox>
            <div className="share-box-title">プロジェクトをシェアでも応援</div>

            {/* SNSシェア・SNS Share Start */}
            <Share
              twitter={`https://github.com/nygardk/react-share`}
              facebook={`https://github.com/nygardk/react-share`}
              line={`https://github.com/nygardk/react-share`}
            />
            {/* SNSシェア・SNS Share End */}
          </StyledShareBox>
        </Col>
        {/* ボタン */}
        <Col span={24}>
          <Row justify="center">
            <StyledButton
              className="back-btn"
              type="primary"
              size="large"
              style={{ width: '288px' }}
              onClick={() => {
                history.push(`/app/project/client_name/1`);
              }}
            >
              プロジェクトのトップへ戻る
            </StyledButton>
          </Row>
        </Col>
      </Row>
    </StyledSuccess>
  );
};

export default Success;
