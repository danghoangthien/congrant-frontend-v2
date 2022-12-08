import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
// ANTD
import { Row, Col, Checkbox, Divider } from 'antd';
// COMPONENT
import {
  SettingsInputContainer,
  FormInput,
  FormLabel,
  FormRadio,
  SettingTextarea,
  FormRadioButtonGroup,
  FormRadioGroupHorizontal,
  FormRadioButton,
  FormCheckbox,
  FormHepler,
  FormSelect,
  HorizontalInputContainer,
} from 'utils/Sprites';
// STYLE
import { StyledButton, StyledBackButton } from './PaymentPage.style';
// MODEL
import './Models/index';

const Step2 = () => {
  const [type, setType] = useState('1');
  const [destination, setDestination] = useState(false);
  const { method } = useSelector(state => state['paymentMethod']);
  const dispatch = useDispatch();
  // プロジェクトのテーマカラー・Project Theme Color
  const onChange = e => {
    setType(e.target.value);
  };
  const handleChangeDestination = e => {
    setDestination(e.target.checked);
  };

  return (
    <>
      {/* 申込者情報 */}
      <Row className="mb-13">
        <div className="payment-form-title">申込者情報</div>
        {/* 個人 / 法人 */}
        <Col className="mb-7" span={24}>
          <SettingsInputContainer label={<FormLabel required label={'個人 / 法人'} />}>
            <FormRadioButtonGroup defaultValue="1" onChange={onChange}>
              <FormRadioButton value="1" label="個人" />
              <FormRadioButton value="2" label="法人" />
            </FormRadioButtonGroup>
          </SettingsInputContainer>
        </Col>

        {/* メールアドレス */}
        <Col className="mb-7" span={24}>
          <SettingsInputContainer label={<FormLabel required label={'メールアドレス'} />}>
            <FormInput size="large" required placeholder="tanaka@congrant.com" />
          </SettingsInputContainer>
          <FormHepler>
            メールを確実にお届けするために、PCメールアドレスをご利用ください。
          </FormHepler>
        </Col>

        {type === '1' && (
          <>
            {/* 個人はここから・Individual */}
            {/* 氏名 */}
            <Col className="mb-7" span={24}>
              <SettingsInputContainer label={<FormLabel label={'氏名'} required />}>
                <Col span={24}>
                  <Row gutter={10}>
                    <Col span={12}>
                      <FormInput
                        required
                        size="large"
                        placeholder={'姓'}
                        style={{ width: '100%' }}
                      />
                    </Col>
                    <Col span={12}>
                      <FormInput
                        required
                        size="large"
                        placeholder={'名'}
                        style={{ width: '100%' }}
                      />
                    </Col>
                  </Row>
                </Col>
              </SettingsInputContainer>
            </Col>

            {/* ふりがな */}
            <Col className="mb-7" span={24}>
              <SettingsInputContainer label={<FormLabel label={'ふりがな'} required />}>
                <Col span={24}>
                  <Row gutter={10}>
                    <Col span={12}>
                      <FormInput
                        required
                        size="large"
                        placeholder={'せい'}
                        style={{ width: '100%' }}
                      />
                    </Col>
                    <Col span={12}>
                      <FormInput
                        required
                        size="large"
                        placeholder={'めい'}
                        style={{ width: '100%' }}
                      />
                    </Col>
                  </Row>
                </Col>
              </SettingsInputContainer>
            </Col>
          </>
        )}

        {type === '2' && (
          <>
            {/* 法人はここから・Corporation */}
            {/* 法人名 */}
            <Col className="mb-7" span={24}>
              <SettingsInputContainer label={<FormLabel label={'法人名'} required />}>
                <FormInput
                  required
                  size="large"
                  placeholder={'コングラント株式会社'}
                  style={{ width: '100%' }}
                />
              </SettingsInputContainer>
            </Col>

            {/* 担当者名 */}
            <Col className="mb-7" span={24}>
              <SettingsInputContainer label={<FormLabel label={'担当者名'} required />}>
                <Col span={24}>
                  <Row gutter={10}>
                    <Col span={12}>
                      <FormInput
                        required
                        size="large"
                        placeholder={'姓'}
                        style={{ width: '100%' }}
                      />
                    </Col>
                    <Col span={12}>
                      <FormInput
                        required
                        size="large"
                        placeholder={'名'}
                        style={{ width: '100%' }}
                      />
                    </Col>
                  </Row>
                </Col>
              </SettingsInputContainer>
            </Col>

            {/* 担当者名（ふりがな） */}
            <Col className="mb-7" span={24}>
              <SettingsInputContainer label={<FormLabel label={'担当者名（ふりがな）'} required />}>
                <Col span={24}>
                  <Row gutter={10}>
                    <Col span={12}>
                      <FormInput
                        required
                        size="large"
                        placeholder={'せい'}
                        style={{ width: '100%' }}
                      />
                    </Col>
                    <Col span={12}>
                      <FormInput
                        required
                        size="large"
                        placeholder={'めい'}
                        style={{ width: '100%' }}
                      />
                    </Col>
                  </Row>
                </Col>
              </SettingsInputContainer>
            </Col>

            <Col className="mb-7" span={24}>
              <SettingsInputContainer label={<FormLabel label={'担当者名 部署・肩書き'} />}>
                <FormInput
                  size="large"
                  placeholder={'コングラント株式会社'}
                  style={{ width: '100%' }}
                />
              </SettingsInputContainer>
            </Col>
          </>
        )}

        {/* 広報物への掲載 */}
        <Col className="mb-7" span={24}>
          <SettingsInputContainer label={<FormLabel label={'広報物への掲載'} />}>
            <Col span={24}>
              <Checkbox checked>広報物への氏名掲載を許可する</Checkbox>
            </Col>
          </SettingsInputContainer>
        </Col>

        {type === '1' && (
          <>
            {/* 性別・個人・Indiviual */}
            <Col className="mb-7" span={24}>
              <SettingsInputContainer label={<FormLabel required label={'性別'} />}>
                <FormRadioGroupHorizontal defaultValue="a" style={{ width: '100%' }}>
                  <FormRadio value="a" label="男性" />
                  <FormRadio value="b" label="女性" />
                  <FormRadio value="b" label="その他" />
                </FormRadioGroupHorizontal>
              </SettingsInputContainer>
            </Col>

            {/* 生年月日 */}
            <Col className="mb-7" span={24}>
              <HorizontalInputContainer label={<FormLabel required label={'生年月日'} />}>
                <Row gutter={10} className="horizontal-input-wrapper">
                  <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }}>
                    <FormSelect
                      style={{ width: '100%' }}
                      required
                      size="large"
                      placeholder="年"
                    ></FormSelect>
                  </Col>
                  <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }}>
                    <FormSelect
                      style={{ width: '100%' }}
                      required
                      size="large"
                      placeholder="月"
                    ></FormSelect>
                  </Col>
                  <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }}>
                    <FormSelect
                      style={{ width: '100%' }}
                      required
                      size="large"
                      placeholder="日"
                    ></FormSelect>
                  </Col>
                </Row>
              </HorizontalInputContainer>
            </Col>
          </>
        )}

        {/* 電話番号 */}
        <Col className="mb-7" span={24}>
          <SettingsInputContainer label={<FormLabel label={'電話番号'} />}>
            <FormInput size="large" placeholder="08012345678" />
          </SettingsInputContainer>
        </Col>

        {/* 住所 */}
        <Col className="mb-7" span={24}>
          <SettingsInputContainer
            label={<FormLabel label={type === '1' ? '住所' : '所在地'} required />}
          >
            <Col span={24} className="mb-3">
              <FormSelect
                style={{ width: '100%' }}
                required
                size="large"
                defaultValue="日本"
                options={[
                  {
                    value: '日本',
                    label: '日本',
                  },
                  {
                    value: 'アメリカ',
                    label: 'アメリカ',
                  },
                ]}
              ></FormSelect>
            </Col>
            <Col span={24} className="mb-3">
              <Row gutter={10}>
                <Col span={12}>
                  <FormInput
                    size="large"
                    addonBefore="〒"
                    placeholder={'0000000'}
                    style={{ width: '100%' }}
                  />
                </Col>
                <Col span={12}>
                  <FormInput
                    size="large"
                    disabled
                    placeholder={'都道府県'}
                    style={{ width: '100%' }}
                  />
                </Col>
              </Row>
            </Col>
            <Col span={24} className="mb-3">
              <FormInput size="large" required placeholder="市区町村" />
            </Col>
            <Col span={24} className="mb-3">
              <FormInput size="large" required placeholder="番地・建物名・部屋番号等" />
            </Col>
            <Col span={24}>
              <FormCheckbox onChange={handleChangeDestination}>
                郵便物の送付先を別途指定する
              </FormCheckbox>
            </Col>
          </SettingsInputContainer>
        </Col>

        {/* 郵便物の送付先 */}
        {destination && (
          <Col className="mb-7" span={24}>
            <SettingsInputContainer label={<FormLabel label={'郵便物の送付先'} required />}>
              <Col span={24} className="mb-3">
                <FormSelect
                  style={{ width: '100%' }}
                  required
                  size="large"
                  defaultValue="日本"
                  options={[
                    {
                      value: '日本',
                      label: '日本',
                    },
                    {
                      value: 'アメリカ',
                      label: 'アメリカ',
                    },
                  ]}
                ></FormSelect>
              </Col>
              <Col span={24} className="mb-3">
                <Row gutter={10}>
                  <Col span={12}>
                    <FormInput
                      size="large"
                      addonBefore="〒"
                      placeholder={'0000000'}
                      style={{ width: '100%' }}
                    />
                  </Col>
                  <Col span={12}>
                    <FormInput
                      size="large"
                      disabled
                      placeholder={'都道府県'}
                      style={{ width: '100%' }}
                    />
                  </Col>
                </Row>
              </Col>
              <Col span={24} className="mb-3">
                <FormInput size="large" required placeholder="市区町村" />
              </Col>
              <Col span={24} className="mb-3">
                <FormInput size="large" required placeholder="番地・建物名・部屋番号等" />
              </Col>
              <Col span={24} className="mb-3">
                <FormInput size="large" required placeholder="会社名・所属" />
              </Col>
              <Col span={24} className="mb-3">
                <FormInput size="large" required placeholder="宛名" />
              </Col>
            </SettingsInputContainer>
          </Col>
        )}

        {/* お子様のお名前 */}
        <Col className="mb-7" span={24}>
          <SettingsInputContainer label={<FormLabel label={'お子様のお名前'} />}>
            <FormHepler className="mb-2">
              あなたが施設利用者の場合、お子様のお名前を教えてください。
            </FormHepler>
            <FormInput size="large" placeholder="氏名" />
          </SettingsInputContainer>
        </Col>

        {/* 認知経路 */}
        <Col className="mb-7" span={24}>
          <SettingsInputContainer label={<FormLabel label={'認知経路'} />}>
            <FormHepler className="mb-2">当団体をどこで知りましたか？</FormHepler>
            <FormSelect
              style={{ width: '100%' }}
              size="large"
              placeholder="選択してください"
            ></FormSelect>
          </SettingsInputContainer>
        </Col>

        {/* 備考欄 */}
        <Col span={24}>
          <SettingsInputContainer label={<FormLabel label={'備考欄'} />}>
            <FormHepler className="mb-2">質問・確認事項があれば記入してください。</FormHepler>
            <SettingTextarea size="large" rows={3} />
          </SettingsInputContainer>
        </Col>
      </Row>

      {/* 応援コメント */}
      <Row className="mb-8">
        <Col span={24}>
          <div className="payment-form-title">応援コメント</div>
        </Col>
        <Col className="mb-6" span={24}>
          <SettingTextarea size="large" rows={3} />
        </Col>
        <Col className="mb-6" span={24}>
          <FormCheckbox>コメントの公開を許可する</FormCheckbox>
        </Col>
        <Col className="mb-6" span={24}>
          <FormInput size="large" placeholder={'田中 太郎'} style={{ width: '100%' }} />
        </Col>
      </Row>

      {/* ボタン */}
      {method === '2' ? (
        <>
          {/* 合計金額 */}
          <Col span={24} className="mb-8">
            <Row className="mb-5" align="middle" justify="space-between">
              <span className="total-money-title">合計金額</span>
              <span className="total-money-amount">3,000円</span>
            </Row>
            <Divider />
          </Col>

          {/* ボタン */}
          <Col span={24}>
            <Row justify="space-between">
              <StyledBackButton
                size="large"
                onClick={() => {
                  dispatch.paymentStep.setActive('2');
                }}
              >
                <span className="material-symbols-outlined icon">arrow_back_ios</span>申込内容を修正
              </StyledBackButton>
              <StyledButton
                className="back-btn"
                type="primary"
                size="large"
                style={{ width: '114px' }}
                onClick={() => {
                  dispatch.paymentStep.setActive('4');
                }}
              >
                申し込む
              </StyledButton>
            </Row>
          </Col>
        </>
      ) : (
        <>
          <Row justify="space-between">
            <StyledBackButton
              size="large"
              onClick={() => {
                dispatch.paymentStep.setActive('1');
              }}
            >
              <span className="material-symbols-outlined icon">arrow_back_ios</span>申込内容を修正
            </StyledBackButton>
            <StyledButton
              className="back-btn"
              type="primary"
              size="large"
              style={{ width: '112px' }}
              onClick={() => {
                dispatch.paymentStep.setActive('3');
              }}
            >
              次へ
            </StyledButton>
          </Row>
        </>
      )}
    </>
  );
};

export default Step2;
