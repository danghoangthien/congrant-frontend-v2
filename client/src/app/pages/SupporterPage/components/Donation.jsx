import { useEffect, useMemo, useState } from 'react';
import { Badge, Descriptions, Row, Col, Button, Table, Tag } from 'antd';
import { StyledPrimaryIcon } from 'styles/global-styles';
import { CopyOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import DonationDetail from './DonationDetail';
import DonationEdit from './DonationEdit';
import { LIST_MODE, DETAIL_MODE, EDIT_MODE } from '../consts';

const Title = ({ mode, setMode }) => {
  return (
    <Row className="my-5">
      <Col sm={24} md={12} lg={12}>
        <h3 className="bold display-inline-flex">
          <StyledPrimaryIcon>
            <MinusOutlined className="display-inline-flex bold mr-2" />
          </StyledPrimaryIcon>
          {'基本情報'}
        </h3>
      </Col>
      <Col type="flex" align="right" sm={24} md={12} lg={12}>
        <>
          <Button icon={<PlusOutlined />} type="primary">
            {'追加'}
          </Button>
          <Button className="ml-2">{'...'}</Button>
        </>
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

const ListModeContent = ({ data, mode, setMode }) => {
  console.log('ViewModeContent', true);
  const columnMap = {
    date_of_receipt: {
      title: '受領日',
      dataIndex: 'date_of_receipt',
    },
    donation_id: {
      title: '寄付ID',
      dataIndex: 'donation_id',
    },
    type: {
      title: '種類',
      dataIndex: 'type',
      render: type => <Tag color="blue">{type}</Tag>,
    },
    amount: {
      title: '金額',
      dataIndex: 'amount',
    },
  };
  const dataSource = [
    {
      key: '1',
      date_of_receipt: '2022-07-30',
      donation_id: '30139104',
      type: '単発',
      amount: '3,000円',
    },
    {
      key: '2',
      date_of_receipt: '2022-07-29',
      donation_id: '20381030',
      type: '単発',
      amount: '1,000円',
    },
  ];
  const columns = Object.keys(columnMap).map(columnName => {
    return columnMap[columnName];
  });
  return (
    <>
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
    </>
  );
};

const Donation = ({ data }) => {
  console.log('Donation');
  const [mode, setMode] = useState(LIST_MODE);
  console.log('Donation mode', mode);
  return (
    <>
      {mode === LIST_MODE && (
        <>
          <Title />
          <ListModeContent {...{ data, mode, setMode }} />
        </>
      )}
      {mode === DETAIL_MODE && <DonationDetail {...{ data, mode, setMode }} />}
      {mode === EDIT_MODE && <DonationEdit {...{ data, mode, setMode }} />}
    </>
  );
};

export default Donation;
