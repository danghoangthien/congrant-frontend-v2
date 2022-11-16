import { Row, Col, Input, Space, DatePicker, Radio, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  SettingsInputContainer,
  SettingInput,
  SettingLabel,
} from 'app/pages/GroupSettingsPage/components/Sprites';

import './Models/index';

const Step4 = () => {
  const dispatch = useDispatch();
  return (
    <div className="item" style={{ width: '600px' }}>
      <Row className="mb-2">
        <Col className="mb-5" sm={24} md={24} lg={24} type="flex" align="center">
          <span className="page-sub-title" style={{ fontSize: '28px' }}>
            {'代表者情報'}
          </span>
        </Col>
        <Col sm={24} md={24} lg={24} type="flex" align="center">
          <p style={{ width: '375px', fontSize: '16px' }}>
            {'団体の代表者の情報を登録してください。'}
          </p>
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
        <SettingsInputContainer label={<SettingLabel label={'金融機関コード'} required />}>
          <Col className="item mb-5" sm={24} md={24} lg={24}>
            <SettingInput placeholder={'例：1234'} />
          </Col>
        </SettingsInputContainer>
        <SettingsInputContainer label={<SettingLabel label={'口座種別'} required />}>
          <Col className="item mb-5" sm={24} md={24} lg={24}>
            <Space direction="horizontal">
              <Radio>{'普通'}</Radio>
              <Radio>{'当座'}</Radio>
            </Space>
          </Col>
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
      <Row className="mb-2">
        <Col sm={24} md={24} lg={24} type="flex" align="center">
          <Space>
            <Button
              style={{ width: '295px' }}
              onClick={() => {
                dispatch.registerStep.setActive('2');
              }}
            >
              {'< 戻る'}
            </Button>
            <Link to={`/register-confirmation`}>
              <Button style={{ width: '295px' }} type="primary">
                {'保存して次へ'}
              </Button>
            </Link>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default Step4;
