import styled from 'styled-components/macro';
import { PRIMARY_ADMIN_COLOR } from 'styles/StyleConstants';

export const AdminLayoutPage = styled.div`
  .page-title {
    color: ${PRIMARY_ADMIN_COLOR};
  }

  .ant-descriptions-title {
    font-weight: 600;
  }

  .ant-btn:hover:not(.ant-btn-primary),
  .ant-btn:focus:not(.ant-btn-primary) {
    color: ${PRIMARY_ADMIN_COLOR};
    border-color: ${PRIMARY_ADMIN_COLOR};
  }

  .admin-link {
    color: ${PRIMARY_ADMIN_COLOR};
    font-weight: 600;
  }

  .ant-pagination-item-active a,
  .ant-pagination-item:hover a {
    color: ${PRIMARY_ADMIN_COLOR};
  }

  .ant-pagination-item-active,
  .ant-pagination-item:hover,
  .ant-radio-checked .ant-radio-inner {
    border-color: ${PRIMARY_ADMIN_COLOR};
  }

  .ant-radio-inner::after {
    background-color: ${PRIMARY_ADMIN_COLOR};
  }

  .ant-btn-primary {
    background-color: ${PRIMARY_ADMIN_COLOR};
    border-color: ${PRIMARY_ADMIN_COLOR};

    &:hover {
      opacity: 0.8;
    }
  }

  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn,
  .ant-tabs-tab:hover {
    color: ${PRIMARY_ADMIN_COLOR};
  }
`;
