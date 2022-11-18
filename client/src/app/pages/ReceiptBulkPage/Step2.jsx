import { Row, Col, Input, Space, Checkbox, DatePicker, Button } from 'antd';
import { InfoCircleFilled } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import {
  SettingsInputContainer,
  SettingInfoLabel,
  SettingTextarea,
} from 'app/pages/CorporationSettingPage/components/Sprites';

import './Models/index';
const { RangePicker } = DatePicker;
const Step2 = () => {
  const dispatch = useDispatch();
  return (
    <div className="item ml-5">
      <Row className="mb-2">
        <Col sm={24} md={24} lg={24}>
          <span className="page-sub-title">{'作成条件'}</span>
        </Col>
      </Row>
      <Row className="item mb-2">
        <SettingsInputContainer label={<SettingInfoLabel label={'期間（受領日）'} required />}>
          <Col className="item mb-5" sm={24} md={24} lg={24}>
            <RangePicker placeholder={['2022-01-01', '2022-12-31']} />
          </Col>
        </SettingsInputContainer>
      </Row>
      <Row className="item mb-2">
        <SettingsInputContainer label={<SettingInfoLabel label={'寄付タイプ'} />}>
          <Col className="item mb-5" sm={24} md={24} lg={24}>
            <Space>
              <Checkbox checked>{'単発'}</Checkbox>
              <Checkbox checked>{'毎月'}</Checkbox>
              <Checkbox checked>{'毎年'}</Checkbox>
            </Space>
          </Col>
        </SettingsInputContainer>
      </Row>
      <Row className="item mb-2">
        <SettingsInputContainer
          label={<SettingInfoLabel label={'寄付レコードの領収書ステータス'} required />}
        >
          <Col className="item mb-5" sm={24} md={24} lg={24}>
            <Space>
              <Checkbox checked>{'未作成'}</Checkbox>
              <Checkbox checked>{'未発行'}</Checkbox>
              <Checkbox>{'発行済み'}</Checkbox>
            </Space>
          </Col>
        </SettingsInputContainer>
      </Row>
      <Row className="item mb-2">
        <SettingsInputContainer label={<SettingInfoLabel label={'寄付プラン'} required />}>
          <Col className="item mb-5" sm={24} md={24} lg={24}>
            <Space direction="vertical">
              <Checkbox checked>{'ブロンズサポーター'}</Checkbox>
              <Checkbox checked>{'シルバーサポーター'}</Checkbox>
              <Checkbox checked>{'ゴールドサポーター'}</Checkbox>
              <Checkbox checked>{'賛助会員（都度更新）'}</Checkbox>
              <Checkbox checked>{'賛助会員（自動更新）'}</Checkbox>
              <Checkbox>{'正会員（都度更新）'}</Checkbox>
              <Checkbox>{'正会員（自動更新）'}</Checkbox>
            </Space>
          </Col>
        </SettingsInputContainer>
      </Row>
      <Row className="mb-2">
        <Col sm={24} md={2} lg={2} type="flex" align="left">
          <Button
            onClick={() => {
              dispatch.receiptBulkStep.setActive('1');
            }}
          >
            {'もどる'}
          </Button>
        </Col>
        <Col sm={24} md={22} lg={22} type="flex" align="center">
          <Button
            type="primary"
            onClick={() => {
              dispatch.receiptBulkStep.setActive('3');
            }}
          >
            {'次へ'}
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Step2;
