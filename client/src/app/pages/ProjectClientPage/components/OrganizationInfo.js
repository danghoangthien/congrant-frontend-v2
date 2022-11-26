import { Link } from 'react-router-dom';
// STYLE
import { OrganizationInfoStyle } from './OrganizationInfo.style';
// ANTD
import { Card, Image, Descriptions, Row, Col, Space } from 'antd';
// IMAGE
import IconFacebook from 'styles/assets/facebook.svg';
import IconInsta from 'styles/assets/insta.svg';
import IconTwitter from 'styles/assets/twitter.svg';

const OrganizationInfo = () => {
  return (
    <OrganizationInfoStyle>
      <Card
        bodyStyle={{ padding: '18px' }}
        style={{ width: 300 }}
        className="organization-info-box"
      >
        <div className="organization-logo">
          <Image preview={false} src="https://npojcsa.com/data/media/npojcsa/common/logo.png" />
        </div>
        <div className="organization-name">特定非営利活動法人 日本こども支援協会</div>
        <Row className="mb-4">
          <Col span={24}>
            <Descriptions>
              <Descriptions.Item
                label={<span class="material-symbols-outlined fill-icon icon">mail</span>}
              >
                info@congrant.com
              </Descriptions.Item>
              <Descriptions.Item
                label={<span class="material-symbols-outlined fill-icon icon">phone</span>}
              >
                00 0000 0000
              </Descriptions.Item>
              <Descriptions.Item label={<span class="material-symbols-outlined icon">link</span>}>
                https://npojcsa.com/
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Space size={20}>
              <Link to={`/`} target="_blank" className="sns-link">
                <Image width={20} preview={false} src={IconTwitter} />
              </Link>
              <Link to={`/`} target="_blank" className="sns-link">
                <Image width={20} preview={false} src={IconFacebook} />
              </Link>
              <Link to={`/`} target="_blank" className="sns-link">
                <Image width={20} preview={false} src={IconInsta} />
              </Link>
            </Space>
          </Col>
        </Row>
      </Card>
    </OrganizationInfoStyle>
  );
};

export default OrganizationInfo;
