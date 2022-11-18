import { Row, Col, Button, Space } from 'antd';
import { SettingsInputContainer, SettingLabel, SettingInput, SettingInfoLabel } from './Sprites';
import ChangeEmail from './ChangeEmail';
import ChangePassword from './ChangePassword';

const BasicInformation = () => {
  return (
    <>
      <div className="item ml-5">
        <Row className="mb-5">
          <Col sm={24} md={24} lg={24}>
            <span className="page-title">{'基本情報'}</span>
          </Col>
        </Row>
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingLabel label={'ユーザー名'} required />}>
            <SettingInput placeholder={'荒木雄大'} />
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingLabel label={'メールアドレス'} required />}>
            <Space direction="vertical" align="end">
              <SettingInput placeholder={'荒木雄大'} disabled />
              <ChangeEmail />
            </Space>
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingLabel label={'メールアドレス'} required />}>
            <Space direction="vertical" align="end">
              <SettingInput placeholder={'荒木雄大'} disabled />
              <ChangePassword />
            </Space>
            <Col sm={24} md={24} lg={24} type="flex" align="right"></Col>
          </SettingsInputContainer>
        </Row>
        <Row className="item mt-15">
          <Col sm={24} md={24} lg={24}>
            <Button className="active" type="primary">
              <span className="ml-2">{'保存する'}</span>
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default BasicInformation;
