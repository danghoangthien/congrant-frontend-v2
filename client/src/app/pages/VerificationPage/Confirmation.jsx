import { Helmet } from 'react-helmet-async';
import { Link, useHistory } from 'react-router-dom';
import { LoginPageLayout } from 'app/components/Layout/LoginLayout.style';
import { Row, Col, Card, Descriptions, Button } from 'antd';
import { DescriptionStyle } from 'app/pages/IndividualPage/components/BasicInfo.style';
// REDUX
import { useDispatch } from 'react-redux';
// SPRITES
import { BoldLabel } from 'utils/Sprites';
// IMAGE
import { LogoBox } from './components/Logo';
import './Models/index';

const Confirmation = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'利用審査｜確認'}</title>
          <meta name="description" content={'...'} />
        </Helmet>
      </>
    );
  };

  return (
    <>
      {renderPageTitle()}
      <LoginPageLayout>
        <LogoBox />

        <Card className="login-card" bodyStyle={{ padding: '40px' }} style={{ width: '680px' }}>
          {/* タイトル */}
          <Row className="mb-8">
            <Col className="mb-4" sm={24} md={24} lg={24}>
              <div style={{ textAlign: 'center', fontSize: '28px', fontWeight: '600' }}>
                {'確認'}
              </div>
            </Col>
            <Col sm={24} md={24} lg={24} type="flex" align="center">
              <div style={{ fontSize: '16px' }}>
                {'登録いただいた内容に誤りがないかご確認ください。'}
              </div>
            </Col>
          </Row>

          {/* 団体情報 */}
          <Row className="mb-8">
            <Col span={24}>
              <DescriptionStyle className="no-border">
                <Descriptions
                  title={
                    <Row justify="space-between" align="middle">
                      <Col>
                        <div className="page-title">{'団体情報'}</div>
                      </Col>
                      <Col>
                        <Button
                          onClick={() => {
                            dispatch.registerStep.setActive('1');
                            history.push(`/verification/organisation`);
                          }}
                        >
                          {'修正'}
                        </Button>
                      </Col>
                    </Row>
                  }
                  bordered
                  column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
                >
                  <Descriptions.Item label={<BoldLabel label="Title" />}>
                    {'text'}
                  </Descriptions.Item>
                  <Descriptions.Item label={<BoldLabel label="Title" />}>
                    {'text'}
                  </Descriptions.Item>
                  <Descriptions.Item label={<BoldLabel label="Title" />}>
                    {'text'}
                  </Descriptions.Item>
                  <Descriptions.Item label={<BoldLabel label="Title" />}>
                    {'text'}
                  </Descriptions.Item>
                </Descriptions>
              </DescriptionStyle>
            </Col>
          </Row>

          {/* 代表者情報 */}
          <Row className="mb-8">
            <Col span={24}>
              <DescriptionStyle className="no-border">
                <Descriptions
                  title={
                    <Row justify="space-between" align="middle">
                      <Col>
                        <div className="page-title">{'代表者情報'}</div>
                      </Col>
                      <Col>
                        <Button
                          onClick={() => {
                            dispatch.registerStep.setActive('2');
                            history.push(`/verification/organisation`);
                          }}
                        >
                          {'修正'}
                        </Button>
                      </Col>
                    </Row>
                  }
                  bordered
                  column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
                >
                  <Descriptions.Item label={<BoldLabel label="Title" />}>
                    {'text'}
                  </Descriptions.Item>
                  <Descriptions.Item label={<BoldLabel label="Title" />}>
                    {'text'}
                  </Descriptions.Item>
                  <Descriptions.Item label={<BoldLabel label="Title" />}>
                    {'text'}
                  </Descriptions.Item>
                  <Descriptions.Item label={<BoldLabel label="Title" />}>
                    {'text'}
                  </Descriptions.Item>
                </Descriptions>
              </DescriptionStyle>
            </Col>
          </Row>

          {/* 管理者情報 */}
          <Row className="mb-8">
            <Col span={24}>
              <DescriptionStyle className="no-border">
                <Descriptions
                  title={
                    <Row justify="space-between" align="middle">
                      <Col>
                        <div className="page-title">{'管理者情報'}</div>
                      </Col>
                      <Col>
                        <Button
                          onClick={() => {
                            dispatch.registerStep.setActive('3');
                            history.push(`/verification/organisation`);
                          }}
                        >
                          {'修正'}
                        </Button>
                      </Col>
                    </Row>
                  }
                  bordered
                  column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
                >
                  <Descriptions.Item label={<BoldLabel label="Title" />}>
                    {'text'}
                  </Descriptions.Item>
                  <Descriptions.Item label={<BoldLabel label="Title" />}>
                    {'text'}
                  </Descriptions.Item>
                  <Descriptions.Item label={<BoldLabel label="Title" />}>
                    {'text'}
                  </Descriptions.Item>
                  <Descriptions.Item label={<BoldLabel label="Title" />}>
                    {'text'}
                  </Descriptions.Item>
                </Descriptions>
              </DescriptionStyle>
            </Col>
          </Row>

          {/* 口座情報 */}
          <Row>
            <Col span={24}>
              <DescriptionStyle className="no-border">
                <Descriptions
                  title={
                    <Row justify="space-between" align="middle">
                      <Col>
                        <div className="page-title">{'口座情報'}</div>
                      </Col>
                      <Col>
                        <Button
                          onClick={() => {
                            dispatch.registerStep.setActive('4');
                            history.push(`/verification/organisation`);
                          }}
                        >
                          {'修正'}
                        </Button>
                      </Col>
                    </Row>
                  }
                  bordered
                  column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
                >
                  <Descriptions.Item label={<BoldLabel label="Title" />}>
                    {'text'}
                  </Descriptions.Item>
                  <Descriptions.Item label={<BoldLabel label="Title" />}>
                    {'text'}
                  </Descriptions.Item>
                  <Descriptions.Item label={<BoldLabel label="Title" />}>
                    {'text'}
                  </Descriptions.Item>
                  <Descriptions.Item label={<BoldLabel label="Title" />}>
                    {'text'}
                  </Descriptions.Item>
                </Descriptions>
              </DescriptionStyle>
            </Col>
          </Row>

          <Row className="mt-6">
            <Col span={24}>
              <Link to={`/verification/complete`}>
                <Button size="large" type="primary" style={{ width: '100%', fontWeight: '600' }}>
                  {'審査開始'}
                </Button>
              </Link>
            </Col>
          </Row>
        </Card>
      </LoginPageLayout>
    </>
  );
};

export default Confirmation;
