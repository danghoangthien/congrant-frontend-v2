import { Row, Col, Tag, Radio, Table } from 'antd';

const randomOutput = arr => arr[Math.floor(Math.random() * arr.length)];

const dataSource = Array.from(Array(15).keys()).map(i => ({
  item: randomOutput(['氏名（ふりがな）', '氏名', '性別', '生年月日', 'メールアドレス']),
  type: randomOutput([1, 2, 3]),
}));

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
