import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
// ANTD
import { Row, Col, DatePicker, Space, Tag, Button, Select } from 'antd';
// HELPERS
import { hexToRgbA } from 'utils/helper';
// COMPONENTS
import {
  SettingsInputContainer,
  SettingLabel,
  SettingInfoLabel,
  SettingInput,
  SettingTextarea,
  SettingSelect,
  SettingRangePicker,
} from '../../CorporationSettingPage/components/Sprites';
import ImageUpload from 'app/components/ImageUpload';
// STYLING
import { StyledSubtitle } from 'app/components/Layout/SettingsLayout.style';
import styled from 'styled-components/macro';
import { PRIMARY_COLOR } from 'styles/StyleConstants';
import ColorPicker from 'app/components/ColorPicker';
import { PROJECT_TARGETS } from 'utils/consts';

const StyledTag = styled(Tag)`
  width: 32px;
  height: 32px;
  border-radius: 4px;
`;

const StyledTemplatePreview = styled.div`
  width: 100%;
  height: 80px;
  border-radius: 4px;
  border: 1px solid #d9d9d7;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledTemplatePreviewButton = styled(Button)`
  width: 160px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid ${props => props.selectedcolor || PRIMARY_COLOR};
  color: #ffffff;
  font-weight: 600 !important;
  font-size: 16px;
  background-color: ${props => props.selectedcolor || PRIMARY_COLOR};
  &:hover {
    background-color: ${props => props.selectedcolor || PRIMARY_COLOR};
    border-color: ${props => props.selectedcolor || PRIMARY_COLOR} !important;
    color: #ffffff;
  }
`;

const StyledTemplatePreviewText = styled.div`
  text-align: center;
  width: 160px;
  height: 40px;
  line-height: 40px;
  font-weight: 600;
  font-size: 16px;
  border-radius: 1px;
  border-left: solid 3px ${props => props.selectedcolor || PRIMARY_COLOR};
  color: ${props => props.selectedcolor || PRIMARY_COLOR};
  background-color: ${props => hexToRgbA(props.selectedcolor, 0.05) || PRIMARY_COLOR};
`;

const BasicSetting = () => {
  const params = useParams();
  const [selectedColor, setSelectedColor] = useState(null);
  const [projectTarget, setProjectTarget] = useState(null);
  console.log(selectedColor);

  return (
    <>
      <div>
        <Row className="mb-5">
          <Col span={24}>
            <span className="page-title">{'基本設定'}</span>
          </Col>
        </Row>

        {/* ページタイトル（最大50文字） */}
        <Row className="item mb-2">
          <SettingsInputContainer
            label={<SettingLabel label={'ページタイトル（最大50文字）'} required />}
          >
            <Col className="item mb-8" span={24}>
              <SettingTextarea
                placeholder={
                  '子どもたちの未来を守るため、NPO法人コングラントへのご寄付をお願いします'
                }
              />
            </Col>
          </SettingsInputContainer>

          {/* 概要文（最大400文字） */}
          <SettingsInputContainer label={<SettingLabel label={'概要文（最大400文字）'} required />}>
            <Col className="item mb-8" span={24}>
              <SettingTextarea
                placeholder={
                  'NPO法人コングラントは、XXX県XX市でこども食堂を毎週金曜日に開催しています。地元の食材を使って、こどもたちに暖かくておいしい食事をお腹いっぱいに食べてもらいたい！そのためには皆さまからのご支援が必要です。子どもたちのために、食堂の運営資金のサポートをしていただけませんか？'
                }
              />
            </Col>
          </SettingsInputContainer>

          {/* ボタンテキスト */}
          <SettingsInputContainer label={<SettingInfoLabel label={'ボタンテキスト'} required />}>
            <Col className="item mb-8" span={24}>
              <SettingInput placeholder={'寄付をする'} />
            </Col>
          </SettingsInputContainer>

          {/* トップ画像 */}
          <div className="mb-8">
            <SettingsInputContainer label={<SettingLabel label={'トップ画像'} required />}>
              <Space>
                <ImageUpload maxFiles={3} />
              </Space>
              <Row>
                <StyledSubtitle>{'画像は3枚まで設定できます。'}</StyledSubtitle>
              </Row>
            </SettingsInputContainer>
          </div>

          {/* テーマカラー */}
          <SettingsInputContainer label={<SettingLabel label={'テーマカラー'} required />}>
            <Col className="item mb-5" span={24}>
              <Space>
                <ColorPicker onColorPickerChange={color => setSelectedColor(color)} />
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
                  <StyledTag
                    onClick={() => setSelectedColor(color)}
                    style={{
                      cursor: 'pointer',
                    }}
                    color={color}
                  />
                ))}
              </Space>
            </Col>
            <Col className="item mb-5" span={24}>
              {selectedColor && (
                <StyledTemplatePreview>
                  <Space>
                    <StyledTemplatePreviewButton selectedcolor={selectedColor}>
                      {'ボタンサンプル'}
                    </StyledTemplatePreviewButton>
                    <StyledTemplatePreviewText selectedcolor={selectedColor}>
                      {'見出しサンプル'}
                    </StyledTemplatePreviewText>
                  </Space>
                </StyledTemplatePreview>
              )}
            </Col>
          </SettingsInputContainer>

          {/* 目標金額 */}
          {params?.id !== '2' ? (
            <>
              {/* プロジェクトの目標値 */}
              <Col span={24} className="mb-8">
                <SettingsInputContainer label={<SettingLabel label={'プロジェクトの目標値'} />}>
                  <Col span={24}>
                    <SettingSelect
                      onChange={value => setProjectTarget(value)}
                      placeholder={'設定しない'}
                      value={projectTarget}
                    >
                      <Select.Option value={1}>{PROJECT_TARGETS[1]}</Select.Option>
                      <Select.Option value={2}>{PROJECT_TARGETS[2]}</Select.Option>
                    </SettingSelect>
                  </Col>
                  <Col className="mt-5" span={24}>
                    {projectTarget === 1 && <SettingInput placeholder={'1,000,000'} suffix="円" />}
                    {projectTarget === 2 && <SettingInput placeholder={'100'} suffix="人" />}
                  </Col>
                  <Col className="mt-5">
                    <StyledSubtitle>
                      <div>
                        管理画面のホームに表示されるダッシュボードに影響します。一般には公開されません。
                        <br />
                        あとから変更することも可能です。
                      </div>
                    </StyledSubtitle>
                  </Col>
                </SettingsInputContainer>
              </Col>

              {/* 受付開始日時 */}
              <Col span={24}>
                <SettingsInputContainer label={<SettingLabel label={'受付開始日時'} />}>
                  <Col span={24}>
                    <DatePicker
                      showTime
                      style={{ width: '100%' }}
                      placeholder={'yyyy-mm-dd hh:mm'}
                    />
                  </Col>
                  <Col>
                    <StyledSubtitle>
                      <div>
                        受付開始日時を指定すると、その日時まで寄付ボタンが押せなくなります。
                        <br />
                        ページの“公開日”を指定する機能ではありませんのでご注意ください（ページは審査完了後すぐに公開されます）。
                      </div>
                    </StyledSubtitle>
                  </Col>
                </SettingsInputContainer>
              </Col>
            </>
          ) : (
            <>
              {/* 目標金額 */}
              <Col span={24} className="mb-8">
                <SettingsInputContainer label={<SettingLabel label={'目標金額'} required />}>
                  <Col span={24}>
                    <SettingInput placeholder={'1,000,000'} suffix="円" />
                  </Col>
                  <Col>
                    <StyledSubtitle>{'受付開始後の変更はできません'}</StyledSubtitle>
                  </Col>
                </SettingsInputContainer>
              </Col>

              {/* ネクストゴール */}
              <Col span={24} className="mb-8">
                <SettingsInputContainer label={<SettingLabel label={'ネクストゴール'} />}>
                  <Col span={24}>
                    <SettingInput placeholder={'2,000,000'} suffix="円" />
                  </Col>
                  <Col>
                    <StyledSubtitle>{'受付開始後の変更はできません'}</StyledSubtitle>
                  </Col>
                </SettingsInputContainer>
              </Col>

              {/* 受付期間 */}
              <Col span={24}>
                <SettingsInputContainer label={<SettingLabel label={'受付期間'} required />}>
                  <Col>
                    <SettingRangePicker placeholder={['開始日', '終了日']} />
                  </Col>
                  <Col>
                    <StyledSubtitle>{'受付開始後の変更はできません'}</StyledSubtitle>
                  </Col>
                </SettingsInputContainer>
              </Col>
            </>
          )}
        </Row>
      </div>
    </>
  );
};

export default BasicSetting;
