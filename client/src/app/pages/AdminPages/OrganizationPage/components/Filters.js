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
              {/* テスト */}
              <Col lg={{ span: 6 }} xs={{ span: 12 }} md={{ span: 8 }} key={'a'}>
                <Form.Item name={`テスト`} label={`テスト`}>
                  <Select placeholder={'選択してください'} mode="multiple" onChange={() => {}}>
                    <Select.Option value="1">{'テスト'}</Select.Option>
                    <Select.Option value="2">{'not:テスト'}</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              {/* 割引 */}
              <Col lg={{ span: 6 }} xs={{ span: 12 }} md={{ span: 8 }} key={'a'}>
                <Form.Item name={`割引`} label={`割引`}>
                  <Select placeholder={'選択してください'} mode="multiple" onChange={() => {}}>
                    <Select.Option value="1">{'TSJ'}</Select.Option>
                    <Select.Option value="2">{'JCNE'}</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              {/* 今のプラン */}
              <Col lg={{ span: 6 }} xs={{ span: 12 }} md={{ span: 8 }} key={'a'}>
                <Form.Item name={`今のプラン`} label={`今のプラン`}>
                  <Select placeholder={'選択してください'} mode="multiple" onChange={() => {}}>
                    <Select.Option value="1">{'ライト'}</Select.Option>
                    <Select.Option value="2">{'スタンダード'}</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              {/* 今のプランの終了予定日 */}
              <Col lg={{ span: 6 }} xs={{ span: 12 }} md={{ span: 8 }} key={'d'}>
                <Form.Item name={`今のプランの終了予定日`} label={`今のプランの終了予定日`}>
                  <RangePicker style={{ width: '100%' }} />
                </Form.Item>
              </Col>
              {/* 審査状況 */}
              <Col lg={{ span: 6 }} xs={{ span: 12 }} md={{ span: 8 }} key={'a'}>
                <Form.Item name={`審査状況`} label={`審査状況`}>
                  <Select placeholder={'選択してください'} mode="multiple" onChange={() => {}}>
                    <Select.Option value="1">{'StOK'}</Select.Option>
                    <Select.Option value="2">{'審査中'}</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              {/* コングラント審査状況 */}
              <Col lg={{ span: 6 }} xs={{ span: 12 }} md={{ span: 8 }} key={'a'}>
                <Form.Item name={`コングラント審査状況`} label={`コングラント審査状況`}>
                  <Select placeholder={'選択してください'} mode="multiple" onChange={() => {}}>
                    <Select.Option value="1">{'OK'}</Select.Option>
                    <Select.Option value="2">{'NG'}</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              {/* 決済総額 */}
              <Col lg={{ span: 6 }} xs={{ span: 12 }} md={{ span: 8 }} key={'e'}>
                <Form.Item name={`決済総額`} label={`決済総額`}>
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
              {/* 登録日 */}
              <Col lg={{ span: 6 }} xs={{ span: 12 }} md={{ span: 8 }} key={'d'}>
                <Form.Item name={`登録日`} label={`登録日`}>
                  <RangePicker style={{ width: '100%' }} />
                </Form.Item>
              </Col>
              {/* 審査完了日 */}
              <Col lg={{ span: 6 }} xs={{ span: 12 }} md={{ span: 8 }} key={'d'}>
                <Form.Item name={`審査完了日`} label={`審査完了日`}>
                  <RangePicker style={{ width: '100%' }} />
                </Form.Item>
              </Col>
              {/* 活動カテゴリ */}
              <Col lg={{ span: 6 }} xs={{ span: 12 }} md={{ span: 8 }} key={'a'}>
                <Form.Item name={`活動カテゴリ`} label={`活動カテゴリ`}>
                  <Select placeholder={'選択してください'} mode="multiple" onChange={() => {}}>
                    <Select.Option value="1">{'こども支援'}</Select.Option>
                    <Select.Option value="2">{'動物・ペット支援'}</Select.Option>
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
