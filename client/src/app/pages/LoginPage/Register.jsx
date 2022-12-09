import { Helmet } from 'react-helmet-async';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Row, Col, Input, Space, Checkbox, Button } from 'antd';

import {
  SettingsInputContainer,
  SettingLabel,
} from 'app/pages/CorporationSettingPage/components/Sprites';

const Register = () => {
  const history = useHistory();

  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'お試し登録'}</title>
          <meta name="description" content={'...'} />
        </Helmet>
      </>
    );
  };

  return (
    <>
      {renderPageTitle()}
      <div className="item pa-10">
        <Row className="mb-2">
          <Col sm={24} md={24} lg={24} type="flex" align="center">
            <span className="page-sub-title" style={{ fontSize: '28px' }}>
              {'お試し登録'}
            </span>
          </Col>
        </Row>

        <Row>
          <Col className="mb-6" span={24}>
            <SettingsInputContainer label={<SettingLabel label={'団体名'} />}>
              <Input size="large" placeholder="NPO法人コングラント" />
            </SettingsInputContainer>
          </Col>
          <Col className="mb-6" span={24}>
            <SettingsInputContainer label={<SettingLabel label={'担当者名'} />}>
              <Space size={16}>
                <Input size="large" placeholder="姓" />
                <Input size="large" placeholder="名" />
              </Space>
            </SettingsInputContainer>
          </Col>
          <Col className="mb-6" span={24}>
            <SettingsInputContainer label={<SettingLabel label={'担当者メールアドレス'} />}>
              <Input size="large" placeholder="tanaka@congrant.com" />
            </SettingsInputContainer>
          </Col>
          <Col className="mb-6" span={24}>
            <SettingsInputContainer label={<SettingLabel label={'パスワード'} />}>
              <Input.Password size="large" placeholder="＊＊＊＊＊＊＊＊＊＊" />
            </SettingsInputContainer>
          </Col>
          <Col className="mb-6" span={24}>
            <SettingsInputContainer>
              <Checkbox>
                <Link to={'/'}>利用規約・プライバシーポリシー</Link>
                {'に同意する'}
              </Checkbox>
            </SettingsInputContainer>
          </Col>
        </Row>

        <Button
          type="primary"
          size="large"
          style={{ width: '100%' }}
          onClick={() => {
            history.push('/app/register/verify_email');
          }}
        >
          {'お試し登録'}
        </Button>
      </div>
    </>
  );
};

export default Register;
