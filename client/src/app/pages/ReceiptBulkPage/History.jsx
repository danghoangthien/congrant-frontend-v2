import { Helmet } from 'react-helmet-async';
// ANTD
import { Row, Col, Tag } from 'antd';
// STYLE
import styled from 'styled-components/macro';
// LAYOUT
import { PageLayout } from 'app/components/Layout/PageLayout.style';
// TABLE
import HistoryTable from './HistoryTable';

export const StyledTag = styled(Tag)`
  width: 40px;
  height: 40px;
  border-radius: 4px;
`;

const History = () => {
  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'領収書一括作成履歴'}</title>
          <meta name="description" content={'...'} />
        </Helmet>
      </>
    );
  };

  return (
    <>
      {renderPageTitle()}
      <PageLayout>
        <Row className="mb-6">
          <Col span={24}>
            <div className="sub-page-title">{'一括作成履歴'}</div>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col span={24}>
            <HistoryTable />
          </Col>
        </Row>
      </PageLayout>
    </>
  );
};

export default History;
