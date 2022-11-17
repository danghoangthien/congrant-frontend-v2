import { Row, Col, Tag, Radio, Table } from 'antd';

const randomOutput = arr => arr[Math.floor(Math.random() * arr.length)];

const dataSource = [
  {
    item: '氏名',
    type: randomOutput([1, 2, 3]),
  },
  {
    item: '氏名（ふりがな）',
    type: randomOutput([1, 2, 3]),
  },
  {
    item: '性別',
    type: randomOutput([1, 2, 3]),
  },
  {
    item: '生年月日',
    type: randomOutput([1, 2, 3]),
  },
  {
    item: 'メールアドレス',
    type: randomOutput([1, 2, 3]),
  },
  {
    item: '電話番号',
    type: randomOutput([1, 2, 3]),
  },
  {
    item: '住所',
    type: randomOutput([1, 2, 3]),
  },
  {
    item: '備考欄',
    type: randomOutput([1, 2, 3]),
  },
  {
    item: '応援コメント',
    type: randomOutput([1, 2, 3]),
  },
  {
    item: 'お子様のお名前',
    type: randomOutput([1, 2, 3]),
  },
  {
    item: '認知経路',
    type: randomOutput([1, 2, 3]),
  },
  {
    item: '寄付理由',
    type: randomOutput([1, 2, 3]),
  },
];
const columnMap = {
  item: {
    width: 250,
    title: '項目',
    dataIndex: 'item',
  },
  type: {
    title: '必須/任意/非表示',
    render: ({ type }) => (
      <>
        <Radio.Group value={type}>
          <Radio value={1}>{'必須'}</Radio>
          <Radio value={2}>{'任意'}</Radio>
          <Radio value={3}>{'非表示'}</Radio>
        </Radio.Group>
      </>
    ),
  },
};
const columns = Object.keys(columnMap).map(columnName => {
  return columnMap[columnName];
});

const InputItemTable = () => <Table dataSource={dataSource} columns={columns} pagination={false} />;

export default InputItemTable;
