import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import Table from 'app/components/Table';
import Filters from 'app/pages/ProjectDetailPage/components/Filters';
import { Button, Col, Row } from 'antd';
import { PageLayout } from 'app/components/Layout/PageLayout.style';
import * as metaData from 'app/pages/DonationPage/mockDataReceived';
import 'app/pages/DonationPage/Models/received';
import Breadcumd from 'app/components/Breadcumd';
// Icons
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { HEADER_BREADCUMD_DATA, SUMMARY_BREADCUMD_DATA, ProjectDetailHeader } from './consts';

const MailButton = ({ selectedRowKeys }) => {
  return (
    <Button
      className="icon-btn"
      icon={<span className="material-symbols-outlined fill-icon">send</span>}
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
      <ProjectDetailHeader
        Breadcumd={<Breadcumd data={HEADER_BREADCUMD_DATA} active={HEADER_BREADCUMD_DATA[1].id} />}
      />
      <PageLayout>
        {/* Should create a component for this */}
        <Row justify="space-between" align="middle" className="item mb-5">
          {/* 左の部分・Left Part */}
          <Col>
            <Row type="flex" align="middle">
              <Col className="mr-6">
                <div className="sub-page-title">{'プロジェクトトップ'}</div>
              </Col>
              <Col className="mr-2">
                <Breadcumd
                  style="button"
                  data={SUMMARY_BREADCUMD_DATA(params?.id)}
                  active={SUMMARY_BREADCUMD_DATA(params?.id)[1].id}
                  separator={null}
                />
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
          className="clickable-table"
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
