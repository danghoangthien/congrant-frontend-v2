import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
// ANTD
import { Row, Col, Descriptions, Card, Space, Table, Button } from 'antd';
// SPRITE
import { BoldLabel, SettingInput, SettingTextarea } from 'utils/Sprites';
// COMPONENT
// STYLE
import styled from 'styled-components/macro';
import { PageLayout } from 'app/components/Layout/PageLayout.style';
import { randomOutput } from 'utils/helper';

export const StyledTable = styled(Table)`
  width: 100%;

  td,
  th {
    vertical-align: middle;
  }
`;

export const StyledDescriptions = styled(Descriptions)`
  width: 100%;

  .ant-descriptions-item-label,
  .ant-descriptions-item-content,
  .ant-descriptions-view {
    border-left: none;
    border-right: none;
  }

  .ant-descriptions-item-label,
  .ant-descriptions-item-content {
    padding: 12px;
  }
`;

export const StyledHighlightText = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`;

const dataSource = Array.from(Array(4).keys()).map(i => ({
  id: `${i}`,
}));

const columnMap = {
  supporter_name: {
    title: (
      <>
        <span>{'サポーター名'}</span>
        <br />
        <span>{'（寄付件数・金額）'}</span>
      </>
    ),
    render: row => {
      return (
        <>
          <span>{randomOutput(['田中 太郎'])}</span>
          <br />
          <span>
            {randomOutput([
              '（1件・3,000円)',
              '（3件・9,000円)',
              '（12件・120,000円)',
              '(1件・10,000円)',
            ])}
          </span>
        </>
      );
    },
  },
  name: {
    title: '領収書宛名',
    render: row => (
      <SettingInput
        value={randomOutput(['田中 太郎', '山田 花子', '株式会社SUZUKI', '吉田裕子'])}
      />
    ),
  },
  address_2: {
    title: '領収書住所',
    render: row => (
      <SettingTextarea
        autoSize={{ minRows: 2 }}
        value={randomOutput([
          '大阪府大阪市西区江戸堀123-456 コングラントマンション101',
          '大阪府大阪市天王寺区玉造本町1-12-3SUZUKIビル1F',
          '',
        ])}
      />
    ),
  },
  internal_memo: {
    title: (
      <Space direction="vertical">
        <span>{'領収書メモ'}</span>
        <span>{'（領収書には表示されません）'}</span>
      </Space>
    ),
    render: row => (
      <SettingTextarea autoSize={{ minRows: 2 }} value={randomOutput(['会社宛に作成', ''])} />
    ),
  },
  action: {
    title: 'アクション',
    render: row => (
      <Space align="center">
        <Button
          onClick={e => {
            e.stopPropagation();
          }}
          type="primary"
        >
          <span>{'プレビュー'}</span>
        </Button>
      </Space>
    ),
  },
};

const columns = Object.keys(columnMap).map(columnName => {
  return columnMap[columnName];
});

const CreateReceipt = () => {
  // META情報
  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'一括アップロード（寄付決済）'}</title>
          <meta name="description" content={'...'} />
        </Helmet>
      </>
    );
  };

  return (
    <>
      {renderPageTitle()}
      <PageLayout>
        <div className="sub-page-title mb-6">{'領収書作成'}</div>

        <Card bodyStyle={{ padding: 40 }}>
          <div>
            <Row className="mb-8">
              <Col sm={24} md={24} lg={24}>
                <div className="page-title">{'確認画面'}</div>
              </Col>
            </Row>
            <Row className="mb-10">
              <Col span={24}>
                <div className="page-sub-title mb-4">{'作成方法'}</div>
                <StyledDescriptions column={1} bordered style={{ maxWidth: 600 }}>
                  <Descriptions.Item label={<BoldLabel label="作成方法" />}>
                    {'合計領収書（サポーターごと）'}
                  </Descriptions.Item>
                  <Descriptions.Item label={<BoldLabel label="領収書テンプレート" />}>
                    {'標準領収書'}
                  </Descriptions.Item>
                </StyledDescriptions>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col sm={24} md={24} lg={24}>
                <Space direction="vertical">
                  <div className="page-sub-title">{'作成する領収書'}</div>
                  <div style={{ fontWeight: 600 }}>
                    {
                      '4件の領収書を作成します。宛名・住所の変更、メモを残す場合は以下から編集してください。'
                    }
                  </div>
                </Space>
              </Col>
            </Row>
            <Row className="mb-10">
              <StyledTable dataSource={dataSource} columns={columns} pagination={false} />
            </Row>
            <Row>
              <Space style={{ width: '40%' }}>
                <Button>{'キャンセル'}</Button>
                <Link to={'/app/receipts-create-history'}>
                  <Button
                    onClick={e => {
                      e.stopPropagation();
                    }}
                    type="primary"
                  >
                    {'この条件で領収書を作成する'}
                  </Button>
                </Link>
              </Space>
            </Row>
          </div>
        </Card>
      </PageLayout>
    </>
  );
};

export default CreateReceipt;
