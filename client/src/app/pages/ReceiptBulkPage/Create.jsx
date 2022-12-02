import { Helmet } from 'react-helmet-async';
import { Tabs, Row, Col, Card, Tag, Space } from 'antd';
import { PageLayout } from 'app/components/Layout/PageLayout.style';
import { StyledBulkCreateTabs } from './ReceiptBulk.style';
import { useSelector, useDispatch } from 'react-redux';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import DoneIcon from '@mui/icons-material/Done';
import './Models/index';
import styled from 'styled-components/macro';
import { PRIMARY_COLOR, PLACEHOLDER_COLOR } from 'styles/StyleConstants';

const StyledTag = styled(Tag)`
  width: 32px;
  height: 32px;
  border-radius: 24px;
  text-align: center;
  color: #ffffff;
  font-weight: 600;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  &.complete {
    color: ${PRIMARY_COLOR};
    background: #ffffff !important;
    border-color: ${PRIMARY_COLOR};
  }
`;

const Create = () => {
  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'領収書一括作成'}</title>
          <meta name="description" content={'...'} />
        </Helmet>
      </>
    );
  };

  const dispatch = useDispatch();
  const { active, completed } = useSelector(state => state['receiptBulkStep']);
  const TabName = ({ current, active, children }) => {
    const color = current === active ? PRIMARY_COLOR : '#D9D9D7';
    const isCurrentTabCompleted = completed.includes(current);
    return (
      <Space size={8} style={{ color: isCurrentTabCompleted && PRIMARY_COLOR }}>
        <StyledTag color={color} className={isCurrentTabCompleted && 'complete'}>
          {isCurrentTabCompleted ? <span class="material-symbols-outlined">done</span> : current}
        </StyledTag>
        {children}
      </Space>
    );
  };

  return (
    <>
      {renderPageTitle()}
      <PageLayout>
        <>
          <Row className="mb-5">
            <Col>
              <div className="sub-page-title">{'一括作成'}</div>
            </Col>
          </Row>

          {/* メインコンテンツ・Card */}
          <Card bodyStyle={{ padding: '46px 40px' }}>
            {active === '4' && <Step4 />}
            {['1', '2', '3'].includes(active) && (
              <StyledBulkCreateTabs activeKey={active} type="card" tabBarGutter={6}>
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
          </Card>
        </>
      </PageLayout>
    </>
  );
};

export default Create;
