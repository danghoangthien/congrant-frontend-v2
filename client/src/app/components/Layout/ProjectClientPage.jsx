import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
// ANTD
import { Layout, Row, Image, Col, Space, Button } from 'antd';
// STYLE
import { ProjectClientPageStyle } from './ProjectClientPageLayout.style';
// MEDIA QUERY
import Media from 'react-media';
// IMAGE
import CongrantLogo from 'styles/assets/logo_congrant_gray.svg';
const Logo = 'https://npojcsa.com/data/media/npojcsa/common/logo.png';

const { Header, Footer, Content } = Layout;
const MAIN_COLOR = '#e34855';

const ProjectClientPage = ({ children }) => {
  const history = useHistory();
  const params = useParams();

  let link;
  if (params.id === '1') {
    link = `/payment#form`;
  } else if (params.id === '2') {
    link = `/payment?type=monthly#form`;
  } else if (params.id === '3') {
    link = `/payment?type=crowdfunding#form`;
  }

  console.log(link);

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
      <ProjectClientPageStyle>
        {/* ヘッダー・Header */}
        <Header className="project-client-header">
          <Row
            className="header-wrapper"
            justify="space-between"
            align="middle"
            style={{ width: '100%' }}
          >
            <Col span={24}>
              <Row justify="space-between" align="middle">
                <Col span={24}>
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
                    <Col>
                      <Row align="middle">
                        <div id="google_translate_element"></div>
                        <Media
                          query="(min-width: 992px)"
                          render={() => (
                            <Button
                              size="large"
                              type="primary"
                              onClick={() => {
                                history.push(link);
                              }}
                              className="h-btn"
                              style={{
                                marginLeft: 20,
                                width: '148px',
                                borderColor: MAIN_COLOR,
                                background: `linear-gradient(95.98deg, ${MAIN_COLOR} 14.71%, #F11628 91.59%)`,
                              }}
                            >
                              寄付する
                            </Button>
                          )}
                        />
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Header>

        {/* メイン・Main Content */}
        <Content link={link}>{children}</Content>

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

        <Media
          query="(max-width: 991px)"
          render={() => (
            <div className="fixed-btn-wrapper">
              <Button
                size="large"
                type="primary"
                onClick={() => {
                  history.push(link);
                }}
                style={{
                  width: '100%',
                  borderColor: MAIN_COLOR,
                  background: `linear-gradient(95.98deg, ${MAIN_COLOR} 14.71%, #F11628 91.59%)`,
                }}
              >
                寄付する
              </Button>
            </div>
          )}
        />
      </ProjectClientPageStyle>
    </>
  );
};

export default ProjectClientPage;
