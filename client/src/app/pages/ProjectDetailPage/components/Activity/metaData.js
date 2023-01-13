import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
// ANTD
import { Dropdown, Button, Space, Menu } from 'antd';
// STYLE
import { StyledStatusTag2 } from 'styles/StatusTag.style';
// UTILS
import { randomOutput } from 'utils/helper';
import { getWithExpiry } from 'utils/localStorageHandler';
// CONST
import { DANGER_COLOR } from 'styles/StyleConstants';

const StyledLink = styled(Link)`
  color: #000000;

  & .material-symbols-outlined {
    font-size: 16px;
    margin-left: 8px;
    vertical-align: text-bottom;
  }
`;

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

// その他の操作メニュー・Bulk Select Record Action Menu
export const menuItems = status => {
  // 継続中（ongoing contract）
  if (status === 2) {
    return [
      {
        key: '1',
        label: (
          <Space onClick={() => {}}>
            <span
              className="material-symbols-outlined fill-icon"
              style={{ fontSize: '16px', verticalAlign: 'middle' }}
            >
              send
            </span>
            <span>{'再決済フォームを送る'}</span>
          </Space>
        ),
      },
      {
        key: '2',
        label: (
          <Space onClick={() => {}}>
            <span
              className="material-symbols-outlined fill-icon"
              style={{ fontSize: '16px', verticalAlign: 'middle' }}
            >
              content_copy
            </span>
            <span>{'再決済フォームのURLをコピー'}</span>
          </Space>
        ),
      },
    ];
  }
  // 際決済待ち（waiting for re-payment）
  else if (status === 1) {
    return [
      {
        key: '1',
        label: (
          <Space onClick={() => {}}>
            <span
              className="material-symbols-outlined fill-icon"
              style={{ fontSize: '16px', verticalAlign: 'middle' }}
            >
              autorenew
            </span>
            <span>{'金額変更'}</span>
          </Space>
        ),
      },
      {
        key: '2',
        label: (
          <Space onClick={() => {}}>
            <span
              className="material-symbols-outlined fill-icon"
              style={{ color: DANGER_COLOR, fontSize: '16px', verticalAlign: 'middle' }}
            >
              do_disturb
            </span>
            <span style={{ color: DANGER_COLOR }}>{'解約'}</span>
          </Space>
        ),
      },
    ];
  } else {
    return [
      {
        key: '1',
        label: (
          <Space onClick={() => {}}>
            <span
              className="material-symbols-outlined fill-icon"
              style={{ fontSize: '16px', verticalAlign: 'middle' }}
            >
              send
            </span>
            <span>{'再決済フォームを送る'}</span>
          </Space>
        ),
      },
      {
        key: '2',
        label: (
          <Space onClick={() => {}}>
            <span
              className="material-symbols-outlined fill-icon"
              style={{ fontSize: '16px', verticalAlign: 'middle' }}
            >
              send
            </span>
            <span>{'解約フォームを送る'}</span>
          </Space>
        ),
      },
    ];
  }
};

export const bulkMenuItems = status => {
  // 継続中（ongoing contract）
  if (status === 2) {
    return [
      {
        key: '1',
        label: (
          <Space onClick={() => {}}>
            <span
              className="material-symbols-outlined fill-icon"
              style={{ fontSize: '16px', verticalAlign: 'middle' }}
            >
              send
            </span>
            <span>{'再決済フォームを送る'}</span>
          </Space>
        ),
      },
      {
        key: '2',
        label: (
          <Space onClick={() => {}}>
            <span
              className="material-symbols-outlined fill-icon"
              style={{ fontSize: '16px', verticalAlign: 'middle' }}
            >
              content_copy
            </span>
            <span>{'再決済フォームのURLをコピー'}</span>
          </Space>
        ),
      },
    ];
  }
  // 際決済待ち（waiting for re-payment）
  else if (status === 1) {
    return [
      {
        key: '1',
        label: (
          <Space onClick={() => {}}>
            <span
              className="material-symbols-outlined fill-icon"
              style={{ fontSize: '16px', verticalAlign: 'middle' }}
            >
              autorenew
            </span>
            <span>{'金額変更'}</span>
          </Space>
        ),
      },
      {
        key: '2',
        label: (
          <Space onClick={() => {}}>
            <span
              className="material-symbols-outlined fill-icon"
              style={{ color: DANGER_COLOR, fontSize: '16px', verticalAlign: 'middle' }}
            >
              do_disturb
            </span>
            <span style={{ color: DANGER_COLOR }}>{'解約'}</span>
          </Space>
        ),
      },
    ];
  } else {
    return null;
  }
};

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

const columnMap = {
  pub_date: {
    width: 150,
    title: '公開日時',
    dataIndex: 'pub_date',
    render: pub_date => pub_date,
  },
  status: {
    width: 150,
    title: 'ステータス',
    dataIndex: 'status',
    render: status => status,
  },
  // メール種別
  title: {
    title: 'タイトル',
    dataIndex: 'title',
    render: title => title,
  },
  // 送信者
  action: {
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
