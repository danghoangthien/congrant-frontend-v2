import { useDispatch } from 'react-redux';
// ANTD
import { Row, Col, Space, Radio, Button } from 'antd';
// COMPONENT
import {
  SettingsInputContainer,
  SettingInfoLabel,
  SettingSelect,
} from 'app/pages/CorporationSettingPage/components/Sprites';

import './Models/index';

const Step1 = () => {
  const dispatch = useDispatch();

  return (
    <>
      {/* タイトル・TITLE */}
      <Row className="mb-8">
        <Col sm={24} md={24} lg={24}>
          <span className="page-title01">{'作成方法'}</span>
        </Col>
      </Row>

      {/* コンテンツ・CONTENT */}
      <Row className="mb-8">
        <SettingsInputContainer label={<SettingInfoLabel label={'作成方法'} required />}>
          <Col sm={24} md={24} lg={24}>
            <Space>
              <Radio checked>{'都度（1寄付につき1枚）'}</Radio>
              <Radio>{'合計（1サポーターにつき1枚）'}</Radio>
            </Space>
          </Col>
        </SettingsInputContainer>
      </Row>

      {/* 領収書テンプレート */}
      <Row className="item mb-10">
        <SettingsInputContainer label={<SettingInfoLabel label={'領収書テンプレート'} required />}>
          <SettingSelect style={{ maxWidth: '600px' }} value={'標準領収書'}></SettingSelect>
        </SettingsInputContainer>
      </Row>

      <Row>
        <Col sm={24} md={24} lg={24} type="flex" align="end">
          <Button
            size="large"
            style={{ fontWeight: '600' }}
            className="less-shadow-btn"
            type="primary"
            onClick={() => {
              dispatch.receiptBulkStep.setCompleted('1');
              dispatch.receiptBulkStep.setActive('2');
            }}
          >
            {'次へ進む'}
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Step1;
