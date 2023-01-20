import { Helmet } from 'react-helmet-async';
import { useEffect, useRef } from 'react';
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
  const myRef = useRef(null);
  const MAIN_COLOR = '#e34855';
  const { active } = useSelector(state => state['paymentStep']);
  const { method } = useSelector(state => state['paymentMethod']);

  useEffect(() => {
    console.log(active);
    if (active === '3' || active === '2') {
      setTimeout(() => {
        window.scrollTo({
          top: myRef.current.offsetTop - 64,
          behavior: 'smooth',
        });
      }, 300);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [active]);

  const RGBA_MAIN_COLOR = hexToRgbA(MAIN_COLOR, 0.1);

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

    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):focus-within {
      box-shadow: 0 0 0 3px ${hexToRgbA(MAIN_COLOR, 0.15)};
    }

    .ant-input-affix-wrapper:focus,
    .ant-input-affix-wrapper-focused {
      box-shadow: 0 0 0 2px ${hexToRgbA(MAIN_COLOR, 0.15)};
    }

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

    .ant-radio-inner::after,
    .ant-btn-primary {
      background-color: ${MAIN_COLOR};
    }

    #address {
      .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
        background-color: ${hexToRgbA(MAIN_COLOR, 0.1)};
      }
    }

    .ant-radio-button-wrapper:hover,
    .change-amount-button,
    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled),
    .more-btn,
    a {
      color: ${MAIN_COLOR};
    }

    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled),
    .ant-btn:hover,
    .ant-btn:focus {
      border-color: ${MAIN_COLOR};
    }

    .ant-btn:hover:not(.ant-btn-primary),
    .ant-btn:focus:not(.ant-btn-primary) {
      color: ${MAIN_COLOR};
    }

    .bank-box {
      background: ${RGBA_MAIN_COLOR};
    }

    .total-money-box {
      button {
        color: ${MAIN_COLOR};
      }
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

  const searchParam = new URLSearchParams(window.location.search);
  const project_type = searchParam.get('type');

  return (
    <FormStyle>
      {renderPageTitle()}
      <PaymentPageLayout>
        {active === '4' ? (
          <Success />
        ) : (
          <div className={`payment-container ${project_type}`}>
            {/* 団体情報・Organization Info */}
            <div className="organization-info-wrapper">
              <OrganizationInfo />
            </div>

            {/* フォーム・Form */}
            <div className="payment-form-wrapper" ref={myRef}>
              <Card
                className={`${project_type !== 'monthly' ? 'payment-box' : 'payment-box mb-0'}`}
              >
                {project_type !== 'monthly' ? (
                  <>
                    <StyledSteps>
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
                    {active === '1' && <Step1 project_type={project_type} />}
                    {active === '2' && <Step2 project_type={project_type} />}
                    {active === '3' && <Step3 project_type={project_type} />}
                  </>
                ) : (
                  <>
                    <Step1 project_type={project_type} />
                    <Step2 project_type={project_type} />
                    <Step3 project_type={project_type} />
                  </>
                )}
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
