import { Helmet } from 'react-helmet-async';
import { Space, Row, Col, Input, Button } from 'antd';
import Draggable from 'app/components/DraggableItems';
import { DraggableInputItem } from 'utils/Sprites';

const renderPageTitle = () => {
  return (
    <>
      <Helmet>
        <title>{'受領方法'}</title>
        <meta name="description" content={'...'} />
      </Helmet>
    </>
  );
};

const ReceiptMethod = () => {
  return (
    <>
      {renderPageTitle()}
      <Row>
        <Col span={24} className="mb-8">
          <span className="page-title01">{'受領方法'}</span>
        </Col>

        <Col span={24} className="mb-6">
          <Row className="item mb-2">
            <Draggable
              entries={[
                <DraggableInputItem
                  count={88}
                  InputComponent={<Input size="large" value={'手渡し'} />}
                />,
                <DraggableInputItem
                  count={77}
                  InputComponent={<Input size="large" value={'募金箱'} />}
                />,
                <DraggableInputItem
                  count={99}
                  InputComponent={<Input size="large" value={'郵便振替'} />}
                />,
              ]}
            />
          </Row>
        </Col>

        <Col span={24} className="pl-8">
          <Space align="center">
            <Input size="large" placeholder={'手渡し'} />
            <Button className="icon-btn" type="primary">
              <span className="material-symbols-outlined">add</span>
              <span>{'追加'}</span>
            </Button>
          </Space>
        </Col>
      </Row>
    </>
  );
};

export default ReceiptMethod;
