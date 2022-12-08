import { Helmet } from 'react-helmet-async';
import { Row, Col, Card, Space, Button, Select } from 'antd';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { PageLayout } from 'app/components/Layout/PageLayout.style';
import Breadcumd from 'app/components/Breadcumd';
import Header from './components/Header';
import StripeDetailPaymentTable from './StripeDetailPaymentTable';
import { TEXT_COLOR, TEXT_GRAY_COLOR } from 'styles/StyleConstants';

const SummaryInfo = styled(Space)`
  width: 100%;
  font-weight: 600;
  border: solid 1px #d9d9d9;
  border-radius: 4px;
`;

const SummaryLabel = styled.span`
  font-size: 14px;
`;

const SummaryValue = styled.span`
  font-size: 20px;
`;

const Stripe = () => {
  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'決済明細'}</title>
          <meta name="description" content={'...'} />
        </Helmet>
      </>
    );
  };
  const { yyyymm } = useParams();
  const BREADCUMD_DATA = [
    {
      id: 1,
      title: (
        <Space size={4}>
          <span
            className="material-symbols-outlined icon"
            style={{ fontSize: '14px', color: TEXT_COLOR }}
          >
            format_list_bulleted
          </span>
          <span>Stripe決済明細</span>
        </Space>
      ),
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
      {renderPageTitle()}
      <Space className="px-6 py-3" style={{ background: '#ffffff', width: '100%' }} size={16}>
        <Link to="/app/payment-details/stripe">
          <Button
            className="icon-btn less-shadow-btn"
            icon={<span className="material-symbols-outlined fill-icon">chevron_left</span>}
          >
            {'一覧へもどる'}
          </Button>
        </Link>
        <Breadcumd data={BREADCUMD_DATA} active={BREADCUMD_DATA[1].id} />
      </Space>

      <PageLayout>
        <Header breadCumb={null} />
        {/* メインコンテンツ・Main Content */}
        <Card bodyStyle={{ padding: 0 }} className="table-card">
          <Row className="px-6 py-5" justify="space-between">
            <Col>
              <Space size={16}>
                <Button
                  className="more-menu-btn"
                  icon={<span className="material-symbols-outlined">chevron_left</span>}
                />
                <span style={{ fontSize: '24px', fontWeight: 600 }}>{'2022年10月20日 入金分'}</span>
                <Button
                  className="more-menu-btn"
                  icon={<span className="material-symbols-outlined">chevron_right</span>}
                />
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
          <Row className="px-6 pb-6" justify="space-between" gutter={16}>
            <Col
              style={{
                width: '25%',
              }}
            >
              <SummaryInfo className="pa-2" align="center" direction="vertical">
                <SummaryLabel style={{ color: TEXT_GRAY_COLOR, fontWeight: 600 }}>
                  {'件数'}
                </SummaryLabel>
                <SummaryValue>{'1,234件'}</SummaryValue>
              </SummaryInfo>
            </Col>
            <Col
              style={{
                width: '25%',
              }}
            >
              <SummaryInfo className="pa-2" align="center" direction="vertical">
                <SummaryLabel style={{ color: TEXT_GRAY_COLOR, fontWeight: 600 }}>
                  {'①決済金額合計'}
                </SummaryLabel>
                <SummaryValue>{'2,000,000円'}</SummaryValue>
              </SummaryInfo>
            </Col>
            <Col
              style={{
                width: '25%',
              }}
            >
              <SummaryInfo className="pa-2" align="center" direction="vertical">
                <SummaryLabel style={{ color: TEXT_GRAY_COLOR, fontWeight: 600 }}>
                  {'②決済手数料+入金事務手数料'}
                </SummaryLabel>
                <SummaryValue>{'68,000円 + 440円'}</SummaryValue>
              </SummaryInfo>
            </Col>
            <Col
              style={{
                width: '25%',
              }}
            >
              <SummaryInfo className="pa-2" align="center" direction="vertical">
                <SummaryLabel style={{ color: TEXT_GRAY_COLOR, fontWeight: 600 }}>
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
