import { Helmet } from 'react-helmet-async';
import { Row, Col, Space, Radio, Button } from 'antd';
import { useDispatch } from 'react-redux';
import {
  SettingsInputContainer,
  SettingInfoLabel,
  SettingInput,
  SettingSelect,
  SettingLabel,
  SettingHepler,
  SettingsInputWrapper,
} from 'utils/Sprites';

import ImageUpload from 'app/components/ImageUpload';

import './Models/index';

const Step1 = () => {
  const dispatch = useDispatch();

  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'利用審査｜団体情報'}</title>
          <meta name="description" content={'...'} />
        </Helmet>
      </>
    );
  };

  return (
    <>
      {renderPageTitle()}
      {/* タイトル */}
      <Row className="mb-8">
        <Col className="mb-4" sm={24} md={24} lg={24}>
          <div style={{ textAlign: 'center', fontSize: '28px', fontWeight: '600' }}>
            {'団体情報'}
          </div>
        </Col>
        <Col sm={24} md={24} lg={24} type="flex" align="center">
          <div style={{ fontSize: '16px' }}>{'団体の情報を登録してください。'}</div>
        </Col>
      </Row>

      {/* 法人格の有無 */}
      <Row className="mb-6">
        <SettingsInputContainer label={<SettingLabel label={'法人格の有無'} required />}>
          <Col sm={24} md={24} lg={24}>
            <Space>
              <Radio checked>{'法人格あり'}</Radio>
              <Radio>{'法人格なし（任意団体）'}</Radio>
            </Space>
            <SettingHepler>
              {'法人格の有無によって利用できる決済機能が異なります。詳しくはこちら。'}
            </SettingHepler>
          </Col>
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
          <SettingInput size="large" placeholder="例：NPO法人コングラント" />
        </SettingsInputContainer>
      </Row>

      {/* 団体名（カナ表記） */}
      <Row className="mb-5">
        <SettingsInputContainer label={<SettingLabel label={'団体名（カナ表記）'} required />}>
          <SettingInput size="large" placeholder="例：エヌピーオーホウジンコングラント" />
        </SettingsInputContainer>
      </Row>

      {/* 団体名（ローマ字もしくは英語表記） */}
      <Row className="mb-6">
        <SettingsInputContainer
          label={<SettingLabel label={'団体名（ローマ字もしくは英語表記）'} required />}
        >
          <SettingInput size="large" placeholder="例：NPO congrant" />
        </SettingsInputContainer>
      </Row>

      {/* 登記番号 */}
      <Row className="mb-6">
        <SettingsInputContainer label={<SettingLabel label={'登記番号'} required />}>
          <SettingInput size="large" placeholder={'例：0123456789012345'} />
          <SettingHepler>{'正確にご入力ください。'}</SettingHepler>
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

      {/* 所在地（カナ表記） */}
      <Row className="mb-6">
        <SettingsInputContainer label={<SettingLabel label={'所在地（カナ表記）'} required />}>
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

      {/* 代表電話番号 */}
      <Row className="mb-6">
        <SettingsInputContainer label={<SettingLabel label={'代表電話番号'} required />}>
          <SettingInput size="large" placeholder={'例：03-1234-5678'} />
        </SettingsInputContainer>
      </Row>

      {/* 団体ホームページ */}
      <Row className="mb-6">
        <SettingsInputContainer label={<SettingLabel label={'団体ホームページ'} required />}>
          <SettingInput size="large" placeholder={'例：https://hogehoge.com'} />
        </SettingsInputContainer>
      </Row>

      {/* 業種 */}
      <Row className="mb-6">
        <SettingsInputContainer label={<SettingLabel label={'業種'} required />}>
          <SettingSelect size="large" placeholder={'選択してください'} />
        </SettingsInputContainer>
      </Row>

      {/* 活動カテゴリ */}
      <Row className="mb-6">
        <SettingsInputContainer label={<SettingLabel label={'活動カテゴリ'} required />}>
          <SettingSelect size="large" placeholder={'選択してください'} />
        </SettingsInputContainer>
      </Row>

      {/* 団体ロゴ */}
      <Row>
        <SettingsInputContainer label={<SettingInfoLabel label={'団体ロゴ'} required />}>
          <ImageUpload />
        </SettingsInputContainer>
      </Row>

      {/* 送信ボタン */}
      <Row className="mt-12">
        <Col sm={24} md={24} lg={24} type="flex" align="center">
          <Button
            size="large"
            style={{ fontWeight: '600', width: '100%' }}
            type="primary"
            onClick={() => {
              dispatch.registerStep.setActive('2');
            }}
          >
            {'保存して次へ'}
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Step1;
