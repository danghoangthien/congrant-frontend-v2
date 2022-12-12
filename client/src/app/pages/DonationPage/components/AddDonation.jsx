import React, { useState } from 'react';
import { Row, Col, Button, Space, DatePicker } from 'antd';
import DrawerHandle from 'app/components/DrawerHandle';
// COMPONENTS
import {
  SettingsInputContainer,
  SettingLabel,
  SettingInput,
  SettingSelect,
  SettingTextarea,
} from 'utils/Sprites';
// STYLE
import { PRIMARY_COLOR, WHITE_COLOR } from 'styles/StyleConstants';
import styled from 'styled-components/macro';

const StyledDrawerHeader = styled.div`
  background: ${PRIMARY_COLOR};
  color: ${WHITE_COLOR};
  border-radius: 0;
  padding: 16px 32px;
  font-size: 24px;
  font-weight: 600;
`;
const StyledForm = styled.div`
  padding: 22px 32px;
`;
const Form = ({ closeDrawer }) => {
  return (
    <>
      <StyledDrawerHeader>
        <Row justify="space-between" align="middle">
          <Col>{'寄付決済の新規登録'}</Col>
          <Col>
            <span
              className="material-symbols-outlined"
              style={{ display: 'flex', cursor: 'pointer' }}
              onClick={() => closeDrawer()}
            >
              close
            </span>
          </Col>
        </Row>
      </StyledDrawerHeader>
      <StyledForm>
        {/* サポーター */}
        <Row className="item mb-6">
          <SettingsInputContainer label={<SettingLabel label={'サポーター'} />}>
            <SettingInput placeholder={'氏名・法人名などを入力してください'} />
          </SettingsInputContainer>
        </Row>

        {/* 受領日 */}
        <Row className="item mb-6">
          <SettingsInputContainer label={<SettingLabel label={'受領日'} required />}>
            <DatePicker size="large" placeholder={'yyyy-mm-dd'} style={{ width: '100%' }} />
          </SettingsInputContainer>
        </Row>

        {/* 入金日 */}
        <Row className="item mb-6">
          <SettingsInputContainer label={<SettingLabel label={'入金日'} required />}>
            <DatePicker size="large" placeholder={'yyyy-mm-dd'} style={{ width: '100%' }} />
          </SettingsInputContainer>
        </Row>

        {/* 寄付タイプ */}
        <Row className="item mb-6">
          <SettingsInputContainer label={<SettingLabel label={'寄付タイプ'} />}>
            <SettingSelect size="large" value={'単発'} disabled />
          </SettingsInputContainer>
        </Row>

        {/* プロジェクト */}
        <Row className="item mb-6">
          <SettingsInputContainer label={<SettingLabel label={'プロジェクト'} />}>
            <SettingSelect size="large" placeholder={'選択してください'} />
          </SettingsInputContainer>
        </Row>

        {/* プラン */}
        <Row className="item mb-6">
          <SettingsInputContainer label={<SettingLabel label={'プラン'} />}>
            <SettingSelect size="large" placeholder={'選択してください'} />
          </SettingsInputContainer>
        </Row>

        {/* 単価・口数 */}
        <Row className="item mb-6">
          <SettingsInputContainer label={<SettingLabel label={'単価・口数'} required />}>
            <Space size={16}>
              <SettingInput placeholder="3,000" suffix="円" />
              <SettingInput placeholder="1" suffix="口" />
            </Space>
          </SettingsInputContainer>
        </Row>

        {/* 金額 */}
        <Row className="item mb-6">
          <SettingsInputContainer label={<SettingLabel label={'金額'} />}>
            <SettingInput placeholder="3,000" suffix="円" />
          </SettingsInputContainer>
        </Row>

        {/* 受領方法 */}
        <Row className="item mb-6">
          <SettingsInputContainer label={<SettingLabel label={'受領方法'} />}>
            <SettingSelect size="large" placeholder={'選択してください'} />
          </SettingsInputContainer>
        </Row>

        {/* 備考欄 */}
        <Row className="item mb-10">
          <SettingsInputContainer label={<SettingLabel label={'備考欄'} />}>
            <SettingTextarea rows="2" placeholder={'備考を入力してください'} />
          </SettingsInputContainer>
        </Row>

        {/* カスタム項目 */}
        <Row className="mb-4">
          <Col sm={24} md={24} lg={24}>
            <span className="page-sub-title">{'カスタム項目'}</span>
          </Col>
        </Row>

        {/* 認知経路 */}
        <Row className="item mb-6">
          <SettingsInputContainer label={<SettingLabel label={'認知経路'} />}>
            <SettingSelect size="large" placeholder={'選択してください'} />
          </SettingsInputContainer>
        </Row>

        {/* 寄付の使用用途 */}
        <Row className="item mb-6">
          <SettingsInputContainer label={<SettingLabel label={'寄付の使用用途'} />}>
            <SettingSelect size="large" placeholder={'選択してください'} />
          </SettingsInputContainer>
        </Row>

        {/* 支援経験 */}
        <Row className="item mb-6">
          <SettingsInputContainer label={<SettingLabel label={'支援経験'} />}>
            <SettingSelect size="large" placeholder={'選択してください'} />
          </SettingsInputContainer>
        </Row>

        {/* 寄付理由 */}
        <Row className="item mb-6">
          <SettingsInputContainer label={<SettingLabel label={'寄付理由'} />}>
            <SettingTextarea rows="2" />
          </SettingsInputContainer>
        </Row>

        <Row className="mt-10">
          <Col sm={24} md={24} lg={24} align="center">
            <Button size="large" type="primary" style={{ width: '100%', fontWeight: '600' }}>
              <span>{'登録する'}</span>
            </Button>
          </Col>
        </Row>
      </StyledForm>
    </>
  );
};
const AddDonation = () => {
  return (
    <>
      {/* 寄付の登録ボタン・Add Funding Button */}
      <DrawerHandle
        key="111"
        drawerTitle="寄付の登録モーダル"
        drawerComponent={<Form />}
        bodyStyle={{
          padding: '0',
        }}
      >
        <Button className="active icon-btn" type="primary" style={{ fontWeight: '300' }}>
          <span className="material-symbols-outlined">add</span>
          {'寄付の登録'}
        </Button>
      </DrawerHandle>
    </>
  );
};

export default AddDonation;