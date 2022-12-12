import { Descriptions, Row, Col, Button, Dropdown, Space, Menu } from 'antd';
import NewReceipt from 'app/pages/ReceiptPage/components/NewReceipt';
import { BoldLabel, CopiableText, Navigation } from 'utils/Sprites';
import { EDIT_MODE, LIST_MODE } from '../consts';
import { DescriptionStyle } from './BasicInfo.style';
import { StyledDonationTypeTag } from 'styles/Tag.style';
import { LIGHT_GRAY } from 'styles/StyleConstants';

import styled from 'styled-components/macro';

const CommentContainer = styled.div`
  padding: 12px;
  border-top: 1px solid ${LIGHT_GRAY};
  border-bottom: 1px solid ${LIGHT_GRAY};
`;

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
    <>
      {/* ヘッド */}
      <Row className="mb-6">
        <Col sm={24} md={12} lg={12}>
          <div className="sub-page-title -sml">{'寄付詳細'}</div>
        </Col>
        <Col type="flex" align="right" sm={24} md={12} lg={12}>
          <Space size={8}>
            <Button
              className="icon-btn"
              icon={<span className="material-symbols-outlined fill-icon">edit</span>}
              type="primary"
              onClick={() => setMode(EDIT_MODE)}
            >
              {'編集'}
            </Button>
            <Dropdown overlay={action_menu} placement="bottomRight">
              <Button
                className="more-menu-btn"
                icon={<span className="material-symbols-outlined">more_horiz</span>}
              />
            </Dropdown>
          </Space>
        </Col>
      </Row>
      <Row className="mb-4">
        <div className="page-sub-title">{'基本項目'}</div>
      </Row>
    </>
  );
};

const ExtraFieldTitle = () => {
  return (
    <Row className="mb-4">
      <div className="page-sub-title">{'カスタム項目'}</div>
    </Row>
  );
};

const ReceiptTitle = () => {
  return (
    <Row className="mb-4">
      <div className="page-sub-title">{'領収書'}</div>
    </Row>
  );
};

const CommentTitle = () => {
  return (
    <Row className="mb-4">
      <div className="page-sub-title">{'応援コメント'}</div>
    </Row>
  );
};

const DescriptionContainer = ({ children }) => (
  <DescriptionStyle>
    <Descriptions bordered column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}>
      {children}
    </Descriptions>
  </DescriptionStyle>
);

const DonationDetail = ({ data, mode, setMode }) => {
  console.log('DonationDetail render', true);
  return (
    <>
      <Navigation
        setMode={setMode}
        listMode={LIST_MODE}
        id={'431051'}
        label="寄付決済"
        identityLabel="寄付No."
      />
      <Title mode={mode} setMode={setMode} />
      <Row className="mb-8">
        <Col span={24}>
          <DescriptionContainer>
            <Descriptions.Item label={<BoldLabel label="寄付ID" />}>
              <CopiableText>{'431051'}</CopiableText>
            </Descriptions.Item>
            <Descriptions.Item label={<BoldLabel label="受領日" />}>
              <CopiableText>{'2022-07-30'}</CopiableText>
            </Descriptions.Item>
            <Descriptions.Item label={<BoldLabel label="入金日" />}>
              <CopiableText>{'2022-02-20'}</CopiableText>
            </Descriptions.Item>
            <Descriptions.Item label={<BoldLabel label="寄付タイプ" />}>
              <StyledDonationTypeTag className="once">{'単発'}</StyledDonationTypeTag>
            </Descriptions.Item>
            <Descriptions.Item label={<BoldLabel label="プロジェクト" />}>
              {'NPO法人コングラントへのご支援をお願いします！'}
            </Descriptions.Item>

            <Descriptions.Item label={<BoldLabel label="プラン" />}>{'-'}</Descriptions.Item>

            <Descriptions.Item label={<BoldLabel label="単価・口数" />}>
              {'3,000円・1口'}
            </Descriptions.Item>
            <Descriptions.Item label={<BoldLabel label="金額" />}>{'3,000円'}</Descriptions.Item>
            <Descriptions.Item label={<BoldLabel label="受領方法" />}>
              {'カード決済'}
            </Descriptions.Item>
            <Descriptions.Item label={<BoldLabel label="登録経路" />}>
              {'コングラント経由（2022-01-01））'}
            </Descriptions.Item>
            <Descriptions.Item label={<BoldLabel label="備考欄" />}>
              <div>
                領収書は会社宛に送ってください。
                <br />
                〒0000000
                <br />
                ＊＊＊県＊＊＊市＊＊＊＊＊＊＊＊＊＊
                <br />
                ＊＊＊＊＊＊＊＊ビル6F
                <br />
                ＊＊＊＊株式会社
              </div>
            </Descriptions.Item>
          </DescriptionContainer>
        </Col>
      </Row>

      {/* カスタム項目 */}
      <Row className="mb-8">
        <Col span={24}>
          <ExtraFieldTitle />
        </Col>
        <Col span={24}>
          <DescriptionContainer>
            <Descriptions.Item label={<BoldLabel label="認知経路" />}>{'SNS'}</Descriptions.Item>
            <Descriptions.Item label={<BoldLabel label="寄付の使用用途" />}>
              {'2022-団体に任せる-30'}
            </Descriptions.Item>
            <Descriptions.Item label={<BoldLabel label="支援経験" />}>{'なし'}</Descriptions.Item>
            <Descriptions.Item label={<BoldLabel label="寄付理由" />}>{'-'}</Descriptions.Item>
          </DescriptionContainer>
        </Col>
      </Row>

      {/* 応援コメント */}
      <Row className="mb-8">
        <Col span={24}>
          <CommentTitle />
        </Col>
        <Col span={24}>
          <CommentContainer>
            <div>
              Twitterでこの活動を知りました。微量ながら応援させていただきます。これからも活動頑張ってください！
            </div>
          </CommentContainer>
        </Col>
      </Row>

      <Row>
        <ReceiptTitle />
        <Col span={24}>
          <NewReceipt />
        </Col>
      </Row>
    </>
  );
};

export default DonationDetail;
