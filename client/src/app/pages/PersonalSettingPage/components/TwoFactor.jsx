import { Row, Col, Button } from 'antd';
import { SettingsInputContainer, SettingLabel } from './Sprites';

const TwoFactor = () => {
  return (
    <>
      <div className="item ml-5">
        <Row className="mb-5">
          <Col sm={24} md={24} lg={24}>
            <span className="page-title">{'2段階認証'}</span>
          </Col>
        </Row>
        <Row className="item mb-2">
          <SettingsInputContainer
            label={<SettingLabel label={'SMSでの2段階認証を設定できます。'} />}
          />
        </Row>
        <Row className="item">
          <Col sm={24} md={24} lg={24}>
            <Button className="active" type="primary">
              <span className="ml-2">{'2段階認証を設定する'}</span>
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default TwoFactor;
