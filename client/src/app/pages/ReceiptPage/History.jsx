import { Helmet } from 'react-helmet-async';
// ANTD
import { Row, Col, Tag } from 'antd';
// STYLE
import styled from 'styled-components/macro';
// LAYOUT
import { PageLayout } from 'app/components/Layout/PageLayout.style';
// TABLE
import HistoryTable from 'app/pages/ReceiptPage/components/HistoryTable';
import Breadcumd from 'app/components/Breadcumd';
import { HEADER_BREADCUMD_DATA, HeaderWithBreadcumd } from './consts';

export const StyledTag = styled(Tag)`
  width: 40px;
  height: 40px;
  border-radius: 4px;
`;

const History = () => {
  // META情報
  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'領収書作成履歴'}</title>
          <meta name="description" content={'領収書作成履歴'} />
        </Helmet>
      </>
    );
  };

  return (
    <>
      {renderPageTitle()}
      <HeaderWithBreadcumd
        Breadcumd={<Breadcumd data={HEADER_BREADCUMD_DATA} active={HEADER_BREADCUMD_DATA[1].id} />}
      />
      <PageLayout>
        <Row className="mb-6">
          <Col span={24}>
            <div className="sub-page-title">{'領収書作成履歴'}</div>
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
