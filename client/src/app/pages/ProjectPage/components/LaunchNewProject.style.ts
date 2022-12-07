import styled from 'styled-components/macro';
import { Tag } from 'antd';

export const StyledProjectLaunchList = styled.div`
  & .project-info {
    font-size: 14px;
    line-height: 1.57;
    list-style-type: none;
    padding: 0;
    margin: 0;

    > li {
      padding-left: 20px;
      position: relative;

      &:before {
        content: '・';
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }
`;

export const StyledProjectLaunchTitle = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.85);
`;

export const StyledProjectLaunchTypeInfo = styled(Tag)`
  height: 30px;
  font-weight: 600;
  font-size: 14px;
  line-height: 30px;
  text-align: center;
  border-radius: 24px;
  color: rgba(0, 0, 0, 0.85);
  display: block;
  border: 0;
  width: 100%;
  padding: 0 15px;
`;

export const StyledProjectLaunchType = styled.div`
  cursor: pointer;
  height: 100%;
  box-sizing: border-box;
  padding: 24px 16px;
  border: 1px solid #d9d9d7;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0px 0 10px rgba(0, 0, 0, 0.16);
  }
`;
