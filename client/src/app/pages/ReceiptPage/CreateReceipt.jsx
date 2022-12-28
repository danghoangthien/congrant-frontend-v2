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
  td,
  th {
    vertical-align: middle;
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
      <Space direction="vertical">
        <span>{'サポーター名'}</span>
        <span>{'（寄付件数・金額）'}</span>
      </Space>
    ),
    render: row => {
      return (
        <Space direction="vertical">
          <span>{randomOutput(['田中 太郎'])}</span>
          <span>
            {randomOutput([
              '（1件・3,000円)',
              '（3件・9,000円)',
              '（12件・120,000円)',
              '(1件・10,000円)',
            ])}
          </span>
        </Space>
      );
    },
  },
  address: {
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
        autoSize={{ minRows: 3 }}
        rows="3"
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
      <SettingTextarea
        autoSize={{ minRows: 3 }}
        rows="3"
        value={randomOutput(['会社宛に作成', ''])}
      />
    ),
  },
  action: {
    width: 300,
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
        <div className="mb-7">
          <Row justify="space-between" align="middle">
            {/* 左の部分・Left Part */}
            <Col>
              <Row type="flex" align="middle">
                <Col className="mr-6">
                  <div className="sub-page-title">{'領収書作成'}</div>
                </Col>
              </Row>
            </Col>
            {/* 右の部分・Right Part */}
            <Col />
          </Row>
        </div>

        <Card bodyStyle={{ padding: '48px 32px' }}>
          <div className="item">
            <Row className="mb-5">
              <Col sm={24} md={24} lg={24}>
                <div className="page-title">{'確認画面'}</div>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col sm={24} md={12} lg={12}>
                <Descriptions
                  column={1}
                  title={<span className="page-sub-title">{'作成方法'}</span>}
                  bordered
                >
                  <Descriptions.Item label={<BoldLabel label="作成方法" />}>
                    {'合計領収書（サポーターごと）'}
                  </Descriptions.Item>
                  <Descriptions.Item label={<BoldLabel label="領収書テンプレート" />}>
                    {'標準領収書'}
                  </Descriptions.Item>
                </Descriptions>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col sm={24} md={24} lg={24}>
                <Space direction="vertical">
                  <span className="page-sub-title">{'作成方法'}</span>
                  <span className="page-sub-title" style={{ fontSize: '14px' }}>
                    {
                      '4件の領収書を作成します。宛名・住所の変更、メモを残す場合は以下から編集してください。'
                    }
                  </span>
                </Space>
              </Col>
            </Row>
            <Row className="item mb-6">
              <StyledTable
                tableLayout="fixed"
                dataSource={dataSource}
                columns={columns}
                pagination={false}
              />
            </Row>
            <Row className="item mb-6">
              <Space style={{ width: '40%' }}>
                <StyledHighlightText>{'キャンセル'}</StyledHighlightText>
                <Link to={'/app/receipts-create-history'}>
                  <Button
                    onClick={e => {
                      e.stopPropagation();
                    }}
                    type="primary"
                  >
                    <StyledHighlightText>{'この条件で領収書を作成する'}</StyledHighlightText>
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
