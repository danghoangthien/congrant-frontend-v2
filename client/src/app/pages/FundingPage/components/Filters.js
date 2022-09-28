import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Table, Row, Col, Pagination, Button, Checkbox, Select, Form, Input } from 'antd';
import { FilterOutlined } from '@ant-design/icons';

const Filters = () => {
  const [form] = Form.useForm();
  return (
    <Card className="ma-5">
      <Row className="mb-3">
        <Col sm={24} md={20} lg={20}>
          <FilterOutlined className="display-inline-flex" />
          <span className="ml-3">{'表示項目'}</span>
          <Select
            className="ml-3"
            defaultValue={{
              value: '1',
            }}
            style={{
              width: 185,
            }}
            onChange={() => {}}
          >
            <Select.Option value="1">{'保存されたフィルタ'}</Select.Option>
          </Select>
        </Col>
        <Col type="flex" align="right" sm={24} md={4} lg={4}>
          <Button type="primary">{'フィルタを保存'}</Button>
        </Col>
      </Row>
      <Row className="my-5">
        <Form form={form} layout={'vertical'}>
          <Row gutter={24}>
            <Col span={6} key={'a'}>
              <Form.Item name={`field-a`} label={`受領日`}>
                <Input placeholder="開始日" />
              </Form.Item>
            </Col>
            <Col span={6} key={'ab'}>
              <Form.Item name={`field-b`} label={`プロジェクト`}>
                <Input placeholder="選択してください" />
              </Form.Item>
            </Col>
            <Col span={6} key={'c'}>
              <Form.Item name={`field-c`} label={`受領方法`}>
                <Input placeholder="選択してください" />
              </Form.Item>
            </Col>
            <Col span={6} key={'d'}>
              <Form.Item name={`field-d`} label={`寄付タイプ`}>
                <Input placeholder="選択してください" />
              </Form.Item>
            </Col>
            <Col span={6} key={'e'}>
              <Form.Item name={`field-c`} label={`プラン`}>
                <Input placeholder="選択してください" />
              </Form.Item>
            </Col>
            <Col span={6} key={'f'}>
              <Form.Item name={`field-d`} label={`金額`}>
                <Input placeholder="1,000円              ->            10,000円" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Row>
    </Card>
  );
};

export default Filters;
