import styled from 'styled-components/macro';

export const StyledLaunchProject = styled.div`
  font-size: 14px;

  & .project-info {
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
