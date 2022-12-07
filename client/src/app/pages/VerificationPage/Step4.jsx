import { Helmet } from 'react-helmet-async';
import { Link, useHistory } from 'react-router-dom';
import { Row, Col, Button } from 'antd';
import { InfoCircleFilled } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import {
  SettingsInputContainer,
  SettingInput,
  SettingsInputWrapper,
  SettingLabel,
} from 'app/pages/CorporationSettingPage/components/Sprites';

import './Models/index';

const Step4 = () => {
  const history = useHistory();
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
            {'口座情報'}
          </div>
        </Col>
        <Col sm={24} md={24} lg={24} type="flex" align="center">
          <div style={{ fontSize: '16px' }}>{'寄付金振込先の口座情報を登録してください。'}</div>
        </Col>
      </Row>

      {/* 銀行名 */}
      <Row className="mb-6">
        <SettingsInputContainer label={<SettingLabel label={'銀行名'} required />}>
          <Col sm={24} md={24} lg={24}>
            <SettingInput size="large" placeholder={'例：XX銀行'} />
          </Col>
        </SettingsInputContainer>
      </Row>

      {/* 支店名 */}
      <Row className="mb-6">
        <SettingsInputContainer label={<SettingLabel label={'支店名'} required />}>
          <Col sm={24} md={24} lg={24}>
            <SettingInput size="large" placeholder={'例：XX支店'} />
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
            <SettingInput size="large" placeholder={'例：1234567'} />
          </Col>
        </SettingsInputContainer>
      </Row>

      {/* 口座名義 */}
      <Row>
        <SettingsInputContainer label={<SettingLabel label={'口座名義'} required />}>
          <Col sm={24} md={24} lg={24}>
            <SettingInput
              size="large"
              placeholder={'例：トクテイヒエイリカツドウホウジンコングラント'}
            />
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
                dispatch.registerStep.setActive('3'); //unCompleted
                //dispatch.registerStep.unCompleted('3');
                //dispatch.registerStep.unCompleted('2');
              }}
            >
              {'戻る'}
            </Button>
            <Button
              size="large"
              style={{ width: '100%', fontWeight: 600 }}
              type="primary"
              onClick={() => {
                dispatch.registerStep.setCompleted('4');
                history.push(`/app/verification/confirmation`);
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

export default Step4;
