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
        </Row>

        {/* フィルターコンテンツ・Filter Content */}
        <Row>
          <Col span={24}>
            <Form form={form} layout={'vertical'}>
              <Row gutter={24}>
                <Col span={6} key={'a'}>
                  <Form.Item name={`field-a`} label={`公開ステータス`}>
                    <Select placeholder={'選択してください'} onChange={() => {}}>
                      <Select.Option value="1">{'---'}</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={6} key={'b'}>
                  <Form.Item name={`field-b`} label={`プロジェクトタイプ`}>
                    <Select placeholder={'選択してください'} onChange={() => {}}>
                      <Select.Option value="1">{'---'}</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={6} key={'c'}>
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
