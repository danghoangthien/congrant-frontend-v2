import { Descriptions, Row, Col, Button, Dropdown, Badge, Menu } from 'antd';
import { BoldLabel, CopiableText } from './Sprites';
import BreadNavigation from './Sprites/BreadNavigation';
// import { LIST_MODE, EDIT_MODE } from '../consts';
import { DescriptionStyle } from './BasicInfo.style';
import { StyledDonationTypeTag } from 'styles/Tag.style';
import { StyledBadgeDot } from 'styles/global-styles';
import { DONATION_STATUS_COLOR, DONATION_STATUSES } from 'utils/consts';

// 操作メニュー・Action Menu
const action_menu = (
  <Menu
    items={[
      {
        key: '1',
        label: 'アクション1',
      },
      {
        key: '2',
        label: 'アクション2',
      },
    ]}
  />
);

const Title = ({ mode, setMode }) => {
  return (
    <Row>
      <Col sm={24} md={12} lg={12}>
        <h3 className="supporter-detail-ttl">{'継続契約詳細'}</h3>
      </Col>
      <Col type="flex" align="right" sm={24} md={12} lg={12}>
        <Dropdown overlay={action_menu} placement="bottomRight">
          <Button
            className="more-menu-btn"
            icon={<span className="material-symbols-outlined">more_horiz</span>}
          />
        </Dropdown>
      </Col>
    </Row>
  );
};

const DescriptionContainer = ({ children, mode, setMode }) => (
  <DescriptionStyle>
    <Descriptions
      title={<Title mode={mode} setMode={setMode} />}
      bordered
      column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
    >
      {children}
    </Descriptions>
  </DescriptionStyle>
);

const ContinuousContractDetail = ({ data, mode, setMode }) => {
  console.log('ContinuousContractDetail render', true);
  return (
    <>
      <BreadNavigation
        setMode={setMode}
        id={'1203171'}
        label="継続契約"
        identityLabel="継続契約No"
      />
      <DescriptionContainer mode={mode} setMode={setMode}>
        <Descriptions.Item label={<BoldLabel label="継続契約No" />}>
          <CopiableText>{'1203171'}</CopiableText>
        </Descriptions.Item>
        <Descriptions.Item label={<BoldLabel label="ステータス" />}>
          <CopiableText>
            <StyledBadgeDot>
              <Badge color={DONATION_STATUS_COLOR['1'][0]} text={DONATION_STATUSES['1']} />
            </StyledBadgeDot>
          </CopiableText>
        </Descriptions.Item>
        <Descriptions.Item label={<BoldLabel label="寄付タイプ" />}>
          <StyledDonationTypeTag className="once">{'単発'}</StyledDonationTypeTag>
        </Descriptions.Item>
        <Descriptions.Item label={<BoldLabel label="寄付プラン" />}>
          ゴールドサポーター
        </Descriptions.Item>
        <Descriptions.Item label={<BoldLabel label="単価・口数" />}>5,000円・1口</Descriptions.Item>
        <Descriptions.Item label={<BoldLabel label="金額" />}>5,000円</Descriptions.Item>
        <Descriptions.Item label={<BoldLabel label="累計寄付金額・回数" />}>
          <CopiableText>20,000円・4回</CopiableText>
        </Descriptions.Item>
        <Descriptions.Item label={<BoldLabel label="初回決済日" />}>
          <CopiableText>2022-05-01</CopiableText>
        </Descriptions.Item>
        <Descriptions.Item label={<BoldLabel label="最終決済日" />}>2022-08-15</Descriptions.Item>
        <Descriptions.Item label={<BoldLabel label="解約日" />}>-</Descriptions.Item>
      </DescriptionContainer>
    </>
  );
};
export default ContinuousContractDetail;
