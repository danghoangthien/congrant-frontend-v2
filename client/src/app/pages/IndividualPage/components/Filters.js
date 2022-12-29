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
        <Col>
          <Row>
            <Col className="mr-2">
              <Select
                defaultValue={{
                  value: '1',
                }}
                onChange={() => {}}
                size="small"
                style={{
                  width: '256px',
                }}
              >
                <Select.Option value="1">{'保存されたフィルタ'}</Select.Option>
              </Select>
            </Col>
            <SaveFilter />
          </Row>
        </Col>
      </Row>

      {/* フィルターコンテンツ・Filter Content */}
      <Row>
        <Col span={24}>
          <Form form={form} layout={'vertical'}>
            <Row gutter={24}>
              <Col lg={{ span: 6 }} xs={{ span: 12 }} md={{ span: 8 }} key={'a'}>
                <Form.Item name={`field-a`} label={`属性`}>
                  <Select placeholder={'選択してください'} onChange={() => {}}>
                    <Select.Option value="1">{'---'}</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col lg={{ span: 6 }} xs={{ span: 12 }} md={{ span: 8 }} key={'b'}>
                <Form.Item name={`field-b`} label={`年齢`}>
                  <Select placeholder={'選択してください'} onChange={() => {}}>
                    <Select.Option value="1">{'---'}</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col lg={{ span: 6 }} xs={{ span: 12 }} md={{ span: 8 }} key={'c'}>
                <Form.Item name={`field-c`} label={`性別`}>
                  <Select placeholder={'選択してください'} onChange={() => {}}>
                    <Select.Option value="1">{'---'}</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col lg={{ span: 6 }} xs={{ span: 12 }} md={{ span: 8 }} key={'d'}>
                <Form.Item name={`field-d`} label={`エリア`}>
                  <Select placeholder={'選択してください'} onChange={() => {}}>
                    <Select.Option value="1">{'---'}</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col lg={{ span: 6 }} xs={{ span: 12 }} md={{ span: 8 }} key={'e'}>
                <Form.Item name={`field-c`} label={`広報物への掲載可否`}>
                  <Select placeholder={'選択してください'} onChange={() => {}}>
                    <Select.Option value="1">{'---'}</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col lg={{ span: 6 }} xs={{ span: 12 }} md={{ span: 8 }} key={'e'}>
                <Form.Item name={`field-c`} label={`郵送物の送付可否`}>
                  <Select placeholder={'選択してください'} onChange={() => {}}>
                    <Select.Option value="1">{'---'}</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col lg={{ span: 6 }} xs={{ span: 12 }} md={{ span: 8 }} key={'e'}>
                <Form.Item name={`field-c`} label={`寄付タイプ`}>
                  <Select placeholder={'選択してください'} onChange={() => {}}>
                    <Select.Option value="1">{'---'}</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col lg={{ span: 6 }} xs={{ span: 12 }} md={{ span: 8 }} key={'e'}>
                <Form.Item name={`field-c`} label={`寄付プラン`}>
                  <Select placeholder={'選択してください'} onChange={() => {}}>
                    <Select.Option value="1">{'---'}</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col lg={{ span: 6 }} xs={{ span: 12 }} md={{ span: 8 }} key={'e'}>
                <Form.Item name={`field-a`} label={`初回決済日`}>
                  <RangePicker style={{ width: '100%' }} placeholder={['開始日', '終了日']} />
                </Form.Item>
              </Col>
              <Col lg={{ span: 6 }} xs={{ span: 12 }} md={{ span: 8 }} key={'e'}>
                <Form.Item name={`field-a`} label={`直近の決済日`}>
                  <RangePicker style={{ width: '100%' }} placeholder={['開始日', '終了日']} />
                </Form.Item>
              </Col>
              <Col lg={{ span: 6 }} xs={{ span: 12 }} md={{ span: 8 }} key={'e'}>
                <Form.Item name={`field-d`} label={`金額`}>
                  <Input.Group compact className="num-range-input">
                    <Input style={{ width: 'calc(50% - 15px)' }} placeholder="3,000" />
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
