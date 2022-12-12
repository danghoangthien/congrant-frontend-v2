import { Row, Col, Tag, Button, Dropdown, Menu, Space } from 'antd';
import DraggableTable from 'app/components/DraggableTable';
import AddEmailTemplate from './AddEmailTemplate';
import { TEXT_GRAY_COLOR } from 'styles/StyleConstants';

const dataSource = [
  {
    i: 1,
    template_name: '領収書メール',
  },
  {
    i: 1,
    template_name: 'お礼メール',
  },
];

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

const columnMap = {
  empty: {
    width: 50,
    title: '',
    render: row => (
      <span className="material-symbols-outlined" style={{ color: TEXT_GRAY_COLOR }}>
        menu
      </span>
    ),
  },
  template_name: {
    title: 'テンプレート名',
    dataIndex: 'template_name',
  },
  action: {
    width: 160,
    title: 'アクション',
    render: row => (
      <Space>
        <Button
          className="icon-btn"
          icon={<span className="material-symbols-outlined fill-icon">edit</span>}
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

const MailTemplate = () => {
  return (
    <>
      <Row className="mb-8">
        <Col sm={24} md={24} lg={24}>
          <span className="page-title01">{'メールテンプレート'}</span>
        </Col>
      </Row>
      <Row className="mb-6">
        <Col sm={24} md={24} lg={24}>
          <DraggableTable
            tableLayout="fixed"
            dataSource={dataSource}
            columns={columns}
            pagination={false}
          />
        </Col>
      </Row>
      <Row>
        <Col sm={24} md={24} lg={24}>
          <AddEmailTemplate />
        </Col>
      </Row>
    </>
  );
};

export default MailTemplate;
