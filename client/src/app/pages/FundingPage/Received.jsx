import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
// Antd
import { Button, Badge, Input, Row, Col, Space, Breadcrumb } from 'antd';
// Components
import Table from 'app/components/Table';
import Filters from './components/Filters';
import AddFunding from './components/AddFunding';
import Detail, { DETAIL_KEY_MAP } from '../SupporterPage/components/Detail';
import './Models/received';
// Styles
// import { FundingPageLayout } from './FundingPage.style';
import { PageLayout } from 'app/components/Layout/PageLayout.style';
// Icons
import {
  PayCircleOutlined,
  SearchOutlined,
  FilterOutlined,
  MailOutlined,
  EllipsisOutlined,
} from '@ant-design/icons';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SendIcon from '@mui/icons-material/Send';
// Meta
import * as metaData from './mockDataReceived';

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

const renderPageTitle = () => {
  return (
    <>
      <Helmet>
        <title>{'寄付決済'}</title>
        <meta name="description" content={'...'} />
      </Helmet>
    </>
  );
};

const FundingPage = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <>
      {renderPageTitle()}
      <PageLayout>
        <div className="item mb-7">
          <Row justify="space-between" align="middle">
            {/* 左の部分・Left Part */}
            <Col>
              <Row type="flex" align="middle">
                <div className="page-title mr-6">
                  <FavoriteIcon style={{ fontSize: '32px' }} />
                  <span className="ml-2">{'寄付決済'}</span>
                </div>

                <Breadcrumb className="bread-crumb mr-2" separator="">
                  <Breadcrumb.Item>
                    <span className="bread-crumb-content">受領済み</span>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    <Link className="bread-crumb-content" to={`/donations/received`}>
                      未受領
                      <Badge
                        className="ml-1 roboto-mono"
                        count={99}
                        style={{ backgroundColor: '#C72A32' }}
                      ></Badge>
                    </Link>
                  </Breadcrumb.Item>
                </Breadcrumb>

                <Input
                  className="free-search mr-2"
                  placeholder="フリー検索"
                  prefix={<SearchIcon />}
                />
                <Button
                  className="filter-button"
                  icon={<FilterAltIcon />}
                  onClick={() => setFilterOpen(!filterOpen)}
                >
                  {'フィルタ'}
                </Button>
              </Row>
            </Col>
            {/* 右の部分・Right Part */}
            <Col>
              <Space>
                <AddFunding />
                <Button icon={<EllipsisOutlined />} />
              </Space>
            </Col>
          </Row>
        </div>
        <div className="item">
          <Filters open={filterOpen} />
        </div>
        <div className="item">
          <Table
            model="receivedFundingList"
            metaData={metaData}
            contextButtons={[MailButton]}
            Detail={<Detail activeKey={DETAIL_KEY_MAP.DONATION} />}
            TableName={'受領済みの寄付一覧'}
            contextDropdownItems={metaData.menuItems}
          />
        </div>
      </PageLayout>
    </>
  );
};

export default FundingPage;
