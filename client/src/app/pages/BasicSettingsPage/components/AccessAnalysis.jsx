import { Row, Col, Tag, Button, Table, Space, Input } from 'antd';
import { MenuOutlined, EditOutlined, InfoCircleFilled } from '@ant-design/icons';

const AccessAnalysis = () => {
  return (
    <>
      <div className="item ml-5">
        <Row className="mb-5">
          <Col sm={24} md={24} lg={24}>
            <span className="page-title">{'名寄せ先の選択'}</span>
          </Col>
        </Row>
        <Row className="item mb-2">
          <Col className="item my-2" sm={24} md={24} lg={24}>
            <Space align="center">
              <span>{'Google アナリティクス'}</span>
              <InfoCircleFilled className="display-inline-flex" />
            </Space>
          </Col>
          <Col className="item my-2" sm={24} md={24} lg={24}>
            <Space align="center">
              <Input placeholder={'G-XXXXXXXXX'} />
            </Space>
          </Col>
          <Col className="item my-2" sm={24} md={24} lg={24}>
            <Space align="center">
              <span>{'Google タグマネージャー'}</span>
              <InfoCircleFilled className="display-inline-flex" />
            </Space>
          </Col>
          <Col className="item my-2" sm={24} md={24} lg={24}>
            <Space align="center">
              <Input placeholder={'G-XXXXXXXXX'} />
            </Space>
          </Col>
        </Row>
        <Row className="item mt-15">
          <Col sm={24} md={24} lg={24}>
            <Button className="active" type="primary">
              <span className="ml-2">{'保存する'}</span>
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AccessAnalysis;
