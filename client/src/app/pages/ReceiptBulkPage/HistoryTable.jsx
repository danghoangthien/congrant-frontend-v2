import { Space, Button, Table, Card } from 'antd';
import { StyledTable } from './HistoryTable.style';

const randomOutput = arr => arr[Math.floor(Math.random() * arr.length)];

const dataSource = Array.from(Array(5).keys()).map(i => ({
  created_at: randomOutput(['2023-04-01 12:34:56']),
  number: randomOutput(['136件']),
  creator: randomOutput(['荒木 雄大']),
}));

const columnMap = {
  created_at: {
    title: '作成日時',
    dataIndex: 'created_at',
  },
  number: {
    title: '件数',
    dataIndex: 'number',
  },
  creator: {
    title: '作成者',
    dataIndex: 'creator',
  },
  action: {
    width: 380,
    title: 'アクション',
    render: row => (
      <Space>
        <Button
          className="icon-btn"
          icon={<span className="material-symbols-outlined">download</span>}
          type="primary"
        >
          {'ダウンロード（zip）'}
        </Button>
        <Button
          className="icon-btn"
          icon={<span className="material-symbols-outlined fill-icon">send</span>}
          type="primary"
        >
          {'メールで送る'}
        </Button>
      </Space>
    ),
  },
};
const columns = Object.keys(columnMap).map(columnName => {
  return columnMap[columnName];
});

const HistoryTable = () => (
  <StyledTable>
    <Card bodyStyle={{ padding: 0, overflow: 'hidden' }}>
      <Table
        className="history-table"
        tableLayout="fixed"
        dataSource={dataSource}
        columns={columns}
        pagination={false}
      />
    </Card>
  </StyledTable>
);

export default HistoryTable;
