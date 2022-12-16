import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
// ANTD
import { Steps, Card } from 'antd';
// LAYOUT
import PaymentPageLayout from 'app/components/Layout/PaymentPage';
// COMPONENT
import OrganizationInfo from './components/OrganizationInfo';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Success from './Success';
// STYLE
import styled from 'styled-components/macro';
import { StyledPaymentSteps } from './PaymentPage.style';
// UTILS
// import StickyBox from 'react-sticky-box';
// UTILS
import { hexToRgbA } from 'utils/helper';

const { Step } = Steps;

const Payment = () => {
  const MAIN_COLOR = '#0000FF';
  const { active } = useSelector(state => state['paymentStep']);
  const { method } = useSelector(state => state['paymentMethod']);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [active]);

  // function hexToRgbA(hex, opacity) {
  //   var c;
  //   if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
  //     c = hex.substring(1).split('');
  //     if (c.length === 3) {
  //       c = [c[0], c[0], c[1], c[1], c[2], c[2]];
  //     }
  //     c = '0x' + c.join('');
  //     return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + opacity + ')';
  //   }
  //   throw new Error('Bad Hex');
  // }

  const RGBA_MAIN_COLOR = hexToRgbA(MAIN_COLOR, 0.1);
  // const RGBA_MAIN_COLOR2 = hexToRgbA(MAIN_COLOR);

  // STEP STYLE
  const StyledSteps = styled.div`
    .ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-icon {
      background: ${MAIN_COLOR};
      border-color: ${MAIN_COLOR};
    }

    .ant-steps-item-process
      > .ant-steps-item-container
      > .ant-steps-item-content
      > .ant-steps-item-title {
      color: ${MAIN_COLOR};
    }

    .external-link {
      color: ${MAIN_COLOR};
    }

    .ant-steps-item-finish .ant-steps-item-icon {
      border-color: ${MAIN_COLOR};
    }

    .ant-steps-item-finish .ant-steps-item-icon > .ant-steps-icon {
      color: ${hexToRgbA(MAIN_COLOR)};
    }
  `;

  // FORM STYLE
  const FormStyle = styled.div`
    width: 100%;
    height: 100%;
    font-family: 'Noto Sans JP', sans-serif;

    .ant-radio-checked .ant-radio-inner,
    .ant-radio-wrapper-checked,
    .ant-radio-button-wrapper-checked:not([class*=' ant-radio-button-wrapper-disabled']).ant-radio-button-wrapper:first-child,
    .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover,
    .ant-input-affix-wrapper:focus,
    .ant-input-affix-wrapper-focused {
      border-color: ${MAIN_COLOR};
    }

    .ant-checkbox-checked .ant-checkbox-inner {
      background-color: ${MAIN_COLOR};
      border-color: ${MAIN_COLOR};
    }

    .ant-checkbox-checked::after,
    .ant-input:hover,
    .ant-select:not(.ant-select-disabled):hover .ant-select-selector,
    .ant-checkbox-wrapper:hover .ant-checkbox-inner,
    .ant-checkbox:hover .ant-checkbox-inner,
    .ant-checkbox-input:focus + .ant-checkbox-inner {
      border-color: ${MAIN_COLOR};
    }

    .ant-input:focus,
    .ant-input-focused,
    .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input)
      .ant-select-selector {
      border-color: ${MAIN_COLOR};
      box-shadow: 0 0 0 2px ${hexToRgbA(MAIN_COLOR, 0.2)};
    }

    .ant-radio-inner::after {
      background-color: ${MAIN_COLOR};
    }

    .ant-btn-primary {
      background: ${MAIN_COLOR};
    }

    .ant-radio-button-wrapper:hover,
    .change-amount-button,
    a {
      color: ${MAIN_COLOR};
    }

    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled),
    .ant-btn:hover,
    .ant-btn:focus {
      border-color: ${MAIN_COLOR};
      color: ${MAIN_COLOR};
    }

    .bank-box {
      background: ${RGBA_MAIN_COLOR};
    }
  `;

  // PAGE META
  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'申し込みフォーム'}</title>
          <meta name="description" content={'...'} />
        </Helmet>
      </>
    );
  };

  const params = useParams();

  return (
    <FormStyle>
      {renderPageTitle()}
      <PaymentPageLayout>
        {active === '4' ? (
          <Success />
        ) : (
          <div className="payment-container">
            {/* 団体情報・Organization Info */}
            <div className="organization-info-wrapper">
              <OrganizationInfo />
            </div>

            {/* フォーム・Form */}
            <div className="payment-form-wrapper">
              <Card className="payment-box">
                <StyledSteps className="mb-8">
                  <StyledPaymentSteps
                    className="payment-steps"
                    current={active - 1}
                    labelPlacement="vertical"
                    responsive={false}
                  >
                    <Step title="申込内容" />
                    <Step title="申込者情報" />
                    {method === '1' && <Step title="決済情報" />}
                  </StyledPaymentSteps>
                </StyledSteps>
                {active === '1' && <Step1 type={params?.id} />}
                {active === '2' && <Step2 />}
                {active === '3' && <Step3 />}
              </Card>
            </div>
          </div>
        )}
      </PaymentPageLayout>
    </FormStyle>
  );
};

export { Payment };

export default Payment;
