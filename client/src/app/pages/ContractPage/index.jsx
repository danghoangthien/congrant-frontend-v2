import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
// ANTD
import { Row, Col, Space, Button, Table, Modal, Descriptions } from 'antd';
// STYLE
import { PageLayout } from 'app/components/Layout/PageLayout.style';
import { StyledCard, StyledDescriptions } from './ContractPage.style';
// UTILS
import { randomOutput } from 'utils/helper';

const ContractPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const searchParam = new URLSearchParams(window.location.search);
  const plan = searchParam.get('plan');
  const next_plan = searchParam.get('next_plan');
  const expire = searchParam.get('expire');
  const status = searchParam.get('status');
  const auto_update = searchParam.get('auto_update');
  console.log(plan);
  console.log(expire);
  console.log(status);
  console.log(auto_update);
  console.log(next_plan);

  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'契約内容'}</title>
          <meta name="description" content={'...'} />
        </Helmet>
      </>
    );
  };

  const dataSource = Array.from(Array(4).keys()).map(i => ({
    key: `${i}`,
    plan: randomOutput(['フリープラン', 'お試し期間']),
    using_start_date: randomOutput(['2022年5月11日', '2022年4月10日']),
    fee: randomOutput([0, 4800]),
    paid_date: randomOutput(['2022年5月11日', '2022年4月10日']),
    pay_method: randomOutput(['クレジットカード（自動更新）', 'クレジットカード（都度更新）']),
  }));

  const columnMap = {
    // プラン
    plan: {
      width: 120,
      title: 'プラン',
      dataIndex: 'plan',
    },
    // 利用開始日
    using_start_date: {
      width: 160,
      title: '利用開始日',
      dataIndex: 'using_start_date',
    },
    // 料金（税別）
    fee: {
      width: 160,
      title: '料金（税別）',
      dataIndex: 'fee',
      render: fee => (
        <>
          <span>{fee.toLocaleString()}円</span>
        </>
      ),
    },
    // 支払日
    paid_date: {
      width: 160,
      title: '支払日',
      dataIndex: 'paid_date',
    },
    // 支払い方法
    pay_method: {
      width: 160,
      title: '支払い方法',
      dataIndex: 'pay_method',
    },
  };

  const columns = Object.keys(columnMap).map(columnName => {
    return columnMap[columnName];
  });

  return (
    <>
      {renderPageTitle()}
      <PageLayout>
        <div className="sub-page-title mb-6">{'契約内容'}</div>
        <StyledCard bodyStyle={{ padding: 0 }}>
          <div className="card-box">
            <div className="page-sub-title mb-3">契約中のプラン</div>
            <Row align="middle">
              <Col className="mr-6">
                <span className="contract-status">お試し中</span>
              </Col>
              <Col className="mr-8">
                <Space size={16}>
                  <div className="box-ttl">有効期間</div>
                  <div className="box-txt">2022年4月10日〜2022年5月10日（あと15日）</div>
                </Space>
              </Col>
              <Col>
                <Space size={16}>
                  <div className="box-ttl">ステータス</div>
                  <div className="status-name">プラン未選択</div>
                  <Space className="btn-wrapper">
                    <Button
                      type="primary"
                      onClick={e => {
                        e.stopPropagation();
                        showModal();
                      }}
                    >
                      プラン選択
                    </Button>
                  </Space>
                </Space>
              </Col>
            </Row>
          </div>
          <div className="card-box">
            <div className="page-sub-title mb-3">次の契約</div>
            <Row align="middle">
              <Col className="mr-6">
                <span className="contract-status">お試し中</span>
              </Col>
              <Col className="mr-8">
                <Space size={16}>
                  <div className="box-ttl">有効期間</div>
                  <div className="box-txt">2022年4月10日〜2022年5月10日（あと15日）</div>
                </Space>
              </Col>
              <Col>
                <Space size={16}>
                  <div className="box-ttl">ステータス</div>
                  <div className="status-name">プラン未選択</div>
                  <Space className="btn-wrapper">
                    <Button
                      type="primary"
                      onClick={e => {
                        e.stopPropagation();
                        showModal();
                      }}
                    >
                      プラン選択
                    </Button>
                  </Space>
                </Space>
              </Col>
            </Row>
          </div>
          <div className="card-box">
            <div className="page-sub-title mb-3">契約履歴</div>
            <Table dataSource={dataSource} columns={columns} pagination={false} />
          </div>
        </StyledCard>

        <Modal
          visible={isModalOpen}
          footer={null}
          onCancel={handleCancel}
          title="プラン選択"
          width={987}
        >
          <StyledDescriptions column={4}>
            <Descriptions.Item>{` `}</Descriptions.Item>
            <Descriptions.Item className="pb-6">
              <div className="plan-box">
                <div className="mb-2">
                  <span className="plan-tag">{` `}</span>
                </div>
                <div className="plan-box-ttl">フリープラン</div>
                <Row justify="center">
                  <Button
                    type="primary"
                    onClick={e => {
                      e.stopPropagation();
                      showModal();
                    }}
                  >
                    プラン選択
                  </Button>
                </Row>
              </div>
            </Descriptions.Item>
            <Descriptions.Item className="pb-6">
              <div className="plan-box">
                <Row className="mb-2" justify="center">
                  <span className="plan-tag -light">定番</span>
                </Row>
                <div className="plan-box-ttl -light">ライトプラン</div>
                <Row justify="center">
                  {/* <Button
                    type="primary"
                    onClick={e => {
                      e.stopPropagation();
                    }}
                  >
                    お支払いへ進む
                  </Button> */}
                  <Button type="primary" disabled>
                    契約中
                  </Button>
                </Row>
              </div>
            </Descriptions.Item>
            <Descriptions.Item className="pb-6">
              <div className="plan-box">
                <Row className="mb-2" justify="center">
                  <span className="plan-tag -standard">おすすめ</span>
                </Row>
                <div className="plan-box-ttl -standard">スタンダードプラン</div>
                <Row justify="center">
                  <Button
                    type="primary"
                    onClick={e => {
                      e.stopPropagation();
                    }}
                  >
                    お支払いへ進む
                  </Button>
                </Row>
              </div>
            </Descriptions.Item>

            <Descriptions.Item span={4} className="descriptions-head">
              <div className="descriptions-ttl">手数料・利用料</div>
            </Descriptions.Item>
            <Descriptions.Item>
              <div className="table-ttl">決済手数料</div>
            </Descriptions.Item>
            <Descriptions.Item className="center">
              <div className="big-txt">8%</div>
            </Descriptions.Item>
            <Descriptions.Item className="center">
              <div className="big-txt">3.4%</div>
            </Descriptions.Item>
            <Descriptions.Item className="center">
              <div className="big-txt">3.4%</div>
            </Descriptions.Item>
            <Descriptions.Item>
              <div className="table-ttl">年間利用料</div>
            </Descriptions.Item>
            <Descriptions.Item className="center">
              <div className="big-txt">0円</div>
            </Descriptions.Item>
            <Descriptions.Item className="center">
              <div className="big-txt">48,000円（税別）</div>
            </Descriptions.Item>
            <Descriptions.Item className="center">
              <div className="big-txt">96,000円（税別）</div>
            </Descriptions.Item>

            {/* プロジェクト・Project */}
            <Descriptions.Item span={4} className="descriptions-head">
              <div className="descriptions-ttl">プロジェクト</div>
            </Descriptions.Item>
            <Descriptions.Item>
              <div>作成できるページ数</div>
            </Descriptions.Item>
            <Descriptions.Item className="center">
              <div>1ページ</div>
            </Descriptions.Item>
            <Descriptions.Item className="center">
              <div>3ページ</div>
            </Descriptions.Item>
            <Descriptions.Item className="center">
              <div>無制限</div>
            </Descriptions.Item>

            <Descriptions.Item>
              <div>作成できるページ数</div>
            </Descriptions.Item>
            <Descriptions.Item className="center">
              <div>1ページ</div>
            </Descriptions.Item>
            <Descriptions.Item className="center">
              <div>3ページ</div>
            </Descriptions.Item>
            <Descriptions.Item className="center">
              <div>無制限</div>
            </Descriptions.Item>

            <Descriptions.Item>
              <div>作成できるページ数</div>
            </Descriptions.Item>
            <Descriptions.Item className="center">
              <div>1ページ</div>
            </Descriptions.Item>
            <Descriptions.Item className="center">
              <div>3ページ</div>
            </Descriptions.Item>
            <Descriptions.Item className="center">
              <div>無制限</div>
            </Descriptions.Item>

            {/* CRM（寄付管理） */}
            <Descriptions.Item span={4} className="descriptions-head">
              <div className="descriptions-ttl">CRM（寄付管理）</div>
            </Descriptions.Item>
            <Descriptions.Item>
              <div>作成できるページ数</div>
            </Descriptions.Item>
            <Descriptions.Item className="center">
              <div>1ページ</div>
            </Descriptions.Item>
            <Descriptions.Item className="center">
              <div>3ページ</div>
            </Descriptions.Item>
            <Descriptions.Item className="center">
              <div>無制限</div>
            </Descriptions.Item>

            <Descriptions.Item>
              <div>作成できるページ数</div>
            </Descriptions.Item>
            <Descriptions.Item className="center">
              <div>1ページ</div>
            </Descriptions.Item>
            <Descriptions.Item className="center">
              <div>3ページ</div>
            </Descriptions.Item>
            <Descriptions.Item className="center">
              <div>無制限</div>
            </Descriptions.Item>

            <Descriptions.Item>
              <div>作成できるページ数</div>
            </Descriptions.Item>
            <Descriptions.Item className="center">
              <div>1ページ</div>
            </Descriptions.Item>
            <Descriptions.Item className="center">
              <div>3ページ</div>
            </Descriptions.Item>
            <Descriptions.Item className="center">
              <div>無制限</div>
            </Descriptions.Item>

            {/* 領収書 */}
            <Descriptions.Item span={4} className="descriptions-head">
              <div className="descriptions-ttl">領収書</div>
            </Descriptions.Item>
            <Descriptions.Item>
              <div>作成できるページ数</div>
            </Descriptions.Item>
            <Descriptions.Item className="center">
              <div>1ページ</div>
            </Descriptions.Item>
            <Descriptions.Item className="center">
              <div>3ページ</div>
            </Descriptions.Item>
            <Descriptions.Item className="center">
              <div>無制限</div>
            </Descriptions.Item>

            <Descriptions.Item>
              <div>作成できるページ数</div>
            </Descriptions.Item>
            <Descriptions.Item className="center">
              <div>1ページ</div>
            </Descriptions.Item>
            <Descriptions.Item className="center">
              <div>3ページ</div>
            </Descriptions.Item>
            <Descriptions.Item className="center">
              <div>無制限</div>
            </Descriptions.Item>

            <Descriptions.Item>
              <div>作成できるページ数</div>
            </Descriptions.Item>
            <Descriptions.Item className="center">
              <div>1ページ</div>
            </Descriptions.Item>
            <Descriptions.Item className="center">
              <div>3ページ</div>
            </Descriptions.Item>
            <Descriptions.Item className="center">
              <div>無制限</div>
            </Descriptions.Item>
          </StyledDescriptions>
        </Modal>
      </PageLayout>
    </>
  );
};

export default ContractPage;
