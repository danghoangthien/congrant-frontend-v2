import { Row, Col, Card } from 'antd';
import { Helmet } from 'react-helmet-async';
import { PageLayout } from 'app/components/Layout/PageLayout.style';
import Breadcumd from 'app/components/Breadcumd';
import Header from './components/Header';
import { BREADCUMD_DATA } from './consts';
import TelecomPaymentTable from './TelecomPaymentTable';

const Telecom = () => {
  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'テレコム決済'}</title>
          <meta name="description" content={'...'} />
        </Helmet>
      </>
    );
  };

  return (
    <>
      {renderPageTitle()}
      <PageLayout>
        <Header
          breadCumb={
            <Breadcumd data={BREADCUMD_DATA} active={BREADCUMD_DATA[1].id} style="button" />
          }
        />
        {/* メインコンテンツ・Main Content */}
        <Card className="table-card" bodyStyle={{ padding: 0 }}>
          <Row className="px-6 py-5" justify="space-between">
            <Col span={24}>
              <span className="table-title">{'テレコム決済明細一覧'}</span>
            </Col>
          </Row>
          <Row>
            <TelecomPaymentTable />
          </Row>
        </Card>
      </PageLayout>
    </>
  );
};

export default Telecom;
