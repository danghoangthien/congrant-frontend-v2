import { useDispatch } from 'react-redux';
import { useState } from 'react';
// ANTD
import { Row, Col, Space, Divider, Checkbox } from 'antd';
// import ReactInputMask from 'react-input-mask';
// COMPONENT
import {
  SettingsInputContainer,
  FormLabel,
  FormInput,
  FormRadio,
  FormRadioGroupHorizontal,
} from 'utils/Sprites';
import NoticeModal from 'app/components/Modal/NoticeModal';
// STYLE
import {
  StyledButton,
  StyledBackButton,
  StyledNotice,
  StyledPrivacyCard,
  StyledNoticeList,
} from './PaymentPage.style';
import MaskedInput from 'app/components/MaskedInput';
// MODEL
import './Models/index';
// IMAGE
import CardImage from 'styles/assets/icon_credit_pay.svg';
import ApplePayImage from 'styles/assets/icon_apple_pay.svg';
import GooglePayImage from 'styles/assets/icon_gg_pay.svg';
// UTILS
import { isChrome, isSafari } from 'react-device-detect';

const Step3 = () => {
  const dispatch = useDispatch();
  const [cardValue, setCardValue] = useState('');
  const [expiryValue, setExpiryValue] = useState('');
  const [cvcValue, setCvcValue] = useState('');
  console.log(isSafari);
  console.log(isChrome);

  const PayImage = isSafari ? ApplePayImage : isChrome && GooglePayImage;

  return (
    <>
      <div className="payment-form-title">決済情報</div>
      <Row>
        <Col className="mb-7" span={24}>
          {/* 決済方法 */}
          <Col className="mb-3">
            <SettingsInputContainer label={<FormLabel required label={'決済方法'} />}>
              <FormRadioGroupHorizontal defaultValue="a" style={{ width: '100%' }}>
                <FormRadio
                  value="a"
                  fontSize={14}
                  gap={2}
                  image={CardImage}
                  label="クレジットカード"
                  style={{ padding: '11px 8px', width: '100%' }}
                />
                {/* <FormRadio
                  value="b"
                  fontSize={14}
                  gap={2}
                  image={GooglePayImage}
                  label="Google Pay"
                  style={{ padding: '11px 8px', width: '100%' }}
                /> */}
                <FormRadio
                  value="c"
                  fontSize={14}
                  gap={2}
                  image={isSafari ? ApplePayImage : isChrome && GooglePayImage}
                  label={isSafari ? 'Apple Pay' : isChrome && 'Google Pay'}
                  style={{ padding: '11px', width: '100%' }}
                />
              </FormRadioGroupHorizontal>
            </SettingsInputContainer>
          </Col>
          {/* 警告 */}
          <Col className="mb-3">
            <StyledNotice>
              <Space align="center">
                <span
                  className="material-symbols-outlined fill-icon icon"
                  style={{ fontSize: '16px' }}
                >
                  lock
                </span>
                <span>カード情報は暗号化され、安全に管理されます。</span>
              </Space>
            </StyledNotice>
          </Col>
        </Col>

        {/* カード情報 */}
        <Col span={24} className="mb-10">
          {/* カード番号 */}
          <Col className="mb-6" span={24}>
            <SettingsInputContainer label={<FormLabel label={'カード番号'} required />}>
              <MaskedInput
                value={cardValue}
                onChange={e => setCardValue(e.target.value)}
                mask="9999 9999 9999 9999"
                placeholder="0000 0000 0000 0000"
                maskChar={null}
              />
            </SettingsInputContainer>
          </Col>
          <Col span={24} className="mb-6">
            <Row gutter={10}>
              {/* 有効期限 */}
              <Col span={12} className="pa-0">
                <SettingsInputContainer label={<FormLabel label={'有効期限'} required />}>
                  <MaskedInput
                    value={expiryValue}
                    onChange={e => setExpiryValue(e.target.value)}
                    mask="9999 / 99"
                    placeholder="yyyy / mm"
                    maskChar={null}
                  />
                </SettingsInputContainer>
              </Col>
              {/* CVC */}
              <Col span={12} className="pa-0">
                <SettingsInputContainer label={<FormLabel label={'CVC'} required />}>
                  <MaskedInput
                    value={cvcValue}
                    onChange={e => setCvcValue(e.target.value)}
                    mask="9999"
                    placeholder="0000"
                    maskChar={null}
                  />
                </SettingsInputContainer>
              </Col>
            </Row>
          </Col>
          <Col className="mb-10" span={24}>
            <SettingsInputContainer label={<FormLabel label={'利用者名'} required />}>
              <FormInput size="large" required placeholder="TARO TANAKA" />
            </SettingsInputContainer>
          </Col>
        </Col>

        {/* 合計金額 */}
        <Col span={24}>
          <Row align="middle" justify="space-between">
            <span className="total-money-title">合計金額</span>
            <span className="total-money-amount">3,000円</span>
          </Row>
          <Divider style={{ margin: '24px 0 30px' }} />
        </Col>

        {/* 同意事項・Agreement */}
        <Col span={24} className="mb-4">
          <Checkbox>
            決済サービスの
            <a
              className="external-link"
              href="https://www.google.com/"
              target="_blank"
              rel="noreferrer"
            >
              利用規約
            </a>
            ・
            <a
              className="external-link"
              href="https://www.google.com/"
              target="_blank"
              rel="noreferrer"
            >
              プライバシーポリシー
            </a>
            に同意します
          </Checkbox>
        </Col>
        <Col span={24} className="mb-6">
          <StyledNoticeList>
            <li>
              <NoticeModal
                text="寄付決済サービスについて"
                title="寄付決済サービスについて"
                content="本ページはコングラント株式会社が提供する寄付決済・管理サービス「コングラント」を利用して作成されています。「コングラント」は利用団体に提供されるシステムであり、コングラント株式会社は利用団体の寄付募集の実行には関与しておりません。"
              />
            </li>
            <li>
              <NoticeModal
                text="クレジットカード決済について"
                title="クレジットカード決済について"
                content="決済者のクレジットカード情報はコングラントが提携する決済代行会社が適切に管理します。"
              />
            </li>
            <li>
              <NoticeModal
                text="決済のキャンセル・返金について"
                title="決済のキャンセル・返金について"
                content="お客様の事情による決済後のキャンセル・返金はお受けできません。あらかじめご了承ください。"
              />
            </li>
          </StyledNoticeList>
        </Col>
        <Col span={24} className="mb-4">
          <Checkbox>支援先からの確認事項に同意します</Checkbox>
        </Col>
        <Col span={24} className="mb-8">
          <StyledPrivacyCard>
            <div className="title">同意事項</div>
            <div className="content">
              ・団体が設定した同意事項が入ります。団体が設定した同意事項が入ります。団体が設定した同意事項が入ります。団体が設定した同意事項が入ります。団体が設定した同意事項が入ります。団体が設定した同意事項が入ります。団体が設定した同意事項が入ります。団体が設定した同意事項が入ります。
              <br />
              ・団体が設定した同意事項が入ります。団体が設定した同意事項が入ります。団体が設定した同意事項が入ります。団体が設定した同意事項が入ります。団体が設定した同意事項が入ります。団体が設定した同意事項が入ります。団体が設定した同意事項が入ります。
            </div>
          </StyledPrivacyCard>
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
      </Row>
    </>
  );
};

export default Step3;
