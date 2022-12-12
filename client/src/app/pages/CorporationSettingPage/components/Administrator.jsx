// ANTD
import { Row, Col, Button, DatePicker, Card } from 'antd';
// STYLE
import styled from 'styled-components/macro';
// CONTS
import { EXTRA_LIGHT_RED_COLOR } from 'styles/StyleConstants';
// COMPONENT
import {
  SettingsInputContainer,
  SettingLabel,
  SettingInput,
  SettingsInputWrapper,
} from 'utils/Sprites';
// MODAL
import ChangeAdministrator from './ChangeAdministrator';

export const StyledCard = styled(Card)`
  background: ${EXTRA_LIGHT_RED_COLOR};
  border-radius: 4px !important;
  border: none !important;
`;

const Administrator = () => {
  return (
    <Row>
      <Col span={24} className="mb-6">
        <Row className="mb-6" justify="space-between" align="middle">
          <div className="page-title01">{'管理者'}</div>
          <ChangeAdministrator />
        </Row>
        <Row>
          <StyledCard style={{ width: '100%' }} bodyStyle={{ padding: '16px 24px' }}>
            管理者情報の編集・管理者の変更を行う際には、決済代行会社の再審査が行われます。
          </StyledCard>
        </Row>
      </Col>

      <Col span={24}>
        {/* 氏名 */}
        <Row className="mb-6">
          <SettingsInputContainer label={<SettingLabel label={'氏名'} required />}>
            <Col sm={24} md={24} lg={24}>
              <div style={{ width: '100%', maxWidth: 600 }}>
                <SettingsInputWrapper>
                  <SettingInput size="large" placeholder={'例：田中'} style={{ width: '100%' }} />
                  <SettingInput size="large" placeholder={'例：太郎'} style={{ width: '100%' }} />
                </SettingsInputWrapper>
              </div>
            </Col>
          </SettingsInputContainer>
        </Row>

        {/* 氏名（カナ表記) */}
        <Row className="mb-6">
          <SettingsInputContainer label={<SettingLabel label={'氏名（カナ表記)'} required />}>
            <Col sm={24} md={24} lg={24}>
              <div style={{ width: '100%', maxWidth: 600 }}>
                <SettingsInputWrapper>
                  <SettingInput size="large" placeholder={'例：タナカ'} style={{ width: '100%' }} />
                  <SettingInput size="large" placeholder={'例：タロウ'} style={{ width: '100%' }} />
                </SettingsInputWrapper>
              </div>
            </Col>
          </SettingsInputContainer>
        </Row>

        {/* 生年月日 */}
        <Row className="mb-6">
          <SettingsInputContainer label={<SettingLabel label={'生年月日'} required />}>
            <Col sm={24} md={24} lg={24}>
              <DatePicker
                size="large"
                placeholder={'yyyy-mm-dd'}
                style={{ width: '100%', maxWidth: 600 }}
              />
            </Col>
          </SettingsInputContainer>
        </Row>

        {/* 役職 */}
        <Row className="mb-6">
          <SettingsInputContainer label={<SettingLabel label={'役職'} required />}>
            <Col sm={24} md={24} lg={24}>
              <SettingInput
                style={{ width: '100%', maxWidth: 600 }}
                size="large"
                placeholder={'例：事務局長'}
              />
            </Col>
          </SettingsInputContainer>
        </Row>

        {/* メールアドレス */}
        <Row className="mb-6">
          <SettingsInputContainer label={<SettingLabel label={'メールアドレス'} required />}>
            <Col sm={24} md={24} lg={24}>
              <SettingInput
                style={{ width: '100%', maxWidth: 600 }}
                size="large"
                placeholder={'例：03-1234-5678'}
              />
            </Col>
          </SettingsInputContainer>
        </Row>

        {/* 電話番号 */}
        <Row className="mb-6">
          <SettingsInputContainer label={<SettingLabel label={'電話番号'} required />}>
            <SettingInput
              style={{ width: '100%', maxWidth: 600 }}
              size="large"
              placeholder={'例：03-1234-5678'}
            />
          </SettingsInputContainer>
        </Row>

        {/* 所在 */}
        <Row className="mb-6">
          <SettingsInputContainer label={<SettingLabel label={'住所'} required />}>
            <Col className="mb-4" sm={24} md={24} lg={24}>
              <div style={{ width: '100%', maxWidth: 600 }}>
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
              </div>
            </Col>
            <Col className="mb-4" sm={24} md={24} lg={24}>
              <SettingInput
                style={{ width: '100%', maxWidth: 600 }}
                size="large"
                placeholder={'市区町村'}
              />
            </Col>
            <Col sm={24} md={24} lg={24}>
              <SettingInput
                style={{ width: '100%', maxWidth: 600 }}
                size="large"
                placeholder={'番地・建物名・部屋番号'}
              />
            </Col>
          </SettingsInputContainer>
        </Row>

        {/* 住所（カナ表記） */}
        <Row>
          <SettingsInputContainer label={<SettingLabel label={'住所（カナ表記）'} required />}>
            <Col className="mb-4" sm={24} md={24} lg={24}>
              <div style={{ width: '100%', maxWidth: 600 }}>
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
              </div>
            </Col>
            <Col className="mb-4" sm={24} md={24} lg={24}>
              <SettingInput
                style={{ width: '100%', maxWidth: 600 }}
                size="large"
                placeholder={'市区町村（カナ)'}
              />
            </Col>
            <Col sm={24} md={24} lg={24}>
              <SettingInput
                style={{ width: '100%', maxWidth: 600 }}
                size="large"
                placeholder={'番地・建物名・部屋番号（カナ)'}
              />
            </Col>
          </SettingsInputContainer>
        </Row>
      </Col>

      <Col span={24} className="mt-14">
        <Button type="primary" size="large">
          <span style={{ fontWeight: '600' }}>{'保存する（要再審査）'}</span>
        </Button>
      </Col>
    </Row>
  );
};

export default Administrator;
