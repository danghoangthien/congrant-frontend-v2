import { Descriptions, Row, Col, Button, Input, Select, Space, DatePicker } from 'antd';
import { BoldLabel, CopiableText } from './Sprites';
import { DETAIL_MODE } from '../consts';
import { DescriptionStyle } from './BasicInfo.style';
import { PRIMARY_COLOR } from 'styles/StyleConstants';
import BreadNavigation from './Sprites/BreadNavigation';

const Title = ({ mode, setMode }) => {
  return (
    <Row>
      <Col sm={24} md={12} lg={12}>
        <div className="sub-page-title -sml">{'領収書詳細'}</div>
      </Col>
      <Col type="flex" align="right" sm={24} md={12} lg={12}>
        <Space size={8}>
          <Button className="less-shadow-btn" onClick={() => setMode(DETAIL_MODE)}>
            {'キャンセル'}
          </Button>
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

const ReceiptDetail = ({ data, mode, setMode }) => {
  console.log('ReceiptDetail render', true);
  return (
    <>
      <BreadNavigation
        setMode={setMode}
        id={'2022-123456'}
        label="領収書"
        identityLabel="領収書No."
      />
      <DescriptionContainer mode={mode} setMode={setMode}>
        {/* 領収書No. */}
        <Descriptions.Item label={<BoldLabel label="領収書No." />}>
          <CopiableText>{'2022-123456'}</CopiableText>
        </Descriptions.Item>

        {/* 寄付No */}
        <Descriptions.Item label={<BoldLabel label="寄付No." />}>
          <span style={{ color: PRIMARY_COLOR, fontWeight: '600' }}>
            431051・431052・431053・431054
          </span>
        </Descriptions.Item>

        {/* 発行ステータス */}
        <Descriptions.Item label={<BoldLabel label="発行ステータス" />}>
          <Select placeholder={'選択してください'} onChange={() => {}} defaultValue={1}>
            <Select.Option value={1}>{'未発行'}</Select.Option>
          </Select>
        </Descriptions.Item>

        {/* 発行日時 */}
        <Descriptions.Item label={<BoldLabel label="発行日時" />}>
          <DatePicker placeholder={'yyyy-mm-dd'} style={{ width: '100%' }} />
        </Descriptions.Item>

        {/* 受領日 */}
        <Descriptions.Item label={<BoldLabel label="受領日" />}>
          {'2022-01-15〜2022-04-15'}
        </Descriptions.Item>

        {/* 宛名 */}
        <Descriptions.Item label={<BoldLabel label="宛名" />}>
          <Input value={'田中太郎'} />
        </Descriptions.Item>

        {/* 住所 */}
        <Descriptions.Item label={<BoldLabel label="住所" />}>
          <Row>
            <Col className="mb-2" sm={24} md={24} lg={24}>
              <Select placeholder={'選択してください'} onChange={() => {}} defaultValue={1}>
                <Select.Option value={1}>{'日本'}</Select.Option>
              </Select>
            </Col>
            <Col className="mb-2" sm={12} md={12} lg={12}>
              <Input addonBefore="〒" value={'5500002'} />
            </Col>
            <Col className="pl-2 mb-2" sm={12} md={12} lg={12}>
              <Select
                disabled
                placeholder={'選択してください'}
                onChange={() => {}}
                defaultValue={1}
              >
                <Select.Option value={1}>{'大阪府'}</Select.Option>
              </Select>
            </Col>
            <Col className="mb-2" sm={24} md={24} lg={24}>
              <Input value={'大阪市西区江戸堀'} />
            </Col>
            <Col sm={24} md={24} lg={24}>
              <Input value={'1-2-3＊＊＊＊＊マンション301号室'} />
            </Col>
          </Row>
        </Descriptions.Item>

        {/* テンプレート */}
        <Descriptions.Item label={<BoldLabel label="テンプレート" />}>
          <CopiableText>
            <Select placeholder={'選択してください'} onChange={() => {}} defaultValue={1}>
              <Select.Option value={1}>{'標準領収書'}</Select.Option>
            </Select>
          </CopiableText>
        </Descriptions.Item>

        {/* メモ */}
        <Descriptions.Item label={<BoldLabel label="メモ" />}>
          <Input.TextArea value={''} />
        </Descriptions.Item>
      </DescriptionContainer>
    </>
  );
};

export default ReceiptDetail;
