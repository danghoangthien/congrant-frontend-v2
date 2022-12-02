import { useEffect, useMemo, useState } from 'react';
import { Badge, Row, Col, Button, Table, Dropdown, Menu, Space } from 'antd';
import { StyledBadgeDot } from 'styles/global-styles';
import { DANGER_COLOR } from 'styles/StyleConstants';
import ReceiptDetail from './ReceiptDetail';
import ReceiptEdit from './ReceiptEdit';
import { LIST_MODE, DETAIL_MODE, EDIT_MODE } from '../consts';
import ExportPDF from 'app/pages/ReceiptPage/components/ExportPDF';
import { RECEIPT_STATUSES, RECEIPT_STATUS_COLOR } from 'utils/consts';

// 操作メニュー・Action Menu
const action_menu = (
  <Menu
    items={[
      {
        key: '1',
        label: 'アクション1',
      },
      {
        key: '2',
        label: 'アクション2',
      },
    ]}
  />
);

export const menuItems = (selectedRowKeys, status) => {
  let menuItem3 = (
    <Space
      onClick={() => {
        console.log('contextDropdownItems selectedRowKeys', selectedRowKeys);
      }}
    >
      <span
        className="material-symbols-outlined"
        style={{ fontSize: '16px', verticalAlign: 'middle' }}
      >
        keyboard_return
      </span>
      <span>{'未発行に戻す'}</span>
    </Space>
  );
  console.log(status, RECEIPT_STATUSES[0]);
  if (RECEIPT_STATUSES[status] == RECEIPT_STATUSES[0]) {
    menuItem3 = (
      <Space
        onClick={() => {
          console.log('contextDropdownItems selectedRowKeys', selectedRowKeys);
        }}
      >
        <span
          className="material-symbols-outlined fill-icon"
          style={{ fontSize: '16px', verticalAlign: 'middle' }}
        >
          check_box
        </span>
        <span>{'発行済みにする'}</span>
      </Space>
    );
  }
  return [
    {
      key: '1',
      label: (
        <Space
          onClick={() => {
            console.log('contextDropdownItems selectedRowKeys', selectedRowKeys);
          }}
        >
          <span
            className="material-symbols-outlined fill-icon"
            style={{ fontSize: '16px', verticalAlign: 'middle' }}
          >
            send
          </span>
          <span>{'領収書URLを送る'}</span>
        </Space>
      ),
    },
    {
      key: '2',
      label: (
        <Space
          onClick={() => {
            console.log('contextDropdownItems selectedRowKeys', selectedRowKeys);
          }}
        >
          <span
            className="material-symbols-outlined fill-icon"
            style={{ fontSize: '16px', verticalAlign: 'middle' }}
          >
            content_copy
          </span>
          <span>{'領収書URLをコピー'}</span>
        </Space>
      ),
    },
    {
      key: '3',
      label: menuItem3,
    },
    {
      key: '4',
      label: (
        <Space
          onClick={() => {
            console.log('contextDropdownItems selectedRowKeys', selectedRowKeys);
          }}
        >
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
  ];
};

const Title = ({ title }) => {
  return (
    <Row className="mb-6">
      <h3 className="supporter-detail-ttl">{title}</h3>
    </Row>
  );
};

const ReceiptTitle = ({ title }) => {
  return (
    <Row className="mb-4">
      <Col>
        <h3 className="supporter-detail-ttl -sml">{title}</h3>
      </Col>
    </Row>
  );
};

const AnnualListModeContent = ({ data, mode, setMode }) => {
  console.log('ListModeContent', true);

  const columnMap = {
    status: {
      title: 'ステータス',
      dataIndex: 'status',
      render: status => (
        <StyledBadgeDot>
          <Badge status={RECEIPT_STATUS_COLOR[status]} text={RECEIPT_STATUSES[status]} />
        </StyledBadgeDot>
      ),
    },
    issue_date: {
      title: '発行日',
      dataIndex: 'issue_date',
    },
    receipt_id: {
      title: '領収書No.',
      dataIndex: 'receipt_id',
    },
    action: {
      width: 140,
      title: 'アクション',
      render: row => (
        <Space onClick={e => e.stopPropagation()}>
          <ExportPDF />
          <Dropdown overlay={<Menu items={menuItems(null, row.status)} />} placement="bottomRight">
            <Button
              className="more-menu-btn"
              icon={<span className="material-symbols-outlined">more_horiz</span>}
            />
          </Dropdown>
        </Space>
      ),
    },
  };

  const dataSource = [
    {
      key: '1',
      status: '0',
      issue_date: '2021-01-15',
      receipt_id: '2022-123456',
      action: '-',
    },
    {
      key: '2',
      status: '1',
      issue_date: '2021-01-15',
      receipt_id: '2022-123456',
      action: '-',
    },
  ];

  const columns = Object.keys(columnMap).map(columnName => {
    return columnMap[columnName];
  });

  return (
    <Table
      tableLayout="fixed"
      className="detail-table"
      dataSource={dataSource}
      columns={columns}
      pagination={false}
      onRow={(record, rowIndex) => {
        return {
          onClick: event => {
            setMode(DETAIL_MODE);
          }, // click row
        };
      }}
    />
  );
};

const ListModeContent = ({ data, mode, setMode }) => {
  console.log('ListModeContent', true);

  const columnMap = {
    status: {
      title: 'ステータス',
      dataIndex: 'status',
      render: status => (
        <StyledBadgeDot>
          <Badge status={RECEIPT_STATUS_COLOR[status]} text={RECEIPT_STATUSES[status]} />
        </StyledBadgeDot>
      ),
    },
    issue_date: {
      title: '発行日',
      dataIndex: 'issue_date',
    },
    receipt_id: {
      title: '領収書No.',
      dataIndex: 'receipt_id',
    },
    action: {
      width: 140,
      title: 'アクション',
      render: row => (
        <Space>
          <ExportPDF />
          <Dropdown overlay={<Menu items={menuItems(null, row.status)} />} placement="bottomRight">
            <Button
              className="more-menu-btn"
              icon={<span className="material-symbols-outlined">more_horiz</span>}
            />
          </Dropdown>
        </Space>
      ),
    },
  };

  const dataSource = [
    {
      key: '1',
      status: '1',
      issue_date: '2021-01-15',
      receipt_id: '2022-123456',
      action: '-',
    },
    {
      key: '2',
      status: '2',
      issue_date: '2021-01-15',
      receipt_id: '2022-123456',
      action: '-',
    },
  ];

  const columns = Object.keys(columnMap).map(columnName => {
    return columnMap[columnName];
  });

  return (
    <Table
      tableLayout="fixed"
      className="detail-table"
      dataSource={dataSource}
      columns={columns}
      pagination={false}
      onRow={(record, rowIndex) => {
        return {
          onClick: event => {
            setMode(DETAIL_MODE);
          }, // click row
        };
      }}
    />
  );
};

const Receipt = ({ data }) => {
  console.log('Donation');
  const [mode, setMode] = useState(LIST_MODE);
  console.log('Donation mode', mode);

  return (
    <>
      {mode === LIST_MODE && (
        <>
          <Title title="領収書" />
          <Row className="mb-8">
            <Col span={24}>
              <ReceiptTitle title="合計領収書" />
            </Col>
            <Col span={24}>
              <AnnualListModeContent {...{ data, mode, setMode }} />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <ReceiptTitle title="都度領収書" />
            </Col>
            <Col span={24}>
              <ListModeContent {...{ data, mode, setMode }} />
            </Col>
          </Row>
        </>
      )}
      {mode === DETAIL_MODE && <ReceiptDetail {...{ data, mode, setMode }} />}
      {mode === EDIT_MODE && <ReceiptEdit {...{ data, mode, setMode }} />}
    </>
  );
};

export default Receipt;
