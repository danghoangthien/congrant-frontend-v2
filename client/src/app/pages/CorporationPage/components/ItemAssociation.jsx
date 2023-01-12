import { Table } from 'antd';
import { SettingSelect } from 'utils/Sprites';

const dataSource = [
  {
    congrant_item: '法人名',
    file_item: '法人名',
    registration_example: 'コングラント株式会社',
  },
  {
    congrant_item: '法人名（ふりがな）',
    file_item: '法人名（ふりがな）',
    registration_example: 'こんぐらんとかぶしきがいしゃ',
  },
  {
    congrant_item: '担当者 姓',
    file_item: '姓',
    registration_example: '荒木',
  },
  {
    congrant_item: '担当者 名',
    file_item: '名',
    registration_example: '雄大',
  },
  {
    congrant_item: '担当者 姓（ふりがな）',
    file_item: '姓（ふりがな）',
    registration_example: 'あらき',
  },
  {
    congrant_item: '担当者 名（ふりがな）',
    file_item: '名（ふりがな）',
    registration_example: 'ゆうだい',
  },
  {
    congrant_item: '担当者 部署・肩書き',
    file_item: '部署・肩書き',
    registration_example: 'ゆうだい',
  },
  {
    congrant_item: '広報物への掲載',
    file_item: null,
    registration_example: 'araki@congrant.com',
  },
  {
    congrant_item: 'メールアドレス',
    file_item: 'メールアドレス  ',
    registration_example: 'araki@congrant.com',
  },
  {
    congrant_item: '電話番号',
    file_item: '電話番号',
    registration_example: '08012345678',
  },
  {
    congrant_item: '国',
    file_item: null,
    registration_example: '',
  },
  {
    congrant_item: '郵便番号',
    file_item: '郵便番号',
    registration_example: '5430002',
  },
  {
    congrant_item: '都道府県',
    file_item: '都道府県',
    registration_example: '大阪府',
  },
  {
    congrant_item: '市区町村',
    file_item: '市区町村',
    registration_example: '大阪市西区',
  },
  {
    congrant_item: '番地・建物名',
    file_item: '番地・建物名',
    registration_example: '江戸堀123 コングラントマンション123',
  },
  {
    congrant_item: '郵送物の送付先を別途指定',
    file_item: null,
    registration_example: '',
  },

  {
    congrant_item: '国',
    file_item: null,
    registration_example: '',
  },
  {
    congrant_item: '郵送物の送付先を別途指定',
    file_item: null,
    registration_example: '',
  },
  {
    congrant_item: '郵便番号（郵便物送付先）',
    file_item: null,
    registration_example: '',
  },
  {
    congrant_item: '都道府県（郵便物送付先）',
    file_item: null,
    registration_example: '',
  },
  {
    congrant_item: '市区町村（郵便物送付先）',
    file_item: null,
    registration_example: '',
  },
  {
    congrant_item: '番地・建物名（郵便物送付先）',
    file_item: null,
    registration_example: '',
  },
  {
    congrant_item: '郵送物の送付',
    file_item: null,
    registration_example: '',
  },
  {
    congrant_item: '郵送物数',
    file_item: null,
    registration_example: '',
  },
  {
    congrant_item: '属性',
    file_item: null,
    registration_example: '',
  },
  {
    congrant_item: 'お子様のお名前',
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
