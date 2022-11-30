import { Row, Col } from 'antd';
import { PageLayout } from 'app/components/Layout/PageLayout.style';
import Header from './components/Header';
import { BREADCUMD_DATA } from './consts';
import TelecomPaymentTable from './TelecomPaymentTable';

const Telecom = () => {
  return (
    <>
      <PageLayout>
        <Header activeBreadcumb={BREADCUMD_DATA[1].id} />

        {/* メインコンテンツ・Main Content */}
        <div className="item">
          <TelecomPaymentTable />
        </div>
      </PageLayout>
    </>
  );
};

export default Telecom;
