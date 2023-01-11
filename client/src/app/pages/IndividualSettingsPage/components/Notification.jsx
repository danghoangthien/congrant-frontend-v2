// ANTD
import { Row, Col, Button, Space, Checkbox } from 'antd';
// SRPITE
import { SettingsInputContainer, SettingLabel, SettingInfoLabel } from 'utils/Sprites';

const Notification = () => {
  return (
    <Row>
      <Col span={24} className="mb-6">
        <div className="page-title01">{'通知設定'}</div>
      </Col>
      <Col span={24} className="mb-6">
        <SettingsInputContainer label={<SettingLabel label={'運営からのお知らせ'} />}>
          <Checkbox style={{ fontSize: 16 }}>{'運営からのお知らせを受け取る'}</Checkbox>
        </SettingsInputContainer>
      </Col>
      <Col span={24}>
        <SettingsInputContainer label={<SettingInfoLabel label={'寄付決済関連の通知'} />}>
          <Space direction="vertical">
            <Checkbox style={{ fontSize: 16 }}>{'寄付決済関連の通知を受け取る'}</Checkbox>
          </Space>
        </SettingsInputContainer>
      </Col>
      <Col span={24} className="mt-15">
        <Col sm={24} md={24} lg={24}>
          <Button type="primary">
            <span style={{ fontWeight: '600' }}>{'保存する'}</span>
          </Button>
        </Col>
      </Col>
    </Row>
  );
};

export default Notification;
