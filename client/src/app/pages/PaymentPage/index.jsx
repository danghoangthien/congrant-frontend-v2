import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import StickyBox from 'react-sticky-box';

// ANTD
import { Steps, Card } from 'antd';
// MEDIA QUERY
// import Media from 'react-media';
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

const { Step } = Steps;

const Payment = () => {
  const MAIN_COLOR = '#E34855';
  const { active } = useSelector(state => state['paymentStep']);
  const { method } = useSelector(state => state['paymentMethod']);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [active]);

  function hexToRgbA(hex, opacity) {
    var c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      c = hex.substring(1).split('');
      if (c.length === 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c = '0x' + c.join('');
      return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + opacity + ')';
    }
    throw new Error('Bad Hex');
  }

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

    .ant-radio-checked .ant-radio-inner {
      border-color: ${MAIN_COLOR};
    }

    .ant-radio-wrapper-checked {
      border-color: ${MAIN_COLOR};
    }

    .ant-checkbox-checked .ant-checkbox-inner {
      background-color: ${MAIN_COLOR};
      border-color: ${MAIN_COLOR};
    }

    .ant-checkbox-checked::after {
      border-color: ${MAIN_COLOR};
    }

    .ant-radio-inner::after {
      background-color: ${MAIN_COLOR};
    }

    .ant-btn-primary {
      background: ${MAIN_COLOR};
    }

    .change-amount-button,
    a {
      color: ${MAIN_COLOR};
    }

    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
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
  console.log(params);

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
              <StickyBox offsetTop={20} offsetBottom={20}>
                <OrganizationInfo />
              </StickyBox>
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
