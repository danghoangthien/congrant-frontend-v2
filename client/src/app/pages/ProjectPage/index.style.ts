import styled from 'styled-components/macro';
import { Tag } from 'antd';

export const StatusTag = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: #ffffff;
  background: #63b233;
  border-radius: 40px;
  padding: 0 12px;
  height: 22px;
`;

export const ProjectTitle = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.85);
  height: 24px;
`;

export const ProjectUrl = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  height: 20px;
  color: rgba(0, 0, 0, 0.5);
`;

export const ProjectLaunchType = styled.div`
{
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 24px;
  gap: 16px;
  width: 28 5px;


  /* Neutral/Extra Light Gray */

  border: 1px solid #d9d9d7;
  border-radius: 4px;
`;

export const ProjectLaunchTypeInfo = styled(Tag)`
  height: 30px;
  font-weight: 600;
  font-size: 14px;
  line-height: 30px;
  text-align: center;
  border-radius: 24px;
  color: rgba(0, 0, 0, 0.85);
  border: 0;
  padding: 0 30px;
`;
