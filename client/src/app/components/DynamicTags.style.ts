import styled from 'styled-components/macro';
import { TEXT_COLOR } from 'styles/StyleConstants';

export const DynamicTagsStyle = styled.div`
  width: 100%;

  & .ant-select-selector {
    padding: 0 !important;
    border: none !important;
    background: none !important;
    box-shadow: none !important;
  }

  & .ant-select {
    // padding-right: 100px;
  }

  & .site-tag-plus {
    margin-top: 8px;
    // position: absolute;
    // right: 0;
    // top: 4px;
  }

  & .ant-select-multiple .ant-select-selection-item {
    font-size: 12px;
    color: ${TEXT_COLOR};
  }
`;
