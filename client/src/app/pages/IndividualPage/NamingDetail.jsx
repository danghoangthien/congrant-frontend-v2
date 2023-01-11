import { Helmet } from 'react-helmet-async';
import { PageLayout } from 'app/components/Layout/PageLayout.style';
import { NamingDetailStyle, NamingTable } from './NamingDetail.style';
import { Card, Row, Col, Button, Tag, Radio, Table } from 'antd';

const columns = [
  {
    title: '',
    width: 200,
    dataIndex: 'column_name',
    key: 'column_name',
    render: text => <strong>{text}</strong>,
    fixed: 'left',
    className: 'gray-box',
  },
  {
    title: '名寄せ後のデータ',
    width: 280,
    dataIndex: 'selecting',
    key: 'selecting',
    render: text => <strong>{text}</strong>,
    fixed: 'left',
  },
  {
    title: '候補1',
    width: 280,
    dataIndex: 'candidate1',
    key: 'candidate1',
  },
  {
    title: '候補2',
    width: 280,
    dataIndex: 'candidate2',
    key: 'candidate2',
  },
  {
    title: '候補3',
    width: 280,
    dataIndex: 'candidate3',
    key: 'candidate3',
  },
  {
    title: '候補4',
    width: 280,
    dataIndex: 'candidate4',
    key: 'candidate4',
  },
  {
    title: '候補5',
    width: 280,
    dataIndex: 'candidate5',
    key: 'candidate5',
  },
];

const data = [
  {
    key: '1',
    column_name: '個人No',
    selecting: '123974',
    // Loop starts
    candidate1: (
      <>
        <Row style={{ width: '100%' }} justify="space-between" align="middle">
          <Radio style={{ fontSize: 14 }}>
            <span>{'123974'}</span>
          </Radio>
          <Button className="btn" type="link">
            {'すべて選択'}
          </Button>
        </Row>
      </>
    ),
    candidate2: (
      <>
        <Row style={{ width: '100%' }} justify="space-between" align="middle">
          <Radio style={{ fontSize: 14 }}>
            <span>{'123974'}</span>
          </Radio>
          <Button className="btn" type="link">
            {'すべて選択'}
          </Button>
        </Row>
      </>
    ),
    candidate3: (
      <>
        <Row style={{ width: '100%' }} justify="space-between" align="middle">
          <Radio style={{ fontSize: 14 }}>
            <span>{'123974'}</span>
          </Radio>
          <Button className="btn" type="link">
            {'すべて選択'}
          </Button>
        </Row>
      </>
    ),
    candidate4: (
      <>
        <Row style={{ width: '100%' }} justify="space-between" align="middle">
          <Radio style={{ fontSize: 14 }}>
            <span>{'123974'}</span>
          </Radio>
          <Button className="btn" type="link">
            {'すべて選択'}
          </Button>
        </Row>
      </>
    ),
    candidate5: (
      <>
        <Row style={{ width: '100%' }} justify="space-between" align="middle">
          <Radio style={{ fontSize: 14 }}>
            <span>{'123974'}</span>
          </Radio>
          <Button className="btn" type="link">
            {'すべて選択'}
          </Button>
        </Row>
      </>
    ),
  },
  {
    key: '2',
    column_name: '氏名',
    selecting: '田中 太郎',
    // Loop starts
    candidate1: '田中 太郎',
    candidate2: '田中 太郎',
    candidate3: '田中 太郎',
    candidate4: '田中 太郎',
    candidate5: '田中 太郎',
  },
];

const DetailGrid = () => {
  return (
    <>
      <NamingTable className="mb-10">
        <Table
          tableLayout="fixed"
          columns={columns}
          dataSource={data}
          pagination={false}
          scroll={{
            x: 1192,
          }}
        />
      </NamingTable>

      <NamingDetailStyle>
        <Row className="heading" wrap={false}>
          <Col className="gray-box" flex="200px">
            <div className="heading">{''}</div>
          </Col>
          {/* SELECTING VALUE */}
          <Col className="gray-box" flex="280px">
            <div>{'名寄せ後のデータ'}</div>
          </Col>
          {/* LOOP PART START */}
          <Col className="gray-box" flex="280px">
            <div>{'候補1'}</div>
          </Col>
          <Col className="gray-box" flex="280px">
            <div>{'候補2'}</div>
          </Col>
          <Col className="gray-box" flex="280px">
            <div>{'候補3'}</div>
          </Col>
          <Col className="gray-box" flex="280px">
            <div>{'候補4'}</div>
          </Col>
          <Col className="gray-box" flex="280px">
            <div>{'候補5'}</div>
          </Col>
          {/* LOOP PART END */}
        </Row>

        {/* 個人No.・Supporter Number */}
        <Row className="heading" wrap={false}>
          <Col className="gray-box" flex="200px">
            {'個人No.'}
          </Col>
          {/* SELECTING VALUE */}
          <Col className="gray-box" flex="280px">
            {'123974'}
          </Col>
          {/* LOOP PART START */}
          <Col className="gray-box" flex="280px">
            <Row style={{ width: '100%' }} justify="space-between" align="middle">
              <Radio checked>
                <span>{'123974'}</span>
              </Radio>
              <Button type="link">{'すべて選択'}</Button>
            </Row>
          </Col>
          <Col className="gray-box" flex="280px">
            <Row style={{ width: '100%' }} justify="space-between" align="middle">
              <Radio>
                <span>{'183910'}</span>
              </Radio>
              <Button type="link">{'すべて選択'}</Button>
            </Row>
          </Col>
          <Col className="gray-box" flex="280px">
            <Row style={{ width: '100%' }} justify="space-between" align="middle">
              <Radio>
                <span>{'183910'}</span>
              </Radio>
            </Row>
          </Col>
          <Col className="gray-box" flex="280px">
            <Row style={{ width: '100%' }} justify="space-between" align="middle">
              <Radio>
                <span>{'183910'}</span>
              </Radio>
            </Row>
          </Col>
          <Col className="gray-box" flex="280px">
            <Row style={{ width: '100%' }} justify="space-between" align="middle">
              <Radio>
                <span>{'183910'}</span>
              </Radio>
            </Row>
          </Col>
          {/* LOOP PART END */}
        </Row>

        {/* 氏名・Supporter Name */}
        <Row wrap={false}>
          <Col className="gray-box" flex="200px">
            <span className="bold">{'氏名'}</span>
          </Col>
          {/* SELECTING VALUE */}
          <Col flex="280px">
            <span className="bold">{'田中 太郎'}</span>
          </Col>
          {/* LOOP PART START */}
          <Col flex="280px">
            <span>{'田中 太郎'}</span>
          </Col>
          <Col flex="280px">
            <span>{'田中 太郎'}</span>
          </Col>
          <Col flex="280px">
            <span>{'田中 太郎'}</span>
          </Col>
          <Col flex="280px">
            <span>{'田中 太郎'}</span>
          </Col>
          <Col flex="280px">
            <span>{'田中 太郎'}</span>
          </Col>
          {/* LOOP PART END */}
        </Row>

        {/* ふりがな・Supporter name furigana */}
        <Row wrap={false}>
          <Col className="gray-box" flex="200px">
            <span className="bold">{'ふりがな'}</span>
          </Col>
          {/* SELECTING VALUE */}
          <Col flex="280px">
            <span className="bold">{'たなか たろう 太郎'}</span>
          </Col>
          {/* LOOP PART START */}
          <Col flex="280px">
            <span>{'たなか たろう'}</span>
          </Col>
          <Col flex="280px">
            <span>{'たなか たろう'}</span>
          </Col>
          <Col flex="280px">
            <span>{'たなか たろう'}</span>
          </Col>
          <Col flex="280px">
            <span>{'たなか たろう'}</span>
          </Col>
          <Col flex="280px">
            <span>{'たなか たろう'}</span>
          </Col>
          {/* LOOP PART END */}
        </Row>

        {/* 広報物への氏名掲載 */}
        <Row wrap={false}>
          <Col className="gray-box" flex="200px">
            <span className="bold">{'広報物への氏名掲載'}</span>
          </Col>
          {/* SELECTING VALUE */}
          <Col flex="280px">
            <span className="bold">{'許可'}</span>
          </Col>
          {/* LOOP PART START */}
          <Col flex="280px">
            <Radio checked>
              <span>{'1st'}</span>
            </Radio>
          </Col>
          <Col flex="280px">
            <Radio>
              <span>{'-'}</span>
            </Radio>
          </Col>
          <Col flex="280px">
            <Radio>
              <span>{'許可'}</span>
            </Radio>
          </Col>
          <Col flex="280px">
            <Radio>
              <span>{'許可'}</span>
            </Radio>
          </Col>
          <Col flex="280px">
            <Radio>
              <span>{'許可'}</span>
            </Radio>
          </Col>
          {/* LOOP PART END */}
        </Row>

        {/* 性別・Gender */}
        <Row wrap={false}>
          <Col className="gray-box" flex="200px">
            <span className="bold">{'性別'}</span>
          </Col>
          {/* SELECTING VALUE */}
          <Col flex="280px">
            <span className="bold">{'男性'}</span>
          </Col>
          {/* LOOP PART START */}
          <Col flex="280px">
            <Radio checked>
              <span>{'男性'}</span>
            </Radio>
          </Col>
          <Col flex="280px">
            <Radio>
              <span>{'-'}</span>
            </Radio>
          </Col>
          <Col flex="280px">
            <Radio>
              <span>{'-'}</span>
            </Radio>
          </Col>
          <Col flex="280px">
            <Radio>
              <span>{'-'}</span>
            </Radio>
          </Col>
          <Col flex="280px">
            <Radio>
              <span>{'-'}</span>
            </Radio>
          </Col>
          {/* LOOP PART END */}
        </Row>

        {/* 生年月日・Birthday */}
        <Row wrap={false}>
          <Col className="gray-box" flex="200px">
            <span className="bold">{'生年月日'}</span>
          </Col>
          {/* SELECTING VALUE */}
          <Col flex="280px">
            <span className="bold">{'1991-08-01'}</span>
          </Col>
          {/* LOOP PART START */}
          <Col flex="280px">
            <Radio checked>
              <span>{'-'}</span>
            </Radio>
          </Col>
          <Col flex="280px">
            <Radio>
              <span>{'1991-08-01'}</span>
            </Radio>
          </Col>
          <Col flex="280px">
            <Radio>
              <span>{'-'}</span>
            </Radio>
          </Col>
          <Col flex="280px">
            <Radio>
              <span>{'-'}</span>
            </Radio>
          </Col>
          <Col flex="280px">
            <Radio>
              <span>{'-'}</span>
            </Radio>
          </Col>
          {/* LOOP PART END */}
        </Row>

        {/* メールアドレス・Email Address */}
        <Row wrap={false}>
          <Col className="gray-box" flex="200px">
            <span className="bold">{'メールアドレス'}</span>
          </Col>
          {/* SELECTING VALUE */}
          <Col flex="280px">
            <span className="bold">{'tanaka@gmail.com'}</span>
          </Col>
          {/* LOOP PART START */}
          <Col flex="280px">
            <Radio checked>
              <span>{'tanaka@gmail.com'}</span>
            </Radio>
          </Col>
          <Col flex="280px">
            <Radio>
              <span>{'tanaka@gmail.com'}</span>
            </Radio>
          </Col>
          <Col flex="280px">
            <Radio>
              <span>{'tanaka@gmail.com'}</span>
            </Radio>
          </Col>
          <Col flex="280px">
            <Radio>
              <span>{'tanaka@gmail.com'}</span>
            </Radio>
          </Col>
          <Col flex="280px">
            <Radio>
              <span>{'tanaka@gmail.com'}</span>
            </Radio>
          </Col>
          {/* LOOP PART END */}
        </Row>

        {/* 電話番号・Phone Number */}
        <Row wrap={false}>
          <Col className="gray-box" flex="200px">
            <span className="bold">{'電話番号'}</span>
          </Col>
          {/* SELECTING VALUE */}
          <Col flex="280px">
            <span className="bold">{'08012345678'}</span>
          </Col>
          {/* LOOP PART START */}
          <Col flex="280px">
            <Radio checked>
              <span>{'08012345678'}</span>
            </Radio>
          </Col>
          <Col flex="280px">
            <Radio>
              <span>{'-'}</span>
            </Radio>
          </Col>
          <Col flex="280px">
            <Radio>
              <span>{'-'}</span>
            </Radio>
          </Col>
          <Col flex="280px">
            <Radio>
              <span>{'-'}</span>
            </Radio>
          </Col>
          <Col flex="280px">
            <Radio>
              <span>{'-'}</span>
            </Radio>
          </Col>
          {/* LOOP PART END */}
        </Row>

        {/* 住所・Address */}
        <Row wrap={false}>
          <Col type="flex" className="gray-box" flex="200px">
            <span className="bold">{'住所'}</span>
          </Col>
          {/* SELECTING VALUE */}
          <Col flex="280px">
            <div>
              <span>{'〒5500023'}</span>
              <br />
              <span>{'大阪府大阪市西区江戸堀'}</span>
              <br />
              <span>{'＊＊＊＊＊＊'}</span>
            </div>
          </Col>
          {/* LOOP PART START */}
          <Col flex="280px">
            <Radio checked>
              <span>{'〒5500023'}</span>
              <br />
              <span>{'大阪府大阪市西区江戸堀'}</span>
              <br />
              <span>{'＊＊＊＊＊＊'}</span>
            </Radio>
          </Col>
          <Col flex="280px">
            <Radio>
              <span>{'〒5500023'}</span>
              <br />
              <span>{'大阪府大阪'}</span>
              <br />
              <span>{'＊＊＊＊＊＊'}</span>
            </Radio>
          </Col>
          <Col flex="280px">
            <Radio>
              <span>{'-'}</span>
            </Radio>
          </Col>
          <Col flex="280px">
            <Radio>
              <span>{'-'}</span>
            </Radio>
          </Col>
          <Col flex="280px">
            <Radio>
              <span>{'-'}</span>
            </Radio>
          </Col>
          {/* LOOP PART END */}
        </Row>

        {/* 郵送物の送付 */}
        <Row wrap={false}>
          <Col className="gray-box" flex="200px">
            <span className="bold">{'郵送物の送付'}</span>
          </Col>
          {/* SELECTING VALUE */}
          <Col flex="280px">
            <span className="bold">{'許可（1部）'}</span>
          </Col>
          {/* LOOP PART START */}
          <Col flex="280px">
            <Radio checked>
              <span>{'許可（1部）'}</span>
            </Radio>
          </Col>
          <Col flex="280px">
            <Radio>
              <span>{'許可（1部）'}</span>
            </Radio>
          </Col>
          <Col flex="280px">
            <Radio>
              <span>{'許可（1部）'}</span>
            </Radio>
          </Col>
          <Col flex="280px">
            <Radio>
              <span>{'許可（1部）'}</span>
            </Radio>
          </Col>
          <Col flex="280px">
            <Radio>
              <span>{'許可（1部）'}</span>
            </Radio>
          </Col>
          {/* LOOP PART END */}
        </Row>

        {/* 属性・Attributes */}
        <Row wrap={false}>
          <Col className="gray-box" flex="200px">
            <span className="bold">{'属性'}</span>
          </Col>
          {/* SELECTING VALUE */}
          <Col flex="280px">
            <Tag>{'理事'}</Tag>
            <Tag>{'ボランティア'}</Tag>
          </Col>
          {/* LOOP PART START */}
          <Col flex="280px">
            <Tag>{'理事'}</Tag>
            <Tag>{'ボランティア'}</Tag>
          </Col>
          <Col flex="280px">
            <Tag>{'理事'}</Tag>
            <Tag>{'ボランティア'}</Tag>
          </Col>
          <Col flex="280px">
            <Tag>{'理事'}</Tag>
            <Tag>{'ボランティア'}</Tag>
          </Col>
          <Col flex="280px">
            <Tag>{'理事'}</Tag>
            <Tag>{'ボランティア'}</Tag>
          </Col>
          <Col flex="280px">
            <Tag>{'理事'}</Tag>
            <Tag>{'ボランティア'}</Tag>
          </Col>
          {/* LOOP PART END */}
        </Row>
      </NamingDetailStyle>
    </>
  );
};

const NamingDetail = () => {
  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'名寄せ先の選択'}</title>
          <meta name="description" content={'...'} />
        </Helmet>
      </>
    );
  };

  return (
    <>
      {renderPageTitle()}
      <PageLayout>
        {/* タイトル・Title */}
        <div className="item mb-6">
          <Row wrap={false}>
            <Col sm={24} md={12} lg={12}>
              <div className="sub-page-title">{'名寄せ先の選択'}</div>
            </Col>
          </Row>
        </div>

        {/* コンテンツ・Content */}
        <div className="item">
          <Card bodyStyle={{ padding: 0 }}>
            <Row className="py-4 px-6">
              <Col sm={24} md={20} lg={20}>
                <span style={{ fontSize: '16px', fontWeight: '600' }}>
                  {'メールアドレス「tanaka@gmail.com」と氏名「田中 太郎」が一致'}
                </span>
              </Col>
              <Col type="flex" align="right" sm={24} md={4} lg={4}>
                <Button type="primary">
                  <span>{'名寄せを実行'}</span>
                </Button>
              </Col>
            </Row>

            <Row wrap={false}>
              <Col sm={24} md={24} lg={24}>
                <DetailGrid />
              </Col>
            </Row>

            <Row className="py-4 px-6">
              <Col type="flex" align="right" sm={24} md={24} lg={24}>
                <Button type="primary">
                  <span>{'名寄せを実行'}</span>
                </Button>
              </Col>
            </Row>
          </Card>
        </div>
      </PageLayout>
    </>
  );
};

export default NamingDetail;
