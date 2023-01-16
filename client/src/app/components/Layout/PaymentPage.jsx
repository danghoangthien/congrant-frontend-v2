import { useEffect } from 'react';
// STYLE
import { PaymentPageStyle } from './PaymentPageLayout.style';
// ANTD
import { Layout, Row, Image, Col, Space } from 'antd';
// MEDIA QUERY
import Media from 'react-media';
// COMPONENT
import ProjectFooter from './ProjectFooter';
// IMAGE
const Logo = 'https://npojcsa.com/data/media/npojcsa/common/logo.png';

const { Header, Content } = Layout;

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
        <ProjectFooter />
      </PaymentPageStyle>
    </>
  );
};

export default PaymentPage;
