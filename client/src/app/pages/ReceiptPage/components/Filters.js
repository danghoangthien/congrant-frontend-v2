// STYLE
import { StyledFilter } from './Filter.style';
// COMPONENT
import SaveFilter from 'app/components/Modal/SaveFilter';
// ANTD
import { Card, Row, Col, Select, Form } from 'antd';

const Filters = ({ open }) => {
  const [form] = Form.useForm();

  if (!open) return <></>;

  return (
    <StyledFilter>
      <Card className="mb-6" bodyStyle={{ padding: '24px 24px 0' }}>
        {/* フィルターヘッダー・Filter Header */}
        <Row className="mb-5" justify="space-between">
          <Col>
            <span className="filter-box-title">{'フィルタ'}</span>
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
                <Col lg={{ span: 6 }} xs={{ span: 12 }} md={{ span: 12 }} key={'a'}>
                  <Form.Item name={`field-a`} label={`領収書タイプ`}>
                    <Select placeholder={'選択してください'} onChange={() => {}}>
                      <Select.Option value="1">{'---'}</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col lg={{ span: 6 }} xs={{ span: 12 }} md={{ span: 12 }} key={'b'}>
                  <Form.Item name={`field-b`} label={`発行ステータス`}>
                    <Select placeholder={'選択してください'} onChange={() => {}}>
                      <Select.Option value="1">{'---'}</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col lg={{ span: 6 }} xs={{ span: 12 }} md={{ span: 12 }} key={'c'}>
                  <Form.Item name={`field-c`} label={`発行日`}>
                    <Select placeholder={'選択してください'} onChange={() => {}}>
                      <Select.Option value="1">{'---'}</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col lg={{ span: 6 }} xs={{ span: 12 }} md={{ span: 12 }} key={'d'}>
                  <Form.Item name={`field-d`} label={`テンプレート`}>
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
    </StyledFilter>
  );
};

export default Filters;
