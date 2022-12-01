import { Row, Col } from 'antd';
import { PageLayout } from 'app/components/Layout/PageLayout.style';
import Header from './components/Header';
import { BREADCUMD_DATA } from './consts';
import StripePaymentTable from './StripePaymentTable';

const Stripe = () => {
  return (
    <>
      <PageLayout>
        <Header activeBreadcumb={BREADCUMD_DATA[0].id} />
        {/* メインコンテンツ・Main Content */}
        <div className="item">
          <StripePaymentTable />
        </div>
      </PageLayout>
    </>
  );
};

export default Stripe;
