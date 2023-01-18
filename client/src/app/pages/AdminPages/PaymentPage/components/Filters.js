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
              {/* ステータス */}
              <Col lg={{ span: 6 }} xs={{ span: 12 }} md={{ span: 8 }} key={'a'}>
                <Form.Item name={`field-a`} label={`ステータス`}>
                  <Select placeholder={'選択してください'} mode="multiple" onChange={() => {}}>
                    <Select.Option value="1">{'---'}</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              {/* 公開日時 */}
              <Col lg={{ span: 6 }} xs={{ span: 12 }} md={{ span: 8 }} key={'d'}>
                <Form.Item name={`field-a`} label={`公開日時`}>
                  <RangePicker style={{ width: '100%' }} />
                </Form.Item>
              </Col>
              {/* 公開範囲 */}
              <Col lg={{ span: 6 }} xs={{ span: 12 }} md={{ span: 8 }} key={'a'}>
                <Form.Item name={`field-a`} label={`公開範囲`}>
                  <Select placeholder={'選択してください'} mode="multiple" onChange={() => {}}>
                    <Select.Option value="1">{'---'}</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              {/* タグ */}
              <Col lg={{ span: 6 }} xs={{ span: 12 }} md={{ span: 8 }} key={'a'}>
                <Form.Item name={`field-a`} label={`タグ`}>
                  <Select placeholder={'選択してください'} mode="multiple" onChange={() => {}}>
                    <Select.Option value="1">{'---'}</Select.Option>
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
