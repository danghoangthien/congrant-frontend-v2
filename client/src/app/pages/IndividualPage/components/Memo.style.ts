import styled from 'styled-components/macro';
import { PRIMARY_COLOR, WARNING_COLOR } from 'styles/StyleConstants';

export const MemoStyle = styled.div`
  & .memo-date {
    font-weight: 600;
    font-size: 14px;
    margin-right: 20px;
  }

  & .memo-person {
    color: rgba(0, 0, 0, 0.5);
    font-size: 14px;
    display: inline-flex;
    align-items: center;

    .icon {
      font-size: 16px;
      margin-right: 4px;
    }
  }

  & .memo-action-button {
    display: inline-block;
    width: 24px;
    height: 24px;

    .icon {
      font-size: 16px;
    }

    &:hover {
      opacity: 0.7;
    }
  }

  & .edit-button {
    background-color: ${PRIMARY_COLOR};
    border-radius: 4px;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    svg {
      color: #fff;
      width: 16px;
    }
  }

  & .delete-button {
    border: 1px solid #d9d9d7;
    border-radius: 4px;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    svg {
      color: ${WARNING_COLOR};
      width: 16px;
    }
  }
`;
