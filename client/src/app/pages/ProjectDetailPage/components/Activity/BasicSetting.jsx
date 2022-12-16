import React from 'react';
import { Row, Col, Radio, DatePicker } from 'antd';
import { SettingsInputContainer, SettingLabel, SettingTextarea } from 'utils/Sprites';
import styled from 'styled-components/macro';
import ImageUpload from 'app/components/ImageUpload';

// Styles
export const StyledRadioGroup = styled(Radio.Group)`
  width: 100%;
  .ant-radio-button-wrapper {
    width: 50%;
  }
`;

const BasicSetting = () => {
  return (
    <>
      <Row className="mb-8">
        <Col sm={24} md={24} lg={24}>
          <span className="page-title01">{'基本設定'}</span>
        </Col>
      </Row>
      {/* 記事タイトル（最大50文字） */}
      <Row className="mb-6">
        <SettingsInputContainer
          label={<SettingLabel label={'記事タイトル（最大50文字）'} required />}
        >
          <SettingTextarea
            showCount
            maxLength={50}
            rows={2}
            style={{ width: '600px' }}
            placeholder={'子どもたちの未来を守るため、NPO法人コングラントへのご寄付をお願いします'}
          />
        </SettingsInputContainer>
      </Row>
      {/* 概要文（最大400文字） */}
      <Row className="mb-6">
        <SettingsInputContainer label={<SettingLabel label={'概要文（最大400文字）'} required />}>
          <SettingTextarea
            rows={10}
            style={{ width: '600px' }}
            placeholder={
              'NPO法人コングラントは、XXX県XX市でこども食堂を毎週金曜日に開催しています。地元の食材を使って、こどもたちに暖かくておいしい食事をお腹いっぱいに食べてもらいたい！そのためには皆さまからのご支援が必要です。子どもたちのために、食堂の運営資金のサポートをしていただけませんか？'
            }
          />
        </SettingsInputContainer>
      </Row>
      {/* トップ画像 */}
      <Row>
        <SettingsInputContainer label={<SettingLabel label={'トップ画像'} />}>
          <ImageUpload />
          <p style={{ color: 'rgba(0, 0, 0, 0.5)' }}>{'画像は1枚まで設定できます。'}</p>
        </SettingsInputContainer>
      </Row>
      {/* 公開日時 */}
      <Row className="mb-6">
        <SettingsInputContainer label={<SettingLabel label={'公開日時'} required />}>
          <Col sm={24} md={24} lg={24}>
            <DatePicker placeholder={'yyyy-mm-dd'} style={{ width: '256px' }} />
          </Col>
        </SettingsInputContainer>
      </Row>
    </>
  );
};

export default BasicSetting;
