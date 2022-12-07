import { Row, Col, Card, Space } from 'antd';
import { Helmet } from 'react-helmet-async';
import { PageLayout } from 'app/components/Layout/PageLayout.style';
import Breadcumd from 'app/components/Breadcumd';
import Header from './components/Header';
import { BREADCUMD_DATA } from './consts';
import StripePaymentTable from './StripePaymentTable';

const Stripe = () => {
  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'Stripe決済'}</title>
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
            <Breadcumd data={BREADCUMD_DATA} active={BREADCUMD_DATA[0].id} style="button" />
          }
        />
        {/* メインコンテンツ・Main Content */}
        <Card className="table-card" bodyStyle={{ padding: 0 }}>
          <Row className="py-4 px-4" justify="space-between">
            <Col>
              <Space size={24}>
                <span className="table-title">{'Stripe決済明細一覧'}</span>
              </Space>
            </Col>
          </Row>
          <StripePaymentTable />
        </Card>
      </PageLayout>
    </>
  );
};

export default Stripe;
