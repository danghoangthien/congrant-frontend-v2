import { Row, Col, Button, DatePicker, Space, Radio } from 'antd';

import {
  SettingsInputContainer,
  SettingLabel,
  SettingInput,
  SettingsInputWrapper,
} from './Sprites';

const Representative = () => {
  return (
    <Row>
      <Col span={24} className="mb-6">
        <div className="page-title01">{'代表者'}</div>
      </Col>

      <Col span={24}>
        {/* 代表者名 */}
        <Row className="mb-6">
          <SettingsInputContainer label={<SettingLabel label={'代表者名'} required />}>
            <Col sm={24} md={24} lg={24}>
              <div style={{ width: '100%', maxWidth: 600 }}>
                <SettingsInputWrapper>
                  <SettingInput size="large" placeholder={'例：田中'} style={{ width: '100%' }} />
                  <SettingInput size="large" placeholder={'例：太郎'} style={{ width: '100%' }} />
                </SettingsInputWrapper>
              </div>
            </Col>
          </SettingsInputContainer>
        </Row>

        {/* 代表者名（カナ表記 */}
        <Row className="mb-6">
          <SettingsInputContainer label={<SettingLabel label={'代表者名（カナ表記)'} required />}>
            <Col sm={24} md={24} lg={24}>
              <div style={{ width: '100%', maxWidth: 600 }}>
                <SettingsInputWrapper>
                  <SettingInput size="large" placeholder={'例：タナカ'} style={{ width: '100%' }} />
                  <SettingInput size="large" placeholder={'例：タロウ'} style={{ width: '100%' }} />
                </SettingsInputWrapper>
              </div>
            </Col>
          </SettingsInputContainer>
        </Row>

        {/* 生年月日 */}
        <Row className="mb-6">
          <SettingsInputContainer label={<SettingLabel label={'生年月日'} required />}>
            <Col sm={24} md={24} lg={24}>
              <DatePicker
                size="large"
                placeholder={'yyyy-mm-dd'}
                style={{ width: '100%', maxWidth: 600 }}
              />
            </Col>
          </SettingsInputContainer>
        </Row>

        {/* 直近5年間での特商法に基づく行政処分 */}
        <Row className="mb-6">
          <SettingsInputContainer
            label={<SettingLabel label={'直近5年間での特商法に基づく行政処分'} required />}
          >
            <Col sm={24} md={24} lg={24}>
              <Space direction="horizontal">
                <Radio>{'あり'}</Radio>
                <Radio>{'なし'}</Radio>
              </Space>
            </Col>
          </SettingsInputContainer>
        </Row>

        {/* 直近5年間での消費者契約法違反を理由とする敗訴判決 */}
        <Row>
          <SettingsInputContainer
            label={
              <SettingLabel label={'直近5年間での消費者契約法違反を理由とする敗訴判決'} required />
            }
          >
            <Col sm={24} md={24} lg={24}>
              <Space>
                <Radio>{'あり'}</Radio>
                <Radio>{'なし'}</Radio>
              </Space>
            </Col>
          </SettingsInputContainer>
        </Row>
      </Col>

      <Col span={24} className="mt-14">
        <Button type="primary" size="large">
          <span style={{ fontWeight: '600' }}>{'保存する'}</span>
        </Button>
      </Col>
    </Row>
  );
};

export default Representative;
