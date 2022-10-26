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
        <div className="item mx-8 my-8">
          <Row>
            <Col sm={24} md={12} lg={12}>
              <span className="page-title">
                <PayCircleOutlined className="display-inline-flex" />
              </span>
              <span className="ml-1 page-title">{'法人サポーター'}</span>
              <Input
                className="ml-3 free-search"
                placeholder="フリーワード検索"
                prefix={<SearchOutlined />}
              />
              <Button
                className="ml-1"
                icon={<FilterOutlined />}
                onClick={() => setFilterOpen(!filterOpen)}
              >
                {'フィルタ'}
              </Button>
            </Col>
            <Col type="flex" align="right" sm={24} md={12} lg={12}>
              <Link className="sidebar-link" to={`/funding/unclaimed`}>
                <Button>
                  <span>{'名寄せ候補'}</span>
                  <Badge className="ml-1 display-inline-flex pb-1" count={99}></Badge>
                </Button>
              </Link>
              <Button className="active ml-2" type="primary">
                <PlusOutlined className="display-inline-flex" />
                <span className="ml-2">{'法人サポーターの登録'}</span>
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
            selectedItemsActions={[MailButton]}
          />
        </div>
      </SupporterPageLayout>
    </>
  );
};

export default GroupSupporterPage;
