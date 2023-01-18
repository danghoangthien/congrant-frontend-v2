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
              {/* ステータス */}
              <Col lg={{ span: 6 }} xs={{ span: 12 }} md={{ span: 8 }} key={'b'}>
                <Form.Item name={`ステータス`} label={`ステータス`}>
                  <Select placeholder={'選択してください'} mode="multiple" onChange={() => {}}>
                    <Select.Option value="1">{'TSJ'}</Select.Option>
                    <Select.Option value="2">{'JCNE'}</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              {/* プロジェクトタイプ */}
              <Col lg={{ span: 6 }} xs={{ span: 12 }} md={{ span: 8 }} key={'c'}>
                <Form.Item name={`プロジェクトタイプ`} label={`プロジェクトタイプ`}>
                  <Select placeholder={'選択してください'} mode="multiple" onChange={() => {}}>
                    <Select.Option value="1">{'ライト'}</Select.Option>
                    <Select.Option value="2">{'スタンダード'}</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              {/* 寄付タイプ */}
              <Col lg={{ span: 6 }} xs={{ span: 12 }} md={{ span: 8 }} key={'c'}>
                <Form.Item name={`寄付タイプ`} label={`寄付タイプ`}>
                  <Select placeholder={'選択してください'} mode="multiple" onChange={() => {}}>
                    <Select.Option value="1">{'単発'}</Select.Option>
                    <Select.Option value="2">{'毎月'}</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              {/* 受付開始日 */}
              <Col lg={{ span: 6 }} xs={{ span: 12 }} md={{ span: 8 }} key={'d'}>
                <Form.Item name={`受付開始日`} label={`受付開始日`}>
                  <RangePicker style={{ width: '100%' }} />
                </Form.Item>
              </Col>
              {/* 受付終了日 */}
              <Col lg={{ span: 6 }} xs={{ span: 12 }} md={{ span: 8 }} key={'d'}>
                <Form.Item name={`受付終了日`} label={`受付終了日`}>
                  <RangePicker style={{ width: '100%' }} />
                </Form.Item>
              </Col>
              {/* 決済システム */}
              <Col lg={{ span: 6 }} xs={{ span: 12 }} md={{ span: 8 }} key={'c'}>
                <Form.Item name={`決済システム`} label={`決済システム`}>
                  <Select placeholder={'選択してください'} mode="multiple" onChange={() => {}}>
                    <Select.Option value="1">{'Stripe'}</Select.Option>
                    <Select.Option value="2">{'テレコム'}</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              {/* オプション */}
              <Col lg={{ span: 6 }} xs={{ span: 12 }} md={{ span: 8 }} key={'c'}>
                <Form.Item name={`オプション`} label={`オプション`}>
                  <Select placeholder={'選択してください'} mode="multiple" onChange={() => {}}>
                    <Select.Option value="1">{'Giving100'}</Select.Option>
                    <Select.Option value="2">{'ぷらす8”'}</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              {/* 公開申請日 */}
              <Col lg={{ span: 6 }} xs={{ span: 12 }} md={{ span: 8 }} key={'d'}>
                <Form.Item name={`公開申請日`} label={`公開申請日`}>
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
