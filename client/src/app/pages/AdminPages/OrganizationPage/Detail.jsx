import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
// ANTD
import { Tabs, Row, Col, Card, Button, Space, Descriptions, Badge } from 'antd';
// COMPONENT
import BasicSetting from './components/BasicSetting';
import Examination from './components/Examination';
// CONST
import { CONTRACT_PLAN_STATUSES } from 'utils/consts';
// STYLE
import { SettingSelect } from 'utils/Sprites';
import styled from 'styled-components/macro';
import { PageLayout } from 'app/components/Layout/PageLayout.style';
import { StyledBadgeDot } from './OrganizationPage.style';

export const StyledDescriptions = styled(Descriptions)`
  .ant-descriptions-view {
    height: 64px;
    overflow: hidden;

    table {
      height: 100%;
    }
  }

  .ant-descriptions-item-label {
    font-weight: 600;
    width: 96px;
  }

  .ant-descriptions-header {
    margin-bottom: 8px;
  }

  .ant-descriptions-small .ant-descriptions-row > th,
  .ant-descriptions-small .ant-descriptions-row > td {
    border-left: none;
    border-right: none;
  }
`;

export const DETAIL_KEY_MAP = {
  BASIC_SETTING: '1',
  LOGIN_HISTORY: '2',
};

const Detail = ({ activeKey }) => {
  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'登録団体'}</title>
          <meta name="description" content={'登録団体'} />
        </Helmet>
      </>
    );
  };

  return (
    <>
      {renderPageTitle()}
      <PageLayout>
        {/* Should create a component for this */}

        <Row justify="space-between" align="middle" className="mb-5">
          {/* 左の部分・Left Part */}
          <Col>
            <Row type="flex" align="middle">
              <Col className="mr-6">
                <Space>
                  <div className="page-title">{'登録団体'}</div>
                </Space>
              </Col>
            </Row>
          </Col>
        </Row>

        <Card>
          <Row justify="space-between" align="middle" className="mb-5">
            {/* 左の部分・Left Part */}
            <Col>
              <Row type="flex" align="middle">
                <Col className="mr-6">
                  <Space size={16}>
                    <Link to={'/admin/organisations '}>
                      <Button
                        className="more-menu-btn"
                        icon={<span className="material-symbols-outlined">chevron_left</span>}
                      />
                    </Link>
                    <div style={{ fontSize: 24, fontWeight: 600 }}>
                      {'認定NPO法人コングラント（団体ID:1234）'}
                    </div>
                  </Space>
                </Col>
              </Row>
            </Col>

            {/* 右の部分・Right Part */}
            <Col>
              <Space>
                <Button type="primary">{'サポートログイン'}</Button>
              </Space>
            </Col>
          </Row>

          <Row className="mb-8" gutter={24}>
            <Col span={6}>
              <StyledDescriptions size="small" column={1} bordered>
                <Descriptions.Item label="審査状況">
                  <StyledBadgeDot>
                    <Badge color={CONTRACT_PLAN_STATUSES[1][1]} text={<strong>{'StOK'}</strong>} />
                  </StyledBadgeDot>
                </Descriptions.Item>
              </StyledDescriptions>
            </Col>
            <Col span={6}>
              <StyledDescriptions size="small" column={1} bordered>
                <Descriptions.Item label="CG審査">
                  <Row>
                    <Col span="12">
                      <StyledBadgeDot style={{ lineHeight: '32px' }}>
                        <Badge
                          color={CONTRACT_PLAN_STATUSES[1][1]}
                          text={<strong>{'OK'}</strong>}
                        />
                      </StyledBadgeDot>
                    </Col>
                    <Col span="12" type="flex" align="right">
                      <Examination btn_text={'変更'} />
                    </Col>
                  </Row>
                </Descriptions.Item>
              </StyledDescriptions>
            </Col>
            <Col span={6}>
              <StyledDescriptions size="small" column={1} bordered>
                <Descriptions.Item label="割引設定">
                  <SettingSelect style={{ width: '100%' }} placeholder={'TSJ'} />
                </Descriptions.Item>
              </StyledDescriptions>
            </Col>
            <Col span={6}>
              <StyledDescriptions size="small" column={1} bordered>
                <Descriptions.Item label="テスト">
                  <SettingSelect style={{ width: '100%' }} placeholder={'-'} />
                </Descriptions.Item>
              </StyledDescriptions>
            </Col>
          </Row>

          <Tabs defaultActiveKey={activeKey} type="card" tabBarGutter={4}>
            <Tabs.TabPane tab="基本設定" key="1">
              <BasicSetting />
            </Tabs.TabPane>
            <Tabs.TabPane tab="ログイン履歴" key="2">
              <></>
            </Tabs.TabPane>
          </Tabs>
        </Card>
      </PageLayout>
    </>
  );
};

export default Detail;
