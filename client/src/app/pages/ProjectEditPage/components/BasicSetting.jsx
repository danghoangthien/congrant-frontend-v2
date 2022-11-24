import { useParams } from 'react-router-dom';
// ANTD
import { Row, Col, DatePicker, Space, Tag } from 'antd';
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

export const StyledTag = styled(Tag)`
  width: 40px;
  height: 40px;
  border-radius: 4px;
`;

const BasicSetting = () => {
  const params = useParams();
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

          {/* 目標金額 */}
          {params?.id === '1' ? (
            <>
              {/* プロジェクトの目標値 */}
              <Col span={24} className="mb-8">
                <SettingsInputContainer label={<SettingLabel label={'プロジェクトの目標値'} />}>
                  <Col span={24}>
                    <SettingSelect placeholder={'設定しない'} />
                  </Col>
                  <Col>
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
