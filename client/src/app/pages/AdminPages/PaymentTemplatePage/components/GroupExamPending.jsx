import { Space, Button } from 'antd';
import { TableStyle } from 'app/components/Table/Table.style';
// COMPONENT
import DraggableTable from 'app/components/DraggableTable';
import RegistrationEdit from './RegistrationEdit';
import Preview from './Preview';
// CONST
import { TEXT_GRAY_COLOR } from 'styles/StyleConstants';

const randomOutput = arr => arr[Math.floor(Math.random() * arr.length)];

const dataSource = Array.from(Array(3).keys()).map(i => ({
  title: randomOutput([
    'HP記載事項不備',
    'SNS・ブログでの登録',
    '利用不可（NG理由非公開）',
    '記載事項の不備',
  ]),
}));

const columns = [
  {
    width: 50,
    title: '',
    render: row => (
      <span className="material-symbols-outlined" style={{ color: TEXT_GRAY_COLOR }}>
        menu
      </span>
    ),
  },
  {
    width: 250,
    title: 'テンプレートタイトル',
    dataIndex: 'title',
  },
  {
    width: 150,
    title: 'プレビュー',
    render: row => <Preview />,
  },
  {
    width: 150,
    title: '操作',
    dataIndex: 'action',
    render: () => (
      <Space>
        <RegistrationEdit />
        <Button>{'複製'}</Button>
        <Button>{'削除'}</Button>
      </Space>
    ),
  },
];

const Table = ({ ...rest }) => (
  <TableStyle>
    <DraggableTable dataSource={dataSource} columns={columns} pagination={false} />
  </TableStyle>
);

export default Table;
