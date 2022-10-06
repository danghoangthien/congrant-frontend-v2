import { useEffect, useMemo, useState } from 'react';
import { Badge, Descriptions, Row, Col, Button, Table, Tag } from 'antd';
import { StyledPrimaryIcon } from 'styles/global-styles';
import { CopyOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { StyledBadgeDot } from './ContinuousContract.style';
import ReceiptDetail from './ReceipDetail';
import { LIST_MODE, DETAIL_MODE, EDIT_MODE } from './../const';

const Title = ({ title }) => {
  return (
    <Row className="my-5">
      <Col sm={24} md={24} lg={24}>
        <h3 className="bold display-inline-flex">
          <StyledPrimaryIcon>
            <MinusOutlined className="display-inline-flex bold mr-2" />
          </StyledPrimaryIcon>
          {title}
        </h3>
      </Col>
    </Row>
  );
};

const BoldLabel = ({ label }) => {
  return <span className="bold">{label}</span>;
};

const CopiableText = ({ children }) => {
  return (
    <Row className="mt-2">
      <Col sm={24} md={12} lg={12}>
        {children}
      </Col>
      <Col type="flex" align="right" sm={24} md={12} lg={12}>
        <CopyOutlined
          className="display-inline-flex"
          style={{ color: '#c0c0c0' }}
          onClick={() => {}}
        />
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
    frequency: {
      title: '頻度',
      dataIndex: 'frequency',
      render: frequency => <Tag color="green">{frequency}</Tag>,
    },
    plan: {
      title: 'プラン',
      dataIndex: 'plan',
    },
    amount: {
      title: '金額',
      dataIndex: 'amount',
    },
  };
  const dataSource = [
    {
      key: '1',
      status: '継続中',
      frequency: '毎月',
      plan: 'ゴールドサポーター',
      amount: '10,000円/月',
    },
    {
      key: '2',
      status: '継続中',
      frequency: '毎月',
      plan: 'ゴールドサポーター',
      amount: '10,000円/月',
    },
  ];
  const columns = Object.keys(columnMap).map(columnName => {
    return columnMap[columnName];
  });
  return (
    <Table
      dataSource={dataSource}
      columns={columns}
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
    frequency: {
      title: '頻度',
      dataIndex: 'frequency',
      render: frequency => <Tag color="green">{frequency}</Tag>,
    },
    plan: {
      title: 'プラン',
      dataIndex: 'plan',
    },
    amount: {
      title: '金額',
      dataIndex: 'amount',
    },
  };
  const dataSource = [
    {
      key: '1',
      status: '継続中',
      frequency: '毎月',
      plan: 'ゴールドサポーター',
      amount: '10,000円/月',
    },
    {
      key: '2',
      status: '継続中',
      frequency: '毎月',
      plan: 'ゴールドサポーター',
      amount: '10,000円/月',
    },
  ];
  const columns = Object.keys(columnMap).map(columnName => {
    return columnMap[columnName];
  });
  return (
    <Table
      dataSource={dataSource}
      columns={columns}
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
          <Title title="年間領収書" />
          <AnnualListModeContent {...{ data, mode, setMode }} />
          <Title title="領収書" />
          <ListModeContent {...{ data, mode, setMode }} />
        </>
      )}
      {mode === DETAIL_MODE && <ReceiptDetail {...{ data, mode, setMode }} />}
    </>
  );
};

export default Receipt;
