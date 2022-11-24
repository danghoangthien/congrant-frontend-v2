import { Row, Col, Input, Space, Radio, Tag, Button } from 'antd';
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

const Step1 = () => {
  const dispatch = useDispatch();
  return (
    <div className="item" style={{ width: '600px' }}>
      <Row className="mb-2">
        <Col className="mb-5" sm={24} md={24} lg={24} type="flex" align="center">
          <span className="page-sub-title" style={{ fontSize: '28px' }}>
            {'管理者情報'}
          </span>
        </Col>
        <Col sm={24} md={24} lg={24} type="flex" align="center">
          <p style={{ width: '375px', fontSize: '16px' }}>{'団体の情報を登録してください。'}</p>
        </Col>
      </Row>
      <Row className="item mb-2">
        <SettingsInputContainer label={<SettingInfoLabel label={'法人格の有無'} required />}>
          <Col className="item mb-5" sm={24} md={24} lg={24}>
            <Space>
              <Radio checked>{'法人格あり'}</Radio>
              <Radio>{'法人格なし（任意団体）'}</Radio>
            </Space>
            <p>{'法人格の有無によって利用できる決済機能が異なります。詳しくはこちら。'}</p>
          </Col>
        </SettingsInputContainer>
      </Row>
      <Row className="item mb-2">
        <SettingsInputContainer label={<SettingLabel label={'法人格'} required />}>
          <SettingSelect placeholder={'選択してください'} />
        </SettingsInputContainer>
      </Row>
      <Row className="item mb-5">
        <SettingsInputContainer label={<SettingInfoLabel label={'団体名'} required />}>
          <SettingInput value="例：NPO法人コングラント" />
        </SettingsInputContainer>
      </Row>
      <Row className="item mb-5">
        <SettingsInputContainer label={<SettingInfoLabel label={'団体名（カナ表記）'} required />}>
          <SettingInput value="例：エヌピーオーホウジンコングラント" />
        </SettingsInputContainer>
      </Row>
      <Row className="item mb-5">
        <SettingsInputContainer
          label={<SettingInfoLabel label={'団体名（ローマ字もしくは英語表記）'} required />}
        >
          <SettingInput value="例：NPO congrant" />
        </SettingsInputContainer>
      </Row>
      <Row className="item mb-2">
        <SettingsInputContainer label={<SettingLabel label={'登記番号'} required />}>
          <SettingInput placeholder={'例：03-1234-5678'} />
          <p>{'正確にご入力ください。'}</p>
        </SettingsInputContainer>
      </Row>
      <Row className="item mb-2">
        <SettingsInputContainer label={<SettingLabel label={'所在地'} required />}>
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
        <SettingsInputContainer label={<SettingLabel label={'所在地（カナ表記)'} required />}>
          <Col className="item mb-5" sm={24} md={24} lg={24}>
            <Space direction="horizontal">
              <SettingInput addonBefore="〒" placeholder={'0000000'} style={{ width: '295px' }} />
              <SettingInput disabled placeholder={'都道府県'} style={{ width: '295px' }} />
            </Space>
          </Col>
          <Col className="item my-5" sm={24} md={24} lg={24}>
            <Space direction="horizontal">
              <SettingInput placeholder={'市区町村（カナ)'} />
            </Space>
          </Col>
          <Col className="item my-5" sm={24} md={24} lg={24}>
            <Space direction="horizontal">
              <SettingInput placeholder={'番地・建物名・部屋番号（カナ)'} />
            </Space>
          </Col>
        </SettingsInputContainer>
      </Row>
      <Row className="item mb-2">
        <SettingsInputContainer label={<SettingLabel label={'代表電話番号'} required />}>
          <SettingInput placeholder={'例：03-1234-5678'} />
        </SettingsInputContainer>
      </Row>
      <Row className="item mb-2">
        <SettingsInputContainer label={<SettingLabel label={'団体ホームページ'} required />}>
          <SettingInput placeholder={'例：https://hogehoge.com'} />
        </SettingsInputContainer>
      </Row>
      <Row className="item mb-2">
        <SettingsInputContainer label={<SettingLabel label={'業種'} required />}>
          <SettingSelect placeholder={'選択してください'} />
        </SettingsInputContainer>
      </Row>
      <Row className="item mb-2">
        <SettingsInputContainer label={<SettingLabel label={'活動カテゴリ'} required />}>
          <SettingSelect placeholder={'選択してください'} />
        </SettingsInputContainer>
      </Row>
      <Row className="item mb-5">
        <SettingsInputContainer label={<SettingInfoLabel label={'団体ロゴ'} required />}>
          <ImageUpload />
        </SettingsInputContainer>
      </Row>

      <Row className="mb-2">
        <Col sm={24} md={24} lg={24} type="flex" align="center">
          <Button
            style={{ width: '600px' }}
            type="primary"
            onClick={() => {
              dispatch.registerStep.setActive('2');
            }}
          >
            {'保存して次へ'}
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Step1;
