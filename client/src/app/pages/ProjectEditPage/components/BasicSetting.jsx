import { Row, Col, Button, DatePicker, Space, Radio, Tag } from 'antd';

import {
  SettingsInputContainer,
  SettingLabel,
  SettingInfoLabel,
  SettingInput,
  SettingTextarea,
} from './../../GroupSettingsPage/components/Sprites';

import { StyledSubtitle, StyledUploadPicture } from 'app/components/Layout/SettingsLayout.style';

import styled from 'styled-components/macro';

export const StyledTag = styled(Tag)`
  width: 40px;
  height: 40px;
  border-radius: 4px;
`;

const BasicSetting = () => {
  return (
    <>
      <div className="item ml-5">
        <Row className="mb-5">
          <Col sm={24} md={24} lg={24}>
            <span className="page-title">{'基本設定'}</span>
          </Col>
        </Row>
        <Row className="item mb-2">
          <SettingsInputContainer
            label={<SettingLabel label={'ページタイトル（最大50文字）'} required />}
          >
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <SettingTextarea
                placeholder={
                  '子どもたちの未来を守るため、NPO法人コングラントへのご寄付をお願いします'
                }
              />
            </Col>
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingLabel label={'概要文（最大400文字）'} required />}>
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <SettingTextarea
                placeholder={
                  'NPO法人コングラントは、XXX県XX市でこども食堂を毎週金曜日に開催しています。地元の食材を使って、こどもたちに暖かくておいしい食事をお腹いっぱいに食べてもらいたい！そのためには皆さまからのご支援が必要です。子どもたちのために、食堂の運営資金のサポートをしていただけませんか？'
                }
              />
            </Col>
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingInfoLabel label={'ボタンテキスト'} required />}>
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <SettingInput placeholder={'寄付をする'} />
            </Col>
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingInfoLabel label={'団体ロゴ'} />}>
            <Space>
              <StyledUploadPicture
                style={{
                  width: '124px',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    background: 'url(/markus-spiske-97Rpu-UmCaY-unsplash-300x200.jpeg) center',
                    opacity: '0.8',
                  }}
                ></div>
              </StyledUploadPicture>

              <StyledUploadPicture style={{ width: '124px' }}>
                <Space direction="vertical" align="center">
                  <span className="upload-picture-title">{'+'}</span>
                  <span className="upload-picture-title">{'アップロード'}</span>
                </Space>
              </StyledUploadPicture>
            </Space>
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingInfoLabel label={'ボタンテキスト'} required />}>
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <Space>
                {[
                  '#0457C9',
                  '#0094CB',
                  '#449A5F',
                  '#35A0A0',
                  '#D70017',
                  '#DE6741',
                  '#DE478D',
                  '#A64A97',
                  '#FCB731',
                  '#7D5124',
                ].map(color => (
                  <StyledTag color={color} />
                ))}
              </Space>
            </Col>
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingLabel label={'テーマカラー'} required />}>
            <Col className="item" sm={24} md={24} lg={24}>
              <SettingInput placeholder={'1,000,000'} suffix="円" />
            </Col>
            <Col>
              <StyledSubtitle>{'受付開始後の変更はできません'}</StyledSubtitle>
            </Col>
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingLabel label={'ネクストゴール'} />}>
            <Col className="item" sm={24} md={24} lg={24}>
              <SettingInput placeholder={'2,000,000'} suffix="円" />
            </Col>
            <Col>
              <StyledSubtitle>{'受付開始後の変更はできません'}</StyledSubtitle>
            </Col>
          </SettingsInputContainer>
          <SettingsInputContainer label={<SettingLabel label={'受付期間'} required />}>
            <Col className="item" sm={24} md={24} lg={24}>
              <SettingInput placeholder={'2,000,000'} suffix="円" />
            </Col>
            <Col>
              <StyledSubtitle>{'開始日'}</StyledSubtitle>
            </Col>
          </SettingsInputContainer>
        </Row>
      </div>
    </>
  );
};

export default BasicSetting;
