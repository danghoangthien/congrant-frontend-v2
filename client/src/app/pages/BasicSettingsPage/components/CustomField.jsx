import { Row, Col, Tag, Button, Table } from 'antd';
import { MenuOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import AddCustomField from './AddCustomField';

const dataSource = Array.from(Array(5).keys()).map(i => ({
  i: `${i}`,
  item_name: `認知経路`,
  format: '単数選択',
}));

const columnMap = {
  empty: {
    width: 50,
    title: '',
    render: row => <MenuOutlined className="display-inline-flex" />,
  },
  item_name: {
    width: 150,
    title: '項目名',
    dataIndex: 'item_name',
  },
  format: {
    title: '形式',
    dataIndex: 'format',
  },

  action: {
    width: 180,
    title: 'アクション',
    render: row => (
      <>
        <Button icon={<EditOutlined />}>{'編集'}</Button>
        <Button className="ml-2">{'...'}</Button>
      </>
    ),
  },
};
const columns = Object.keys(columnMap).map(columnName => {
  return columnMap[columnName];
});

const CustomField = () => {
  return (
    <>
      <div className="item ml-5">
        <Row className="mb-5">
          <Col sm={24} md={24} lg={24}>
            <span className="page-title">{'カスタム項目'}</span>
          </Col>
        </Row>
        {/* 寄付決済 */}
        <Row className="item mb-5">
          <Col className="item mb-2" sm={24} md={24} lg={24}>
            <span className="page-sub-title">{'寄付決済'}</span>
          </Col>
          <Col sm={24} md={24} lg={24}>
            <Table dataSource={dataSource} columns={columns} pagination={false} />
          </Col>
        </Row>
        <Row className="item mb-5">
          <Col sm={24} md={24} lg={24}>
            <AddCustomField key="1" title={'カスタム項目（寄付決済)'} />
          </Col>
        </Row>
        {/* 個人サポーター */}
        <Row className="item mb-5">
          <Col className="item mb-2" sm={24} md={24} lg={24}>
            <span className="page-sub-title">{'個人サポーター'}</span>
          </Col>
          <Col sm={24} md={24} lg={24}>
            <Table dataSource={dataSource} columns={columns} pagination={false} />
          </Col>
        </Row>
        <Row className="item mb-5">
          <Col sm={24} md={24} lg={24}>
            <AddCustomField key="2" title={'カスタム項目（個人サポーター)'} />
          </Col>
        </Row>
        {/* 法人サポーター */}
        <Row className="item mb-5">
          <Col className="item mb-2" sm={24} md={24} lg={24}>
            <span className="page-sub-title">{'法人サポーター'}</span>
          </Col>
          <Col sm={24} md={24} lg={24}>
            <Table dataSource={dataSource} columns={columns} pagination={false} />
          </Col>
        </Row>
        <Row className="item mb-5">
          <Col sm={24} md={24} lg={24}>
            <AddCustomField key="3" title={'カスタム項目（法人サポーター)'} />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CustomField;
