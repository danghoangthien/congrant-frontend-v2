import { Descriptions, Row, Col, Button, Space, Dropdown, Menu, Badge } from 'antd';
import { BoldLabel, CopiableText, Navigation } from 'utils/Sprites';
import { EDIT_MODE, LIST_MODE } from 'utils/consts';
import { DescriptionStyle } from './BasicInfo.style';
import { PRIMARY_COLOR } from 'styles/StyleConstants';
import { StyledBadgeDot } from 'styles/global-styles';
import { RECEIPT_STATUS_COLOR, RECEIPT_STATUSES } from 'utils/consts';
import { randomOutput } from 'utils/helper';

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

const receipt_status = randomOutput([0, 1, 2]);

const Title = ({ mode, setMode }) => {
  return (
    <Row>
      <Col sm={24} md={12} lg={12}>
        <div className="sub-page-title -sml">{'領収書詳細'}</div>
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
  );
};

const DescriptionContainer = ({ children, mode, setMode }) => (
  <DescriptionStyle className="no-border">
    <Descriptions
      title={<Title mode={mode} setMode={setMode} />}
      bordered
      column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
    >
      {children}
    </Descriptions>
  </DescriptionStyle>
);

const ReceiptDetail = ({ data, mode, setMode }) => {
  return (
    <>
      <Navigation
        setMode={setMode}
        id={'2022-123456'}
        label="領収書"
        identityLabel="領収書No."
        listMode={LIST_MODE}
      />

      <DescriptionContainer mode={mode} setMode={setMode}>
        <Descriptions.Item label={<BoldLabel label="領収書No." />}>
          <CopiableText>{'2022-123456'}</CopiableText>
        </Descriptions.Item>
        <Descriptions.Item label={<BoldLabel label="寄付No." />}>
          <span style={{ color: PRIMARY_COLOR, fontWeight: '600' }}>
            431051・431052・431053・431054
          </span>
        </Descriptions.Item>
        <Descriptions.Item label={<BoldLabel label="発行ステータス" />}>
          <StyledBadgeDot>
            <Badge
              color={RECEIPT_STATUS_COLOR[receipt_status][0]}
              text={RECEIPT_STATUSES[receipt_status]}
            />
          </StyledBadgeDot>
        </Descriptions.Item>
        <Descriptions.Item label={<BoldLabel label="発行日時" />}>-</Descriptions.Item>
        <Descriptions.Item label={<BoldLabel label="受領日" />}>
          {'2022-01-15〜2022-04-15'}
        </Descriptions.Item>
        <Descriptions.Item label={<BoldLabel label="宛名" />}>田中 太郎</Descriptions.Item>
        <Descriptions.Item label={<BoldLabel label="住所" />}>
          <CopiableText>
            <div>
              〒0000000
              <br />
              ＊＊＊県＊＊＊市＊＊＊＊＊＊＊＊＊＊
              <br />
              ＊＊＊＊＊＊＊＊ビル6F
              <br />
              ＊＊＊＊株式会社
            </div>
          </CopiableText>
        </Descriptions.Item>
        <Descriptions.Item label={<BoldLabel label="テンプレート" />}>
          <CopiableText>標準領収書</CopiableText>
        </Descriptions.Item>
        <Descriptions.Item label={<BoldLabel label="メモ" />}>-</Descriptions.Item>
      </DescriptionContainer>
    </>
  );
};

export default ReceiptDetail;
