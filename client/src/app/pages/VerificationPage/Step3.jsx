import { Row, Col, Input, Space, DatePicker, Radio, Button, Checkbox } from 'antd';
import { InfoCircleFilled } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import {
  SettingsInputContainer,
  SettingInfoLabel,
  SettingTextarea,
  SettingInput,
  SettingSelect,
  SettingLabel,
} from 'app/pages/CorporationSettingPage/components/Sprites';

import { StyledUploadPicture } from 'app/components/Layout/SettingsLayout.style';

import './Models/index';

const Step3 = () => {
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
        <SettingsInputContainer>
          <Col className="item mb-5" sm={24} md={24} lg={24}>
            <Checkbox>{'管理者と同じ'}</Checkbox>
          </Col>
        </SettingsInputContainer>
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
            <Button
              style={{ width: '295px' }}
              type="primary"
              onClick={() => {
                dispatch.registerStep.setActive('4');
              }}
            >
              {'保存して次へ'}
            </Button>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default Step3;
