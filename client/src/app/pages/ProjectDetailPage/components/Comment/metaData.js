import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
// ANTD
import { Space, Select } from 'antd';
// STYLE
// UTILS
import { randomOutput } from 'utils/helper';
import { getWithExpiry } from 'utils/localStorageHandler';
// CONST
import Reply from './../Reply';
import DrawerHandle from 'app/components/DrawerHandle';
import Detail from 'app/pages/IndividualPage/components/Detail';

const StyledLink = styled(Link)`
  color: #000000;

  & .material-symbols-outlined {
    font-size: 16px;
    margin-left: 8px;
    vertical-align: text-bottom;
  }
`;

const dataSource = Array.from(Array(10).keys()).map(i => ({
  pub_date: '2023-04-01',
  status: randomOutput([1, 2, 3]),
  name: randomOutput(['田中 太郎', 'テスト']),
  comment: '応援しています！',
  reply: 'ありがとうございます！',
}));

const columnMap = {
  pub_date: {
    width: 150,
    title: '公開日時',
    dataIndex: 'pub_date',
    render: pub_date => pub_date,
  },
  name: {
    width: 150,
    title: 'お名前',
    render: row => (
      <DrawerHandle drawerTitle="田中 太郎" drawerComponent={<Detail data={row} />}>
        <span className="supporter-link">{row.name}</span>
      </DrawerHandle>
    ),
  },
  status: {
    width: 150,
    title: '公開/非公開',
    dataIndex: 'status',
    render: status => {
      if ([1, 2].includes(status)) {
        return (
          <Select defaultValue={status} style={{ width: '100%' }}>
            <Select.Option value={1}>{'公開'}</Select.Option>
            <Select.Option value={2}>{'非公開'}</Select.Option>
          </Select>
        );
      } else return <span>{'非公開希望'}</span>;
    },
  },
  comment: {
    title: 'コメント',
    dataIndex: 'comment',
    render: comment => '応援しています！',
  },
  reply: {
    title: '返信',
    dataIndex: 'reply',
    render: reply => 'ありがとうございます！',
  },
  action: {
    width: 150,
    title: 'アクション',
    align: 'center',
    dataIndex: 'action',
    render: action => (
      <Space>
        <Reply />
      </Space>
    ),
  },
};

const COLUMN_SETTING_LOCALSTORAGE = 'admin_log_list_column_setting';

const getRenderColumns = () => {
  let visibleColumns = Object.keys(columnMap);
  const columnsInSetting = getWithExpiry(COLUMN_SETTING_LOCALSTORAGE);
  if (columnsInSetting) {
    visibleColumns = visibleColumns.filter(columnName => {
      return columnsInSetting.includes(columnName);
    });
  }
  const renderColumns = visibleColumns.map(columnName => {
    return columnMap[columnName];
  });
  return renderColumns;
};

const pagination = {
  current_page: 1,
  limit: 50,
  total_items: 500,
  total_page: 10,
};

export { getRenderColumns, dataSource, pagination, COLUMN_SETTING_LOCALSTORAGE, columnMap };
