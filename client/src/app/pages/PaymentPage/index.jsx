import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
// ANTD
import { Row, Col, Steps, Card } from 'antd';
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
      color: ${MAIN_COLOR};
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

    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):first-child {
      border-color: ${MAIN_COLOR};
      color: ${MAIN_COLOR};
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
            <Row justify="space-between" gutter={40}>
              {/* 団体情報・Organization Info */}
              <Col className="payment-item" xs={{ span: 24 }} lg={{ span: 10 }}>
                <OrganizationInfo />
              </Col>

              {/* フォーム・Form */}
              <Col className="payment-item" xs={{ span: 24 }} lg={{ span: 14 }}>
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
                  {active === '1' && <Step1 />}
                  {active === '2' && <Step2 />}
                  {active === '3' && <Step3 />}
                  {/* <Step1 /> */}
                  {/* <Step2 /> */}
                  {/* <Step3 /> */}
                </Card>
              </Col>
            </Row>
          </div>
        )}
      </PaymentPageLayout>
    </FormStyle>
  );
};

export { Payment };

export default Payment;
