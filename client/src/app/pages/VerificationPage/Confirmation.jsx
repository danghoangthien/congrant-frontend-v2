import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';
import { LoginPageLayout } from 'app/components/Layout/LoginLayout.style';
import { Row, Col, Input, Space, Descriptions, Tag, Button } from 'antd';
import {
  SettingsInputContainer,
  SettingLabel,
  SettingInput,
  SettingSelect,
} from 'app/pages/CorporationSettingPage/components/Sprites';
import { DescriptionStyle } from 'app/pages/IndividualPage/components/BasicInfo.style';
import { BoldLabel, CopiableText } from 'app/pages/IndividualPage/components/Sprites';

// Icons
import LogoText from 'styles/assets/logo_text.svg';
import LogoIcon from 'styles/assets/logo_icon.svg';
import { Link } from 'react-router-dom';

const StyledTag = styled(Tag)`
  width: 32px;
  height: 32px;
  border-radius: 24px;
  line-height: 32px;
  text-align: center;
  color: #ffffff;
  font-weight: 600;
  font-size: 16px;
  background: rgba(0, 0, 0, 0.5);
`;

const Confirmation = () => {
  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{''}</title>
          <meta name="description" content={'...'} />
        </Helmet>
      </>
    );
  };

  return (
    <>
      {renderPageTitle()}
      <LoginPageLayout>
        <Space className="mb-5" align="center">
          <img className="logo-icon" src={LogoIcon} alt="コングラントロゴ" />
          <img className="logo-text" src={LogoText} alt="コングラントロゴ" />
        </Space>
        <div className="item login-container">
          <Row className="mb-2">
            <Space
              className="mb-2 px-10 py-5"
              direction="vertical"
              align="center"
              size="middle"
              style={{ display: 'flex' }}
            >
              <span className="page-sub-title" style={{ fontSize: '28px' }}>
                {'確認'}
              </span>
              <p style={{ textAlign: 'center', width: '375px' }}>
                {'登録いただいた内容に誤りがないかご確認ください。'}
              </p>
              <Row className="item mb-8" style={{ width: '600px' }}>
                <DescriptionStyle>
                  <Descriptions
                    title={
                      <Row>
                        <Col sm={24} md={20} lg={20}>
                          {'団体情報'}
                        </Col>
                        <Col sm={24} md={4} lg={4} type="flex" align="right">
                          <Button>{'修正'}</Button>
                        </Col>
                      </Row>
                    }
                    bordered
                    style={{ width: '600px' }}
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
              </Row>
              <Row className="item mb-8" style={{ width: '600px' }}>
                <DescriptionStyle>
                  <Descriptions
                    title={
                      <Row>
                        <Col sm={24} md={20} lg={20}>
                          {'代表者情報'}
                        </Col>
                        <Col sm={24} md={4} lg={4} type="flex" align="right">
                          <Button>{'修正'}</Button>
                        </Col>
                      </Row>
                    }
                    bordered
                    style={{ width: '600px' }}
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
              </Row>
              <Row className="item mb-8" style={{ width: '600px' }}>
                <DescriptionStyle>
                  <Descriptions
                    title={
                      <Row>
                        <Col sm={24} md={20} lg={20}>
                          {'管理者情報'}
                        </Col>
                        <Col sm={24} md={4} lg={4} type="flex" align="right">
                          <Button>{'修正'}</Button>
                        </Col>
                      </Row>
                    }
                    bordered
                    style={{ width: '600px' }}
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
              </Row>
              <Row className="item mb-8" style={{ width: '600px' }}>
                <DescriptionStyle>
                  <Descriptions
                    title={
                      <Row>
                        <Col sm={24} md={20} lg={20}>
                          {'口座情報'}
                        </Col>
                        <Col sm={24} md={4} lg={4} type="flex" align="right">
                          <Button>{'修正'}</Button>
                        </Col>
                      </Row>
                    }
                    bordered
                    style={{ width: '600px' }}
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
              </Row>

              <Space className="mt-5">
                <SettingsInputContainer>
                  <Link to={`/register-success`}>
                    <Button type="primary" style={{ width: '600px' }} onClick={() => {}}>
                      {'審査開始'}
                    </Button>
                  </Link>
                </SettingsInputContainer>
              </Space>
            </Space>
          </Row>
        </div>
        <Space>
          <Button style={{ width: '700px', textAlign: 'end' }} type="link" onClick={() => {}}>
            {'まずは管理画面を試したい（審査をスキップ）'}
          </Button>
        </Space>
      </LoginPageLayout>
    </>
  );
};

export default Confirmation;
