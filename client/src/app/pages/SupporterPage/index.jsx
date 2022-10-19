import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Table from 'app/components/Table';
import Filters from './components/Filters';
import * as metaData from './mockData';
import Detail from './components/Detail';
import {
  PayCircleOutlined,
  SearchOutlined,
  FilterOutlined,
  MailOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import { Button, Input, Row, Col, Badge } from 'antd';
import { SupporterPageLayout } from './components/SupporterPage.style';

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

const SupporterPage = () => {
  const url = window.location.pathname?.split('/');
  const [filterOpen, setFilterOpen] = useState(false);
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
              <span className="ml-1 page-title">{'個人サポーター'}</span>
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
              <Link className="sidebar-link" to={`/supporter-naming`}>
                <Button>
                  <span>{'名寄せ候補'}</span>
                  <Badge className="ml-1 display-inline-flex pb-1" count={99}></Badge>
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
            model="supporterList"
            metaData={metaData}
            Detail={Detail}
            selectedItemsActions={[MailButton]}
          />
        </div>
      </SupporterPageLayout>
    </>
  );
};

export default SupporterPage;
