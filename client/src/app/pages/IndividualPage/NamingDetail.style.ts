import styled from 'styled-components/macro';
import { EXTRA_LIGHT_GRAY_COLOR, LIGHT_GRAY_COLOR } from 'styles/StyleConstants';

export const NamingDetailStyle = styled.div`
  width: 100%;
  min-width: 1192px;
  overflow: auto;

  .ant-radio-wrapper {
    font-size: 14px;
    align-items: center;

    .ant-radio {
      top: auto;
    }
  }

  > .ant-row {
    > .ant-col {
      padding: 10px 12px;
      display: flex;
      align-items: center;
      min-height: 49px;
      border-bottom: 1px solid ${LIGHT_GRAY_COLOR};
    }
  }

  .heading {
    > .ant-col {
      position: relative;

      &:last-child:before {
        display: none;
      }

      &:before {
        position: absolute;
        top: 50%;
        right: 0;
        width: 1px;
        height: 1.6em;
        background-color: ${LIGHT_GRAY_COLOR};
        transform: translateY(-50%);
        transition: background-color 0.3s;
        content: '';
      }
    }
  }

  .gray-box {
    background: ${EXTRA_LIGHT_GRAY_COLOR};
    font-weight: 600;

    .ant-radio-wrapper {
      font-size: 14px;
      font-weight: 400;
    }
  }
`;

export const NamingTable = styled.div`
  .gray-box {
    background: ${EXTRA_LIGHT_GRAY_COLOR};
  }

  .ant-table-tbody > tr > td,
  .ant-table tfoot > tr > td {
    padding: 13px 12px;
    min-height: 49px;
  }

  .btn {
    line-height: 1;
    padding: 0;
    height: auto;
  }

  tbody {
    tr[data-row-key='1'] .ant-table-cell {
      /* Styles */
      background: ${EXTRA_LIGHT_GRAY_COLOR};
    }
  }

  // .ant-table-cell-fix-left,
  // .ant-table-cell-fix-right {
  //   background: initial;
  // }
`;
