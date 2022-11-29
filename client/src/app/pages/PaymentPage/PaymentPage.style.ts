import styled from 'styled-components/macro';
import { Steps, Button, Card } from 'antd';
import { PRIMARY_COLOR } from 'styles/StyleConstants';
import { ScreenSizes } from 'styles/StyleConstants';

const GRAY = '#dddddd';
const TEXT_COLOR = '#929292';

export const StyledPaymentSteps = styled(Steps)`
  // padding: 0 50px;
  max-width: 300px;
  margin: 0 auto;
  justify-content: center;

  @media screen and (max-width: ${ScreenSizes.medium}) {
    // padding: 0;
  }

  .ant-steps-item-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 700;
    font-family: 'Noto Sans JP', sans-serif;
  }

  &.ant-steps-label-vertical .ant-steps-item-icon {
    @media screen and (max-width: ${ScreenSizes.medium}) {
      // margin: 0 auto;
      margin-left: 24px;
    }
  }

  &.ant-steps-label-vertical .ant-steps-item-content {
    @media screen and (max-width: ${ScreenSizes.medium}) {
      // width: 90px !important;
      width: 80px;
    }
  }

  .ant-steps-item-tail {
    @media screen and (max-width: ${ScreenSizes.medium}) {
      // width: 90px !important;
      margin-left: 40px;
    }
  }

  .ant-steps-item-title {
    font-size: 16px;
    font-weight: 700;
    color: ${TEXT_COLOR};
  }

  .ant-steps-item-wait .ant-steps-item-icon > .ant-steps-icon,
  .ant-steps-item-wait
    > .ant-steps-item-container
    > .ant-steps-item-content
    > .ant-steps-item-title {
    color: #929292;
  }

  .ant-steps-icon {
    display: flex;
  }

  .ant-steps-item-finish
    > .ant-steps-item-container
    > .ant-steps-item-content
    > .ant-steps-item-title {
    color: ${TEXT_COLOR};
  }

  // .ant-steps-item-process
  //   > .ant-steps-item-container
  //   > .ant-steps-item-content
  //   > .ant-steps-item-title {
  //   color: ${PRIMARY_COLOR};
  // }

  // .ant-steps-item-finish,
  // .ant-steps-item-active {
  //   .ant-steps-item-title {
  //     color: ${PRIMARY_COLOR};
  //   }
  // }

  .ant-steps-item:not(.ant-steps-item-finish, .ant-steps-item-active) {
    .ant-steps-item-icon {
      background: ${GRAY};
      color: ${TEXT_COLOR};
      border-color: ${GRAY};
    }
  }

  .ant-steps-item-tail {
    padding: 3.5px 16px;
  }

  .ant-steps-item-tail::after {
    height: 3px;
    backgroud-color: ${GRAY};

    @media screen and (max-width: ${ScreenSizes.medium}) {
      height: 2px;
    }
  }

  .ant-steps-item-finish > .ant-steps-item-container > .ant-steps-item-tail::after {
    background-color: ${GRAY};
  }
`;

export const StyledChangeButton = styled(Button)`
  padding: 0;
  line-height: 1;
  border: none;
  box-shadow: none !important;
  height: auto;

  .icon {
    font-size: 28px;

    @media screen and (max-width: ${ScreenSizes.medium}) {
      font-size: 36px;
    }
  }
`;

export const StyledPrivacyCard = styled(Card)`
  width: 100%;

  border-color: #dddddd;
  border-radius: 0;

  .ant-card-body {
    padding: 24px;
  }

  .title {
    font-size: 18px;
    font-weight: 700;

    @media screen and (max-width: ${ScreenSizes.medium}) {
      font-size: 17px;
      margin-bottom: 10px;
    }
  }

  .content {
    line-height: 1.7;
  }
`;

export const StyledButton = styled(Button)`
  border: none;
  height: 44px;

  &:hover {
    opacity: 0.8;
  }
`;

export const StyledBackButton = styled(Button)`
  box-shadow: none;
  border: none;
  color: #929292;
  display: flex;
  align-items: center;

  .icon {
    font-size: 18px;
  }
`;

export const StyledNotice = styled.div`
  background: #fff5f1;
  border-radius: 4px;
  padding: 12px 16px;
  position: relative;
`;

export const StyledSuccess = styled(Card)`
  background: #ffffff;
  width: 100%;
  max-width: 580px;
  margin: 0 auto;
  border: none !important;
  border-radius: 0;

  .ant-card-body {
    padding: 70px 40px;

    @media screen and (max-width: ${ScreenSizes.medium}) {
      padding: 40px 20px;
    }
  }
`;

export const StyledShareBox = styled.div`
  background: #fafaf8;
  width: 100%;
  padding: 24px;

  .share-box-title {
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 20px;
  }

  @media screen and (max-width: ${ScreenSizes.medium}) {
    padding: 10px 10px 15px;
  }
`;

export const StyledBankBox = styled.div`
  background: #f5f5f1;
  width: 100%;
  padding: 24px;

  .bank-box-title {
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 20px;
  }

  .bank-box-txt {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }

  @media screen and (max-width: ${ScreenSizes.medium}) {
    padding: 10px 10px 15px;
  }
`;
