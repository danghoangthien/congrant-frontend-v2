import { Space, Button, Table, Card, Dropdown, Menu } from 'antd';
import { StyledTable } from './HistoryTable.style';
import { DANGER_COLOR } from 'styles/StyleConstants';

const randomOutput = arr => arr[Math.floor(Math.random() * arr.length)];

const dataSource = Array.from(Array(5).keys()).map(i => ({
  created_at: randomOutput(['2023-04-01 12:34:56']),
  number: randomOutput(['136件', '129件', '39件', '20件', '1件']),
  creator: randomOutput(['荒木 雄大']),
  target_supporter: randomOutput([
    '田中太郎、山田花子 他',
    '吉田雄一、竹下涼　他',
    '山岡美子、岡本拓也 他',
    '菊池良太郎',
  ]),
}));

const columnMap = {
  created_at: {
    width: 180,
    title: '作成日時',
    dataIndex: 'created_at',
  },
  number: {
    title: '件数',
    dataIndex: 'number',
  },
  target_supporter: {
    title: '対象サポーター',
    dataIndex: 'target_supporter',
  },
  creator: {
    title: '作成者',
    dataIndex: 'creator',
  },
  action: {
    width: 120,
    title: 'アクション',
    render: row => (
      <Space>
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

// レコードアクションメニュー・Record Action Menu
const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <Space>
            <span>{'領収書ダウンロード'}</span>
          </Space>
        ),
      },
      {
        key: '2',
        label: (
          <Space>
            <span style={{ color: DANGER_COLOR }}>{'一括削除'}</span>
          </Space>
        ),
      },
    ]}
  />
);

const HistoryTable = () => (
  <StyledTable>
    <Card bodyStyle={{ padding: 0, overflow: 'hidden' }}>
      <Table
        className="history-table"
        tableLayout="fixed"
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        onRow={(record, rowIndex) => {
          return {
            onClick: event => {
              window.location.href = '/app/receipts-create-history-detail';
            }, // click row
          };
        }}
      />
    </Card>
  </StyledTable>
);

export default HistoryTable;
