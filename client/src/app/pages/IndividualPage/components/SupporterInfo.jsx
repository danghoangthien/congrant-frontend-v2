import { Button, Row, Col, Space } from 'antd';
import DynamicTags from 'app/components/DynamicTags';
import { SupporterInfoStyle } from './SupporterInfo.style';
import userImage from 'styles/assets/icon_supporter.svg';
import { TEXT_GRAY_COLOR } from 'styles/StyleConstants';

const SupporterInfo = ({ closeDrawer }) => {
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
                  <div className="supporter-detail-number">{'123456'}</div>
                  <div className="supporter-detail-name">{'田中 太郎'}</div>
                </div>
              </div>
            </Col>
            <Col>
              <Space size={16}>
                <Button
                  className="icon-btn less-shadow-btn"
                  icon={<span className="material-symbols-outlined fill-icon">mail</span>}
                >
                  {'メールを送る'}
                </Button>
                <Button
                  type="text"
                  onClick={() => closeDrawer()}
                  style={{ boxShadow: 'none' }}
                  icon={
                    <span
                      className="material-symbols-outlined"
                      style={{ color: TEXT_GRAY_COLOR, fontSize: '30px' }}
                    >
                      close
                    </span>
                  }
                ></Button>
              </Space>
            </Col>
          </Row>

          {/* 属性・Supporter Attributes */}
          <Row className="mb-3">
            <DynamicTags
              tagList={['理事', 'ボランティア']}
              availableTagList={[
                '理事',
                'ボランティア',
                'テスト属性',
                'テスト属性2',
                'テスト属性3',
                'テスト属性4',
                'テスト属性5',
                'テスト属性6',
                'テスト属性7',
              ]}
              addMoreLabel={'属性を追加する'}
            />
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
                <span className="supporter-detail-donation-ttl">累計寄付</span>
                <span>36,000円</span>
                <span>{' / '}</span>
                <span>12件</span>
              </div>
            </Col>
          </Row>
        </div>
      </SupporterInfoStyle>
    </>
  );
};

export default SupporterInfo;
