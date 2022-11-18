import { Row, Col, Input, Space, Radio, Tag, Button } from 'antd';
import { InfoCircleFilled } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import {
  SettingsInputContainer,
  SettingInfoLabel,
  SettingTextarea,
} from 'app/pages/CorporationSettingPage/components/Sprites';

import './Models/index';

const Step1 = () => {
  const dispatch = useDispatch();
  return (
    <div className="item ml-5">
      <Row className="mb-2">
        <Col sm={24} md={24} lg={24}>
          <span className="page-sub-title">{'作成方法'}</span>
        </Col>
      </Row>
      <Row className="item mb-2">
        <SettingsInputContainer label={<SettingInfoLabel label={'作成方法'} required />}>
          <Col className="item mb-5" sm={24} md={24} lg={24}>
            <Space>
              <Radio checked>{'都度（1寄付につき1枚）'}</Radio>
              <Radio>{'合計（1サポーターにつき1枚）'}</Radio>
            </Space>
          </Col>
        </SettingsInputContainer>
      </Row>
      <Row className="item mb-5">
        <SettingsInputContainer label={<SettingInfoLabel label={'領収書テンプレート'} required />}>
          <Input value="標準領収書" style={{ width: '200px' }} />
        </SettingsInputContainer>
      </Row>
      <Row className="mb-2">
        <Col sm={24} md={24} lg={24} type="flex" align="center">
          <Button
            type="primary"
            onClick={() => {
              dispatch.receiptBulkStep.setActive('2');
            }}
          >
            {'次へ'}
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Step1;
