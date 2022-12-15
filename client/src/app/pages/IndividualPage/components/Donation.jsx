import { useEffect, useMemo, useState } from 'react';
import { Row, Col, Button, Table } from 'antd';
import { useMountEffect } from 'hook/useMountEffect';
import DonationDetail from './DonationDetail';
import DonationEdit from './DonationEdit';
import { LIST_MODE, DETAIL_MODE, EDIT_MODE } from '../consts';
import { DonationStyle } from './Donation.style';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { StyledDonationTypeTag } from 'styles/Tag.style';
import AddDonation from 'app/pages/DonationPage/components/AddDonation';

const Title = ({ mode, setMode }) => {
  return (
    <Row justify="space-between" align="middle" className="mb-6">
      <Col>
        <div className="sub-page-title -sml">{'寄付決済'}</div>
      </Col>
      <Col>
        <Row align="middle">
          <AddDonation />
          <Button className="ml-2 icon-only-btn">
            <MoreHorizIcon />
          </Button>
        </Row>
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
      title: '寄付No.',
      dataIndex: 'donation_id',
    },
    type: {
      title: '寄付タイプ',
      dataIndex: 'type',
      render: type => type,
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
      type: <StyledDonationTypeTag className="once">{'単発'}</StyledDonationTypeTag>,
      amount: '3,000円',
    },
    {
      key: '2',
      date_of_receipt: '2022-07-29',
      donation_id: '20381030',
      type: <StyledDonationTypeTag className="monthly">{'毎月'}</StyledDonationTypeTag>,
      amount: '1,000円',
    },
  ];

  const columns = Object.keys(columnMap).map(columnName => {
    return columnMap[columnName];
  });

  return (
    <>
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
    </>
  );
};

const ListModeContent2 = ({ data, mode, setMode }) => {
  console.log('ViewModeContent', true);

  const columnMap = {
    date_of_receipt: {
      title: '申込日',
      dataIndex: 'date_of_receipt',
    },
    donation_id: {
      title: '寄付No.',
      dataIndex: 'donation_id',
    },
    type: {
      title: '寄付タイプ',
      dataIndex: 'type',
      render: type => type,
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
      type: <StyledDonationTypeTag className="once">{'単発'}</StyledDonationTypeTag>,
      amount: '3,000円',
    },
    {
      key: '2',
      date_of_receipt: '2022-07-29',
      donation_id: '20381030',
      type: <StyledDonationTypeTag className="monthly">{'毎月'}</StyledDonationTypeTag>,
      amount: '1,000円',
    },
  ];

  const columns = Object.keys(columnMap).map(columnName => {
    return columnMap[columnName];
  });

  return (
    <>
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
    </>
  );
};

/// data : { supporter_id, donation_id }
const Donation = ({ data, viewMode }) => {
  const [mode, setMode] = useState(null);
  useMountEffect(() => {
    console.log('Donation useMountEffect', data?.donation_id, viewMode);
    if (data?.donation_id && viewMode === DETAIL_MODE) {
      setMode(viewMode);
    } else {
      setMode(LIST_MODE);
    }
  });
  return (
    <>
      {/** get donation list by supplied supporter_id */}
      {mode === LIST_MODE && (
        <>
          <DonationStyle>
            <Title />
            <Row className="mb-4">
              <Col sm={24} md={24} lg={24}>
                <span className="page-sub-title">{'受領済み'}</span>
              </Col>
            </Row>
            {/* テーブル */}
            <Row className="mb-6">
              <Col sm={24} md={24} lg={24}>
                <ListModeContent {...{ data, mode, setMode }} />
              </Col>
            </Row>
            <Row className="mb-4">
              <Col sm={24} md={24} lg={24}>
                <span className="page-sub-title">{'未受領'}</span>
              </Col>
            </Row>
            {/* テーブル */}
            <Row>
              <Col sm={24} md={24} lg={24}>
                <ListModeContent2 {...{ data, mode, setMode }} />
              </Col>
            </Row>
          </DonationStyle>
        </>
      )}
      {/** get donation detail by supplied donation_id */}
      {mode === DETAIL_MODE && <DonationDetail {...{ data, mode, setMode }} />}
      {mode === EDIT_MODE && <DonationEdit {...{ data, mode, setMode }} />}
    </>
  );
};

export default Donation;
