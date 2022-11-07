import { useEffect, useMemo, useState } from 'react';
import { Badge, Descriptions, Row, Col, Button, Table, Tag } from 'antd';
import { StyledPrimaryIcon } from 'styles/global-styles';
import { CopyOutlined, PlusOutlined, EllipsisOutlined } from '@ant-design/icons';
import { StyledBadgeDot } from './ContinuousContract.style';
import ReceiptDetail from './ReceipDetail';
import { LIST_MODE, DETAIL_MODE, EDIT_MODE } from '../consts';
import ExportPDF from 'app/pages/ReceiptPage/components/ExportPDF';

const Title = ({ title }) => {
  return (
    <Row className="my-5">
      <Col>
        <h3 className="supporter-detail-ttl">{title}</h3>
      </Col>
    </Row>
  );
};

const ReceiptTitle = ({ title }) => {
  return (
    <Row className="my-5">
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
          <Badge status="success" text={status} />
        </StyledBadgeDot>
      ),
    },
    issue_date: {
      title: '発行日',
      dataIndex: 'issue_date',
    },
    receipt_id: {
      title: '領収書ID',
      dataIndex: 'receipt_id',
    },
    action: {
      title: 'アクション',
      render: () => (
        <>
          <ExportPDF />
          <Button className="ml-2" icon={<EllipsisOutlined />} />
        </>
      ),
    },
  };
  const dataSource = [
    {
      key: '1',
      status: '継続中',
      issue_date: '2021-01-15',
      receipt_id: '2022-123456',
      action: '-',
    },
    {
      key: '2',
      status: '継続中',
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
          <Badge status="success" text={status} />
        </StyledBadgeDot>
      ),
    },
    issue_date: {
      title: '発行日',
      dataIndex: 'issue_date',
    },
    receipt_id: {
      title: '領収書ID',
      dataIndex: 'receipt_id',
    },
    action: {
      title: 'アクション',
      render: () => (
        <>
          <ExportPDF />
          <Button className="ml-2" icon={<EllipsisOutlined />} />
        </>
      ),
    },
  };
  const dataSource = [
    {
      key: '1',
      status: '継続中',
      issue_date: '2021-01-15',
      receipt_id: '2022-123456',
      action: '-',
    },
    {
      key: '2',
      status: '継続中',
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
          <ReceiptTitle title="合算領収書" />
          <AnnualListModeContent {...{ data, mode, setMode }} />
          <ReceiptTitle title="都度領収書" />
          <ListModeContent {...{ data, mode, setMode }} />
        </>
      )}
      {mode === DETAIL_MODE && <ReceiptDetail {...{ data, mode, setMode }} />}
    </>
  );
};

export default Receipt;
