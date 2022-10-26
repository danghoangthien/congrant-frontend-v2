import { Space, Row, Col, Input, Badge, Button } from 'antd';
import { MenuOutlined, DeleteFilled, PlusOutlined } from '@ant-design/icons';
const SupportAttribute = () => {
  return (
    <>
      <div className="item ml-5">
        <Row className="mb-5">
          <Col sm={24} md={24} lg={24}>
            <span className="page-title">{'サポーター属性'}</span>
          </Col>
        </Row>
        <Row className="item mb-2">
          <Col sm={24} md={24} lg={24}>
            <Space align="center">
              <MenuOutlined className="display-inline-flex" />
              <Input value={'理事'} />
              <Badge
                count={'99'}
                className="display-inline-flex"
                style={{ backgroundColor: '#F0F0EE', color: '#000000', opacity: '0.5' }}
              />
              <DeleteFilled className="display-inline-flex" style={{ color: '#FF4D4F' }} />
            </Space>
          </Col>
        </Row>
        <Row className="item mb-2">
          <Col sm={24} md={24} lg={24}>
            <Space align="center">
              <MenuOutlined className="display-inline-flex" />
              <Input value={'ボランティア'} />
              <Badge
                count={'99'}
                className="display-inline-flex"
                style={{ backgroundColor: '#F0F0EE', color: '#000000', opacity: '0.5' }}
              />
              <DeleteFilled className="display-inline-flex" style={{ color: '#FF4D4F' }} />
            </Space>
          </Col>
        </Row>
        <Row className="item mb-5">
          <Col sm={24} md={24} lg={24}>
            <Space align="center">
              <MenuOutlined className="display-inline-flex" />
              <Input value={'代表知人'} />
              <Badge
                count={'99'}
                className="display-inline-flex"
                style={{ backgroundColor: '#F0F0EE', color: '#000000', opacity: '0.5' }}
              />
              <DeleteFilled className="display-inline-flex" style={{ color: '#FF4D4F' }} />
            </Space>
          </Col>
        </Row>
        <Row className="item">
          <Col sm={24} md={24} lg={24}>
            <Space align="center">
              <MenuOutlined className="display-inline-flex" style={{ color: '#ffffff' }} />
              <Input placeholder={'理事'} />
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

export default SupportAttribute;
