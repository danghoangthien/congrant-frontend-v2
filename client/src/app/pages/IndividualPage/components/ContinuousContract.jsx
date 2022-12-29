import { useState } from 'react';
import { Badge, Row, Col, Table, Tag } from 'antd';
import { useMountEffect } from 'hook/useMountEffect';
import { StyledBadgeDot } from 'styles/global-styles';
import ContinuousContractDetail from './ContinuousContractDetail';
import { LIST_MODE, DETAIL_MODE } from 'utils/consts';

import {
  DONATION_TYPES,
  DONATION_TYPE_COLORS,
  DONATION_STATUS_COLOR,
  DONATION_STATUSES,
} from 'utils/consts';

const Title = () => {
  return (
    <Row className="mb-6">
      <Col>
        <div className="sub-page-title -sml">{'継続契約'}</div>
      </Col>
    </Row>
  );
};

const ListModeContent = ({ data, mode, setMode }) => {
  console.log('ListModeContent', true);

  const dataSource = [
    {
      key: '1',
      status: '1',
      donation_type: '1',
      plan: 'ゴールドサポーター',
      amount: '10,000円/月',
    },
    {
      key: '2',
      status: '2',
      donation_type: '2',
      plan: 'ゴールドサポーター',
      amount: '10,000円/月',
    },
    {
      key: '3',
      status: '3',
      donation_type: '2',
      plan: 'ゴールドサポーター',
      amount: '10,000円/月',
    },
  ];

  const columnMap = {
    status: {
      title: 'ステータス',
      dataIndex: 'status',
      render: status => (
        <StyledBadgeDot>
          <Badge color={DONATION_STATUS_COLOR[status][0]} text={DONATION_STATUSES[status]} />
        </StyledBadgeDot>
      ),
    },
    donation_type: {
      title: '頻度',
      dataIndex: 'donation_type',
      render: donation_type => (
        <Tag
          style={{
            color: DONATION_TYPE_COLORS[donation_type][2],
            backgroundColor: DONATION_TYPE_COLORS[donation_type][0],
            border: `1px solid ${DONATION_TYPE_COLORS[donation_type][1]}`,
          }}
        >
          {DONATION_TYPES[donation_type] || ''}
        </Tag>
      ),
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

  const columns = Object.keys(columnMap).map(columnName => {
    return columnMap[columnName];
  });

  return (
    <Table
      className="clickable-table"
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

const ContinuousContract = ({ data, viewMode }) => {
  const [mode, setMode] = useState(null);
  useMountEffect(() => {
    if (data?.recurring_id && viewMode === DETAIL_MODE) {
      setMode(viewMode);
    } else {
      setMode(LIST_MODE);
    }
  });
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
