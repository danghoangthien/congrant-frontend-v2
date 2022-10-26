import { Row, Col, Button, DatePicker, Space, Radio } from 'antd';

import { SettingsInputContainer, SettingLabel, SettingInput } from './Sprites';

const Administrator = () => {
  return (
    <>
      <div className="item ml-5">
        <Row className="mb-5">
          <Col sm={24} md={24} lg={24}>
            <span className="page-title">{'管理者'}</span>
          </Col>
        </Row>
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingLabel label={'氏名'} required />}>
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <Space direction="horizontal">
                <SettingInput placeholder={'例：田中'} style={{ width: '295px' }} />
                <SettingInput placeholder={'例：太郎'} style={{ width: '295px' }} />
              </Space>
            </Col>
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingLabel label={'氏名（カナ表記)'} required />}>
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
          <SettingsInputContainer label={<SettingLabel label={'役職'} required />}>
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <SettingInput placeholder={'例：事務局長'} />
            </Col>
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingLabel label={'メールアドレス'} required />}>
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <SettingInput placeholder={'例：03-1234-5678'} />
            </Col>
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingLabel label={'登記番号'} required />}>
            <SettingInput placeholder={'例：03-1234-5678'} />
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingLabel label={'所在'} required />}>
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <Space direction="horizontal">
                <SettingInput addonBefore="〒" placeholder={'0000000'} style={{ width: '295px' }} />
                <SettingInput disabled placeholder={'都道府県'} style={{ width: '295px' }} />
              </Space>
            </Col>
            <Col className="item my-5" sm={24} md={24} lg={24}>
              <Space direction="horizontal">
                <SettingInput placeholder={'市区町村'} />
              </Space>
            </Col>
            <Col className="item my-5" sm={24} md={24} lg={24}>
              <Space direction="horizontal">
                <SettingInput placeholder={'番地・建物名・部屋番号'} />
              </Space>
            </Col>
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingLabel label={'所在 (カナ表記)'} required />}>
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <Space direction="horizontal">
                <SettingInput addonBefore="〒" placeholder={'0000000'} style={{ width: '295px' }} />
                <SettingInput disabled placeholder={'都道府県'} style={{ width: '295px' }} />
              </Space>
            </Col>
            <Col className="item my-5" sm={24} md={24} lg={24}>
              <Space direction="horizontal">
                <SettingInput placeholder={'市区町村'} />
              </Space>
            </Col>
            <Col className="item my-5" sm={24} md={24} lg={24}>
              <Space direction="horizontal">
                <SettingInput placeholder={'番地・建物名・部屋番号'} />
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

export default Administrator;
