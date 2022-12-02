import { Select, Button, Table, Badge, Dropdown, Menu } from 'antd';
import { EllipsisOutlined, SendOutlined, TagFilled, DeleteFilled } from '@ant-design/icons';
import { randomOutput } from 'utils/helper';
import { StyledBadgeDot } from 'styles/global-styles';
import DrawerHandle from 'app/components/DrawerHandle';
import Detail from 'app/pages/IndividualPage/components/Detail';
//import Table from 'app/components/Table';

const RECEIPT_STATUSES = {
  0: '受領済み',
  1: '未受領',
};

const RECEIPT_STATUS_COLOR = {
  0: 'success',
  1: 'warning',
};

// Action Menu
const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <>
            <SendOutlined style={{ color: 'black' }} />{' '}
            <span className="ml-2">{'メッセージを送る'}</span>
          </>
        ),
      },
      {
        key: '2',
        label: (
          <>
            <TagFilled style={{ color: 'black' }} />{' '}
            <span className="ml-2">{'属性を設定する'}</span>
          </>
        ),
      },
      {
        key: '3',
        label: (
          <>
            <DeleteFilled style={{ color: 'red' }} /> <span className="ml-2">{'削除'}</span>
          </>
        ),
      },
    ]}
  />
);

const dataSource = Array.from(Array(5).keys()).map(i => ({
  application_datetime: randomOutput(['2022-07-30  12:34:56']),
  receipt_status: randomOutput([0, 1]),
  date_of_receipt: '2022-07-30',
  supporter: randomOutput(['田中 太郎', '山田 花子', '鈴木 一郎']),
  receipt_method: randomOutput(['カード決済', '銀行振込']),
  number_of_words: randomOutput(['1口', '2口', '43口']),
  total_amount: randomOutput(['3,000円', '5,000円', '9,000円']),
}));

const columnMap = {
  application_datetime: {
    width: 150,
    title: '申込日時',
    dataIndex: 'application_datetime',
  },
  receipt_status: {
    width: 130,
    title: '受領ステータス',
    dataIndex: 'receipt_status',
    render: receipt_status => (
      <StyledBadgeDot>
        <Badge
          status={RECEIPT_STATUS_COLOR[receipt_status]}
          text={RECEIPT_STATUSES[receipt_status]}
        />
      </StyledBadgeDot>
    ),
  },
  date_of_receipt: {
    width: 120,
    title: '受領日',
    dataIndex: 'date_of_receipt',
  },
  supporter: {
    title: 'サポーター',
    render: row => (
      <DrawerHandle drawerTitle="田中 太郎" drawerComponent={<Detail data={row} />}>
        <span className="supporter-link">{row.supporter}</span>
      </DrawerHandle>
    ),
  },
  receipt_method: {
    width: 120,
    title: '受領方法',
    dataIndex: 'receipt_method',
  },
  number_of_words: {
    width: 60,
    title: '口数',
    dataIndex: 'number_of_words',
  },
  total_amount: {
    width: 100,
    title: '合計金額',
    dataIndex: 'total_amount',
  },
  return_shipping_status: {
    width: 160,
    title: 'リターン発送状況',
    render: ({ return_shipping_status }) => {
      const statuses = ['未発送', '発送済み'];
      return (
        <Select
          defaultValue={{
            value: '1',
          }}
          style={{
            width: '100%',
          }}
          onChange={() => {}}
        >
          <Select.Option value="1">{statuses[0]}</Select.Option>
          <Select.Option value="2">{statuses[1]}</Select.Option>
        </Select>
      );
    },
  },
  action: {
    width: 100,
    title: 'アクション',
    render: row => (
      <Dropdown overlay={menu} placement="bottomRight">
        <Button icon={<EllipsisOutlined />} />
      </Dropdown>
    ),
  },
};

const columns = Object.keys(columnMap).map(columnName => {
  return columnMap[columnName];
});

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    name: record.name,
  }),
};

const CourseTable = () => (
  <Table
    tableLayout="fixed"
    dataSource={dataSource}
    columns={columns}
    pagination={false}
    rowSelection={{
      ...rowSelection,
    }}
  />
);

export default CourseTable;
