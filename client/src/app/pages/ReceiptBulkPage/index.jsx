import { Tabs, Row, Col, Card, Tag, Space } from 'antd';
import { StyledDetail } from 'app/pages/SupporterPage/components/Detail.style';
import { PageLayout } from 'app/components/Layout/PageLayout.style';
import { useSelector, useDispatch } from 'react-redux';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import HistoryTable from './HistoryTable';
import MenuIcon from '@mui/icons-material/Menu';
import './Models/index';
import styled from 'styled-components/macro';
import { PRIMARY_COLOR } from 'styles/StyleConstants';

const StyledTag = styled(Tag)`
  width: 32px;
  height: 32px;
  border-radius: 24px;
  line-height: 32px;
  text-align: center;
  color: #ffffff;
  border-color: #d9d9d7;
  font-weight: 600;
  font-size: 16px;
`;

const StyledBulkCreateTabs = styled(Tabs)`
  .ant-tabs-nav {
    border-bottom: none !important;
  }
  .ant-tabs-tab {
    border: none !important;
    background: none !important;
  }
  .ant-tabs-card {
    .ant-tabs-nav .ant-tabs-tab {
      background: none;
    }
  }
`;

const ReceiptBulkPage = () => {
  const dispatch = useDispatch();
  const { active } = useSelector(state => state['receiptBulkStep']);
  const TabName = ({ current, active, children }) => {
    const color = current === active ? PRIMARY_COLOR : '#D9D9D7';
    return (
      <Space>
        <StyledTag color={color}>{current}</StyledTag>
        {children}
      </Space>
    );
  };

  if (active === '5') {
    return (
      <PageLayout>
        <div className="item mb-7">
          <Row justify="space-between" align="middle">
            <Col className="mr-6 mb-5">
              <span className="page-title">
                <MenuIcon style={{ fontSize: '32px' }} />
                <span className="ml-1 page-title">{'一括作成履歴'}</span>
              </span>
            </Col>
          </Row>
          <HistoryTable />
        </div>
      </PageLayout>
    );
  }
  return (
    <PageLayout>
      <div className="item mb-7">
        <Row justify="space-between" align="middle">
          <Col className="mr-6">
            <span className="page-title">
              <MenuIcon style={{ fontSize: '32px' }} />
              <span className="ml-1 page-title">{'一括作成'}</span>
            </span>
          </Col>
        </Row>
        <Card style={{ minWidth: '1000px' }}>
          <StyledDetail>
            {active === '4' && <Step4 />}
            {['1', '2', '3'].includes(active) && (
              <StyledBulkCreateTabs
                activeKey={active}
                type="card"
                tabBarGutter={4}
                className="mt-6"
              >
                <Tabs.TabPane
                  tab={
                    <TabName current="1" active={active}>
                      {'作成方法'}
                    </TabName>
                  }
                  key="1"
                >
                  <Step1 />
                </Tabs.TabPane>
                <Tabs.TabPane
                  tab={
                    <TabName current="2" active={active}>
                      {'作成条件'}
                    </TabName>
                  }
                  key="2"
                >
                  <Step2 />
                </Tabs.TabPane>
                <Tabs.TabPane
                  tab={
                    <TabName current="3" active={active}>
                      {'確認'}
                    </TabName>
                  }
                  key="3"
                >
                  <Step3 />
                </Tabs.TabPane>
                <Tabs.TabPane
                  tab={
                    <TabName current="4" active={active}>
                      {'完了'}
                    </TabName>
                  }
                  key="4"
                >
                  <></>
                </Tabs.TabPane>
              </StyledBulkCreateTabs>
            )}
          </StyledDetail>
        </Card>
      </div>
    </PageLayout>
  );
};

export default ReceiptBulkPage;
