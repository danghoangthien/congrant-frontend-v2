import { Row, Col, Button } from 'antd';
import {
  SettingsInputContainer,
  SettingLabel,
  SettingInput,
  SettingInputPassword,
  HorizontalInputContainer,
} from 'utils/Sprites';
import ChangeEmail from './ChangeEmail';
import ChangePassword from './ChangePassword';

const BasicInformation = () => {
  return (
    <Row>
      <Col span={24} className="mb-6">
        <div className="page-title01">{'基本情報'}</div>
      </Col>

      {/* ユーザー名 */}
      <Col span={24}>
        <Row>
          <Col span={24} className="mb-6" style={{ width: '100%', maxWidth: 600 }}>
            <HorizontalInputContainer label={<SettingLabel required label={'生年月日'} />}>
              <Row gutter={16} className="horizontal-input-wrapper">
                <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }}>
                  <SettingInput
                    size="large"
                    style={{ width: '100%', maxWidth: 600 }}
                    placeholder={'荒木'}
                  />
                </Col>
                <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }}>
                  <SettingInput
                    size="large"
                    style={{ width: '100%', maxWidth: 600 }}
                    placeholder={'雄大'}
                  />
                </Col>
              </Row>
            </HorizontalInputContainer>
          </Col>

          {/* メールアドレス */}
          <Col span={24}>
            <div style={{ width: '100%', maxWidth: 600 }}>
              <SettingsInputContainer label={<SettingLabel label={'メールアドレス'} required />}>
                <Row className="mb-2">
                  <SettingInput size="large" placeholder={'araki@congrant.com'} disabled />
                </Row>
                <Row align="end">
                  <ChangeEmail />
                </Row>
              </SettingsInputContainer>
            </div>
          </Col>

          {/* パスワード */}
          <Col span={24}>
            <div style={{ width: '100%', maxWidth: 600 }}>
              <SettingsInputContainer label={<SettingLabel label={'パスワード'} required />}>
                <Row className="mb-2">
                  <SettingInputPassword size="large" placeholder={'********'} disabled />
                </Row>
                <Row align="end">
                  <ChangePassword />
                </Row>
              </SettingsInputContainer>
            </div>
          </Col>
        </Row>
      </Col>

      <Col span={24} className="item mt-15">
        <Button size="large" type="primary">
          <span style={{ fontWeight: '600' }}>{'保存する'}</span>
        </Button>
      </Col>
    </Row>
  );
};

export default BasicInformation;
