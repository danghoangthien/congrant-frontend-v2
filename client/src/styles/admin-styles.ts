import { createGlobalStyle } from 'styled-components';

import { PRIMARY_ADMIN_COLOR } from 'styles/StyleConstants';

/* istanbul ignore next */
export const AdminStyle = createGlobalStyle`
  .ant-btn-primary {
    background: ${PRIMARY_ADMIN_COLOR};
    border-color: ${PRIMARY_ADMIN_COLOR};

    &:hover {
      background: ${PRIMARY_ADMIN_COLOR};
      border-color: ${PRIMARY_ADMIN_COLOR};
      opacity: 0.8;
    }
  }

  .ant-radio-inner:after {
    background: ${PRIMARY_ADMIN_COLOR};
  }

  .ant-btn-primary:active,
  .ant-btn-primary:hover, 
  .ant-btn-primary:focus {
    background: ${PRIMARY_ADMIN_COLOR};
    border-color: ${PRIMARY_ADMIN_COLOR};
  }

  .ant-radio-checked:after,
  .ant-radio-checked .ant-radio-inner,
  .ant-radio-input:focus+.ant-radio-inner,
  .ant-radio-wrapper:hover .ant-radio,
  .ant-radio:hover .ant-radio-inner,
  .ant-checkbox-input:focus+.ant-checkbox-inner,
  .ant-checkbox-wrapper:hover .ant-checkbox-inner,
  .ant-checkbox:hover .ant-checkbox-inner,
  .ant-input:hover {
    border-color: ${PRIMARY_ADMIN_COLOR};
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    border-color: ${PRIMARY_ADMIN_COLOR};
    background: ${PRIMARY_ADMIN_COLOR};
  }

  .ant-checkbox-checked:after,
  .ant-input-focused,
  .ant-input:focus,
  .ant-select:not(.ant-select-disabled):hover .ant-select-selector,
  .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border-color: ${PRIMARY_ADMIN_COLOR};
  }

  .ant-input-focused,
  .ant-input:focus,
  .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector {
    box-shadow: 0 0 0 2px rgba(40, 120, 203, 0.1);
  }

  .ant-radio-input:focus+.ant-radio-inner {
    box-shadow: 0 0 0 3px rgba(40, 120, 203, 0.1);
  }
`;
