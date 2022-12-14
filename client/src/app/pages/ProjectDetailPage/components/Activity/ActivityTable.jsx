import { Link } from 'react-router-dom';
import { Table, Dropdown, Button, Menu, Space } from 'antd';
import { StyledStatusTag2 } from 'styles/StatusTag.style';
import styled from 'styled-components/macro';
import { DANGER_COLOR } from 'styles/StyleConstants';

const StyledLink = styled(Link)`
  color: #000000;

  & .material-symbols-outlined {
    font-size: 16px;
    margin-left: 8px;
    vertical-align: text-bottom;
  }
`;

const randomOutput = arr => arr[Math.floor(Math.random() * arr.length)];

const dataSource = Array.from(Array(3).keys()).map(i => ({
  id: i + 1,
  pub_date: '2023-04-01',
  status: randomOutput([
    <StyledStatusTag2 className="public">{'公開'}</StyledStatusTag2>,
    <StyledStatusTag2 className="non-public">{'非公開'}</StyledStatusTag2>,
  ]),
  title: randomOutput([
    <StyledLink to={'/'} target="_blank">
      <span className="">{'マンスリーサポーター30人達成しました！'}</span>
      <span className="material-symbols-outlined">open_in_new</span>
    </StyledLink>,
    <StyledLink to={'/'} target="_blank">
      <span className="">{'マンスリーサポーターが20人に'}</span>
      <span className="material-symbols-outlined">open_in_new</span>
    </StyledLink>,
  ]),
  support_amount_last_month: '123,456円',
  action: 'アクション',
}));

// Action Menu
const menu = (
  <Menu
    className="action-menu"
    items={[
      {
        key: '1',
        label: (
          <Space>
            <span
              className="material-symbols-outlined fill-icon"
              style={{ fontSize: '16px', verticalAlign: 'middle' }}
            >
              content_copy
            </span>
            <span>{'複製'}</span>
          </Space>
        ),
      },
      {
        key: '2',
        label: (
          <Space>
            <span
              className="material-symbols-outlined fill-icon"
              style={{ fontSize: '16px', verticalAlign: 'middle', color: DANGER_COLOR }}
            >
              delete
            </span>
            <span style={{ color: DANGER_COLOR }}>{'削除'}</span>
          </Space>
        ),
      },
    ]}
  />
);

const columns = [
  {
    width: 150,
    title: '公開日時',
    dataIndex: 'pub_date',
    render: pub_date => pub_date,
  },
  {
    width: 150,
    title: 'ステータス',
    dataIndex: 'status',
    render: status => status,
  },
  {
    title: 'タイトル',
    dataIndex: 'title',
    render: title => title,
  },
  {
    width: 150,
    title: 'アクション',
    align: 'center',
    render: row => (
      <Space>
        <Link className="sidebar-link" to={`blogs/${row.id}/edit`}>
          <Button onClick={() => {}} type="primary">
            {'編集'}
          </Button>
        </Link>
        <Dropdown overlay={menu} placement="bottomRight">
          <Button
            icon={<span className="material-symbols-outlined">more_horiz</span>}
            className="more-menu-btn"
          />
        </Dropdown>
      </Space>
    ),
  },
];

const ActivityTable = ({ ...rest }) => (
  <Table
    className="common-table"
    tableLayout="fixed"
    dataSource={dataSource}
    columns={columns}
    {...rest}
    rowClassName={record => {
      console.log('record', record);
      //index % 2 === 0 ? 'table-row-light' :  'table-row-dark'
    }}
  />
);

export default ActivityTable;
