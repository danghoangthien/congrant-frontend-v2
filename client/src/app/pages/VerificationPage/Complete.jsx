import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';
import { LoginPageLayout } from 'app/components/Layout/LoginLayout.style';
import { Row, Col, Image, Space, Descriptions, Tag, Button } from 'antd';
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

const Success = () => {
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
                {'審査を開始しました'}
              </span>
              <p style={{ textAlign: 'center', width: '375px' }}>
                {
                  '審査は通常1〜2営業日で完了します。その間にプロジェクトページの作成を進めましょう。'
                }
              </p>
              <Row className="mb-10">
                <Col sm={24} md={24} lg={24} type="flex" align="center">
                  <Image width={400} height={427} src="/istockphoto-1248597477-1024x1024.jpeg" />
                </Col>
              </Row>
              <Space className="mt-5">
                <SettingsInputContainer>
                  <Button type="primary" style={{ width: '600px' }} onClick={() => {}}>
                    {'ホームへ'}
                  </Button>
                </SettingsInputContainer>
              </Space>
            </Space>
          </Row>
        </div>
      </LoginPageLayout>
    </>
  );
};

export default Success;
