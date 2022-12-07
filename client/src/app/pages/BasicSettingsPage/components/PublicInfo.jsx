import { Row, Col, Button } from 'antd';
import {
  SettingsInputContainer,
  SettingInput,
  SettingInfoLabel,
  SettingLabel,
} from '../../CorporationSettingPage/components/Sprites';
import { StyledForm } from '../BasicSettingsPage.style';
import ImageUpload from 'app/components/ImageUpload';

const PublicInfo = () => {
  return (
    <>
      <Row className="mb-8">
        <Col sm={24} md={24} lg={24}>
          <span className="page-title01">{'公開情報'}</span>
        </Col>
      </Row>

      <StyledForm>
        <Row className="mb-8">
          {/*  団体ロゴ */}
          <Col span={24} className="mb-6">
            <SettingsInputContainer label={<SettingInfoLabel label={'団体ロゴ'} />}>
              <ImageUpload />
            </SettingsInputContainer>
          </Col>
          {/*  団体ホームページ */}
          <Col span={24} className="mb-6">
            <SettingsInputContainer label={<SettingLabel label={'団体ホームページ'} />}>
              <SettingInput
                size="large"
                style={{ width: '100%', maxWidth: 600 }}
                placeholder={'例：https://hogehoge.com'}
              />
            </SettingsInputContainer>
          </Col>
          {/*  Twitterアカウント */}
          <Col span={24} className="mb-6">
            <SettingsInputContainer label={<SettingLabel label={'Twitterアカウント'} />}>
              <SettingInput
                size="large"
                style={{ width: '100%', maxWidth: 600 }}
                placeholder={'例：https://twitter.com/********'}
              />
            </SettingsInputContainer>
          </Col>
          {/*  Facebookアカウント */}
          <Col span={24} className="mb-6">
            <SettingsInputContainer label={<SettingLabel label={'Facebookアカウント'} />}>
              <SettingInput
                size="large"
                style={{ width: '100%', maxWidth: 600 }}
                placeholder={'例：https://www.facebook.com/********'}
              />
            </SettingsInputContainer>
          </Col>
          {/*  Instagramアカウント */}
          <Col span={24} className="mb-6">
            <SettingsInputContainer label={<SettingLabel label={'Instagramアカウント'} />}>
              <SettingInput
                size="large"
                style={{ width: '100%', maxWidth: 600 }}
                placeholder={'例：https://www.instagram.com/********'}
              />
            </SettingsInputContainer>
          </Col>
          {/*  問い合わせフォーム（もしくはメールアドレス） */}
          <Col span={24} className="mb-6">
            <SettingsInputContainer
              label={<SettingLabel label={'問い合わせフォーム（もしくはメールアドレス）'} />}
            >
              <SettingInput
                size="large"
                style={{ width: '100%', maxWidth: 600 }}
                placeholder={'例：https://hogehoge.com/form'}
              />
            </SettingsInputContainer>
          </Col>
          {/*  問い合わせフォーム（もしくはメールアドレス） */}
          <Col span={24} className="mb-6">
            <SettingsInputContainer label={<SettingLabel label={'問い合わせ先の電話番号'} />}>
              <SettingInput
                size="large"
                style={{ width: '100%', maxWidth: 600 }}
                placeholder={'例：03-1234-5678'}
              />
            </SettingsInputContainer>
          </Col>
        </Row>
      </StyledForm>
      <Row>
        <Col sm={24} md={24} lg={24}>
          <Button size="large" className="active" type="primary">
            <span style={{ fontWeight: '600' }}>{'保存する'}</span>
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default PublicInfo;
