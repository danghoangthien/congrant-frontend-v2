import styled from 'styled-components/macro';
import { Steps, Button, Card } from 'antd';
import { PRIMARY_COLOR } from 'styles/StyleConstants';
import { ScreenSizes } from 'styles/StyleConstants';

const GRAY = '#dddddd';
const TEXT_COLOR = '#929292';

export const StyledPaymentSteps = styled(Steps)`
  // padding: 0 50px;
  max-width: 300px;
  margin: 0 auto 50px;
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
    font-family: 'Roboto', 'Noto Sans JP', sans-serif;
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
    font-size: 36px;
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
    margin-bottom: 10px;

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

export const StyledNoticeList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  li {
    color: #737373;
    font-size: 14px;

    &:not(:last-child) {
      margin-bottom: 7px;
    }

    > span {
      display: flex;
      align-items: center;
    }

    .icon {
      margin-left: 8px;
      font-size: 16px;
    }
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
  // background: #f5f5f1;
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

export const StyledCheckboxWrapper = styled.div`
  border-radius: 4px;
  border: 1px solid #dddddd;
  padding: 24px;
`;

export const StyledMoneyBackButton = styled(Button)`
  display: inline-block;
  padding: 0;
  border: none;
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  background: none;

  &:hover {
    background: none;
  }
`;
