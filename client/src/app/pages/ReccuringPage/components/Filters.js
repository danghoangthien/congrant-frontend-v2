import { Card, Row, Col, Button, Select, Form, Input, DatePicker } from 'antd';

const { RangePicker } = DatePicker;

const Filters = ({ open }) => {
  const [form] = Form.useForm();
  if (!open) return <></>;
  return (
    <Card className="mb-6">
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
            <Button size="small" style={{ fontWeight: '300' }}>
              {'保存'}
            </Button>
          </Row>
        </Col>
      </Row>

      {/* フィルターコンテンツ・Filter Content */}
      <Row>
        <Col span={24}>
          <Form form={form} layout={'vertical'}>
            <Row gutter={24}>
              {/* ステータス */}
              <Col span={6} key={'a'}>
                <Form.Item name={`field-a`} label={`ステータス`}>
                  <Select placeholder={'選択してください'} onChange={() => {}}>
                    <Select.Option value="1">{'---'}</Select.Option>
                  </Select>
                </Form.Item>
              </Col>

              {/* 寄付タイプ */}
              <Col span={6} key={'b'}>
                <Form.Item name={`field-b`} label={`寄付タイプ`}>
                  <Select placeholder={'選択してください'} onChange={() => {}}>
                    <Select.Option value="1">{'---'}</Select.Option>
                  </Select>
                </Form.Item>
              </Col>

              {/* プラン */}
              <Col span={6} key={'c'}>
                <Form.Item name={`field-c`} label={`プラン`}>
                  <Select placeholder={'選択してください'} onChange={() => {}}>
                    <Select.Option value="1">{'---'}</Select.Option>
                  </Select>
                </Form.Item>
              </Col>

              {/* 金額 */}
              <Col span={6} key={'e'}>
                <Form.Item className="mb-0" name={`field-d`} label={`金額`}>
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

              {/* 初回決済日 */}
              <Col span={6} key={'d'}>
                <Form.Item className="mb-0" name={`field-a`} label={`初回決済日`}>
                  <RangePicker placeholder={['開始日', '終了日']} />
                </Form.Item>
              </Col>

              {/* 最終決済日 */}
              <Col span={6} key={'d'}>
                <Form.Item className="mb-0" name={`field-a`} label={`最終決済日`}>
                  <RangePicker placeholder={['開始日', '終了日']} />
                </Form.Item>
              </Col>

              {/* 累計寄付金額 */}
              <Col span={6} key={'e'}>
                <Form.Item className="mb-0" name={`field-d`} label={`累計寄付金額`}>
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

              {/* 累計寄付回数 */}
              <Col span={6} key={'c'}>
                <Form.Item className="mb-0" name={`field-c`} label={`累計寄付回数`}>
                  <Select placeholder={'選択してください'} onChange={() => {}}>
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
