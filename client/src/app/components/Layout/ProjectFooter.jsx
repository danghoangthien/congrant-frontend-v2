// ANTD
import { Layout, Row, Image, Col } from 'antd';
// MEDIA QUERY
import Media from 'react-media';
// IMAGE
import CongrantLogo from 'styles/assets/logo_congrant_gray.svg';
import CongrantLogoSp from 'styles/assets/logo_congrant_gray_sp.svg';
// STYLE
import { FooterStyle } from './ProjectFooter.style';
const { Footer } = Layout;

const ProjectFooter = () => {
  return (
    <FooterStyle>
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
                      src={CongrantLogoSp}
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
          <Col type="flex" align="middle" span={24}>
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
    </FooterStyle>
  );
};

export default ProjectFooter;
