import { DonationInfoStyle } from './DonationInfo.style';
import { Progress, Row, Col, Space, Button } from 'antd';

const DonationInfo = () => {
  return (
    <DonationInfoStyle>
      <div className="donation-info-box">
        <div className="donation-info-title">支援総額</div>
        <div className="donation-info-amount" style={{ color: '#E34855' }}>
          <span className="num">250,000,000</span>
          <span className="unit ml-1">円</span>
        </div>
        <div className="progress-wrapper mb-3">
          <Progress
            className="progress-bar"
            percent={120}
            status="active"
            showInfo={false}
            strokeColor="#E34855"
            // success={{ percent: 120, strokeColor: '#E34855' }}
          />
          <span className="ant-progress-text">120%</span>
        </div>
        <div className="target-amount mb-4">目標金額 3,000,000円</div>
        <Row className="mb-4">
          <Col span={24}>
            <Row justify="space-between" className="statistic">
              <Space align="center">
                <span class="material-symbols-outlined icon">account_circle</span>
                <span className="title">サポーター</span>
              </Space>
              <div>
                <span className="num">305</span>
                <span className="unit">人</span>
              </div>
            </Row>
          </Col>
          <Col span={24}>
            <Row justify="space-between" className="statistic">
              <Space align="center">
                <span class="material-symbols-outlined icon">calendar_month</span>
                <span className="title">残り</span>
              </Space>
              <div>
                <span className="num">14</span>
                <span className="unit">日</span>
              </div>
            </Row>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col span={24}>
            <div className="expire-date">2022年12月15日 23:59:59まで</div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Button
              className="donate-btn"
              size="large"
              type="primary"
              style={{ width: '100%', backgroundColor: '#E34855', borderColor: '#E34855' }}
            >
              寄付をする
            </Button>
          </Col>
        </Row>
      </div>
    </DonationInfoStyle>
  );
};

export default DonationInfo;
