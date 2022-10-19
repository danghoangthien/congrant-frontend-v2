import { SupporterPageLayout } from './components/SupporterPage.style';
import { DescriptionStyle } from './components/BasicInfo.style';
import { BoldLabel, CopiableText } from './components/Sprites';
import { Card, Row, Col, Checkbox, Button, Table, Tag, Descriptions, Radio } from 'antd';

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
        <Col sm={5} md={5} lg={5}>
          <span className="bold">{'候補1'}</span>
        </Col>
        <Col sm={5} md={5} lg={5}>
          <span className="bold">{'候補2'}</span>
        </Col>
        <Col sm={4} md={4} lg={4}>
          <span className="bold">{'候補3'}</span>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col sm={4} md={4} lg={4}>
          <Row type="flex" style={{ alignItems: 'center' }}>
            <span className="bold">{'個人ID'}</span>
          </Row>
        </Col>
        <Col sm={5} md={5} lg={5}>
          <Row type="flex" style={{ alignItems: 'center' }}>
            <span className="bold">{'123974'}</span>
          </Row>
        </Col>
        <Col sm={5} md={5} lg={5}>
          <Row type="flex" style={{ alignItems: 'center' }}>
            <Col type="flex" sm={12} md={12} lg={12}>
              <Radio checked>
                <span className="bold">{'123974'}</span>
              </Radio>
            </Col>
            <Col type="flex" align="right" sm={12} md={12} lg={12}>
              <Button type="link">{'すべて選択'}</Button>
            </Col>
          </Row>
        </Col>
        <Col sm={5} md={5} lg={5}>
          <Row type="flex" style={{ alignItems: 'center' }}>
            <Col type="flex" sm={12} md={12} lg={12}>
              <Radio>
                <span className="bold">{'183910'}</span>
              </Radio>
            </Col>
            <Col type="flex" align="right" sm={12} md={12} lg={12}>
              <Button type="link">{'すべて選択'}</Button>
            </Col>
          </Row>
        </Col>
        <Col sm={4} md={4} lg={4}>
          <Row style={{ alignItems: 'center' }}>
            <span className="bold">{'header'}</span>
          </Row>
        </Col>
        <Col sm={1} md={1} lg={1}>
          <Row style={{ alignItems: 'center' }}>
            <span className="bold">{''}</span>
          </Row>
        </Col>
      </Row>
    </>
  );
};

const NamingDetail = () => {
  return (
    <>
      <SupporterPageLayout>
        <div className="item">
          <Card className="ma-5">
            <Row className="mb-3">
              <Col sm={24} md={20} lg={20}>
                <span className="bold">
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
            <Row className="mb-3">
              <Col type="flex" align="right" sm={24} md={24} lg={24}>
                <Button type="primary">
                  <span>{'名寄せを実行'}</span>
                </Button>
              </Col>
            </Row>
          </Card>
        </div>
      </SupporterPageLayout>
    </>
  );
};

export default NamingDetail;
