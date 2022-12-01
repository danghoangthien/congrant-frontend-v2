import { Table } from 'antd';
import { SettingSelect } from 'app/pages/CorporationSettingPage/components/Sprites';
const randomOutput = arr => arr[Math.floor(Math.random() * arr.length)];

const dataSource = [
  {
    congrant_item: '個人ID',
    file_item: '個人ID',
    registration_example: '123456',
  },
  {
    congrant_item: '法人ID',
    file_item: '法人ID',
    registration_example: '',
  },
  {
    congrant_item: '受領日',
    file_item: '受領日',
    registration_example: '2022-01-01',
  },
  {
    congrant_item: '入金日',
    file_item: '入金日',
    registration_example: '2022-01-01',
  },
  {
    congrant_item: 'プラン',
    file_item: 'プラン',
    registration_example: '',
  },
  {
    congrant_item: '単価',
    file_item: '単価',
    registration_example: '3000',
  },
  {
    congrant_item: '口数',
    file_item: '口数',
    registration_example: '1',
  },
  {
    congrant_item: '受領方法',
    file_item: '受領方法',
    registration_example: '手渡し',
  },
  {
    congrant_item: '備考欄',
    file_item: null,
    registration_example: '',
  },
  {
    congrant_item: '認知経路',
    file_item: null,
    registration_example: '',
  },
  {
    congrant_item: '寄付の使用用途',
    file_item: null,
    registration_example: '',
  },
  {
    congrant_item: '支援経験',
    file_item: null,
    registration_example: '',
  },
  {
    congrant_item: '寄付理由',
    file_item: null,
    registration_example: '',
  },
];

const columnMap = {
  congrant_item: {
    width: 200,
    title: 'コングラントの項目',
    dataIndex: 'congrant_item',
  },
  file_item: {
    width: 200,
    title: 'ファイルの項目',
    dataIndex: 'file_item',
    render: file_item => (
      <SettingSelect
        {...{
          size: 'large',
          placeholder: '選択してください',
          ...(file_item ? { value: file_item } : {}),
        }}
      />
    ),
  },
  registration_example: {
    width: 200,
    title: '登録例（ファイルの2行目）',
    dataIndex: 'registration_example',
  },
};

const columns = Object.keys(columnMap).map(columnName => {
  return columnMap[columnName];
});

const LoginHistoryTable = () => (
  <Table dataSource={dataSource} columns={columns} pagination={false} />
);

export default LoginHistoryTable;
