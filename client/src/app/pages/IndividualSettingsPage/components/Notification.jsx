import { Row, Col, Button, Space, Checkbox } from 'antd';
import { SettingsInputContainer, SettingLabel } from './Sprites';

const Notification = () => {
  return (
    <Row>
      <Col span={24} className="mb-6">
        <div className="page-title01">{'通知設定'}</div>
      </Col>
      <Col span={24}>
        <SettingsInputContainer label={<SettingLabel label={'運営からのお知らせ'} />}>
          <Checkbox checked>{'運営からのお知らせを受け取る'}</Checkbox>
        </SettingsInputContainer>
      </Col>
      <Col span={24} className="mb-5">
        <SettingsInputContainer label={<SettingLabel label={'寄付決済関連のお知らせ'} />}>
          <Space direction="vertical">
            <Checkbox checked>{'新規申し込みの完了通知を受け取る'}</Checkbox>
            <Checkbox checked>{'継続決済の成功通知を受け取る'}</Checkbox>
            <Checkbox checked>{'継続決済の失敗通知を受け取る'}</Checkbox>
            <Checkbox checked>{'継続決済の解約通知を受け取る'}</Checkbox>
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
