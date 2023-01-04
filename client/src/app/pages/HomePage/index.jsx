import { Helmet } from 'react-helmet-async';
// ANTD
import { Button, List, Space, Row, Col, Card, Badge, Checkbox, Divider } from 'antd';
import { DANGER_COLOR, RED_COLOR, WHITE_COLOR } from 'styles/StyleConstants';
import { PageLayout } from 'app/components/Layout/PageLayout.style';
import {
  StyledStatus,
  StyledCard,
  StyledList,
  StyledSummaryCard,
  StyledFee,
} from './HomePage.style';
import { Link } from 'react-router-dom';
import { INSPECT_STATUES, CONTRACT_PLANS } from 'utils/consts';

const HomePage = () => {
  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'ホーム'}</title>
          <meta name="description" content={'...'} />
        </Helmet>
      </>
    );
  };

  const contract_info = {
    inspec_status: 1,
    plan: 4,
    day_left: 15,
    expire_date: '2022年5月10日',
  };

  const news_data = [
    {
      key: 1,
      text: '10月のアップデート情報',
      date: '2022-10-09',
      isRead: true,
    },
    {
      key: 2,
      text: 'セキュリティ強化のためのサーバーメンテナンスのお知らせ',
      date: '2022-10-09',
      isRead: false,
    },
    {
      key: 3,
      text: '10月のアップデート情報',
      date: '2022-10-09',
      isRead: false,
    },
  ];

  return (
    <>
      {renderPageTitle()}
      <PageLayout>
        {/* ヘッディング・Heading */}
        <div className="mb-7">
          <Row justify="space-between" align="middle">
            {/* 左の部分・Left Part */}
            <Col>
              <Row type="flex" align="middle">
                <Col className="mr-6">
                  <div className="page-title">
                    <span className="material-symbols-outlined fill-icon icon">home</span>
                    <span className="ml-2">{'ホーム'}</span>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>

        <Row gutter={24} className="mb-6">
          <Col span={8}>
            <StyledCard bodyStyle={{ padding: '40px 30px' }} title="審査ステータス">
              <Row justify="center">
                <Col span={24} className="mb-6">
                  <Row justify="center">
                    <StyledStatus
                      style={{
                        color: INSPECT_STATUES[contract_info.inspec_status][1],
                        background: INSPECT_STATUES[contract_info.inspec_status][2],
                      }}
                    >
                      {INSPECT_STATUES[contract_info.inspec_status][0]}
                    </StyledStatus>
                  </Row>
                </Col>
                <Col span={24} className="mb-4">
                  <div className="card-txt">{INSPECT_STATUES[contract_info.inspec_status][3]}</div>
                </Col>
                <Col span={24}>
                  <Row justify="center">
                    <Button type="primary" href={INSPECT_STATUES[contract_info.inspec_status][5]}>
                      {INSPECT_STATUES[contract_info.inspec_status][4]}
                    </Button>
                  </Row>
                </Col>
              </Row>
            </StyledCard>
          </Col>
          <Col span={8}>
            <StyledCard
              bodyStyle={{ padding: '40px 30px' }}
              title="現在のプラン"
              extra={<Button href="/app/contract">契約内容</Button>}
            >
              <Row justify="center">
                <Col span={24} className="mb-6">
                  <Row justify="center">
                    <StyledStatus
                      style={{
                        color: CONTRACT_PLANS[contract_info.plan][1],
                        background: CONTRACT_PLANS[contract_info.plan][2],
                      }}
                    >
                      {CONTRACT_PLANS[contract_info.plan][0]}
                    </StyledStatus>
                  </Row>
                </Col>
                <Col span={24} className="mb-4">
                  <div className="card-txt">
                    {/* Trial・お試し中 */}
                    {contract_info.plan === 1 && (
                      <>
                        お試し終了まであと
                        <span style={{ color: DANGER_COLOR }}>{contract_info.day_left}</span>
                        日（〜{contract_info.expire_date}）
                        <br />
                        プランを選択してください
                      </>
                    )}

                    {/* Free・フリー */}
                    {contract_info.plan === 2 && (
                      <>
                        有料プランにすると
                        <br />
                        さらに便利な機能が使えます（詳しくは<a href="/app/contract">こちら</a>）
                      </>
                    )}

                    {/* Light・ライトプラン */}
                    {contract_info.plan > 2 && contract_info.expire_date && contract_info.day_left && (
                      <>
                        契約終了まであと
                        <span style={{ color: DANGER_COLOR }}>{contract_info.day_left}</span>
                        日（〜{contract_info.expire_date}）
                        <br />
                        <span style={{ color: DANGER_COLOR }}>更新が必要です</span>
                      </>
                    )}
                  </div>
                </Col>
                <Col span={24}>
                  <Row justify="center">
                    {contract_info.plan === 1 && (
                      <Button type="primary" href="/app/contract">
                        プラン選択
                      </Button>
                    )}
                    {contract_info.plan === 2 && (
                      <Button type="primary" href="/app/contract">
                        プランアップ
                      </Button>
                    )}
                    {contract_info.plan > 2 &&
                      !contract_info.expire_date &&
                      !contract_info.day_left && <Button href="/app/contract">プランアップ</Button>}
                    {contract_info.plan > 2 && contract_info.expire_date && contract_info.day_left && (
                      <Space>
                        <Button type="primary">更新</Button>
                        <Button href="/app/contract">プラン変更</Button>
                      </Space>
                    )}
                  </Row>
                </Col>
              </Row>
            </StyledCard>
          </Col>
          <Col span={8}>
            <StyledCard bodyStyle={{ padding: '40px 30px' }} title="現在の決済手数料">
              <Row justify="center">
                <Col span={24} className="mb-6">
                  <Row justify="center">
                    <StyledFee>
                      <div className={`${contract_info.plan === 1 && 'active'} fee-txt`}>
                        8.0<span className="unit">%</span>
                      </div>
                      <div className={`${contract_info.plan > 1 && 'active'} fee-txt`}>
                        3.4<span className="unit">%</span>
                      </div>
                    </StyledFee>
                  </Row>
                </Col>
                {contract_info.plan <= 1 && (
                  <>
                    <Col span={24} className="mb-4">
                      <div className="card-txt">
                        プランアップで決済手数料を
                        <br />
                        <span style={{ color: DANGER_COLOR }}>3.4%</span>にすることができます
                      </div>
                    </Col>
                    <Col span={24}>
                      <Row justify="center">
                        <Button type="primary">プラン選択</Button>
                      </Row>
                    </Col>
                  </>
                )}
              </Row>
            </StyledCard>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <Card className="mb-5 table-card pb-0" bodyStyle={{ padding: 0 }}>
              <Row justify="space-between" className="px-6 py-4">
                <Space align="center">
                  <span style={{ fontWeight: 600, fontSize: 16 }}>{'お知らせ'}</span>
                  <Badge
                    className="common-badge"
                    count={99}
                    style={{
                      color: WHITE_COLOR,
                      backgroundColor: RED_COLOR,
                    }}
                  />
                </Space>
              </Row>
              <Row>
                <StyledList
                  style={{ width: '100%' }}
                  dataSource={news_data}
                  renderItem={item => (
                    <List.Item>
                      <Space size={16}>
                        <span className="date">{item.date}</span>
                        <span className={`${item.isRead ? 'read ' : ''}tag`}>
                          {item.isRead ? '既読' : '未読'}
                        </span>
                        <span>{item.text}</span>
                      </Space>
                    </List.Item>
                  )}
                />
              </Row>
              <Row justify="end" className="py-4 px-6">
                <Link className="sidebar-link" to={`blogs`}>
                  <Button className="active mr-2" type="secondary">
                    {'一覧'}
                  </Button>
                </Link>
              </Row>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <Card className="mb-5 table-card pb-0" bodyStyle={{ padding: 0 }}>
              <Row justify="space-between" align="middle" className="px-6 py-4">
                <Space align="center">
                  <span style={{ fontWeight: 600, fontSize: 16 }}>{'サマリー'}</span>
                </Space>
                <Checkbox style={{ fontSize: 16 }}>コングラント経由以外の寄付を含める</Checkbox>
              </Row>
              <Divider style={{ margin: 0 }} />
              <Row>
                <Col flex="20%">
                  <StyledSummaryCard title="全ての寄付">
                    <div className="card-txt">40件</div>
                    <div className="card-txt">1,200,000円</div>
                  </StyledSummaryCard>
                </Col>
                <Col flex="20%">
                  <StyledSummaryCard title="継続中の毎月決済">
                    <div className="card-txt">40件</div>
                    <div className="card-txt">1,200,000円</div>
                  </StyledSummaryCard>
                </Col>
                <Col flex="20%">
                  <StyledSummaryCard title="継続中の毎年決済">
                    <div className="card-txt">40件</div>
                    <div className="card-txt">1,200,000円</div>
                  </StyledSummaryCard>
                </Col>
                <Col flex="20%">
                  <StyledSummaryCard title="個人サポーター数">
                    <div className="card-txt">120人</div>
                  </StyledSummaryCard>
                </Col>
                <Col flex="20%">
                  <StyledSummaryCard title="法人サポーター数">
                    <div className="card-txt">40人</div>
                  </StyledSummaryCard>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </PageLayout>
    </>
  );
};

export { HomePage };

export default HomePage;
