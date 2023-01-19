import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { LoginPageLayout } from 'app/components/Layout/LoginLayout.style';
import { Row, Col, Space, Card, Button, Image } from 'antd';
// IMAGE
import CompleteImage from 'styles/assets/img_verification_complete.png';
import Logo from 'styles/assets/logo_congrant.svg';

const Success = () => {
  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'利用審査'}</title>
          <meta name="description" content={'...'} />
        </Helmet>
      </>
    );
  };

  return (
    <>
      {renderPageTitle()}
      <LoginPageLayout>
        <Space className="mb-8" align="center">
          <img className="logo-icon" src={Logo} alt="コングラントロゴ" />
        </Space>

        <Card style={{ width: '600px' }} className="login-card" bodyStyle={{ padding: '40px' }}>
          <Row justify="center">
            <Col className="mb-4" span={24}>
              <Row justify="center">
                <div className="page-title">{'審査を開始しました'}</div>
              </Row>
            </Col>
            <Col className="mb-8" span={24}>
              <div style={{ fontSize: '16px', textAlign: 'center', lineHeight: '1.5' }}>
                審査は通常1〜2営業日で完了します。
                <br />
                その間にプロジェクトページの作成を進めましょう。
              </div>
            </Col>
            <Col span={24} type="flex" align="center">
              <Image width={400} src={CompleteImage} preview={false} />
            </Col>
            <Col span={24}>
              <Link to={'/app/home'}>
                <Button size="large" type="primary" style={{ fontWeight: '600', width: '100%' }}>
                  {'ホームへ'}
                </Button>
              </Link>
            </Col>
          </Row>
        </Card>
      </LoginPageLayout>
    </>
  );
};

export default Success;
