import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Table from 'app/components/Table';
import Filters from './components/Filters';
import * as metaData from './metaData';
import { Row, Col } from 'antd';
import { PageLayout } from 'app/components/Layout/PageLayout.style';
import Edit from './components/Edit';

import './Models/index';

const ManagementUserPage = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'運営管理ユーザー'}</title>
          <meta name="description" content={'...'} />
        </Helmet>
      </>
    );
  };

  return (
    <>
      {renderPageTitle()}
      <PageLayout>
        <div className="mb-7">
          <Row justify="space-between" align="middle">
            {/* 左の部分・Left Part */}
            <Col span={24}>
              <Row type="flex" justify="space-between" align="middle">
                <Col>
                  <div className="page-title">{'運営管理ユーザー'}</div>
                </Col>
                <Col>
                  <Edit btn_text="新規登録" />
                </Col>
              </Row>
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
            className="clickable-table"
            tableLayout="fixed"
            TableName="運営管理ユーザー一覧"
            model="adminManagementUserList"
            metaData={metaData}
            showRowSelection={false}
            showDownLoad={false}
          />
        </div>
      </PageLayout>
    </>
  );
};

export default ManagementUserPage;
