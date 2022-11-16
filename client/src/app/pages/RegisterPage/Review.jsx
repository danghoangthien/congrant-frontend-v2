import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';
import { LoginPageLayout } from 'app/components/Layout/LoginLayout.style';
import { Row, Col, Input, Space, Radio, Tag, Button } from 'antd';
import {
  SettingsInputContainer,
  SettingLabel,
  SettingInput,
  SettingSelect,
} from 'app/pages/GroupSettingsPage/components/Sprites';

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

const RegisterReviewPage = () => {
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
                {'利用審査'}
              </span>
              <p style={{ textAlign: 'center', width: '375px' }}>
                {
                  '次は利用審査を行います。コングラントで寄付募集を開始するには以下の審査情報の入力が必要です。'
                }
              </p>
              <Space className="mt-5">
                <>
                  <StyledTag>{'1'}</StyledTag>
                  <div style={{ minWidth: '95px' }}>{'団体情報'}</div>
                </>
                <>
                  <StyledTag>{'2'}</StyledTag>
                  <div style={{ minWidth: '95px' }}>{'代表者情報'}</div>
                </>
              </Space>
              <Space className="mt-5">
                <>
                  <StyledTag>{'3'}</StyledTag>
                  <div style={{ minWidth: '95px' }}>{'管理者情報'}</div>
                </>
                <>
                  <StyledTag>{'4'}</StyledTag>
                  <div style={{ minWidth: '95px' }}>{'口座情報'}</div>
                </>
              </Space>

              <Space className="mt-5">
                <SettingsInputContainer>
                  <Button type="primary" style={{ width: '375px' }} onClick={() => {}}>
                    {'審査情報の入力に進む'}
                  </Button>
                </SettingsInputContainer>
              </Space>
            </Space>
          </Row>
        </div>
        <Space>
          <Button style={{ width: '400px', textAlign: 'end' }} type="link" onClick={() => {}}>
            {'まずは管理画面を試したい（審査をスキップ）'}
          </Button>
        </Space>
      </LoginPageLayout>
    </>
  );
};

export default RegisterReviewPage;
