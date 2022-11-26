import { Helmet } from 'react-helmet-async';
import { Row, Col, DatePicker, Space, Button } from 'antd';
import { useDispatch } from 'react-redux';
import {
  SettingsInputContainer,
  SettingInput,
  SettingsInputWrapper,
  SettingHepler,
  SettingLabel,
} from 'utils/Sprites';

import ImageUpload from 'app/components/ImageUpload';
import './Models/index';

const Step2 = () => {
  const dispatch = useDispatch();

  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'利用審査｜管理者情報'}</title>
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
            {'管理者情報'}
          </div>
        </Col>
        <Col sm={24} md={24} lg={24} type="flex" align="center">
          <div style={{ fontSize: '16px' }}>{'アカウントの管理者の情報を登録してください。'}</div>
        </Col>
      </Row>

      {/* 氏名 */}
      <Row className="mb-6">
        <SettingsInputContainer label={<SettingLabel label={'氏名'} required />}>
          <Col sm={24} md={24} lg={24}>
            <SettingsInputWrapper>
              <SettingInput size="large" placeholder={'例：田中'} style={{ width: '100%' }} />
              <SettingInput size="large" placeholder={'例：太郎'} style={{ width: '100%' }} />
            </SettingsInputWrapper>
          </Col>
        </SettingsInputContainer>
      </Row>

      {/* 氏名（カナ表記） */}
      <Row className="mb-6">
        <SettingsInputContainer label={<SettingLabel label={'氏名（カナ表記）'} required />}>
          <Col sm={24} md={24} lg={24}>
            <SettingsInputWrapper>
              <SettingInput size="large" placeholder={'例：タナカ'} style={{ width: '100%' }} />
              <SettingInput size="large" placeholder={'例：タロウ'} style={{ width: '100%' }} />
            </SettingsInputWrapper>
          </Col>
        </SettingsInputContainer>
      </Row>

      {/* 生年月日 */}
      <Row className="mb-6">
        <SettingsInputContainer label={<SettingLabel label={'生年月日'} required />}>
          <Col sm={24} md={24} lg={24}>
            <DatePicker size="large" placeholder={'yyyy-mm-dd'} style={{ width: '100%' }} />
          </Col>
        </SettingsInputContainer>
      </Row>

      {/* 役職 */}
      <Row className="mb-6">
        <SettingsInputContainer label={<SettingLabel label={'役職'} required />}>
          <SettingInput size="large" placeholder={'例：事務局長'} />
        </SettingsInputContainer>
      </Row>

      {/* メールアドレス */}
      <Row className="mb-6">
        <SettingsInputContainer label={<SettingLabel label={'メールアドレス'} required />}>
          <SettingInput size="large" placeholder={'例：03-1234-5678'} />
        </SettingsInputContainer>
      </Row>

      {/* 電話番号 */}
      <Row className="mb-6">
        <SettingsInputContainer label={<SettingLabel label={'電話番号'} required />}>
          <SettingInput size="large" placeholder={'例：03-1234-5678'} />
        </SettingsInputContainer>
      </Row>

      {/* 住所 */}
      <Row className="mb-6">
        <SettingsInputContainer label={<SettingLabel label={'住所'} required />}>
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

      {/* 住所（カナ表記） */}
      <Row className="mb-6">
        <SettingsInputContainer label={<SettingLabel label={'住所（カナ表記）'} required />}>
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

      {/* 身分証明書等 */}
      <Row>
        <SettingsInputContainer label={<SettingLabel label={'身分証明書等'} required />}>
          <ImageUpload />
        </SettingsInputContainer>
        <SettingHepler>
          有効な身分証明書：
          <br />
          日本旅券 (日本国パスポート)
          <br />
          運転免許証
          <br />
          在留カード・特別永住者証明書
          <br />
          マイナンバーカード (顔写真付き)
          <br />
          住民票
          <br />
          <br />
          ファイル準備の際には、以下の点にご注意ください：
          <br />
          ファイル形式が JPG、JPEG または PNG であること
          <br />
          身分証全体のカラー画像であること
          <br />
          ピントが合っていて記載内容が判別できること
          <br />
          撮影時にフラッシュを使用しない
        </SettingHepler>
      </Row>

      <Row className="mt-12">
        <Col span={24}>
          <SettingsInputWrapper>
            <Button
              size="large"
              style={{ width: '100%', justifyContent: 'center' }}
              className="icon-btn"
              icon={<span className="material-symbols-outlined">chevron_left</span>}
              onClick={() => {
                dispatch.registerStep.setActive('1');
              }}
            >
              {'戻る'}
            </Button>
            <Button
              size="large"
              style={{ width: '100%' }}
              type="primary"
              onClick={() => {
                dispatch.registerStep.setActive('3');
              }}
            >
              {'保存して次へ'}
            </Button>
          </SettingsInputWrapper>
        </Col>
      </Row>
    </>
  );
};

export default Step2;
