import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Table from 'app/components/Table';
import Filters from './components/Filters';
import * as metaData from './mockData';
import {
  PayCircleOutlined,
  SearchOutlined,
  FilterOutlined,
  MailOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import { Button, Input, Row, Col, Badge } from 'antd';
import { SupporterPageLayout } from './components/SupporterPage.style';
import Detail, { DETAIL_KEY_MAP } from '../SupporterPage/components/Detail';
import DomainIcon from '@mui/icons-material/Domain';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

import './Models/index';

const MailButton = ({ selectedRowKeys }) => {
  return (
    <Button
      className="ml-5"
      icon={<MailOutlined />}
      onClick={() => {
        console.log('selectedRowKeys', selectedRowKeys);
      }}
    >
      {'メールを送る'}
    </Button>
  );
};

const GroupSupporterPage = () => {
  const url = window.location.pathname?.split('/');
  const [filterOpen, setFilterOpen] = useState(false);
  const dispatch = useDispatch();
  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'Supporter management'}</title>
          <meta name="description" content={'...'} />
        </Helmet>
      </>
    );
  };

  return (
    <>
      {renderPageTitle()}
      <SupporterPageLayout>
        <div className="item mb-6">
          <Row justify="space-between" align="middle">
            {/* 左の部分・Left Part */}
            <Col>
              <Row type="flex" align="middle">
                <Col className="mr-6">
                  <span className="page-title">
                    <DomainIcon style={{ fontSize: '32px' }} />
                    <span className="ml-1">{'個人サポーター'}</span>
                  </span>
                </Col>
                <Col className="mr-2">
                  <Input
                    className="free-search"
                    placeholder="フリーワード検索"
                    prefix={<SearchOutlined />}
                  />
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
              <Button className="active ml-2" type="primary">
                <PlusOutlined className="display-inline-flex" />
                <span className="ml-2">{'個人サポーターの登録'}</span>
              </Button>
            </Col>
          </Row>
        </div>
        <div className="item">
          <Filters open={filterOpen} />
        </div>
        <div className="item">
          <Table
            model="groupSupporterList"
            metaData={metaData}
            Detail={<Detail activeKey={DETAIL_KEY_MAP.BASIC_INFO} />}
            contextButtons={[MailButton]}
          />
        </div>
      </SupporterPageLayout>
    </>
  );
};

export default GroupSupporterPage;
