import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { StyledFilter } from './Filter.style';

import { Card, Row, Col, Button, Select, Form, Input, DatePicker } from 'antd';

const { RangePicker } = DatePicker;

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
              <Button size="small">{'保存'}</Button>
            </Row>
          </Col>
        </Row>

        {/* フィルターコンテンツ・Filter Content */}
        <Row>
          <Col span={24}>
            <Form form={form} layout={'vertical'}>
              <Row gutter={24}>
                <Col span={6} key={'a'}>
                  <Form.Item name={`field-a`} label={`属性`}>
                    <Select placeholder={'選択してください'} onChange={() => {}}>
                      <Select.Option value="1">{'---'}</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={6} key={'b'}>
                  <Form.Item name={`field-b`} label={`年齢`}>
                    <Select placeholder={'選択してください'} onChange={() => {}}>
                      <Select.Option value="1">{'---'}</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={6} key={'c'}>
                  <Form.Item name={`field-c`} label={`性別`}>
                    <Select placeholder={'選択してください'} onChange={() => {}}>
                      <Select.Option value="1">{'---'}</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={6} key={'d'}>
                  <Form.Item name={`field-d`} label={`エリア`}>
                    <Select placeholder={'選択してください'} onChange={() => {}}>
                      <Select.Option value="1">{'---'}</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={6} key={'e'}>
                  <Form.Item name={`field-c`} label={`広報物への掲載可否`}>
                    <Select placeholder={'選択してください'} onChange={() => {}}>
                      <Select.Option value="1">{'---'}</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={6} key={'e'}>
                  <Form.Item name={`field-c`} label={`郵送物の送付可否`}>
                    <Select placeholder={'選択してください'} onChange={() => {}}>
                      <Select.Option value="1">{'---'}</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={6} key={'e'}>
                  <Form.Item name={`field-c`} label={`寄付タイプ`}>
                    <Select placeholder={'選択してください'} onChange={() => {}}>
                      <Select.Option value="1">{'---'}</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={6} key={'e'}>
                  <Form.Item name={`field-c`} label={`寄付プラン`}>
                    <Select placeholder={'選択してください'} onChange={() => {}}>
                      <Select.Option value="1">{'---'}</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={6} key={'e'}>
                  <Form.Item name={`field-a`} label={`初回決済日`}>
                    <RangePicker placeholder={['開始日', '終了日']} />
                  </Form.Item>
                </Col>
                <Col span={6} key={'e'}>
                  <Form.Item name={`field-a`} label={`直近の決済日`}>
                    <RangePicker placeholder={['開始日', '終了日']} />
                  </Form.Item>
                </Col>
                <Col span={6} key={'e'}>
                  <Form.Item className="mb-0" name={`field-d`} label={`累計寄付金額`}>
                    <Input.Group compact>
                      <Input
                        style={{ width: '145px', textAlign: 'center' }}
                        placeholder="1,000円"
                      />
                      <Input
                        className="site-input-split"
                        style={{
                          width: '47.5px',
                          borderLeft: 0,
                          borderRight: 0,
                          pointerEvents: 'none',
                        }}
                        placeholder="->"
                      />
                      <Input
                        className="site-input-right"
                        style={{
                          borderLeft: 0,
                          width: '145px',
                          textAlign: 'center',
                        }}
                        placeholder="10,000円"
                      />
                    </Input.Group>
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
