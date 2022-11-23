import { Button, Row, Col, Tag } from 'antd';
import DynamicTags from 'app/components/DynamicTags';
import { SupporterInfoStyle } from './SupporterInfo.style';
import userImage from 'styles/assets/icon_supporter.svg';
import EmailIcon from '@mui/icons-material/Email';
import CloseIcon from '@mui/icons-material/Close';

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
                  <div className="supporter-detail-number">123456</div>
                  <div className="supporter-detail-name">田中 太郎</div>
                </div>
              </div>
            </Col>
            <Col>
              <Row align="middle">
                <Button
                  className="icon-btn less-shadow-btn"
                  icon={<span class="material-symbols-outlined fill-icon">mail</span>}
                >
                  {'メールを送る'}
                </Button>
                <Button type="text" style={{ boxShadow: 'none' }}>
                  <CloseIcon className="pointer" onClick={() => closeDrawer()} />
                </Button>
              </Row>
            </Col>
          </Row>
          <Row className="mb-3">
            <DynamicTags
              tagList={['理事', 'ボランティア']}
              availableTagList={['理事', 'ボランティア', 'more', 'and more']}
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
