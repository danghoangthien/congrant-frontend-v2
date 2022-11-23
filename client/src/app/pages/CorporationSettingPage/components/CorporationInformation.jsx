import { Link } from 'react-router-dom';
import { Row, Col, Button, Space, Radio } from 'antd';
import {
  SettingsInputContainer,
  SettingLabel,
  SettingInput,
  SettingSelect,
  SettingsInputWrapper,
} from './Sprites';

import { TEXT_GRAY_COLOR } from 'styles/StyleConstants';

const GroupInformation = () => {
  return (
    <Row>
      <Col span={24} className="mb-5">
        <div className="page-title01">{'団体情報'}</div>
      </Col>

      <Col span={24}>
        {/* 法人格の有無 */}
        <Row className="mb-6">
          <SettingsInputContainer label={<SettingLabel label={'法人格の有無'} required />}>
            <Radio.Group onChange={() => {}} defaultValue={1}>
              <Space direction="horizontal">
                <Radio value={1}>{'法人格あり'}</Radio>
                <Radio value={2}>{'法人格なし（任意団体）'}</Radio>
              </Space>
            </Radio.Group>
            <div style={{ color: TEXT_GRAY_COLOR }}>
              法人格の有無によって利用できる決済機能が異なります。詳しくは
              <Link to={`/individuals`}>こちら</Link>。
            </div>
          </SettingsInputContainer>
        </Row>

        {/* 法人格 */}
        <Row className="mb-6">
          <SettingsInputContainer label={<SettingLabel label={'法人格'} required />}>
            <SettingSelect size="large" placeholder={'選択してください'} />
          </SettingsInputContainer>
        </Row>

        {/* 団体名 */}
        <Row className="mb-6">
          <SettingsInputContainer label={<SettingLabel label={'団体名'} required />}>
            <SettingInput size="large" placeholder={'例：NPO法人コングラント'} />
          </SettingsInputContainer>
        </Row>

        {/* 団体名（カナ表記 */}
        <Row className="mb-6">
          <SettingsInputContainer label={<SettingLabel label={'団体名（カナ表記)'} required />}>
            <SettingInput size="large" placeholder={'例：エヌピーオーホウジンコングラント'} />
          </SettingsInputContainer>
        </Row>

        {/* 団体名（ローマ字もしくは英語表記 */}
        <Row className="mb-6">
          <SettingsInputContainer
            label={<SettingLabel label={'団体名（ローマ字もしくは英語表記)'} required />}
          >
            <SettingInput size="large" placeholder={'例：NPO congrant'} />
          </SettingsInputContainer>
        </Row>

        {/* 登記番号 */}
        <Row className="mb-6">
          <SettingsInputContainer label={<SettingLabel label={'登記番号'} required />}>
            <SettingInput size="large" placeholder={'例：0123456789012345'} />
          </SettingsInputContainer>
        </Row>

        {/* 所在地 */}
        <Row className="mb-6">
          <SettingsInputContainer label={<SettingLabel label={'所在地'} required />}>
            <Col className="mb-4" sm={24} md={24} lg={24}>
              <SettingsInputWrapper size={16}>
                <SettingInput
                  size="large"
                  addonBefore="〒"
                  placeholder={'0000000'}
                  style={{ width: '100%' }}
                />
                <SettingInput
                  size="large"
                  disabled
                  placeholder={'都道府県'}
                  style={{ width: '100%' }}
                />
              </SettingsInputWrapper>
            </Col>
            <Col className="mb-4" sm={24} md={24} lg={24}>
              <SettingInput size="large" placeholder={'市区町村'} />
            </Col>
            <Col sm={24} md={24} lg={24}>
              <SettingInput size="large" placeholder={'番地・建物名・部屋番号'} />
            </Col>
          </SettingsInputContainer>
        </Row>

        {/* 所在地（カナ表記 */}
        <Row className="mb-6">
          <SettingsInputContainer label={<SettingLabel label={'所在地（カナ表記)'} required />}>
            <Col className="mb-4" sm={24} md={24} lg={24}>
              <SettingsInputWrapper>
                <SettingInput
                  size="large"
                  addonBefore="〒"
                  placeholder={'0000000'}
                  style={{ width: '100%' }}
                />
                <SettingInput
                  size="large"
                  disabled
                  placeholder={'都道府県'}
                  style={{ width: '100%' }}
                />
              </SettingsInputWrapper>
            </Col>
            <Col className="mb-4" sm={24} md={24} lg={24}>
              <SettingInput size="large" placeholder={'市区町村（カナ)'} />
            </Col>
            <Col sm={24} md={24} lg={24}>
              <SettingInput size="large" placeholder={'番地・建物名・部屋番号（カナ)'} />
            </Col>
          </SettingsInputContainer>
        </Row>

        {/* 代表電話番号 */}
        <Row className="mb-6">
          <SettingsInputContainer label={<SettingLabel label={'代表電話番号'} required />}>
            <SettingInput size="large" placeholder={'例：03-1234-5678'} />
          </SettingsInputContainer>
        </Row>

        {/* 代表電話番号 */}
        <Row className="mb-6">
          <SettingsInputContainer label={<SettingLabel label={'業種'} required />}>
            <SettingSelect size="large" placeholder={'選択してください'} />
          </SettingsInputContainer>
        </Row>

        {/* 活動カテゴリ */}
        <Row>
          <SettingsInputContainer label={<SettingLabel label={'活動カテゴリ'} required />}>
            <SettingSelect size="large" placeholder={'選択してください'} />
          </SettingsInputContainer>
        </Row>
      </Col>

      <Col span={24} className="mt-14">
        <Button type="primary" size="large">
          <span style={{ fontWeight: '600' }}>{'保存する'}</span>
        </Button>
      </Col>
    </Row>
  );
};

export default GroupInformation;
