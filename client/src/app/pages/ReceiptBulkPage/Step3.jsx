import { useDispatch } from 'react-redux';
// ANTD
import { Row, Col, Space, Descriptions, Button, Table, Typography } from 'antd';
// STYLE
import { DescriptionStyle } from 'app/pages/ReceiptBulkPage/ReceiptBulk.style';
// COMPONENTS
import DrawerHandle from 'app/components/DrawerHandle';
import Detail from '../IndividualPage/components/Detail';

const randomOutput = arr => arr[Math.floor(Math.random() * arr.length)];

const dataSource = Array.from(Array(15).keys()).map(i => ({
  supporter: randomOutput(['田中 太郎', '山田 花子', '鈴木 一郎']),
  number: randomOutput(['136件', '11件', '1件', '33件']),
  amount: randomOutput(['3,000円', '5,000円', '9,000円']),
}));

const columnMap = {
  supporter: {
    width: 250,
    title: 'サポーター名',
    render: row => (
      <DrawerHandle drawerTitle="田中 太郎" drawerComponent={<Detail data={row} />}>
        <span className="supporter-link">{row.supporter}</span>
      </DrawerHandle>
    ),
  },
  number: {
    width: 100,
    title: '件数',
    dataIndex: 'number',
  },
  amount: {
    width: 150,
    title: '金額',
    dataIndex: 'amount',
  },
};

const columns = Object.keys(columnMap).map(columnName => {
  return columnMap[columnName];
});

const Step3 = () => {
  const dispatch = useDispatch();

  return (
    <>
      {/* タイトル・TITLE */}
      <Row className="mb-8">
        <Col sm={24} md={24} lg={24}>
          <span className="page-title01">{'確認'}</span>
        </Col>
      </Row>

      {/* 作成方法 */}
      <Row className="mb-16">
        <DescriptionStyle>
          <Descriptions
            title={'作成方法'}
            bordered
            column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
          >
            <Descriptions.Item label={'作成方法'}>{'1サポーターにつき1枚'}</Descriptions.Item>
            <Descriptions.Item label={'領収書テンプレート'}>{'標準領収書'}</Descriptions.Item>
          </Descriptions>
        </DescriptionStyle>
      </Row>

      {/* 作成条件 */}
      <Row className="mb-16">
        <DescriptionStyle>
          <Descriptions
            title={'作成条件'}
            bordered
            column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
          >
            <Descriptions.Item label={'期間'}>{'2022-01-01 〜　2022-12-31'}</Descriptions.Item>
            <Descriptions.Item label={'寄付タイプ'}>{'単発, 毎月'}</Descriptions.Item>
            <Descriptions.Item label={'寄付レコードの領収書ステータス'}>
              {'未作成, 未発行'}
            </Descriptions.Item>
            <Descriptions.Item label={'寄付プラン'}>
              {
                'ブロンズサポーター, シルバーサポーター, ゴールドサポーター, 賛助会員（都度更新）, 賛助会員（自動更新）'
              }
            </Descriptions.Item>
          </Descriptions>
        </DescriptionStyle>
      </Row>

      {/* 作成対象者 */}
      <Row className="mb-10">
        <DescriptionStyle>
          <Descriptions
            title={
              <>
                <Space direction="vertical">
                  <span>{'作成対象者'}</span>
                  <span style={{ fontWeight: '300', fontSize: '16px' }}>
                    <strong className="bold">{'423件'}</strong>
                    {'の寄付レコードから、'}
                    <strong className="bold">{'123名・13法人'}</strong>
                    {'の領収書、'}
                    <strong className="bold">{'計136枚'}</strong>
                    {'が作成されます。'}
                  </span>
                </Space>
              </>
            }
            bordered
            column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
          />
          <Table dataSource={dataSource} columns={columns} pagination={false} scroll={{ y: 320 }} />
        </DescriptionStyle>
      </Row>

      <Row>
        <Col sm={24} md={2} lg={2} type="flex" align="left">
          <Button
            size="large"
            style={{ fontWeight: '600' }}
            className="less-shadow-btn"
            onClick={() => {
              dispatch.receiptBulkStep.setActive('2');
            }}
          >
            {'もどる'}
          </Button>
        </Col>
        <Col sm={24} md={22} lg={22} type="flex" align="end">
          <Button
            size="large"
            style={{ fontWeight: '600' }}
            className="less-shadow-btn"
            type="primary"
            onClick={() => {
              dispatch.receiptBulkStep.setActive('4');
            }}
          >
            {'次へ'}
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Step3;
