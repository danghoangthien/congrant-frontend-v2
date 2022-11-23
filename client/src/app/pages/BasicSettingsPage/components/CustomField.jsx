import { Row, Col, Button, Table, Space, Dropdown, Menu } from 'antd';
import { TEXT_GRAY_COLOR } from 'styles/StyleConstants';
// COMPONENT
import AddCustomField from './AddCustomField';

// レコードアクションメニュー・Record Action Menu
const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: 'アクション1',
      },
      {
        key: '2',
        label: 'アクション2',
      },
    ]}
  />
);

const dataSource = Array.from(Array(5).keys()).map(i => ({
  i: `${i}`,
  item_name: `認知経路`,
  format: '単数選択',
}));

const columnMap = {
  empty: {
    width: 50,
    title: '',
    render: row => (
      <span class="material-symbols-outlined" style={{ color: TEXT_GRAY_COLOR }}>
        menu
      </span>
    ),
  },
  item_name: {
    title: '項目名',
    dataIndex: 'item_name',
  },
  format: {
    title: '形式',
    dataIndex: 'format',
  },

  action: {
    width: 160,
    title: 'アクション',
    render: row => (
      <Space>
        <Button
          className="icon-btn"
          icon={<span class="material-symbols-outlined fill-icon">edit</span>}
        >
          {'編集'}
        </Button>
        <Dropdown overlay={menu} placement="bottomRight">
          <Button
            className="more-menu-btn"
            icon={<span className="material-symbols-outlined">more_horiz</span>}
          />
        </Dropdown>
      </Space>
    ),
  },
};

const columns = Object.keys(columnMap).map(columnName => {
  return columnMap[columnName];
});

const CustomField = () => {
  return (
    <>
      <Row className="mb-8">
        <Col sm={24} md={24} lg={24}>
          <span className="page-title01">{'カスタム項目'}</span>
        </Col>
      </Row>

      {/* 寄付決済 */}
      <Row className="mb-6">
        <Col className="mb-4" sm={24} md={24} lg={24}>
          <span className="page-sub-title">{'寄付決済'}</span>
        </Col>
        <Col sm={24} md={24} lg={24}>
          <Table dataSource={dataSource} columns={columns} pagination={false} />
        </Col>
      </Row>
      <Row className="mb-8">
        <Col sm={24} md={24} lg={24}>
          <AddCustomField key="1" title={'カスタム項目（寄付決済)'} />
        </Col>
      </Row>

      {/* 個人サポーター */}
      <Row className="mb-6">
        <Col className="mb-2" sm={24} md={24} lg={24}>
          <span className="page-sub-title">{'個人サポーター'}</span>
        </Col>
        <Col sm={24} md={24} lg={24}>
          <Table dataSource={dataSource} columns={columns} pagination={false} />
        </Col>
      </Row>
      <Row className="mb-8">
        <Col sm={24} md={24} lg={24}>
          <AddCustomField key="2" title={'カスタム項目（個人サポーター)'} />
        </Col>
      </Row>

      {/* 法人サポーター */}
      <Row className="mb-6">
        <Col className="mb-2" sm={24} md={24} lg={24}>
          <span className="page-sub-title">{'法人サポーター'}</span>
        </Col>
        <Col sm={24} md={24} lg={24}>
          <Table dataSource={dataSource} columns={columns} pagination={false} />
        </Col>
      </Row>
      <Row>
        <Col sm={24} md={24} lg={24}>
          <AddCustomField key="3" title={'カスタム項目（法人サポーター)'} />
        </Col>
      </Row>
    </>
  );
};

export default CustomField;
