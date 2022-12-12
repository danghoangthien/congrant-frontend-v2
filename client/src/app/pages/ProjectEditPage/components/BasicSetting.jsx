import { useState } from 'react';
import { useParams } from 'react-router-dom';
// ANTD
import { Row, Col, DatePicker, Space, Tag, Button, Select } from 'antd';
// SPRITE
import {
  SettingsInputContainer,
  SettingLabel,
  SettingInfoLabel,
  SettingInput,
  SettingTextarea,
  SettingSelect,
  SettingRangePicker,
} from 'utils/Sprites';
import ImageUpload from 'app/components/ImageUpload';
// STYLING
import { StyledSubtitle } from 'app/components/Layout/SettingsLayout.style';
import styled from 'styled-components/macro';
// COMPONENT
import ColorPicker from 'app/components/ColorPicker';
// CONTS
import { PROJECT_TARGETS } from 'utils/consts';
import { PRIMARY_COLOR } from 'styles/StyleConstants';

// テーマカラー選択アイコン・Theme tag
const StyledTag = styled(Tag)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

// テーマカラーのプレビュー・Theme color preview
const StyledTemplatePreview = styled.div`
  width: 100%;
  height: 80px;
  max-width: 600px;
  border-radius: 4px;
  border: 1px solid #d9d9d7;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// テーマカラーのプレビュー・Theme color preview button
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

// テーマカラーのプレビュー・Theme color preview text
const StyledTemplatePreviewText = styled.div`
  padding-left: 16px;
  width: 160px;
  height: 40px;
  line-height: 40px;
  font-weight: 600;
  font-size: 16px;
  border-radius: 1px;
  border-left: solid 3px ${props => props.selectedcolor || PRIMARY_COLOR};
  color: ${props => props.selectedcolor || PRIMARY_COLOR};
`;

const BasicSetting = () => {
  const params = useParams();
  const [selectedColor, setSelectedColor] = useState(null);
  const [projectTarget, setProjectTarget] = useState(null);

  return (
    <>
      <div>
        <Row className="mb-5">
          <Col span={24}>
            <span className="page-title">{'基本設定'}</span>
          </Col>
        </Row>

        <Row className="mb-2">
          {/* ページタイトル（最大50文字） */}
          <Col className="mb-8" span={24}>
            <SettingsInputContainer
              label={<SettingLabel label={'ページタイトル（最大50文字）'} required />}
            >
              <SettingTextarea
                style={{ maxWidth: 600, width: '100%' }}
                placeholder={
                  '子どもたちの未来を守るため、NPO法人コングラントへのご寄付をお願いします'
                }
              />
            </SettingsInputContainer>
          </Col>

          {/* 概要文（最大400文字） */}
          <Col className="mb-8" span={24}>
            <SettingsInputContainer
              label={<SettingLabel label={'概要文（最大400文字）'} required />}
            >
              <SettingTextarea
                style={{ maxWidth: 600, width: '100%' }}
                rows={4}
                placeholder={
                  'NPO法人コングラントは、XXX県XX市でこども食堂を毎週金曜日に開催しています。地元の食材を使って、こどもたちに暖かくておいしい食事をお腹いっぱいに食べてもらいたい！そのためには皆さまからのご支援が必要です。子どもたちのために、食堂の運営資金のサポートをしていただけませんか？'
                }
              />
            </SettingsInputContainer>
          </Col>

          {/* ボタンテキスト */}
          <Col className="mb-8" span={24}>
            <SettingsInputContainer label={<SettingInfoLabel label={'ボタンテキスト'} required />}>
              <SettingInput
                size="large"
                style={{ maxWidth: 600, width: '100%' }}
                placeholder={'寄付をする'}
              />
            </SettingsInputContainer>
          </Col>

          {/* トップ画像 */}
          <Col className="mb-8" span={24}>
            <SettingsInputContainer label={<SettingLabel label={'トップ画像'} required />}>
              <Row>
                <ImageUpload maxFiles={3} />
              </Row>
              <Row>
                <StyledSubtitle>{'画像は3枚まで設定できます。'}</StyledSubtitle>
              </Row>
            </SettingsInputContainer>
          </Col>

          {/* テーマカラー */}
          <Col className="mb-8">
            <SettingsInputContainer label={<SettingLabel label={'テーマカラー'} required />}>
              <Col className="mb-6" span={24}>
                <Space size={24} align="center">
                  <ColorPicker onColorPickerChange={color => setSelectedColor(color)} />
                  <Row>
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
                  </Row>
                </Space>
              </Col>
              <Col span={24}>
                {selectedColor && (
                  <StyledTemplatePreview>
                    <Space size={24}>
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
          </Col>

          {/* 目標金額 */}
          {params?.id !== '2' ? (
            <>
              {/* プロジェクトの目標値 */}
              <Col span={24} className="mb-8">
                <SettingsInputContainer label={<SettingLabel label={'プロジェクトの目標値'} />}>
                  <Col style={{ width: '600px' }}>
                    <Row gutter={16}>
                      <Col span={12}>
                        <SettingSelect
                          onChange={value => setProjectTarget(value)}
                          placeholder={'設定しない'}
                          value={projectTarget}
                          size="large"
                        >
                          <Select.Option value={0}>{PROJECT_TARGETS[0]}</Select.Option>
                          <Select.Option value={1}>{PROJECT_TARGETS[1]}</Select.Option>
                          <Select.Option value={2}>{PROJECT_TARGETS[2]}</Select.Option>
                        </SettingSelect>
                      </Col>
                      <Col span={12}>
                        {projectTarget === 1 && (
                          <SettingInput size="large" placeholder={'1,000,000'} suffix="円" />
                        )}
                        {projectTarget === 2 && (
                          <SettingInput size="large" placeholder={'100'} suffix="人" />
                        )}
                      </Col>
                    </Row>
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
                      size="large"
                      placeholder={'yyyy-mm-dd hh:mm'}
                      style={{ maxWidth: 600, width: '100%' }}
                    />
                  </Col>
                  <Col span={24}>
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
                    <SettingInput
                      size="large"
                      style={{ maxWidth: 600, width: '100%' }}
                      placeholder={'1,000,000'}
                      suffix="円"
                    />
                  </Col>
                  <Col span={24}>
                    <StyledSubtitle>{'受付開始後の変更はできません'}</StyledSubtitle>
                  </Col>
                </SettingsInputContainer>
              </Col>

              {/* ネクストゴール */}
              <Col span={24} className="mb-8">
                <SettingsInputContainer label={<SettingLabel label={'ネクストゴール'} />}>
                  <Col span={24}>
                    <SettingInput
                      size="large"
                      style={{ maxWidth: 600, width: '100%' }}
                      placeholder={'2,000,000'}
                      suffix="円"
                    />
                  </Col>
                  <Col>
                    <StyledSubtitle>{'受付開始後の変更はできません'}</StyledSubtitle>
                  </Col>
                </SettingsInputContainer>
              </Col>

              {/* 受付期間 */}
              <Col span={24}>
                <SettingsInputContainer label={<SettingLabel label={'受付期間'} required />}>
                  <Col span={24}>
                    <SettingRangePicker
                      style={{ maxWidth: 600, width: '100%' }}
                      placeholder={['開始日', '終了日']}
                    />
                  </Col>
                  <Col span={24}>
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
