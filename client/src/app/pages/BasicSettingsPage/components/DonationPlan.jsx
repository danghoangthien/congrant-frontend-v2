import { Row, Col, Tag, Button, Table } from 'antd';
import { MenuOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import AddDonationPlan from './AddDonationPlan';
import { randomOutput } from 'utils/helper';

import { DONATION_TYPE_COLORS, DONATION_TYPES } from 'app/pages/DonationPage/consts';

const dataSource = Array.from(Array(5).keys()).map(i => ({
  i: `${i}`,
  donation_type: randomOutput([1, 2, 3]),
  plan_name: randomOutput([
    '賛助会員（都度更新）',
    '正会員（都度更新）',
    'ブロンズサポーター',
    'シルバーサポーター',
  ]),
  amount: randomOutput(['5,000円/月', '115,000円/月', '27,000円/月']),
}));

const columnMap = {
  empty: {
    width: 50,
    title: '',
    render: row => <MenuOutlined className="display-inline-flex" />,
  },
  donation_type: {
    width: 150,
    title: '頻度',
    dataIndex: 'donation_type',
    render: donation_type => (
      <Tag
        style={{
          color: DONATION_TYPE_COLORS[donation_type][2],
          backgroundColor: DONATION_TYPE_COLORS[donation_type][0],
          border: `1px solid ${DONATION_TYPE_COLORS[donation_type][1]}`,
        }}
      >
        {DONATION_TYPES[donation_type] || ''}
      </Tag>
    ),
  },
  plan_name: {
    title: 'プラン名',
    dataIndex: 'plan_name',
  },
  amount: {
    width: 150,
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
            <span className="page-title">{'寄付プラン'}</span>
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
