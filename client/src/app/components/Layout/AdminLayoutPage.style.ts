import styled from 'styled-components/macro';
import { PRIMARY_ADMIN_COLOR, BLUE_COLOR, GRAY_COLOR } from 'styles/StyleConstants';

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

  // MODAL
`;

export const PreviewLayout = styled.div`
  table.previewTable {
    width: 100%;
    background-color: #ffffff;
    border-collapse: collapse;
    border-width: 1px;
    border-color: ${GRAY_COLOR};
    border-style: solid;
    color: #000000;
  }

  table.previewTable td,
  table.previewTable th {
    border-width: 1px;
    border-color: ${GRAY_COLOR};
    border-style: solid;
  }

  table.previewTable thead {
  }
  table.previewTable tfoot th {
    font-weight: 300;
    font-size: 12px;
    background-color: #f0f0ee;
  }

  .link {
    color: ${BLUE_COLOR};
    text-decoration: underline;
  }
`;

export const StyledHighlightText = styled.span`
  font-size: 12px;
  font-weight: 600;
  padding: 24px;
`;

export const StyledTemplateTitle = styled.div`
  font-weight: 600;
  font-size: 28px;
  margin-bottom: 16px;
`;

export const StyledContentText = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
`;

export const StyledContent = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  margin-bottom: 16px;
`;

export const StyledContentBox = styled.div`
  padding: 24px;
  background: #fafaf8;
  border-radius: 4px;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  margin-bottom: 16px;
`;
