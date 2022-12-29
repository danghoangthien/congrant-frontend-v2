import { DonationInfoStyle } from './DonationInfo.style';
import { Progress, Row, Col, Space, Button } from 'antd';
import Media from 'react-media';
import { useParams, useHistory } from 'react-router-dom';

const DonationInfo = () => {
  const params = useParams();
  const history = useHistory();

  let link;
  if (params.id === '1') {
    link = `/payment`;
  } else if (params.id === '2') {
    link = `/payment?type=monthly`;
  } else if (params.id === '3') {
    link = `/payment?type=crowdfunding`;
  }

  let donation_title;
  let donation_unit;
  let donation_target_type;
  // and conditionally update it as required like below -
  if (params?.id === '2') {
    donation_title = 'サポーター';
    donation_unit = '人';
    donation_target_type = '人数';
  } else if (params?.id === '3') {
    donation_title = '支援総額';
    donation_unit = '円';
    donation_target_type = '金額';
  }

  return (
    <DonationInfoStyle>
      <div className="donation-info-box">
        <div className="donation-info-title">{donation_title}</div>
        <div className="donation-info-amount" style={{ color: '#E34855' }}>
          <span className="num">250,000,000</span>
          <span className="unit ml-1">{donation_unit}</span>
        </div>
        <div className="progress-wrapper mb-3">
          <Progress
            className="progress-bar"
            percent={50}
            // success={{ percent: 30 }}
            status="active"
            showInfo={false}
            strokeColor="#E34855"
            success={{ percent: 25, strokeColor: '#33333A' }}
          />
          <span className="ant-progress-text">150%</span>
        </div>
        <div className="target-amount mb-4">
          目標{donation_target_type} 3,000,000{donation_unit}
        </div>

        {params?.id === '3' && (
          <Row className="mb-4">
            <Col span={24}>
              <Row justify="space-between" className="statistic">
                <Space align="center">
                  <span className="material-symbols-outlined icon">account_circle</span>
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
                  <span className="material-symbols-outlined icon">calendar_month</span>
                  <span className="title">残り</span>
                </Space>
                <div>
                  <span className="num">14</span>
                  <span className="unit">日</span>
                </div>
              </Row>
            </Col>
          </Row>
        )}

        {params?.id === '2' && (
          <Row className="mb-4">
            <Col span={24}>
              <Row justify="space-between" className="statistic">
                <Space align="center">
                  <span className="material-symbols-outlined icon">paid</span>
                  <span className="title">支援金額</span>
                </Space>
                <div>
                  <span className="num">350,000</span>
                  <span className="unit">円/月</span>
                </div>
              </Row>
            </Col>
          </Row>
        )}

        {params?.id === '3' && (
          <Row>
            <Col span={24}>
              <div className="expire-date">2022年12月15日 23:59:59まで</div>
            </Col>
          </Row>
        )}

        <Media
          query="(min-width: 992px)"
          render={() => (
            <Row className="mt-5">
              <Col span={24}>
                <Button
                  className="donate-btn"
                  onClick={() => {
                    history.push(link);
                  }}
                  size="large"
                  type="primary"
                  style={{ width: '100%', backgroundColor: '#E34855', borderColor: '#E34855' }}
                >
                  寄付をする
                </Button>
              </Col>
            </Row>
          )}
        />
      </div>
    </DonationInfoStyle>
  );
};

export default DonationInfo;
