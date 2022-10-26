import { Row, Col, Button } from 'antd';
import {
  SettingsInputContainer,
  SettingInput,
  SettingInfoLabel,
} from '../../GroupSettingsPage/components/Sprites';

const AccessAnalysis = () => {
  return (
    <>
      <div className="item ml-5">
        <Row className="mb-5">
          <Col sm={24} md={24} lg={24}>
            <span className="page-title">{'名寄せ先の選択'}</span>
          </Col>
        </Row>
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingInfoLabel label={'Google アナリティクス'} />}>
            <SettingInput placeholder={'G-XXXXXXXXX'} />
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingInfoLabel label={'Google タグマネージャー'} />}>
            <SettingInput placeholder={'G-XXXXXXXXX'} />
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

export default AccessAnalysis;
