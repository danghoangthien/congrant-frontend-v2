import { Row, Col, Button, Space, Checkbox } from 'antd';
import { SettingsInputContainer, SettingLabel } from './Sprites';

const Notification = () => {
  return (
    <>
      <div className="item ml-5">
        <Row className="mb-5">
          <Col sm={24} md={24} lg={24}>
            <span className="page-title">{'通知設定'}</span>
          </Col>
        </Row>
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingLabel label={'運営からのお知らせ'} />}>
            <Space direction="vertical">
              <Checkbox checked>{'運営からのお知らせを受け取る'}</Checkbox>
            </Space>
          </SettingsInputContainer>
        </Row>
        <Row className="item mb-5">
          <SettingsInputContainer label={<SettingLabel label={'寄付決済関連のお知らせ'} />}>
            <Space direction="vertical">
              <Checkbox checked>{'新規申し込みの完了通知を受け取る'}</Checkbox>
              <Checkbox checked>{'継続決済の成功通知を受け取る'}</Checkbox>
              <Checkbox checked>{'継続決済の失敗通知を受け取る'}</Checkbox>
              <Checkbox checked>{'継続決済の解約通知を受け取る'}</Checkbox>
            </Space>
          </SettingsInputContainer>
        </Row>
        <Row className="item mt-15">
          <Col sm={24} md={24} lg={24}>
            <Button className="active" type="primary">
              <span className="ml-2">{'保存する'}</span>
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Notification;
