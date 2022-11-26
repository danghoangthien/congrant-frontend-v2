import { Row, Col, Button } from 'antd';

import { SettingsInputContainer, SettingLabel, SettingInput } from './Sprites';

const AccountInformation = () => {
  return (
    <Row>
      <Col span={24} className="mb-6">
        <div className="page-title01">{'口座情報'}</div>
      </Col>

      <Col span={24}>
        {/* 銀行名 */}
        <Row className="mb-6">
          <SettingsInputContainer label={<SettingLabel label={'銀行名'} required />}>
            <Col sm={24} md={24} lg={24}>
              <SettingInput placeholder={'例：XX銀行'} />
            </Col>
          </SettingsInputContainer>
        </Row>

        {/* 支店名 */}
        <Row className="mb-6">
          <SettingsInputContainer label={<SettingLabel label={'支店名'} required />}>
            <Col sm={24} md={24} lg={24}>
              <SettingInput placeholder={'例：XX支店'} />
            </Col>
          </SettingsInputContainer>
        </Row>

        {/* 普通 */}
        <Row className="mb-6">
          <SettingsInputContainer label={<SettingLabel label={'口座種別'} />}>
            {'普通'}
          </SettingsInputContainer>
        </Row>

        {/* 普通 */}
        <Row className="mb-6">
          <SettingsInputContainer label={<SettingLabel label={'口座番号'} required />}>
            <Col sm={24} md={24} lg={24}>
              <SettingInput placeholder={'例：1234567'} />
            </Col>
          </SettingsInputContainer>
        </Row>

        {/* 口座名義 */}
        <Row>
          <SettingsInputContainer label={<SettingLabel label={'口座名義'} required />}>
            <Col sm={24} md={24} lg={24}>
              <SettingInput placeholder={'例：トクテイヒエイリカツドウホウジンコングラント'} />
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

export default AccountInformation;
