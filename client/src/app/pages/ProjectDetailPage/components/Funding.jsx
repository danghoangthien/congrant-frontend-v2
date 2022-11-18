import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Table from 'app/components/Table';
import Filters from 'app/pages/ProjectDetailPage/components/Filters';
import { Button, Col, Row, Breadcrumb } from 'antd';
import { PageLayout } from 'app/components/Layout/PageLayout.style';
import * as metaData from 'app/pages/DonationPage/mockDataReceived';
import 'app/pages/DonationPage/Models/received';
// Icons
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SendIcon from '@mui/icons-material/Send';

const MailButton = ({ selectedRowKeys }) => {
  return (
    <Button
      className="icon-btn"
      icon={<SendIcon />}
      onClick={() => {
        console.log('selectedRowKeys', selectedRowKeys);
      }}
    >
      {'メッセージを送る'}
    </Button>
  );
};

const DonationPage = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const params = useParams();
  console.log('params', params);
  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'プロジェクトトップ'}</title>
          <meta name="description" content={'...'} />
        </Helmet>
      </>
    );
  };

  return (
    <>
      {renderPageTitle()}
      <PageLayout>
        {/* Should create a component for this */}
        <Row justify="space-between" align="middle" className="item mb-5">
          {/* 左の部分・Left Part */}
          <Col>
            <Row type="flex" align="middle">
              <Col className="mr-6">
                <span className="page-title">
                  <span className="ml-1 sub-page-title">{'プロジェクトトップ'}</span>
                </span>
              </Col>
              <Col className="mr-2">
                <Breadcrumb className="bread-crumb" separator="">
                  <Breadcrumb.Item>
                    <Link className="bread-crumb-content" to={`summary`}>
                      サマリー
                    </Link>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    <span className="bread-crumb-content">寄付決済</span>
                  </Breadcrumb.Item>
                  {params?.id === '2' && (
                    <Breadcrumb.Item>
                      <Link className="bread-crumb-content" to={`course`}>
                        コース別
                      </Link>
                    </Breadcrumb.Item>
                  )}
                </Breadcrumb>
              </Col>
            </Row>
          </Col>

          {/* 右の部分・Right Part */}
          <Col>
            <Link className="sidebar-link" to={`edit`}>
              <Button icon={<EditIcon />} type="primary" className="icon-btn">
                {'プロジェクトの編集'}
              </Button>
            </Link>
          </Col>
        </Row>
        {/* Should create a component for this */}

        <Row justify="space-between" align="middle" className="item mb-5">
          <Col>
            <Button
              icon={<FilterAltIcon />}
              type="secondary"
              className="icon-btn"
              onClick={() => setFilterOpen(!filterOpen)}
            >
              {'フィルタ'}
            </Button>
          </Col>
          <Col>
            <Button icon={<AddIcon />} type="primary" className="icon-btn">
              {'寄付の登録'}
            </Button>
          </Col>
        </Row>

        {/* フィルタ・Filter */}
        <Filters open={filterOpen} />

        {/* テーブル・Table */}
        <Table
          model="receivedFundingList"
          metaData={metaData}
          contextButtons={[MailButton]}
          Detail={null}
          TableName={'受領済みの寄付一覧'}
        />
      </PageLayout>
    </>
  );
};

export default DonationPage;
