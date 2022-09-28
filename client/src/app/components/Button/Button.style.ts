import styled from 'styled-components/macro';

export const ButtonLayout = styled.div<{ background?: string; color?: string }>`
  width: 100%;
  & .ant-btn {
    width: 100%;
    height: 42px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 9px;
    border-color: ${props => (props.background ? props.background : '#7D70F6')};
    background: ${props => (props.background ? props.background : '#7D70F6')};

    span {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
      text-align: right;
      text-transform: uppercase;
      color: ${props => (props.color ? props.color : '#FFFFFF')};
    }
  }

  & .ant-btn:hover {
    transition: all ease 0.5s;
    background: ${props => (props.color ? props.color : '#FFFFFF')};
    color: ${props => (props.background ? props.background : '#7D70F6')};
    border-color: ${props => (props.background ? props.background : '#7D70F6')};
    span {
      color: ${props => (props.background ? props.background : '#7D70F6')};
    }
  }
`;

export const ButtonStyle1Layout = styled.div<{ background?: string; color?: string }>`
  width: 100%;
  & .ant-btn {
    width: 100%;
    height: 42px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 9px;
    border-color: ${props => (props.background ? props.background : '#C8C3F9')};
    border-width: 2px;

    span {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
      text-align: right;
      text-transform: uppercase;
      color: ${props => (props.color ? props.color : '#7D70F6')};
    }
  }

  & .ant-btn:hover {
    transition: all ease 0.5s;
    background: ${props => (props.color ? props.color : '#d8d4fc')};
    color: ${props => (props.background ? props.background : '#7D70F6')};
    border-color: ${props => (props.background ? props.background : '#7D70F6')};
    span {
      color: ${props => (props.background ? props.background : '#7D70F6')};
    }
  }
`;

export const ButtonStyle2Layout = styled.div<{ background?: string; color?: string }>`
  width: 100%;
  & .ant-btn {
    width: 100%;
    height: 42px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 9px;
    border-color: ${props => (props.background ? props.background : '#FFFFFF')};

    span {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
      text-align: right;
      text-transform: uppercase;
      color: ${props => (props.color ? props.color : '#7D70F6')};
    }
  }

  & .ant-btn:hover {
    transition: all ease 0.5s;
    background: ${props => (props.color ? props.color : '#d8d4fc')};
    color: ${props => (props.background ? props.background : '#7D70F6')};
    span {
      color: ${props => (props.background ? props.background : '#7D70F6')};
    }
  }
`;
