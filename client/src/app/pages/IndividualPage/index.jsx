import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Table from 'app/components/Table';
import Filters from './components/Filters';
import * as metaData from './mockData';
import Detail, { DETAIL_KEY_MAP } from './components/Detail';
import {
  SearchOutlined,
  MailOutlined,
  PlusOutlined,
  TagFilled,
  DeleteFilled,
} from '@ant-design/icons';
import PersonIcon from '@mui/icons-material/Person';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';

import { Button, Input, Row, Col, Badge, Space } from 'antd';
import AddSupporter from './components/AddSupporter';
import AddAttribute from './components/AddAttribute';
import './Models/index';
import { PageLayout } from 'app/components/Layout/PageLayout.style';
// import { SupporterPageLayout } from './components/SupporterPage.style';
import SendIcon from '@mui/icons-material/Send';

const MailButton = ({ selectedRowKeys }) => {
  return (
    <Button
      className="ml-5"
      icon={<SendIcon />}
      onClick={() => {
        console.log('selectedRowKeys', selectedRowKeys);
      }}
    >
      {'メールを送る'}
    </Button>
  );
};

const contextDropdownItems = selectedRowKeys => [
  {
    key: '1',
    label: <AddAttribute />,
  },
  {
    key: '2',
    label: (
      <Space
        onClick={() => {
          console.log('selectedRowKeys', selectedRowKeys);
        }}
      >
        <DeleteFilled style={{ color: 'red' }} /> <span className="ml-2">{'削除'}</span>
      </Space>
    ),
  },
];

const IndividualPage = () => {
  const url = window.location.pathname?.split('/');
  const [filterOpen, setFilterOpen] = useState(false);
  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'個人サポーター'}</title>
          <meta name="description" content={'...'} />
        </Helmet>
      </>
    );
  };

  return (
    <>
      {renderPageTitle()}
      <PageLayout>
        <div className="item mb-6">
          <Row justify="space-between" align="middle">
            {/* 左の部分・Left Part */}
            <Col>
              <Row type="flex" align="middle">
                <Col className="mr-6">
                  <span className="page-title">
                    <PersonIcon style={{ fontSize: '32px' }} />
                    <span className="ml-1">{'個人サポーター'}</span>
                  </span>
                </Col>
                <Col className="mr-2">
                  <Input className="free-search" placeholder="フリー検索" prefix={<SearchIcon />} />
                </Col>
                <Col>
                  <Button
                    className="filter-button"
                    icon={<FilterAltIcon />}
                    onClick={() => setFilterOpen(!filterOpen)}
                  >
                    {'フィルタ'}
                  </Button>
                </Col>
              </Row>
            </Col>

            {/* 右の部分・Right Part */}
            <Col>
              <Link to={`/individuals-naming`}>
                <Button>
                  <span>{'名寄せ候補'}</span>
                  <Badge
                    className="ml-1 display-inline-flex pb-1"
                    style={{ backgroundColor: '#c72a32' }}
                    count={99}
                  ></Badge>
                </Button>
              </Link>
              <AddSupporter />
            </Col>
          </Row>
        </div>

        {/* フィルター・Filter */}
        <div className="item">
          <Filters open={filterOpen} />
        </div>

        {/* ページコンテンツ・Page Content */}
        <div className="item">
          <Table
            TableName="個人サポーター一覧"
            model="supporterList"
            metaData={metaData}
            Detail={<Detail activeKey={DETAIL_KEY_MAP.BASIC_INFO} />}
            contextButtons={[MailButton]}
            contextDropdownItems={contextDropdownItems}
          />
        </div>
      </PageLayout>
    </>
  );
};

export default IndividualPage;
