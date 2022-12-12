import { Helmet } from 'react-helmet-async';
import { Row, Col, Space, DatePicker, Radio, Button, Checkbox } from 'antd';
import { useDispatch } from 'react-redux';
import {
  SettingsInputContainer,
  SettingInput,
  SettingsInputWrapper,
  SettingLabel,
} from 'utils/Sprites';

import './Models/index';

const Step3 = () => {
  const dispatch = useDispatch();

  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'利用審査｜管理者情報'}</title>
          <meta name="description" content={'...'} />
        </Helmet>
      </>
    );
  };

  return (
    <>
      {renderPageTitle()}
      {/* タイトル */}
      <Row className="mb-8">
        <Col className="mb-4" sm={24} md={24} lg={24}>
          <div style={{ textAlign: 'center', fontSize: '28px', fontWeight: '600' }}>
            {'代表者情報'}
          </div>
        </Col>
        <Col sm={24} md={24} lg={24} type="flex" align="center">
          <div style={{ fontSize: '16px' }}>{'団体の代表者の情報を登録してください。'}</div>
        </Col>
      </Row>

      {/* 管理者と同じ */}
      <Row className="mb-6">
        <Col span={24}>
          <Checkbox>{'管理者と同じ'}</Checkbox>
        </Col>
      </Row>

      {/* 代表者名 */}
      <Row className="mb-6">
        <SettingsInputContainer label={<SettingLabel label={'代表者名'} required />}>
          <Col sm={24} md={24} lg={24}>
            <SettingsInputWrapper>
              <SettingInput size="large" placeholder={'例：田中'} style={{ width: '100%' }} />
              <SettingInput size="large" placeholder={'例：太郎'} style={{ width: '100%' }} />
            </SettingsInputWrapper>
          </Col>
        </SettingsInputContainer>
      </Row>

      {/* 代表者名（カナ表記） */}
      <Row className="mb-6">
        <SettingsInputContainer label={<SettingLabel label={'代表者名（カナ表記）'} required />}>
          <Col sm={24} md={24} lg={24}>
            <SettingsInputWrapper>
              <SettingInput size="large" placeholder={'例：タナカ'} style={{ width: '100%' }} />
              <SettingInput size="large" placeholder={'例：タロウ'} style={{ width: '100%' }} />
            </SettingsInputWrapper>
          </Col>
        </SettingsInputContainer>
      </Row>

      {/* 生年月日 */}
      <Row className="mb-6">
        <SettingsInputContainer label={<SettingLabel label={'生年月日'} required />}>
          <Col sm={24} md={24} lg={24}>
            <DatePicker size="large" placeholder={'yyyy-mm-dd'} style={{ width: '100%' }} />
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

      <Row className="mt-12">
        <Col span={24}>
          <SettingsInputWrapper>
            <Button
              size="large"
              style={{ width: '100%', justifyContent: 'center' }}
              className="icon-btn"
              icon={<span className="material-symbols-outlined">chevron_left</span>}
              onClick={() => {
                dispatch.registerStep.setActive('2');
              }}
            >
              {'戻る'}
            </Button>
            <Button
              size="large"
              style={{ width: '100%', fontWeight: 600 }}
              type="primary"
              onClick={() => {
                dispatch.registerStep.setCompleted('3');
                dispatch.registerStep.setActive('4');
              }}
            >
              {'保存して次へ'}
            </Button>
          </SettingsInputWrapper>
        </Col>
      </Row>
    </>
  );
};

export default Step3;
