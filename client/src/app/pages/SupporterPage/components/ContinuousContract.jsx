import { useEffect, useMemo, useState } from 'react';
import { Badge, Row, Col, Table, Tag } from 'antd';
import { StyledBadgeDot } from './ContinuousContract.style';
import { StyledPrimaryIcon } from 'styles/global-styles';
import { MinusOutlined } from '@ant-design/icons';
import ContinuousContractDetail from './ContinuousContractDetail';
import { LIST_MODE, DETAIL_MODE, EDIT_MODE } from '../consts';

const Title = () => {
  return (
    <Row className="mt-4 mb-8">
      <Col>
        <h3 className="supporter-detail-ttl">{'継続契約'}</h3>
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
