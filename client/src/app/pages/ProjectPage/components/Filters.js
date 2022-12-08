// ANTD
import { Card, Row, Col, Select, Form } from 'antd';
// STYLE
import { StyledFilter } from './Filter.style';

const Filters = ({ open }) => {
  const [form] = Form.useForm();

  if (!open) return <></>;
  return (
    <StyledFilter>
      <Card className="mb-6">
        {/* フィルターヘッダー・Filter Header */}
        <Row className="mb-6" justify="space-between">
          <Col>
            <span className="filter-box-title">{'フィルタ'}</span>
          </Col>
        </Row>

        {/* フィルターコンテンツ・Filter Content */}
        <Row>
          <Col span={24}>
            <Form form={form} layout={'vertical'}>
              <Row gutter={24}>
                <Col lg={{ span: 8 }} xs={{ span: 12 }} md={{ span: 8 }} key={'a'}>
                  <Form.Item name={`field-a`} label={`公開ステータス`}>
                    <Select placeholder={'選択してください'} onChange={() => {}}>
                      <Select.Option value="1">{'---'}</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col lg={{ span: 8 }} xs={{ span: 12 }} md={{ span: 8 }} key={'b'}>
                  <Form.Item name={`field-b`} label={`プロジェクトタイプ`}>
                    <Select placeholder={'選択してください'} onChange={() => {}}>
                      <Select.Option value="1">{'---'}</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col lg={{ span: 8 }} xs={{ span: 12 }} md={{ span: 8 }} key={'c'}>
                  <Form.Item name={`field-c`} label={`寄付タイプ`}>
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
