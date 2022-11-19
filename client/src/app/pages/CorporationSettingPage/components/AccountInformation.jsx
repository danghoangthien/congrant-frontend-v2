import { Row, Col, Button, DatePicker, Space, Radio } from 'antd';

import { SettingsInputContainer, SettingLabel, SettingInput } from './Sprites';

const AccountInformation = () => {
  return (
    <>
      <div className="item ml-5">
        <Row className="mb-5">
          <Col sm={24} md={24} lg={24}>
            <span className="page-title">{'口座情報'}</span>
          </Col>
        </Row>
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingLabel label={'銀行名'} required />}>
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <SettingInput placeholder={'例：XX銀行'} />
            </Col>
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingLabel label={'支店名'} required />}>
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <SettingInput placeholder={'例：XX支店'} />
            </Col>
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingLabel label={'金融機関コード'} required />}>
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <SettingInput placeholder={'例：1234'} />
            </Col>
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingLabel label={'支店コード'} required />}>
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <SettingInput placeholder={'例：1234'} />
            </Col>
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingLabel label={'口座種別'} required />}>
            {'普通'}
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingLabel label={'口座番号'} required />}>
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <SettingInput placeholder={'例：1234567'} />
            </Col>
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingLabel label={'口座名義'} required />}>
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <SettingInput placeholder={'例：トクテイヒエイリカツドウホウジンコングラント'} />
            </Col>
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

export default AccountInformation;
