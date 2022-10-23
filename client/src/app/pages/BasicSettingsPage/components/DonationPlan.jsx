import { Row, Col, Tag, Button, Table } from 'antd';
import { MenuOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import AddDonationPlan from './AddDonationPlan';

const dataSource = Array.from(Array(5).keys()).map(i => ({
  i: `${i}`,
  frequency: `単発`,
  plan_name: '賛助会員（都度更新',
  amount: `5,000円/月`,
}));

const columnMap = {
  empty: {
    width: 50,
    title: '',
    render: row => <MenuOutlined className="display-inline-flex" />,
  },
  frequency: {
    width: 150,
    title: '頻度',
    render: ({ frequency }) => <Tag color="blue">{frequency}</Tag>,
  },
  plan_name: {
    title: 'プラン名',
    dataIndex: 'plan_name',
  },
  amount: {
    title: '金額',
    dataIndex: 'amount',
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

const DonationPlan = () => {
  return (
    <>
      <div className="item ml-5">
        <Row className="mb-5">
          <Col sm={24} md={24} lg={24}>
            <span className="page-title">{'名寄せ先の選択'}</span>
          </Col>
        </Row>
        <Row className="item mb-2">
          <Col sm={24} md={24} lg={24}>
            <Table dataSource={dataSource} columns={columns} pagination={false} />
          </Col>
        </Row>
        <Row className="item">
          <Col sm={24} md={24} lg={24}>
            <AddDonationPlan />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default DonationPlan;
