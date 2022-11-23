import { Space, Row, Col, Input, Button } from 'antd';
import { DraggableInputItem } from './Sprites';

const ReceiptMethod = () => {
  return (
    <Row>
      <Col span={24} className="mb-8">
        <span className="page-title01">{'受領方法'}</span>
      </Col>

      <Col span={24} className="mb-6">
        <Row className="mb-2">
          <Col sm={24} md={24} lg={24}>
            <DraggableInputItem count={88} InputComponent={<Input value={'手渡し'} />} />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col sm={24} md={24} lg={24}>
            <DraggableInputItem count={77} InputComponent={<Input value={'募金箱'} />} />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col sm={24} md={24} lg={24}>
            <DraggableInputItem count={99} InputComponent={<Input value={'郵便振替'} />} />
          </Col>
        </Row>
      </Col>

      <Col span={24} className="pl-8">
        <Space align="center">
          <Input placeholder={'手渡し'} />
          <Button className="icon-btn" type="primary">
            <span class="material-symbols-outlined">add</span>
            <span>{'追加'}</span>
          </Button>
        </Space>
      </Col>
    </Row>
  );
};

export default ReceiptMethod;
