import { useDispatch } from 'react-redux';
// ANTD
import { Row, Col, Space, Divider } from 'antd';
// COMPONENT
import {
  SettingsInputContainer,
  FormLabel,
  FormInput,
  FormRadio,
  FormRadioGroupHorizontal,
} from 'utils/Sprites';
// STYLE
import styled from 'styled-components/macro';
import { StyledButton, StyledBackButton, StyledNotice } from './PaymentPage.style';
// MODEL
import './Models/index';
// IMAGE
import CardImage from 'styles/assets/icon_credit_pay.svg';
import ApplePayImage from 'styles/assets/icon_apple_pay.svg';
import GooglePayImage from 'styles/assets/icon_gg_pay.svg';

const Step3 = () => {
  const dispatch = useDispatch();

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
                  style={{ padding: '11px', width: '100%' }}
                />
                <FormRadio
                  value="b"
                  fontSize={14}
                  gap={2}
                  image={GooglePayImage}
                  label="Google Pay"
                  style={{ padding: '11px', width: '100%' }}
                />
                <FormRadio
                  value="c"
                  fontSize={14}
                  gap={2}
                  image={ApplePayImage}
                  label="Apple Pay"
                  style={{ padding: '11px', width: '100%' }}
                />
              </FormRadioGroupHorizontal>
            </SettingsInputContainer>
          </Col>
          {/* 警告 */}
          <Col className="mb-3">
            <StyledNotice>
              <Space align="center">
                <span class="material-symbols-outlined fill-icon icon" style={{ fontSize: '16px' }}>
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
              <FormInput size="large" required placeholder="0000 0000 0000 0000" />
            </SettingsInputContainer>
          </Col>
          <Col span={24} className="mb-6">
            <Row gutter={10}>
              {/* 有効期限 */}
              <Col span={12} className="pa-0">
                <SettingsInputContainer label={<FormLabel label={'有効期限'} required />}>
                  <FormInput size="large" required placeholder="yyyy / mm" />
                </SettingsInputContainer>
              </Col>
              {/* CVC */}
              <Col span={12} className="pa-0">
                <SettingsInputContainer label={<FormLabel label={'CVC'} required />}>
                  <FormInput size="large" required placeholder="000" />
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
              <span class="material-symbols-outlined icon">arrow_back_ios</span>申込内容を修正
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
