import { Space, Row, Col, Input, Badge, Button } from 'antd';
import { MenuOutlined, DeleteFilled, PlusOutlined } from '@ant-design/icons';
import { DraggableInputItem } from './Sprites';

const ReceiptMethod = () => {
  return (
    <>
      <div className="item ml-5">
        <Row className="mb-5">
          <Col sm={24} md={24} lg={24}>
            <span className="page-title">{'受領方法'}</span>
          </Col>
        </Row>
        <Row className="item mb-2">
          <Col sm={24} md={24} lg={24}>
            <DraggableInputItem count={88} InputComponent={<Input value={'手渡し'} />} />
          </Col>
        </Row>
        <Row className="item mb-2">
          <Col sm={24} md={24} lg={24}>
            <DraggableInputItem count={77} InputComponent={<Input value={'募金箱'} />} />
          </Col>
        </Row>
        <Row className="item mb-2">
          <Col sm={24} md={24} lg={24}>
            <DraggableInputItem count={99} InputComponent={<Input value={'郵便振替'} />} />
          </Col>
        </Row>
        <Row className="item">
          <Col sm={24} md={24} lg={24}>
            <Space align="center">
              <MenuOutlined className="display-inline-flex" style={{ color: '#ffffff' }} />
              <Input placeholder={'手渡し'} />
              <Button className="active ml-2" type="primary">
                <PlusOutlined className="display-inline-flex" />
                <span className="ml-2">{'追加'}</span>
              </Button>
            </Space>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ReceiptMethod;
