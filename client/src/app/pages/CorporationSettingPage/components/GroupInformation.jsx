import { Row, Col, Button, Space, Radio } from 'antd';
import { StyledUploadPicture } from 'app/components/Layout/SettingsLayout.style';
import {
  SettingsInputContainer,
  SettingLabel,
  SettingInput,
  SettingInfoLabel,
  SettingSelect,
} from './Sprites';

const GroupInformation = () => {
  return (
    <>
      <div className="item ml-5">
        <Row className="mb-5">
          <Col sm={24} md={24} lg={24}>
            <span className="page-title">{'団体情報'}</span>
          </Col>
        </Row>
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingLabel label={'法人格の有無'} required />}>
            <Col className="item" sm={24} md={24} lg={24}>
              <Radio.Group onChange={() => {}} defaultValue={1}>
                <Space direction="horizontal">
                  <Radio value={1}>{'法人格あり'}</Radio>
                  <Radio value={2}>{'法人格なし（任意団体）'}</Radio>
                </Space>
              </Radio.Group>
            </Col>
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingLabel label={'団体名'} required />}>
            <SettingInput placeholder={'例：NPO法人コングラント'} />
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingLabel label={'団体名（カナ表記)'} required />}>
            <SettingInput placeholder={'例：エヌピーオーホウジンコングラント'} />
          </SettingsInputContainer>
          <SettingsInputContainer
            label={<SettingLabel label={'団体名（ローマ字もしくは英語表記)'} required />}
          >
            <SettingInput placeholder={'例：NPO congrant'} />
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingLabel label={'登記番号'} required />}>
            <SettingInput placeholder={'例：0123456789012345'} />
          </SettingsInputContainer>
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
          <SettingsInputContainer label={<SettingLabel label={'代表電話番号'} required />}>
            <SettingInput placeholder={'例：03-1234-5678'} />
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingLabel label={'団体ホームページ'} required />}>
            <SettingInput placeholder={'例：https://hogehoge.com'} />
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingLabel label={'業種'} required />}>
            <SettingSelect placeholder={'選択してください'} />
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingLabel label={'活動カテゴリ'} required />}>
            <SettingSelect placeholder={'選択してください'} />
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingInfoLabel label={'団体ロゴ'} />}>
            <StyledUploadPicture style={{ width: '600px' }}>
              <Space direction="vertical" align="center">
                <span className="upload-picture-title">{'+'}</span>
                <span className="upload-picture-title">{'アップロード'}</span>
              </Space>
            </StyledUploadPicture>
          </SettingsInputContainer>
        </Row>
        <Row className="item mt-15">
          <Col sm={24} md={24} lg={24}>
            <Button className="active" type="primary">
              <span className="ml-2">{'保存する'}</span>
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default GroupInformation;
