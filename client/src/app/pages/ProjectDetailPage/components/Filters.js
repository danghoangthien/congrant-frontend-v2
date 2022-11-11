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
                  <Form.Item name={`field-a`} label={`受領日`}>
                    <RangePicker placeholder={['開始日', '終了日']} />
                  </Form.Item>
                </Col>
                <Col span={6} key={'b'}>
                  <Form.Item name={`field-b`} label={`プロジェクト`}>
                    <Select placeholder={'発行ステータス'} onChange={() => {}}>
                      <Select.Option value="1">{'---'}</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={6} key={'c'}>
                  <Form.Item name={`field-c`} label={`受領方法`}>
                    <Select placeholder={'発行日'} onChange={() => {}}>
                      <Select.Option value="1">{'---'}</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={6} key={'d'}>
                  <Form.Item name={`field-d`} label={`寄付タイプ`}>
                    <Select placeholder={'選択してください'} onChange={() => {}}>
                      <Select.Option value="1">{'---'}</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={6} key={'d'}>
                  <Form.Item name={`field-d`} label={`プラン`}>
                    <Select placeholder={'選択してください'} onChange={() => {}}>
                      <Select.Option value="1">{'---'}</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={6} key={'e'}>
                  <Form.Item className="mb-0" name={`field-e`} label={`金額`}>
                    <Input placeholder="3,000円              ->            6,000円" />
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
