import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import { Row, Col, Button, Space, Table, Radio, DatePicker, Dropdown, Menu } from 'antd';
import { SettingsInputContainer, SettingInput, SettingInfoLabel } from 'utils/Sprites';
import { StyledForm } from '../BasicSettingsPage.style';
import ReceiptTemplate from './ReceiptTemplate';
import ImageUpload from 'app/components/ImageUpload';
// UTILS
import { randomOutput } from 'utils/helper';

export const StyledRadioContainer = styled(Space)`
  background: ${props => (props.checked ? '#FFFFFF' : '#FAFAF8')};
  border: 1px solid ${props => (props.checked ? '#63B233' : '#D9D9D7')};
  border-radius: 4px;
  padding: 24px 16px;

  .txt {
    line-height: 1.57;
    letter-spacing: 0.07em;
  }
`;

export const StyledWarningContainer = styled(Space)`
  background: #f9eaea;
  border: 1px solid #e39599;
  border-radius: 4px;
  padding: 16px;
  font-size: 12px;
  line-height: 1.83;
  width: 100%;

  ul {
    padding: 0;
    list-style-type: none;
  }

  li {
    font-size: 12px;
    text-indent: -12px;
    padding-left: 12px;
    letter-spacing: 0.08em;

    &:before {
      content: '・';
    }
  }

  .subtitle {
    color: rgba(0, 0, 0, 0.85);
    font-weight: 600;
  }
`;

const renderPageTitle = () => {
  return (
    <>
      <Helmet>
        <title>{'領収書'}</title>
        <meta name="description" content={'...'} />
      </Helmet>
    </>
  );
};

// レコードアクションメニュー・Record Action Menu
const menu = (
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

const dataSource = Array.from(Array(3).keys()).map(i => ({
  i: `${i}`,
  is_default: true,
  name: randomOutput(['標準領収書', '寄付金受領証明書（控除対象）', '正会員費領収書']),
}));

const columnMap = {
  is_default: {
    width: 100,
    title: 'デフォルト',
    render: ({ is_default }) => (
      <div style={{ width: '80px', textAlign: 'center' }}>
        <Radio checked={is_default} />
      </div>
    ),
  },
  name: {
    title: '名称',
    dataIndex: 'name',
  },
  action: {
    width: 280,
    title: 'アクション',
    render: row => (
      <Space align="center">
        <Button
          disabled
          className="icon-btn less-shadow-btn"
          icon={<span className="material-symbols-outlined fill-icon">edit</span>}
        >
          {'編集'}
        </Button>
        <Button
          className="icon-btn less-shadow-btn"
          icon={<span className="material-symbols-outlined fill-icon">visibility</span>}
        >
          {'プレビュー'}
        </Button>
        <Dropdown overlay={menu} placement="bottomRight">
          <Button
            className="more-menu-btn"
            icon={<span className="material-symbols-outlined">more_horiz</span>}
          />
        </Dropdown>
      </Space>
    ),
  },
};

const columns = Object.keys(columnMap).map(columnName => {
  return columnMap[columnName];
});

const Receipt = () => {
  return (
    <>
      {renderPageTitle()}
      <div style={{ maxWidth: 720 }}>
        <Row className="mb-8">
          <Col sm={24} md={24} lg={24}>
            <div className="page-title01">{'領収書'}</div>
          </Col>
        </Row>

        {/* 領収書の発行方法 */}
        <Row className="mb-6">
          <Col sm={24} md={24} lg={24}>
            <div className="page-sub-title">{'領収書の発行方法'}</div>
          </Col>
        </Row>

        <Row className="mb-4" type="flex" gutter={12}>
          <Col xs={12}>
            <StyledRadioContainer size={16} checked direction="vertical">
              <Radio value={1} checked>
                {'手動発行（デフォルト）'}
              </Radio>
              <div className="txt">
                {
                  '領収書を手動で発行します。年に一度まとめて領収書を発行する場合や、郵送での領収書発行を行う場合はこちらを選択してください。'
                }
              </div>
            </StyledRadioContainer>
          </Col>
          <Col xs={12}>
            <StyledRadioContainer size={16} xs={12} direction="vertical">
              <Radio value={2}>{'かんたん自動発行'}</Radio>
              <div className="txt">
                {
                  '決済完了時にサポーター宛に送信される通知メールに、領収書のダウンロードリンク（ボタン）が掲載されます。'
                }
              </div>
            </StyledRadioContainer>
          </Col>
        </Row>

        <Row className="mb-8">
          <Col xs={24}>
            <StyledWarningContainer direction="vertical">
              <div className="subtitle">{'かんたん自動発行の注意点'}</div>
              <ul>
                <li>銀行振込の場合は管理画面で入金消込を行なった時点で送信されます</li>
                <li>手動、インポートで登録された寄付決済データの領収書は自動発行の対象外です</li>
                <li>
                  メール（PDF）で発行した領収書は寄附金控除に利用できない場合があります。控除対象の寄付募集を行う場合は、必ず所轄庁に確認の上、団体の責任でご利用ください
                </li>
              </ul>
            </StyledWarningContainer>
          </Col>
        </Row>

        {/* 寄付決済 */}
        <Row className="mb-5">
          <Col className="mb-2" sm={24} md={24} lg={24}>
            <span className="page-sub-title">{'基本設定'}</span>
          </Col>
        </Row>

        <StyledForm>
          <Row className="mb-8">
            {/*  印影 */}
            <Col span={24} className="mb-6">
              <SettingsInputContainer label={<SettingInfoLabel label={'印影'} />}>
                <ImageUpload />
              </SettingsInputContainer>
            </Col>
            {/*  認定通知書番号 */}
            <Col span={24} className="mb-6">
              <SettingsInputContainer label={<SettingInfoLabel label={'認定通知書番号'} />}>
                <SettingInput
                  size="large"
                  style={{ width: '100%', maxWidth: 256 }}
                  placeholder={''}
                />
              </SettingsInputContainer>
            </Col>
            {/*  認定年月日 */}
            <Col span={24} className="mb-6">
              <SettingsInputContainer label={<SettingInfoLabel label={'認定年月日'} />}>
                <DatePicker
                  size="large"
                  placeholder={'yyyy-mm-dd'}
                  style={{ width: '100%', maxWidth: 256 }}
                />
              </SettingsInputContainer>
            </Col>
          </Row>
        </StyledForm>

        {/* テンプレート */}
        <Row className="mb-6">
          <Col span={24} className="mb-5">
            <div className="page-sub-title">{'テンプレート'}</div>
          </Col>
          <Col sm={24} md={20} lg={24}>
            <Table
              tableLayout="fixed"
              dataSource={dataSource}
              columns={columns}
              pagination={false}
            />
          </Col>
        </Row>

        <Row className="mb-16">
          <Col sm={24} md={24} lg={24}>
            <ReceiptTemplate />
          </Col>
        </Row>

        <Row>
          <Col sm={24} md={24} lg={24}>
            <Button size="large" type="primary" style={{ fontWeight: '600', width: 96 }}>
              {'保存する'}
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Receipt;
