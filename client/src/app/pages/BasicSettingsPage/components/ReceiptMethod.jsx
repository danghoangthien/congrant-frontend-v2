import { Space, Row, Col, Input, Button } from 'antd';
import Draggable from 'app/components/DraggableItems';
import { DraggableInputItem } from './Sprites';

const ReceiptMethod = () => {
  return (
    <Row>
      <Col span={24} className="mb-8">
        <span className="page-title01">{'受領方法'}</span>
      </Col>

      <Col span={24} className="mb-6">
        <Row className="item mb-2">
          <Draggable
            entries={[
              <DraggableInputItem count={88} InputComponent={<Input value={'手渡し'} />} />,
              <DraggableInputItem count={77} InputComponent={<Input value={'募金箱'} />} />,
              <DraggableInputItem count={99} InputComponent={<Input value={'郵便振替'} />} />,
            ]}
          />
        </Row>
      </Col>

      <Col span={24} className="pl-8">
        <Space align="center">
          <Input placeholder={'手渡し'} />
          <Button className="icon-btn" type="primary">
            <span className="material-symbols-outlined">add</span>
            <span>{'追加'}</span>
          </Button>
        </Space>
      </Col>
    </Row>
  );
};

export default ReceiptMethod;
