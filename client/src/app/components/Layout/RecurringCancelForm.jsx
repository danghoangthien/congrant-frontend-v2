import { useEffect } from 'react';
// ANTD
import { Layout, Row, Image, Col } from 'antd';
// STYLE
import { RecurringCancelFormStyle } from './RecurringCancelFormLayout.style';
// MEDIA QUERY
import Media from 'react-media';
// IMAGE
import CongrantLogo from 'styles/assets/logo_congrant_gray.svg';
const Logo = 'https://npojcsa.com/data/media/npojcsa/common/logo.png';

const { Header, Footer, Content } = Layout;

const RecurringCancelForm = ({ children }) => {
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
      <RecurringCancelFormStyle>
        {/* ヘッダー・Header */}
        <Header className="project-client-header">
          <Row
            className="header-wrapper"
            justify="space-between"
            align="middle"
            style={{ width: '100%' }}
          >
            <Col span={24}>
              <Row justify="space-between" ali>
                <Col lg={{ span: 24 }}>
                  <Row align="middle" justify="space-between">
                    <Col>
                      <div className="logo-wrapper">
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
                      </div>
                    </Col>
                    <Col style={{ display: 'flex' }}>
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
                <Image
                  preview={false}
                  // width={154}
                  src={CongrantLogo}
                />
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
                        「コングラント」で作成されています。
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
      </RecurringCancelFormStyle>
    </>
  );
};

export default RecurringCancelForm;
