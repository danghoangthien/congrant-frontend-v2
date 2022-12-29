import { Link } from 'react-router-dom';
// STYLE
import { OrganizationInfoStyle } from './OrganizationInfo.style';
// ANTD
import { Card, Image, Descriptions, Row, Col, Space } from 'antd';
// IMAGE
import IconFacebook from 'styles/assets/facebook.svg';
import IconInsta from 'styles/assets/insta.svg';
import IconTwitter from 'styles/assets/twitter.svg';
import Media from 'react-media';

const OrganizationInfo = ({ logo }) => {
  console.log(logo);

  return (
    <OrganizationInfoStyle>
      <Card
        bodyStyle={{ padding: '28px 18px' }}
        style={{ width: '100%' }}
        className="organization-info-box"
      >
        <Media
          query="(max-width: 991px)"
          render={() => (
            <div className="mb-6" style={{ fontSize: '19px', fontWeight: '700' }}>
              団体情報
            </div>
          )}
        />
        {/* 団体ロゴ・LOGO */}
        <div className="organization-logo">
          <Image preview={false} src={logo} />
        </div>
        {/* 団体情報・Organization Info */}
        <div className="organization-info-wrapper">
          <div className="organization-name">特定非営利活動法人 日本こども支援協会</div>
          <Row className="mb-2">
            <Col span={24}>
              <Descriptions>
                <Descriptions.Item
                  label={<span className="material-symbols-outlined fill-icon icon">mail</span>}
                >
                  info@congrant.com
                </Descriptions.Item>
                <Descriptions.Item
                  label={<span className="material-symbols-outlined fill-icon icon">phone</span>}
                >
                  00 0000 0000
                </Descriptions.Item>
                <Descriptions.Item
                  label={<span className="material-symbols-outlined icon">link</span>}
                >
                  <a
                    className="organization-link"
                    href={`https://npojcsa.com/`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://npojcsa.com/
                  </a>
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
        </div>
      </Card>
    </OrganizationInfoStyle>
  );
};

export default OrganizationInfo;
