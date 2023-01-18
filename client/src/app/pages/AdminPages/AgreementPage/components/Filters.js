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
                <Form.Item name={`団体名`} label={`団体名`}>
                  <Select placeholder={'選択してください'} mode="multiple" onChange={() => {}}>
                    <Select.Option value="1">{'NPO法人コングラント'}</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              {/* プラン */}
              <Col lg={{ span: 6 }} xs={{ span: 12 }} md={{ span: 8 }} key={'c'}>
                <Form.Item name={`プラン`} label={`プラン`}>
                  <Select placeholder={'選択してください'} mode="multiple" onChange={() => {}}>
                    <Select.Option value="1">{'ライト'}</Select.Option>
                    <Select.Option value="2">{'スタンダード'}</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              {/* ステータス */}
              <Col lg={{ span: 6 }} xs={{ span: 12 }} md={{ span: 8 }} key={'a'}>
                <Form.Item name={`ステータス`} label={`ステータス`}>
                  <Select placeholder={'選択してください'} mode="multiple" onChange={() => {}}>
                    <Select.Option value="1">{'開始前'}</Select.Option>
                    <Select.Option value="2">{'利用中'}</Select.Option>
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
              {/* 契約開始日 */}
              <Col lg={{ span: 6 }} xs={{ span: 12 }} md={{ span: 8 }} key={'d'}>
                <Form.Item name={`契約開始日`} label={`契約開始日`}>
                  <RangePicker style={{ width: '100%' }} />
                </Form.Item>
              </Col>
              {/* 契約終了日 */}
              <Col lg={{ span: 6 }} xs={{ span: 12 }} md={{ span: 8 }} key={'d'}>
                <Form.Item name={`契約終了日`} label={`契約終了日`}>
                  <RangePicker style={{ width: '100%' }} />
                </Form.Item>
              </Col>
              {/* 決済方法 */}
              <Col lg={{ span: 6 }} xs={{ span: 12 }} md={{ span: 8 }} key={'b'}>
                <Form.Item name={`決済方法`} label={`決済方法`}>
                  <Select placeholder={'選択してください'} mode="multiple" onChange={() => {}}>
                    <Select.Option value="1">{'カード決済'}</Select.Option>
                    <Select.Option value="2">{'銀行振込'}</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              {/* 決済日 */}
              <Col lg={{ span: 6 }} xs={{ span: 12 }} md={{ span: 8 }} key={'d'}>
                <Form.Item name={`決済日`} label={`決済日`}>
                  <RangePicker style={{ width: '100%' }} />
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
