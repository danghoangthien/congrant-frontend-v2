import { Row, Col, Card, Space, Button, Select } from 'antd';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { PageLayout } from 'app/components/Layout/PageLayout.style';
import Breadcumd from 'app/components/Breadcumd';
import Header from './components/Header';
import StripeDetailPaymentTable from './StripeDetailPaymentTable';

const SummaryInfo = styled(Space)`
  width: 100%;
  font-weight: 600;
  border: solid 1px #d9d9d9;
  border-radius: 4px;
`;

const SummaryLabel = styled.span`
  font-size: 14px;
  line-height: 22px;
`;

const SummaryValue = styled.span`
  font-size: 20px;
  line-height: 28px;
`;

const Stripe = () => {
  const { yyyymm } = useParams();
  const BREADCUMD_DATA = [
    {
      id: 1,
      title: 'Stripe決済明細',
      uri: '/app/payment-details/stripe',
    },
    {
      id: 2,
      title: '2022年10月20日 入金分',
      uri: `/app/payment-details/stripe/${yyyymm}`,
    },
  ];
  return (
    <>
      <Space className="px-6 py-3" style={{ background: '#ffffff', width: '100%' }}>
        <Link to="/app/payment-details/stripe">
          <Button>{'< 一覧へもどる'}</Button>
        </Link>
        <Breadcumd data={BREADCUMD_DATA} active={BREADCUMD_DATA[1].id} />
      </Space>
      <PageLayout>
        <Header breadCumb={null} />
        {/* メインコンテンツ・Main Content */}
        <Card bodyStyle={{ padding: 0 }}>
          <Row className="py-4 px-4" justify="space-between">
            <Col>
              <Space size={24}>
                <Button>&lsaquo;</Button>
                <span className="table-title">{'2022年10月20日 入金分'}</span>
                <Button>&rsaquo;</Button>
                <Select value={'2022年10月'} style={{ width: '250px' }} />
              </Space>
            </Col>
            <Col>
              <Button
                type="primary"
                className="icon-btn"
                icon={<span className="material-symbols-outlined">file_download</span>}
              >
                {'ダウンロード'}
              </Button>
            </Col>
          </Row>
          <Row className="py-4 px-4" justify="space-between">
            <Col
              className="pa-2"
              style={{
                width: '25%',
              }}
            >
              <SummaryInfo className="pa-2" align="center" direction="vertical">
                <SummaryLabel style={{ color: 'rgba(0, 0, 0, 0.5)' }}>{'件数'}</SummaryLabel>
                <SummaryValue>{'1,234件'}</SummaryValue>
              </SummaryInfo>
            </Col>
            <Col
              className="pa-2"
              style={{
                width: '25%',
              }}
            >
              <SummaryInfo className="pa-2" align="center" direction="vertical">
                <SummaryLabel style={{ color: 'rgba(0, 0, 0, 0.5)' }}>
                  {'①決済金額合計'}
                </SummaryLabel>
                <SummaryValue>{'2,000,000円'}</SummaryValue>
              </SummaryInfo>
            </Col>
            <Col
              className="pa-2"
              style={{
                width: '25%',
              }}
            >
              <SummaryInfo className="pa-2" align="center" direction="vertical">
                <SummaryLabel style={{ color: 'rgba(0, 0, 0, 0.5)' }}>
                  {'②決済手数料+入金事務手数料'}
                </SummaryLabel>
                <SummaryValue>{'68,000円 + 440円'}</SummaryValue>
              </SummaryInfo>
            </Col>
            <Col
              className="pa-2"
              style={{
                width: '25%',
              }}
            >
              <SummaryInfo className="pa-2" align="center" direction="vertical">
                <SummaryLabel style={{ color: 'rgba(0, 0, 0, 0.5)' }}>
                  {'入金金額（①-②）'}
                </SummaryLabel>
                <SummaryValue>{'1,1,931,560円'}</SummaryValue>
              </SummaryInfo>
            </Col>
          </Row>
          <StripeDetailPaymentTable />
        </Card>
      </PageLayout>
    </>
  );
};

export default Stripe;
