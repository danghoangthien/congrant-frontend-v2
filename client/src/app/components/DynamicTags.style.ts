import styled from 'styled-components/macro';
import { TEXT_COLOR } from 'styles/StyleConstants';

export const DynamicTagsStyle = styled.div`
  width: 100%;
  position: relative;

  .ant-select-selection-overflow,
  .ant-select-disabled.ant-select-multiple .ant-select-selection-item {
    cursor: pointer;
  }

  & .ant-select-disabled .ant-select-selector {
    padding: 0 !important;
    border: none !important;
    background: none !important;
    box-shadow: none !important;
  }

  & .ant-select {
    // padding-right: 100px;
    clear: both;
  }

  & .site-tag-plus {
    cursor: pointer;
    position: absolute;
    left: 0;
    top: 0;
  }

  & .ant-select-multiple .ant-select-selection-item {
    font-size: 12px;
    color: ${TEXT_COLOR};
  }
`;
