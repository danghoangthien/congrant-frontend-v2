import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import Table from 'app/components/Table';
import Filters from 'app/pages/FundingPage/components/Filters';
import { MailOutlined, FilterOutlined } from '@ant-design/icons';
import { Button, Badge, Col, Row } from 'antd';
import { PageLayout } from 'app/components/Layout/PageLayout.style';
import * as metaData from 'app/pages/FundingPage/mockDataReceived';
import 'app/pages/FundingPage/Models/received';
import EditIcon from '@mui/icons-material/Edit';

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

const FundingPage = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const params = useParams();
  console.log('params', params);
  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'Funding Received'}</title>
          <meta name="description" content={'...'} />
        </Helmet>
      </>
    );
  };

  return (
    <>
      {renderPageTitle()}
      <PageLayout>
        <div className="item">
          <Row justify="space-between" align="middle" className="item mb-5">
            {/* 左の部分・Left Part */}
            <Col>
              <Row type="flex" align="middle">
                <Col className="mr-6">
                  <span className="page-title">
                    <span className="ml-1 page-title">{'プロジェクト'}</span>
                  </span>
                </Col>
                <Col className="mr-2">
                  <Link className="sidebar-link" to={`summary`}>
                    <Button>
                      <span>{'サマリー'}</span>
                    </Button>
                  </Link>
                  <Link className="sidebar-link" to={`funding`}>
                    <Button type="primary">
                      <span>{'寄付決済'}</span>
                    </Button>
                  </Link>
                  {params?.id === '2' && (
                    <Link className="sidebar-link" to={`course`}>
                      <Button>
                        <span>{'コース別'}</span>
                      </Button>
                    </Link>
                  )}
                </Col>
              </Row>
            </Col>

            {/* 右の部分・Right Part */}
            <Col>
              <Link className="sidebar-link" to={`edit`}>
                <Button icon={<EditIcon fontSize="small" />} className="active" type="primary">
                  {'プロジェクトの編集'}
                </Button>
              </Link>
            </Col>
          </Row>
          <Row justify="space-between" align="middle" className="item mb-5">
            <Col>
              <Button
                className="ml-1"
                icon={<FilterOutlined />}
                onClick={() => setFilterOpen(!filterOpen)}
              >
                {'フィルタ'}
              </Button>
            </Col>
            <Col>
              <Button className="active" type="primary">
                {'+ 寄付の登録'}
              </Button>
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
            Detail={null}
            TableName={'受領済みの寄付一覧'}
          />
        </div>
      </PageLayout>
    </>
  );
};

export default FundingPage;
