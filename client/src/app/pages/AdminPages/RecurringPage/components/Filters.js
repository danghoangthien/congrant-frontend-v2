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
              {/* 団体名 */}
              <Col lg={{ span: 6 }} xs={{ span: 12 }} md={{ span: 8 }} key={'a'}>
                <Form.Item name={`field-a`} label={`団体名`}>
                  <Select placeholder={'選択してください'} mode="multiple" onChange={() => {}}>
                    <Select.Option value="1">{'NPO法人コングラント'}</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              {/* ステータス */}
              <Col lg={{ span: 6 }} xs={{ span: 12 }} md={{ span: 8 }} key={'b'}>
                <Form.Item name={`field-b`} label={`ステータス`}>
                  <Select placeholder={'選択してください'} mode="multiple" onChange={() => {}}>
                    <Select.Option value="1">{'継続中'}</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              {/* 寄付タイプ */}
              <Col lg={{ span: 6 }} xs={{ span: 12 }} md={{ span: 8 }} key={'b'}>
                <Form.Item name={`field-b`} label={`寄付タイプ`}>
                  <Select placeholder={'選択してください'} mode="multiple" onChange={() => {}}>
                    <Select.Option value="1">{'単発'}</Select.Option>
                    <Select.Option value="2">{'毎月'}</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              {/* 金額 */}
              <Col lg={{ span: 6 }} xs={{ span: 12 }} md={{ span: 8 }} key={'e'}>
                <Form.Item name={`field-d`} label={`金額`}>
                  <Input.Group compact className="num-range-input">
                    <Input
                      style={{ width: 'calc(50% - 15px)', textAlign: 'center' }}
                      placeholder="3,000"
                    />
                    <Input
                      className="site-input-split"
                      style={{
                        width: '30px',
                        borderLeft: 0,
                        borderRight: 0,
                        pointerEvents: 'none',
                        background: '#ffffff',
                      }}
                      placeholder="~"
                      disabled
                    />
                    <Input
                      className="site-input-right"
                      style={{
                        borderLeft: 0,
                        width: 'calc(50% - 15px)',
                        textAlign: 'center',
                      }}
                      placeholder="6,000"
                      suffix="円"
                    />
                  </Input.Group>
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
