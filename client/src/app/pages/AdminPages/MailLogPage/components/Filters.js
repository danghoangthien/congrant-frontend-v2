// ANTD
import { Card, Row, Col, Select, Form, Input, DatePicker } from 'antd';
// COMPONENT
import SaveFilter from 'app/components/Modal/SaveFilter';

const { RangePicker } = DatePicker;

const Filters = ({ open }) => {
  const [form] = Form.useForm();
  if (!open) return <></>;
  return (
    <Card className="mb-6" bodyStyle={{ padding: '24px 24px 0' }}>
      {/* フィルターヘッダー・Filter Header */}
      <Row className="mb-6" justify="space-between">
        <Col>
          <span style={{ fontSize: '16px', fontWeight: '600' }}>{'フィルタ'}</span>
        </Col>
      </Row>

      {/* フィルターコンテンツ・Filter Content */}
      <Row>
        <Col span={24}>
          <Form form={form} layout={'vertical'}>
            <Row gutter={24}>
              {/* 送信日時 */}
              <Col lg={{ span: 6 }} xs={{ span: 12 }} md={{ span: 8 }} key={'d'}>
                <Form.Item name={`送信日時`} label={`送信日時`}>
                  <RangePicker style={{ width: '100%' }} />
                </Form.Item>
              </Col>
              {/* ステータス */}
              <Col lg={{ span: 6 }} xs={{ span: 12 }} md={{ span: 8 }} key={'a'}>
                <Form.Item name={`ステータス`} label={`ステータス`}>
                  <Select placeholder={'選択してください'} mode="multiple" onChange={() => {}}>
                    <Select.Option value="1">{'送信済み'}</Select.Option>
                    <Select.Option value="2">{'エラー'}</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              {/* メール種別 */}
              <Col lg={{ span: 6 }} xs={{ span: 12 }} md={{ span: 8 }} key={'b'}>
                <Form.Item name={`メール種別`} label={`メール種別`}>
                  <Select placeholder={'選択してください'} mode="multiple" onChange={() => {}}>
                    <Select.Option value="1">{'活動報告更新通知'}</Select.Option>
                    <Select.Option value="2">{'決済完了'}</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              {/* 団体名 */}
              <Col lg={{ span: 6 }} xs={{ span: 12 }} md={{ span: 8 }} key={'c'}>
                <Form.Item name={`団体名`} label={`団体名`}>
                  <Select placeholder={'選択してください'} mode="multiple" onChange={() => {}}>
                    <Select.Option value="1">{'NPO法人コングラント'}</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Card>
  );
};

export default Filters;
