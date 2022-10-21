import { Button, Row, Col, Tag } from 'antd';
import { SupporterInfoStyle } from './SupporterInfo.style';
import userImage from 'styles/assets/icon_supporter.svg';
import EmailIcon from '@mui/icons-material/Email';
import CloseIcon from '@mui/icons-material/Close';

const SupporterInfo = () => {
  return (
    <>
      <SupporterInfoStyle>
        <div className="supporter-detail-wrapper">
          <Row justify="space-between" align="middle" className="mb-3">
            <Col>
              <div className="supporter-detail-box">
                <div className="supporter-detail-image mr-4">
                  <img src={userImage} alt="サポーター写真" />
                </div>
                <div className="supporter-detail-info">
                  <div className="supporter-detail-number">123456</div>
                  <div className="supporter-detail-name">田中 太郎</div>
                </div>
              </div>
            </Col>
            <Col>
              <Row align="middle">
                <Button className="mr-5 icon-btn" icon={<EmailIcon className="mr-2" />}>
                  {'メールを送る'}
                </Button>
                <CloseIcon />
              </Row>
            </Col>
          </Row>
          <Row className="mb-3">
            <Tag>理事</Tag>
            <Tag>ボランティア</Tag>
          </Row>
          <Row>
            <Col span={12}>
              <div className="supporter-detail-donation">
                <span className="supporter-detail-donation-ttl">直近の寄付</span>
                <span className="supporter-detail-donation-txt">2022-12-15</span>
                <span className="supporter-detail-donation-txt">（3,000円）</span>
              </div>
            </Col>
            <Col span={12}>
              <div className="supporter-detail-donation">
                <span className="supporter-detail-donation-ttl">直近の寄付</span>
                <span className="supporter-detail-donation-txt">2022-12-15</span>
                <span className="supporter-detail-donation-txt">（3,000円）</span>
              </div>
            </Col>
          </Row>
        </div>
      </SupporterInfoStyle>
    </>
  );
};

export default SupporterInfo;