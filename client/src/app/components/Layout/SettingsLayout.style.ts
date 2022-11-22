import styled from 'styled-components/macro';
import { TEXT_GRAY_COLOR, RED_COLOR } from 'styles/StyleConstants';
import { Input, Select, DatePicker } from 'antd';

const { TextArea } = Input;
const { RangePicker } = DatePicker;

export const StyledRadioGroup = styled.div`
  & .ant-space-item {
    & .ant-radio-button-wrapper {
      width: 300px;
      border-bottom: 0px;
      font-size: 16px;
      line-height: 45px;
      height: 45px;
    }
    & .ant-radio-button-wrapper-checked {
      border: solid 1px #d9d9d9;
    }
    .ant-radio-button-wrapper-checked:not([class*=' ant-radio-button-wrapper-disabled']).ant-radio-button-wrapper:first-child {
      border-right-color: #d9d9d9;
      border-bottom: 0px;
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
      border-bottom: solid 1px #d9d9d9;
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
  padding: 5px 11px;
`;

export const StyledTextarea = styled(TextArea)`
  font-size: 16px;
`;

export const StyledTextareaMedium = styled(TextArea)`
  font-weight: 300;
`;

export const StyledSelect = styled(Select)`
  width: 100%;
`;

export const StyledSubtitle = styled.div`
  font-weight: 300;
  font-size: 14px;
  color: ${TEXT_GRAY_COLOR};
`;

export const StyledRangePicker = styled(RangePicker)`
  padding: 7px 11px;
`;
