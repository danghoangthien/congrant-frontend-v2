import { Row, Col, Button, DatePicker, Space, Radio } from 'antd';

import { SettingsInputContainer, SettingLabel, SettingInput } from 'utils/Sprites';

const Representative = () => {
  return (
    <>
      <div className="item ml-5">
        <Row className="mb-5">
          <Col sm={24} md={24} lg={24}>
            <span className="page-title">{'代表者'}</span>
          </Col>
        </Row>
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingLabel label={'代表者名'} required />}>
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <Space direction="horizontal">
                <SettingInput placeholder={'例：田中'} style={{ width: '295px' }} />
                <SettingInput placeholder={'例：太郎'} style={{ width: '295px' }} />
              </Space>
            </Col>
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingLabel label={'代表者名（カナ表記)'} required />}>
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <Space direction="horizontal">
                <SettingInput placeholder={'例：タナカ'} style={{ width: '295px' }} />
                <SettingInput placeholder={'例：タロウ'} style={{ width: '295px' }} />
              </Space>
            </Col>
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingLabel label={'生年月日'} required />}>
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <DatePicker placeholder={'yyyy-mm-dd'} style={{ width: '600px' }} />
            </Col>
          </SettingsInputContainer>
          <SettingsInputContainer
            label={<SettingLabel label={'直近5年間での特商法に基づく行政処分'} required />}
          >
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <Space direction="horizontal">
                <Radio>{'あり'}</Radio>
                <Radio>{'なし'}</Radio>
              </Space>
            </Col>
          </SettingsInputContainer>
          <SettingsInputContainer
            label={
              <SettingLabel label={'直近5年間での消費者契約法違反を理由とする敗訴判決'} required />
            }
          >
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <Space direction="horizontal">
                <Radio>{'あり'}</Radio>
                <Radio>{'なし'}</Radio>
              </Space>
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

export default Representative;
