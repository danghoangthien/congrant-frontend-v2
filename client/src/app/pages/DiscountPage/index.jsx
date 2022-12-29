import { Helmet } from 'react-helmet-async';
// ANTD
import { Row, Col, Card, Image, Button } from 'antd';
import { PageLayout } from 'app/components/Layout/PageLayout.style';
// IMAGE
import logo_techsoup from 'styles/assets/discount/img_techsoup.png';
import logo_japan_evaluation from 'styles/assets/discount/img_japan_evaluation.png';
import logo_koeki from 'styles/assets/discount/img_koeki.png';
import logo_yogibo from 'styles/assets/discount/img_yogibo.png';
// CONST
import { PRIMARY_COLOR } from 'styles/StyleConstants';
// STYLE
import styled from 'styled-components/macro';
import { EqualHeight, EqualHeightElement } from 'react-equal-height/clean';

export const StyledDiscountCard = styled(Card)`
  background: #ffffff;

  .image-wrapper {
    margin: 0 auto;
    width: 240px;
    text-align: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .ant-image {
      height: 64px;
    }
  }

  .title {
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.4;
  }

  .text {
    line-height: 1.57;
  }

  .btn {
    width: 100%;
    max-width: 158px;
    background: ${PRIMARY_COLOR};
    color: #ffffff;
    transition: all 0.3s ease;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const DiscountPage = () => {
  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'コングラント利用料の割引'}</title>
          <meta name="description" content={'...'} />
        </Helmet>
      </>
    );
  };

  return (
    <>
      {renderPageTitle()}
      <PageLayout>
        <div className="sub-page-title mb-4">コングラント利用料の割引</div>
        <Row gutter={24} className="mb-10">
          <EqualHeight>
            <Col className="mb-3" lg={{ span: 8 }} md={{ span: 12 }}>
              <StyledDiscountCard bodyStyle={{ padding: '32px 24px' }}>
                <div className="mb-4">
                  <EqualHeightElement name="Image">
                    <div className="image-wrapper">
                      <Image src={logo_techsoup} preview={false} />
                    </div>
                  </EqualHeightElement>
                </div>
                <div className="mb-4">
                  <EqualHeightElement name="Title">
                    <div className="title">
                      {
                        <>
                          テックスープ・ジャパン
                          <br />
                          NPO支援プログラム
                        </>
                      }
                    </div>
                  </EqualHeightElement>
                </div>
                <div className="mb-4">
                  <EqualHeightElement name="Text">
                    <div className="text">
                      {
                        <>
                          日本NPOセンターのNPO支援プログラム「テックスープ・ジャパン」に登録の団体限定で、コングラント年間利用料を20%割引します。
                        </>
                      }
                    </div>
                  </EqualHeightElement>
                </div>
                <EqualHeightElement name="Button">
                  <Row justify="center">
                    <Button
                      className="btn"
                      type="link"
                      target="_blank"
                      href={'https://congrant.com/jp/tsj-plan.html'}
                    >
                      詳細・申込はこちら
                    </Button>
                  </Row>
                </EqualHeightElement>
              </StyledDiscountCard>
            </Col>
            <Col className="mb-3" lg={{ span: 8 }} md={{ span: 12 }}>
              <StyledDiscountCard bodyStyle={{ padding: '32px 24px' }}>
                <div className="mb-4">
                  <EqualHeightElement name="Image">
                    <div className="image-wrapper">
                      <Image src={logo_japan_evaluation} preview={false} />
                    </div>
                  </EqualHeightElement>
                </div>
                <div className="mb-4">
                  <EqualHeightElement name="Title">
                    <div className="title">
                      {
                        <>
                          テックスープ・ジャパン
                          <br />
                          NPO支援プログラム
                        </>
                      }
                    </div>
                  </EqualHeightElement>
                </div>
                <div className="mb-4">
                  <EqualHeightElement name="Text">
                    <div className="text">
                      {
                        <>
                          日本非営利組織評価センターよるグッドガバナンス認証、アドバンス評価、ベーシックガバナンスチェックのいずれかの認証を保持する団体を対象にコングラントの年間利用料を20%割引します。
                        </>
                      }
                    </div>
                  </EqualHeightElement>
                </div>
                <EqualHeightElement name="Button">
                  <Row justify="center">
                    <Button
                      className="btn"
                      target="_blank"
                      href={'https://congrant.com/jp/jcne_lp.html'}
                    >
                      詳細・申込はこちら
                    </Button>
                  </Row>
                </EqualHeightElement>
              </StyledDiscountCard>
            </Col>
            <Col className="mb-3" lg={{ span: 8 }} md={{ span: 12 }}>
              <StyledDiscountCard bodyStyle={{ padding: '32px 24px' }}>
                <div className="mb-4">
                  <EqualHeightElement name="Image">
                    <div className="image-wrapper">
                      <Image src={logo_koeki} preview={false} />
                    </div>
                  </EqualHeightElement>
                </div>
                <div className="mb-4">
                  <EqualHeightElement name="Title">
                    <div className="title">
                      {
                        <>
                          テックスープ・ジャパン
                          <br />
                          NPO支援プログラム
                        </>
                      }
                    </div>
                  </EqualHeightElement>
                </div>
                <div className="mb-4">
                  <EqualHeightElement name="Text">
                    <div className="text">
                      {<>全国公益法人協会の会員限定でコングラントの年間利用料を20%割引します。</>}
                    </div>
                  </EqualHeightElement>
                </div>
                <EqualHeightElement name="Button">
                  <Row justify="center">
                    <Button
                      className="btn"
                      type="link"
                      target="_blank"
                      href={'https://koueki.jp/congrant/'}
                    >
                      詳細・申込はこちら
                    </Button>
                  </Row>
                </EqualHeightElement>
              </StyledDiscountCard>
            </Col>
          </EqualHeight>
        </Row>
        <div className="sub-page-title mb-4">特典</div>
        <Row gutter={24} className="mb-10">
          <EqualHeight>
            <Col className="mb-3" lg={{ span: 8 }} md={{ span: 12 }}>
              <StyledDiscountCard bodyStyle={{ padding: '32px 24px' }}>
                <div className="mb-4">
                  <EqualHeightElement name="Image">
                    <div className="image-wrapper">
                      <Image src={logo_yogibo} preview={false} />
                    </div>
                  </EqualHeightElement>
                </div>
                <div className="mb-4">
                  <EqualHeightElement name="Title">
                    <div className="title">{<>Yogobo Social good クーポン</>}</div>
                  </EqualHeightElement>
                </div>
                <div className="mb-4">
                  <EqualHeightElement name="Text">
                    <div className="text">
                      {
                        <>
                          支援者の商品購入が団体支援につながるプログラム。団体別に専用クーポンコードが発行され、当該クーポンを利用して、Yogibo公式オンラインストアで商品が購入された場合、購入された売上の5%が広告費として、Yogiboから各団体に支払われます。
                        </>
                      }
                    </div>
                  </EqualHeightElement>
                </div>
                <EqualHeightElement name="Button">
                  <Row justify="center">
                    <Button
                      className="btn"
                      type="link"
                      target="_blank"
                      href={'https://congrant.com/jp/fundraisingtips/practice/20220621.html'}
                    >
                      詳細・申込はこちら
                    </Button>
                  </Row>
                </EqualHeightElement>
              </StyledDiscountCard>
            </Col>
          </EqualHeight>
        </Row>
      </PageLayout>
    </>
  );
};

export { DiscountPage };

export default DiscountPage;
