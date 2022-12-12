// META情報
import { Helmet } from 'react-helmet-async';
// ANTD
import { Row, Col, Button } from 'antd';
// SPRITE
import { SettingsInputContainer, SettingInput, SettingInfoLabel } from 'utils/Sprites';

const renderPageTitle = () => {
  return (
    <>
      <Helmet>
        <title>{'アクセス分析'}</title>
        <meta name="description" content={'...'} />
      </Helmet>
    </>
  );
};

const AccessAnalysis = () => {
  return (
    <>
      {renderPageTitle()}
      <Row className="mb-8">
        <Col sm={24} md={24} lg={24}>
          <span className="page-title01">{'アクセス分析'}</span>
        </Col>
      </Row>

      <Row className="mb-2">
        <Col className="mb-6" span={24}>
          <SettingsInputContainer label={<SettingInfoLabel label={'Google アナリティクス'} />}>
            <SettingInput
              size="large"
              style={{ width: '100%', maxWidth: 600 }}
              placeholder={'G-XXXXXXXXX'}
            />
          </SettingsInputContainer>
        </Col>
        <Col span={24}>
          <SettingsInputContainer label={<SettingInfoLabel label={'Google タグマネージャー'} />}>
            <SettingInput
              size="large"
              style={{ width: '100%', maxWidth: 600 }}
              placeholder={'G-XXXXXXXXX'}
            />
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
