import { Helmet } from 'react-helmet-async';
import { Space, Row, Col, Input, Badge, Button } from 'antd';
import { TEXT_GRAY_COLOR, DANGER_COLOR, LIGHT_GRAY } from 'styles/StyleConstants';
import Draggable from 'app/components/DraggableItems';
import { DraggableInputItem } from './Sprites';

const renderPageTitle = () => {
  return (
    <>
      <Helmet>
        <title>{'サポーター属性'}</title>
        <meta name="description" content={'...'} />
      </Helmet>
    </>
  );
};

const SupportAttribute = () => {
  return (
    <>
      {renderPageTitle()}
      <Row>
        <Col span={24} className="mb-8">
          <span className="page-title01">{'サポーター属性'}</span>
        </Col>

        <Col span={24} className="mb-6">
          <Row className="item mb-2">
            <Draggable
              entries={[
                <DraggableInputItem count={88} InputComponent={<Input value={'理事'} />} />,
                <DraggableInputItem count={77} InputComponent={<Input value={'ボランティア'} />} />,
                <DraggableInputItem count={99} InputComponent={<Input value={'代表知人'} />} />,
              ]}
            />
          </Row>
        </Col>
        <Col span={24} className="pl-8">
          <Space align="center">
            <Input placeholder={'理事'} />
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

export default SupportAttribute;
