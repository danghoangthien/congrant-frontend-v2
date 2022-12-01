import { Helmet } from 'react-helmet-async';
import { PageLayout } from 'app/components/Layout/PageLayout.style';
import { Card, Row, Col, Button, Tag, Radio } from 'antd';

const DetailGrid = () => {
  return (
    <>
      <Row className="mb-3">
        <Col sm={4} md={4} lg={4}>
          <span className="bold">{''}</span>
        </Col>
        <Col sm={5} md={5} lg={5}>
          <span className="bold">{'名寄せ後のデータ'}</span>
        </Col>
        {/* LOOP PART START */}
        <Col sm={5} md={5} lg={5}>
          <span className="bold">{'候補1'}</span>
        </Col>
        <Col sm={5} md={5} lg={5}>
          <span className="bold">{'候補2'}</span>
        </Col>
        <Col sm={4} md={4} lg={4}>
          <span className="bold">{'候補3'}</span>
        </Col>
        {/* LOOP PART END */}
      </Row>
      {/* 個人ID */}
      <Row className="mb-3">
        <Col sm={4} md={4} lg={4}>
          <span className="bold">{'個人ID'}</span>
        </Col>
        <Col sm={5} md={5} lg={5}>
          <span className="bold">{'123974'}</span>
        </Col>
        <Col sm={5} md={5} lg={5}>
          <Radio checked>
            <span>{'123974'}</span>
          </Radio>
          <Button type="link">{'すべて選択'}</Button>
        </Col>
        <Col sm={5} md={5} lg={5}>
          <Radio>
            <span>{'183910'}</span>
          </Radio>
          <Button type="link">{'すべて選択'}</Button>
        </Col>
        <Col sm={5} md={5} lg={5}>
          <Radio>
            <span>{'123974'}</span>
          </Radio>
          <Button type="link">{''}</Button>
        </Col>
      </Row>
      {/* 氏名 */}
      <Row className="mb-3">
        <Col sm={4} md={4} lg={4}>
          <span className="bold">{'氏名'}</span>
        </Col>
        <Col sm={5} md={5} lg={5}>
          <span className="bold">{'田中 太郎'}</span>
        </Col>
        <Col sm={5} md={5} lg={5}>
          <span>{'田中 太郎'}</span>
        </Col>
        <Col sm={5} md={5} lg={5}>
          <span>{'田中 太郎'}</span>
        </Col>
        <Col sm={5} md={5} lg={5}>
          <span>{'田中 太郎'}</span>
        </Col>
      </Row>
      {/* ふりがな */}
      <Row className="mb-3">
        <Col sm={4} md={4} lg={4}>
          <span className="bold">{'氏名'}</span>
        </Col>
        <Col sm={5} md={5} lg={5}>
          <span className="bold">{'たなか たろう 太郎'}</span>
        </Col>
        <Col sm={5} md={5} lg={5}>
          <span>{'たなか たろう'}</span>
        </Col>
        <Col sm={5} md={5} lg={5}>
          <span>{'たなか たろう'}</span>
        </Col>
        <Col sm={5} md={5} lg={5}>
          <span>{'たなか たろう'}</span>
        </Col>
      </Row>
      {/* 広報物への氏名掲載 */}
      <Row className="mb-3">
        <Col sm={4} md={4} lg={4}>
          <span className="bold">{'許可'}</span>
        </Col>
        <Col sm={5} md={5} lg={5}>
          <span className="bold">{'たなか たろう'}</span>
        </Col>
        <Col sm={5} md={5} lg={5}>
          <Radio checked>
            <span>{'1'}</span>
          </Radio>
        </Col>
        <Col sm={5} md={5} lg={5}>
          <Radio>
            <span>{'-'}</span>
          </Radio>
        </Col>
        <Col sm={5} md={5} lg={5}>
          <Radio>
            <span>{'許可'}</span>
          </Radio>
        </Col>
      </Row>
      {/* 性別 */}
      <Row className="mb-3">
        <Col sm={4} md={4} lg={4}>
          <span className="bold">{'性別'}</span>
        </Col>
        <Col sm={5} md={5} lg={5}>
          <span className="bold">{'男性'}</span>
        </Col>
        <Col sm={5} md={5} lg={5}>
          <Radio checked>
            <span>{'1'}</span>
          </Radio>
        </Col>
        <Col sm={5} md={5} lg={5}>
          <Radio>
            <span>{'-'}</span>
          </Radio>
        </Col>
        <Col sm={5} md={5} lg={5}>
          <Radio>
            <span>{'-'}</span>
          </Radio>
        </Col>
      </Row>
      {/* 生年月日 */}
      <Row className="mb-3">
        <Col sm={4} md={4} lg={4}>
          <span className="bold">{'生年月日'}</span>
        </Col>
        <Col sm={5} md={5} lg={5}>
          <span className="bold">{'1991-08-01'}</span>
        </Col>
        <Col sm={5} md={5} lg={5}>
          <Radio checked>
            <span>{'-'}</span>
          </Radio>
        </Col>
        <Col sm={5} md={5} lg={5}>
          <Radio>
            <span>{'1991-08-01'}</span>
          </Radio>
        </Col>
        <Col sm={5} md={5} lg={5}>
          <Radio>
            <span>{'-'}</span>
          </Radio>
        </Col>
      </Row>
      {/* メールアドレス */}
      <Row className="mb-3">
        <Col sm={4} md={4} lg={4}>
          <span className="bold">{'メールアドレス'}</span>
        </Col>
        <Col sm={5} md={5} lg={5}>
          <span className="bold">{'tanaka@gmail.com'}</span>
        </Col>
        <Col sm={5} md={5} lg={5}>
          <Radio checked>
            <span>{'tanaka@gmail.com'}</span>
          </Radio>
        </Col>
        <Col sm={5} md={5} lg={5}>
          <Radio>
            <span>{'tanaka@gmail.com'}</span>
          </Radio>
        </Col>
        <Col sm={5} md={5} lg={5}>
          <Radio>
            <span>{'tanaka@gmail.com'}</span>
          </Radio>
        </Col>
      </Row>
      {/* 電話番号 */}
      <Row className="mb-3">
        <Col sm={4} md={4} lg={4}>
          <span className="bold">{'電話番号'}</span>
        </Col>
        <Col sm={5} md={5} lg={5}>
          <span className="bold">{'08012345678'}</span>
        </Col>
        <Col sm={5} md={5} lg={5}>
          <Radio checked>
            <span>{'08012345678'}</span>
          </Radio>
        </Col>
        <Col sm={5} md={5} lg={5}>
          <Radio>
            <span>{'-'}</span>
          </Radio>
        </Col>
        <Col sm={5} md={5} lg={5}>
          <Radio>
            <span>{'-'}</span>
          </Radio>
        </Col>
      </Row>
      {/* 住所 */}
      <Row className="mb-3">
        <Col type="flex" sm={4} md={4} lg={4}>
          <span className="bold">{'住所'}</span>
        </Col>
        <Col sm={5} md={5} lg={5}>
          <p className="bold">
            <span>{'〒5500023'}</span>
            <br />
            <span>{'大阪府大阪市西区江戸堀'}</span>
            <br />
            <span>{'＊＊＊＊＊＊'}</span>
          </p>
        </Col>
        <Col sm={5} md={5} lg={5}>
          <Radio checked>
            <p>
              <span>{'〒5500023'}</span>
              <br />
              <span>{'大阪府大阪市西区江戸堀'}</span>
              <br />
              <span>{'＊＊＊＊＊＊'}</span>
            </p>
          </Radio>
        </Col>
        <Col sm={5} md={5} lg={5}>
          <Radio>
            <p>
              <span>{'〒5500023'}</span>
              <br />
              <span>{'大阪府大阪'}</span>
              <br />
              <span>{'＊＊＊＊＊＊'}</span>
            </p>
          </Radio>
        </Col>
        <Col sm={5} md={5} lg={5}>
          <Radio>
            <span>{'-'}</span>
          </Radio>
        </Col>
      </Row>
      {/* 郵送物の送付 */}
      <Row className="mb-3">
        <Col sm={4} md={4} lg={4}>
          <span className="bold">{'郵送物の送付'}</span>
        </Col>
        <Col sm={5} md={5} lg={5}>
          <span className="bold">{'許可（1部）'}</span>
        </Col>
        <Col sm={5} md={5} lg={5}>
          <Radio checked>
            <span>{'許可（1部）'}</span>
          </Radio>
        </Col>
        <Col sm={5} md={5} lg={5}>
          <Radio>
            <span>{'許可（1部）'}</span>
          </Radio>
        </Col>
        <Col sm={5} md={5} lg={5}>
          <Radio>
            <span>{'許可（1部）'}</span>
          </Radio>
        </Col>
      </Row>
      {/* 属性 */}
      <Row className="mb-3">
        <Col sm={4} md={4} lg={4}>
          <span className="bold">{'属性'}</span>
        </Col>
        <Col sm={5} md={5} lg={5}>
          <Tag>{'理事'}</Tag>
          <Tag>{'ボランティア'}</Tag>
        </Col>
        <Col sm={5} md={5} lg={5}>
          <Tag>{'理事'}</Tag>
          <Tag>{'ボランティア'}</Tag>
        </Col>
        <Col sm={5} md={5} lg={5}>
          <Tag>{'理事'}</Tag>
          <Tag>{'ボランティア'}</Tag>
        </Col>
        <Col sm={5} md={5} lg={5}>
          <Tag>{'理事'}</Tag>
          <Tag>{'ボランティア'}</Tag>
        </Col>
      </Row>
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
          <Row>
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

            <Row className="mb-3">
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
