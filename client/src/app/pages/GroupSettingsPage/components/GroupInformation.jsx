import { Row, Col, Button, Space } from 'antd';
import { InfoCircleFilled } from '@ant-design/icons';
import { StyledUploadPicture } from 'app/components/Layout/SettingsLayout.style';
import { SettingsInputContainer, SettingLabel, SettingInput } from './Sprites';

const GroupInformation = () => {
  return (
    <>
      <div className="item ml-5">
        <Row className="mb-5">
          <Col sm={24} md={24} lg={24}>
            <span className="page-title">{'名寄せ先の選択'}</span>
          </Col>
        </Row>
        <Row className="item mb-2">
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
            <SettingInput placeholder={'選択してください'} />
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingLabel label={'活動カテゴリ'} required />}>
            <SettingInput placeholder={'選択してください'} />
          </SettingsInputContainer>
          <SettingsInputContainer
            label={
              <Space align="center">
                <span>{'団体ロゴ'}</span>
                <InfoCircleFilled className="display-inline-flex" />
              </Space>
            }
          >
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
