import { Row, Col, Button } from 'antd';
import {
  SettingsInputContainer,
  SettingInput,
  SettingInfoLabel,
} from '../../CorporationSettingPage/components/Sprites';

const AccessAnalysis = () => {
  return (
    <>
      <Row className="mb-8">
        <Col sm={24} md={24} lg={24}>
          <span className="page-title01">{'アクセス分析'}</span>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col className="mb-6" span={24}>
          <SettingsInputContainer label={<SettingInfoLabel label={'Google アナリティクス'} />}>
            <SettingInput placeholder={'G-XXXXXXXXX'} />
          </SettingsInputContainer>
        </Col>
        <Col span={24}>
          <SettingsInputContainer label={<SettingInfoLabel label={'Google タグマネージャー'} />}>
            <SettingInput placeholder={'G-XXXXXXXXX'} />
          </SettingsInputContainer>
        </Col>
      </Row>
      <Row className="mt-10">
        <Col sm={24} md={24} lg={24}>
          <Button size="large" type="primary">
            <span style={{ fontWeight: '600' }}>{'保存する'}</span>
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default AccessAnalysis;
