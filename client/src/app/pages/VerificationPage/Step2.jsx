import { Row, Col, Input, Space, DatePicker, Tag, Button } from 'antd';
import { InfoCircleFilled } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import {
  SettingsInputContainer,
  SettingInfoLabel,
  SettingTextarea,
  SettingInput,
  SettingSelect,
  SettingLabel,
} from 'app/pages/CorporationSettingPage/components/Sprites';

import ImageUpload from 'app/components/ImageUpload';
import './Models/index';

const Step2 = () => {
  const dispatch = useDispatch();
  return (
    <div className="item" style={{ width: '600px' }}>
      <Row className="mb-2">
        <Col className="mb-5" sm={24} md={24} lg={24} type="flex" align="center">
          <span className="page-sub-title" style={{ fontSize: '28px' }}>
            {'団体情報'}
          </span>
        </Col>
        <Col sm={24} md={24} lg={24} type="flex" align="center">
          <p style={{ width: '375px', fontSize: '16px' }}>
            {'アカウントの管理者の情報を登録してください。'}
          </p>
        </Col>
      </Row>
      <Row className="item mb-2">
        <SettingsInputContainer label={<SettingLabel label={'氏名'} required />}>
          <Col className="item mb-5" sm={24} md={24} lg={24}>
            <Space direction="horizontal">
              <SettingInput placeholder={'例：田中'} style={{ width: '295px' }} />
              <SettingInput placeholder={'例：太郎'} style={{ width: '295px' }} />
            </Space>
          </Col>
        </SettingsInputContainer>
        <SettingsInputContainer label={<SettingLabel label={'氏名（カナ表記)'} required />}>
          <Col className="item mb-5" sm={24} md={24} lg={24}>
            <Space direction="horizontal">
              <SettingInput placeholder={'例：タナカ'} style={{ width: '295px' }} />
              <SettingInput placeholder={'例：タロウ'} style={{ width: '295px' }} />
            </Space>
          </Col>
        </SettingsInputContainer>
        <SettingsInputContainer label={<SettingLabel label={'生年月日'} required />}>
          <Col className="item mb-5" sm={24} md={24} lg={24}>
            <DatePicker placeholder={'yyyy-mm-dd'} style={{ width: '600px' }} />
          </Col>
        </SettingsInputContainer>
        <SettingsInputContainer label={<SettingLabel label={'役職'} required />}>
          <Col className="item mb-5" sm={24} md={24} lg={24}>
            <SettingInput placeholder={'例：事務局長'} />
          </Col>
        </SettingsInputContainer>
        <SettingsInputContainer label={<SettingLabel label={'メールアドレス'} required />}>
          <Col className="item mb-5" sm={24} md={24} lg={24}>
            <SettingInput placeholder={'例：03-1234-5678'} />
          </Col>
        </SettingsInputContainer>
        <SettingsInputContainer label={<SettingLabel label={'登記番号'} required />}>
          <SettingInput placeholder={'例：03-1234-5678'} />
        </SettingsInputContainer>
        <SettingsInputContainer label={<SettingLabel label={'所在'} required />}>
          <Col className="item mb-5" sm={24} md={24} lg={24}>
            <Space direction="horizontal">
              <SettingInput addonBefore="〒" placeholder={'0000000'} style={{ width: '295px' }} />
              <SettingInput disabled placeholder={'都道府県'} style={{ width: '295px' }} />
            </Space>
          </Col>
          <Col className="item my-5" sm={24} md={24} lg={24}>
            <Space direction="horizontal">
              <SettingInput placeholder={'市区町村'} />
            </Space>
          </Col>
          <Col className="item my-5" sm={24} md={24} lg={24}>
            <Space direction="horizontal">
              <SettingInput placeholder={'番地・建物名・部屋番号'} />
            </Space>
          </Col>
        </SettingsInputContainer>
        <SettingsInputContainer label={<SettingLabel label={'所在 (カナ表記)'} required />}>
          <Col className="item mb-5" sm={24} md={24} lg={24}>
            <Space direction="horizontal">
              <SettingInput addonBefore="〒" placeholder={'0000000'} style={{ width: '295px' }} />
              <SettingInput disabled placeholder={'都道府県'} style={{ width: '295px' }} />
            </Space>
          </Col>
          <Col className="item my-5" sm={24} md={24} lg={24}>
            <Space direction="horizontal">
              <SettingInput placeholder={'市区町村'} />
            </Space>
          </Col>
          <Col className="item my-5" sm={24} md={24} lg={24}>
            <Space direction="horizontal">
              <SettingInput placeholder={'番地・建物名・部屋番号'} />
            </Space>
          </Col>
        </SettingsInputContainer>
      </Row>
      <Row className="item mb-5">
        <SettingsInputContainer label={<SettingInfoLabel label={'身分証明書等'} required />}>
          <ImageUpload />

          <p style={{ color: 'rgba(0, 0, 0, 0.5)' }}>
            有効な身分証明書：
            <br />
            ・日本旅券 (日本国パスポート)
            <br />
            ・運転免許証
            <br />
            ・在留カード・特別永住者証明書
            <br />
            ・マイナンバーカード (顔写真付き)
            <br />
            ・住民票
            <br />
            <br />
            ファイル準備の際には、以下の点にご注意ください：
            <br />
            ・ファイル形式が JPG、JPEG または PNG であること
            <br />
            ・身分証全体のカラー画像であること
            <br />
            ・ピントが合っていて記載内容が判別できること
            <br />
            ・撮影時にフラッシュを使用しない
          </p>
        </SettingsInputContainer>
      </Row>

      <Row className="mb-2">
        <Col sm={24} md={24} lg={24} type="flex" align="center">
          <Space>
            <Button
              style={{ width: '295px' }}
              onClick={() => {
                dispatch.registerStep.setActive('1');
              }}
            >
              {'< 戻る'}
            </Button>
            <Button
              style={{ width: '295px' }}
              type="primary"
              onClick={() => {
                dispatch.registerStep.setActive('3');
              }}
            >
              {'保存して次へ'}
            </Button>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default Step2;
