import React, { useEffect } from 'react';
import { PaymentPageStyle } from './PaymentPageLayout.style';
import { Layout, Row, Image, Col, Space } from 'antd';
import Media from 'react-media';
import CongrantLogo from 'styles/assets/logo_congrant_gray.svg';
// IMAGE
const Logo = 'https://npojcsa.com/data/media/npojcsa/common/logo.png';

const { Header, Content, Footer } = Layout;

const PaymentPage = ({ children }) => {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: 'jp',
        includedLanguages: 'en,ja,ko,zh-CN',
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        // layout: window.google.translate.TranslateElement.InlineLayout.TOP_LEFT,
        multilanguagePage: true,
      },
      'google_translate_element',
    );
  };

  useEffect(() => {
    var addScript = document.createElement('script');
    addScript.setAttribute(
      'src',
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit',
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  return (
    <>
      <PaymentPageStyle>
        {/* ヘッダー・Header */}
        <Header className="project-client-header">
          <Row
            className="header-wrapper"
            justify="space-between"
            align="middle"
            style={{ width: '100%' }}
          >
            <Col span={24}>
              <Row justify="space-between">
                <Col span={24}>
                  <Row align="middle" justify="space-between">
                    {/* LOGO */}
                    <Col>
                      <Space size={20}>
                        <div className="organization-logo">
                          <Image
                            preview={false}
                            // width={142}
                            src={Logo}
                          />
                        </div>
                        <Media
                          query="(min-width: 992px)"
                          render={() => (
                            <div className="organization-name">
                              特定非営利活動法人 日本こども支援協会
                            </div>
                          )}
                        />
                      </Space>
                    </Col>
                    <Col>
                      <div id="google_translate_element"></div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Header>

        {/* メイン・Main Content */}
        <Content>{children}</Content>

        {/* フッター・Footer */}
        <Footer className="project-client-footer">
          <Row>
            <Col className="mb-3" type="flex" align="center" span={24}>
              <div className="footer-logo">
                <Media queries={{ small: '(max-width: 991px)' }}>
                  {matches =>
                    matches.small ? (
                      <Image
                        preview={false}
                        // width={154}
                        height={27}
                        src={CongrantLogo}
                      />
                    ) : (
                      <Image
                        preview={false}
                        // width={154}
                        height={35}
                        src={CongrantLogo}
                      />
                    )
                  }
                </Media>
              </div>
            </Col>
            <Col type="flex" align="center" span={24}>
              <div className="copy-right">
                <Media queries={{ small: '(max-width: 991px)' }}>
                  {matches =>
                    matches.small ? (
                      <span>
                        このページは寄付・会費決済サービス
                        <br />
                        <a
                          className="external-link"
                          href="http://congrant.com/jp/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          コングラント
                        </a>
                        で作成されています。
                      </span>
                    ) : (
                      <span>
                        このページは寄付・会費決済サービス「
                        <a
                          className="external-link"
                          href="http://congrant.com/jp/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          コングラント
                        </a>
                        」で作成されています。
                      </span>
                    )
                  }
                </Media>
              </div>
            </Col>
          </Row>
        </Footer>
      </PaymentPageStyle>
    </>
  );
};

export default PaymentPage;
