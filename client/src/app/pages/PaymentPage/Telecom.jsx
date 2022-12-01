import { Row, Col, Card, Space } from 'antd';
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
        <Card bodyStyle={{ padding: 0 }}>
          <Row className="py-4 px-4" justify="space-between">
            <Col>
              <Space size={24}>
                <span className="table-title">{'テレコム決済明細一覧'}</span>
              </Space>
            </Col>
          </Row>
          <TelecomPaymentTable />
        </Card>
      </PageLayout>
    </>
  );
};

export default Telecom;
