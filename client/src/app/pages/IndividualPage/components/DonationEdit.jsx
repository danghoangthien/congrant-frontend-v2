import { Descriptions, Row, Col, Button, Input, Select, Space } from 'antd';
import { BoldLabel, CopiableText, Navigation } from 'utils/Sprites';
import { DETAIL_MODE, LIST_MODE } from 'utils/consts';
import { DescriptionStyle } from './BasicInfo.style';
import { StyledDonationTypeTag } from 'styles/Tag.style';

const Title = ({ setMode }) => {
  return (
    <>
      <Row className="mb-6">
        <Col sm={24} md={12} lg={12}>
          <div className="sub-page-title -sml">{'寄付詳細'}</div>
        </Col>
        <Col type="flex" align="right" sm={24} md={12} lg={12}>
          <Space size={8}>
            <Button onClick={() => setMode(DETAIL_MODE)}>{'キャンセル'}</Button>
            <Button
              className="icon-btn"
              type="primary"
              icon={<span className="material-symbols-outlined fill-icon">save</span>}
            >
              保存する
            </Button>
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

const DescriptionContainer = ({ children, mode, setMode }) => (
  <DescriptionStyle>
    <Descriptions bordered column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}>
      {children}
    </Descriptions>
  </DescriptionStyle>
);

const DonationEdit = ({ data, mode, setMode }) => {
  console.log('DonationDetail render', true);
  return (
    <>
      <Navigation
        setMode={setMode}
        id={'431051'}
        label="寄付決済"
        identityLabel="寄付No."
        listMode={LIST_MODE}
      />
      <Title mode={mode} setMode={setMode} />
      <Row className="mb-6">
        <Col span={24}>
          <DescriptionContainer>
            <Descriptions.Item label={<BoldLabel label="寄付No." />}>
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
      <Row className="mb-6">
        <Col span={24}>
          <ExtraFieldTitle />
        </Col>
        <Col span={24}>
          <DescriptionContainer>
            <Descriptions.Item label={<BoldLabel label="認知経路" />}>
              <Select placeholder={'選択してください'} onChange={() => {}} defaultValue={1}>
                <Select.Option value={1}>{'SNS'}</Select.Option>
              </Select>
            </Descriptions.Item>
            <Descriptions.Item label={<BoldLabel label="寄付の使用用途" />}>
              <Select placeholder={'選択してください'} onChange={() => {}} defaultValue={1}>
                <Select.Option value={1}>{'団体に任せる'}</Select.Option>
              </Select>
            </Descriptions.Item>
            <Descriptions.Item label={<BoldLabel label="支援経験" />}>
              <Select placeholder={'選択してください'} onChange={() => {}} defaultValue={1}>
                <Select.Option value={1}>{'なし'}</Select.Option>
              </Select>
            </Descriptions.Item>
            <Descriptions.Item label={<BoldLabel label="寄付理由" />}>
              <Input.TextArea
                style={{
                  height: 50,
                }}
                value={''}
              />
            </Descriptions.Item>
          </DescriptionContainer>
        </Col>
      </Row>

      <Row justify="end">
        <Space>
          <Button onClick={() => setMode(DETAIL_MODE)}>{'キャンセル'}</Button>
          <Button
            className="icon-btn"
            icon={<span className="material-symbols-outlined fill-icon">save</span>}
            type="primary"
          >
            {'保存する'}
          </Button>
        </Space>
      </Row>
    </>
  );
};

export default DonationEdit;
