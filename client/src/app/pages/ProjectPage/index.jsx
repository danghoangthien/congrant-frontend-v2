import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Filters from './components/Filters';
import { SearchOutlined, MailOutlined, PlusOutlined } from '@ant-design/icons';
import PersonIcon from '@mui/icons-material/Person';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

import { Button, Input, Row, Col, Badge } from 'antd';
import { PageLayout } from 'app/components/Layout/PageLayout.style';

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

const ProjectPage = () => {
  const url = window.location.pathname?.split('/');
  const [filterOpen, setFilterOpen] = useState(false);
  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'プロジェクト'}</title>
          <meta name="description" content={'プロジェクト'} />
        </Helmet>
      </>
    );
  };

  return (
    <>
      {renderPageTitle()}
      <PageLayout>
        <div className="item mb-7">
          <Row justify="space-between" align="middle">
            {/* 左の部分・Left Part */}
            <Col>
              <Row type="flex" align="middle">
                <Col className="mr-6">
                  <span className="page-title">
                    <PersonIcon style={{ fontSize: '32px' }} />
                    <span className="ml-1 page-title">{'プロジェクト'}</span>
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

        {/* フィルター・Filter */}
        <div className="item">
          <Filters open={filterOpen} />
        </div>

        {/* ページコンテンツ・Page Content */}
        <div className="item"></div>
      </PageLayout>
    </>
  );
};

export default ProjectPage;
