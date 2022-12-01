import styled from 'styled-components/macro';
import { TEXT_GRAY_COLOR, RED_COLOR, GRAY } from 'styles/StyleConstants';
import { Input, Select, DatePicker, Space, Radio, InputNumber, Checkbox } from 'antd';

import { ScreenSizes } from 'styles/StyleConstants';

const { TextArea } = Input;
const { RangePicker } = DatePicker;

const REQUIRED_COLOR = '#fff5f1';

export const StyledRadioGroup = styled.div`
  & .ant-radio-group {
    width: 100%;
  }
  & .ant-radio-button-wrapper:first-child:last-child {
    border-radius: 0;
  }
  & .ant-space-item {
    & .ant-radio-button-wrapper {
      width: 100%;
      border-bottom: 0px;
      font-size: 16px;
      line-height: 45px;
      height: 45px;
    }
    & .ant-radio-button-wrapper-checked {
      border-color: ${GRAY};
    }
    .ant-radio-button-wrapper-checked:not([class*=' ant-radio-button-wrapper-disabled']).ant-radio-button-wrapper:first-child {
      border-right-color: ${GRAY};
    }
    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):focus-within {
      box-shadow: 0px;
    }
  }
  & .ant-space-item:first-child {
    & .ant-radio-button-wrapper {
      border-radius: 10px 10px 0 0;
      border: 1px 1px 0px 1px;
    }
  }
  & .ant-space-item:last-child {
    & .ant-radio-button-wrapper {
      border-radius: 0 0 10px 10px;
      border-bottom: solid 1px ${GRAY};
    }
  }
`;

export const StyledUploadPicture = styled.div`
   {
    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px 12px;
    gap: 8px;

    width: 132px;
    height: 124px;

    /* Neutral/Extra Light Gray */

    background: #fafaf8;
    /* Neutral/Gray */

    border: 1px dashed #d9d9d7;
    border-radius: 2px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;

    .upload-picture-icon {
      position: absolute;
      left: 11.61%;
      right: 11.61%;
      top: 9.82%;
      bottom: 9.82%;

      /* Text/Gray */

      background: rgba(0, 0, 0, 0.5);
    }
    .upload-picture-title {
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 22px;
      /* identical to box height, or 157% */

      text-align: center;

      /* Text/Gray */

      color: rgba(0, 0, 0, 0.5);
    }
    .ant-upload-select-picture-card {
      border: none;
    }
  }
`;

export const StyledForm = styled.div`
  .form-title {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    /* identical to box height, or 157% */

    /* Text/Gray */

    color: rgba(0, 0, 0, 0.5);
  }
`;

export const StyledRequired = styled.span`
  font-family: SimSong;
  color: ${RED_COLOR};
  font-weight: 400;
`;

export const StyledLabel = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: ${TEXT_GRAY_COLOR};
`;

export const StyledSettingLabel = styled.div`
  & .info-icon {
    width: 13px;
  }
`;

export const StyledInput = styled(Input)`
  font-weight: 300;

  &.required {
    background: ${REQUIRED_COLOR};
  }
`;

export const StyledInputPassword = styled(Input.Password)`
  font-weight: 300;
  padding: 5px 11px;

  &.required {
    background: ${REQUIRED_COLOR};
  }
`;

export const StyledTextarea = styled(TextArea)`
  font-size: 16px;

  &.required {
    background: ${REQUIRED_COLOR};
  }
`;

export const StyledTextareaMedium = styled(TextArea)`
  font-weight: 300;

  &.required {
    background: ${REQUIRED_COLOR};
  }
`;

export const StyledSelect = styled(Select)`
  width: 100%;

  &.required {
    .ant-select-selector {
      background: ${REQUIRED_COLOR};
    }
  }
`;

export const StyledSubtitle = styled.div`
  font-weight: 300;
  font-size: 14px;
  color: ${TEXT_GRAY_COLOR};
`;

export const StyledRangePicker = styled(RangePicker)`
  padding: 7px 11px;
`;

export const StyledInputWrapper = styled(Space)`
  width: 100%;

  .ant-space-item {
    width: 100%;
  }
`;

export const StyledHelper = styled.div`
  color: ${TEXT_GRAY_COLOR};
  font-weight: 300;
`;

// 申し込みフォーム用・Payment Page
export const StyledFormLabelRequired = styled.span`
  font-weight: 700;
  font-size: 10px;
  display: flex;
  align-items: center;
  color: #eb1616;
`;

export const StyledFormLabel = styled.div`
  font-weight: 700;
  font-size: 16px;
  color: '#222222';
`;

export const StyledFormRadio = styled(Radio)`
  padding: 11px 16px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  display: flex;
  align-items: center;

  .ant-image {
    line-height: 1;
  }

  .ant-radio {
    top: auto;

    + * {
      padding-right: 0;
      display: flex;
    }
  }

  .label {
    font-size: 16px;
  }
`;

export const StyledFormCourseRadio = styled(Radio)`
  padding: 11px 16px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  width: 100%;

  .ant-radio {
    top: auto;

    + * {
      padding-right: 0;
      display: flex;
      justify-content: space-between;
      width: 100%;

      @media screen and (max-width: ${ScreenSizes.medium}) {
        display: block;
      }
    }
  }

  .ant-descriptions-header {
    margin-bottom: 5px;
    transform: translateY(-2px);
  }

  .ant-descriptions-view table {
    width: auto;

    td:not(:last-child) {
      padding-right: 20px;
    }
  }

  .img-cover {
    width: 160px;
    padding-top: 81%;

    @media screen and (max-width: ${ScreenSizes.medium}) {
      width: 100%;
    }
  }

  .label {
    width: calc(100% - 180px);

    @media screen and (max-width: ${ScreenSizes.medium}) {
      width: 100%;
      margin-bottom: 10px;
    }
  }

  .description {
    font-size: 14px;
    line-height: 1.7;
    color: #222222;
  }

  .ant-descriptions-item-container {
    align-items: center;
  }

  .ant-descriptions-item-container .ant-descriptions-item-label, .ant-descriptions-item-container .ant-descriptions-item-content {
    line-height: 1;
  }

  &.disabled {
    background: #d9d9d6;
  }
`;

export const StyledFormRadioGroup = styled(Radio.Group)`
  width: 100%;

  .ant-radio-wrapper:not(:last-of-type) {
    margin-bottom: 12px;
  }
`;

export const StyledFormRadioGroupHorizontal = styled(Radio.Group)`
  width: 100%;
  display: flex;
  gap: 10px;

  .ant-radio-wrapper {
    // flex-basis: 100%;
    margin: 0;
    width: 100%;

    @media screen and (max-width: ${ScreenSizes.medium}) {
      width: calc(50% - 5px);
    }

    @media screen and (min-width: '992px') {
      flex: 1 1 0px;
    }
  }

  @media screen and (max-width: ${ScreenSizes.medium}) {
    flex-wrap: wrap;
  }
`;

export const StyledFormRadioButton = styled(Radio.Button)`
  text-align: center;
  height: 48px;
  line-height: 48px;
  border: 1px solid #dddddd;
  background: #dddddd;
  border-radius: 4px !important;
  font-size: 16px;
  font-weight: 400;
  color: #929292;

  &.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
    background: #ffffff !important;
  }
`;

export const StyledFormRadioButtonGroup = styled(Radio.Group)`
  width: 100%;
  display: flex;
  gap: 2px;

  .ant-radio-button-wrapper,
  .ant-radio-wrapper {
    flex: 1 1 0px;
    margin: 0;
  }

  .ant-radio-button {
    border-radius: 4px;
  }

  .ant-radio-button-wrapper:not(:first-child)::before {
    display: none;
  }

  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
    background: blue;
  }
`;

export const StyledFormInputNumber = styled(InputNumber)`
  font-weight: 300;

  &.required {
    background: ${REQUIRED_COLOR};
  }
`;

export const StyledFormInput = styled(Input)`
  height: 48px;

  .ant-input {
    height: 48px;
  }

  &.ant-input-affix-wrapper-lg {
    height: 48px;

    .ant-input {
      height: auto;
    }
  }

  &.required {
    background: ${REQUIRED_COLOR};

    .ant-input {
      background: ${REQUIRED_COLOR};
    }
  }
`;

export const StyledFormCheckbox = styled(Checkbox)`
  display: flex;
  align-items: center;

  .ant-checkbox {
    top: 0;
  }
`;

export const StyledFormHelper = styled.div`
  color: #737373;
  margin-top: 5px;
`;

export const StyledFormElementContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 2px;

  > * {
    flex: 1 1 0px;
  }
`;

export const StyledFormSelect = styled(Select)`
  width: 100%;

  .ant-select-selector {
    height: 48px !important;
  }

  .ant-select-selector::after,
  .ant-select-selection-item,
  .ant-select-selection-placeholder {
    line-height: 46px !important;
  }

  &.required {
    .ant-select-selector {
      background: ${REQUIRED_COLOR};
    }
  }
`;
