import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { LoginPageLayout, StyledVericationBox } from 'app/components/Layout/LoginLayout.style';
import { Row, Col, Input, Space, Radio, Tag, Button } from 'antd';
import {
  SettingsInputContainer,
  SettingLabel,
  SettingInput,
  SettingSelect,
} from 'app/pages/CorporationSettingPage/components/Sprites';

// Icons
import LogoText from 'styles/assets/logo_text.svg';
import LogoIcon from 'styles/assets/logo_icon.svg';

const RegisterCompletePage = () => {
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
                {'コングラントIDの登録'}
              </span>
              <p style={{ textAlign: 'center', width: '375px' }}>
                {'仮登録が完了しました。'}
                <br />
                {'はじめに、コングラントIDを登録してください。'}
                <br />
                <span style={{ color: '#FF4D4F' }}>{'※登録後の変更はできません'}</span>
              </p>
              <SettingsInputContainer
                label={<SettingLabel label={'コングラントID（半角英数3文字以上）'} required />}
              >
                <SettingInput placeholder={'abczaidan'} style={{ width: '375px' }} />
              </SettingsInputContainer>
              <SettingsInputContainer
                label={
                  <SettingLabel
                    label={
                      <>
                        <p style={{ textAlign: 'center', width: '375px' }}>
                          {'コングラントIDはプロジェクトページのURLの一部になります。'}
                          {
                            '団体名の略語などを登録してください。例）https://congrant.com/abczaidan/XXXXX'
                          }
                        </p>
                      </>
                    }
                  />
                }
              />
              <Space className="mt-5">
                <SettingsInputContainer>
                  <Button type="primary" style={{ width: '375px' }} onClick={() => {}}>
                    {'登録する（登録後の変更不可）'}
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

export default RegisterCompletePage;
