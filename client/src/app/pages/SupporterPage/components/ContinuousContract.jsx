import { useEffect, useMemo, useState } from 'react';
import { Badge, Row, Col, Table, Tag } from 'antd';
import { StyledBadgeDot } from './ContinuousContract.style';
import { StyledPrimaryIcon } from 'styles/global-styles';
import { MinusOutlined } from '@ant-design/icons';
import ContinuousContractDetail from './ContinuousContractDetail';
import { LIST_MODE, DETAIL_MODE, EDIT_MODE } from './../const';

const Title = () => {
  return (
    <Row className="mt-2">
      <Col sm={24} md={24} lg={24}>
        <h3 className="bold">
          <StyledPrimaryIcon>
            <MinusOutlined className="display-inline-flex bold mr-2" />
          </StyledPrimaryIcon>
          {'基本情報'}
        </h3>
      </Col>
    </Row>
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

const ContinuousContract = ({ data }) => {
  console.log('ContinuousContract');
  const [mode, setMode] = useState(LIST_MODE);
  console.log('ContinuousContract mode', mode);
  return (
    <>
      {mode == LIST_MODE && (
        <>
          <Title />
          <ListModeContent {...{ data, mode, setMode }} />
        </>
      )}
      {mode == DETAIL_MODE && <ContinuousContractDetail {...{ data, mode, setMode }} />}
    </>
  );
};

export default ContinuousContract;
