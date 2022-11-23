import { Row, Col, Space, Checkbox, DatePicker, Button } from 'antd';
import { useDispatch } from 'react-redux';
import {
  SettingsInputContainer,
  SettingInfoLabel,
  SettingLabel,
} from 'app/pages/CorporationSettingPage/components/Sprites';

import './Models/index';
const { RangePicker } = DatePicker;

const Step2 = () => {
  const dispatch = useDispatch();
  return (
    <>
      {/* タイトル・TITLE */}
      <Row className="mb-8">
        <Col span={24}>
          <span className="page-title01">{'作成条件'}</span>
        </Col>
      </Row>

      {/* コンテンツ・CONTENT */}
      <Row className="mb-8">
        <SettingsInputContainer label={<SettingLabel label={'期間（受領日）'} required />}>
          <Col span={24}>
            <RangePicker
              size="large"
              placeholder={['2022-01-01', '2022-12-31']}
              style={{ maxWidth: '600px', width: '100%' }}
            />
          </Col>
        </SettingsInputContainer>
      </Row>

      {/* 寄付タイプ */}
      <Row className="item mb-8">
        <SettingsInputContainer label={<SettingLabel label={'寄付タイプ'} required />}>
          <Col span={24}>
            <Space>
              <Checkbox checked>{'単発'}</Checkbox>
              <Checkbox checked>{'毎月'}</Checkbox>
              <Checkbox checked>{'毎年'}</Checkbox>
            </Space>
          </Col>
        </SettingsInputContainer>
      </Row>

      {/* 寄付レコードの領収書ステータス */}
      <Row className="item mb-8">
        <SettingsInputContainer
          label={<SettingInfoLabel label={'寄付レコードの領収書ステータス'} required />}
        >
          <Col span={24}>
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
          <Col className="item mb-5" span={24}>
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
            size="large"
            style={{ fontWeight: '600' }}
            className="less-shadow-btn"
            onClick={() => {
              dispatch.receiptBulkStep.setActive('1');
            }}
          >
            {'もどる'}
          </Button>
        </Col>
        <Col sm={24} md={22} lg={22} type="flex" align="end">
          <Button
            size="large"
            style={{ fontWeight: '600' }}
            type="primary"
            className="less-shadow-btn"
            onClick={() => {
              dispatch.receiptBulkStep.setActive('3');
            }}
          >
            {'次へ'}
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Step2;
