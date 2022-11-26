import { ProjectClientPageStyle } from './ProjectClientPageLayout.style';
import { Layout, Row, Image, Col, Space } from 'antd';
// IMAGE
// import Logo from 'styles/assets/logo_congrant_gray.svg';

const { Header, Footer, Content } = Layout;

const ProjectClientPage = ({ children }) => {
  return (
    <>
      <ProjectClientPageStyle>
        {/* ヘッダー・Header */}
        <Header className="project-client-header">
          <Row justify="space-between">
            <Col>
              <Space>
                <div className="organization-logo">
                  <Image
                    preview={false}
                    // width={142}
                    src="https://congrant.com/img/groups/98/logo/logo.png"
                  />
                </div>
                <div className="organization-name">特定非営利活動法人 日本こども支援協会</div>
              </Space>
            </Col>
            <Col>Translate</Col>
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
                  src="https://congrant.com/img/groups/98/logo/logo.png"
                />
              </div>
            </Col>
            <Col type="flex" align="center" span={24}>
              <div className="copy-right">
                このページは寄付・会費決済サービス「コングラント」で作成されています。
              </div>
            </Col>
          </Row>
        </Footer>
      </ProjectClientPageStyle>
    </>
  );
};

export default ProjectClientPage;
