import { Helmet } from 'react-helmet-async';
import { Row, Col, Tag, Button, Table, Dropdown, Menu, Space } from 'antd';
import AddDonationPlan from './AddDonationPlan';
import DraggableTable from 'app/components/DraggableTable';
import { DONATION_TYPE_COLORS, DONATION_TYPES } from 'app/pages/DonationPage/consts';
import { TEXT_GRAY_COLOR } from 'styles/StyleConstants';

const renderPageTitle = () => {
  return (
    <>
      <Helmet>
        <title>{'寄付プラン'}</title>
        <meta name="description" content={'...'} />
      </Helmet>
    </>
  );
};

// const dataSource = Array.from(Array(5).keys()).map(i => ({
//   i: `${i}`,
//   donation_type: randomOutput([1, 2, 3]),
//   plan_name: randomOutput([
//     '賛助会員（都度更新）',
//     '正会員（都度更新）',
//     'ブロンズサポーター',
//     'シルバーサポーター',
//   ]),
//   amount: randomOutput(['5,000円/月', '115,000円/年', '27,000円/年']),
// }));

const dataSource = [
  {
    i: 1,
    donation_type: 1,
    plan_name: '賛助会員（都度更新）',
    amount: '5,000円',
  },
  {
    i: 2,
    donation_type: 2,
    plan_name: '賛助会員（都度更新）',
    amount: '5,000円/月',
  },
  {
    i: 3,
    donation_type: 3,
    plan_name: '賛助会員（都度更新）',
    amount: '10,000円/年',
  },
  {
    i: 4,
    donation_type: 1,
    plan_name: '賛助会員（都度更新）',
    amount: '5,000円',
  },
  {
    i: 5,
    donation_type: 2,
    plan_name: '賛助会員（都度更新）',
    amount: '5,000円/月',
  },
  {
    i: 6,
    donation_type: 3,
    plan_name: '賛助会員（都度更新）',
    amount: '10,000円/年',
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
  donation_type: {
    width: 80,
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

const DonationPlan = () => {
  return (
    <>
      {renderPageTitle()}
      <Row className="mb-6">
        <Col sm={24} md={24} lg={24}>
          <span className="page-title01">{'寄付プラン'}</span>
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
          <AddDonationPlan />
        </Col>
      </Row>
    </>
  );
};

export default DonationPlan;
