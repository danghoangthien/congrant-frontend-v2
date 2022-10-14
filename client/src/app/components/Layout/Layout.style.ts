import styled from 'styled-components/macro';

export const StyledSidebar = styled.div<{}>`
  & .ant-layout-has-sider {
    height: 100%;
  }
  & .ant-layout-sider {
    height: 100%;
    background-color: #ffffff;
  }
  & .ant-layout-sider-children {
  }
  & .display-inline-flex {
    display: inline-flex;
  }
  & .sidebar-link {
    text-decoration: none;
    color: #000;
  }
  & .sidebar-link:hover {
    cursor: pointer;
  }
`;

export const SlyledLayout = styled.div<{}>`
  & .ant-layout-has-sider {
    height: 100%;
  }
  & .ant-layout-header {
    background: transparent;
  }
  & .ant-layout-content {
    background: #f4f6f7;
  }
  & .ant-modal-content {
    border-radius: 10px;
  }
`;

export const SlyledHeader = styled.div<{}>`
  & .ant-layout-header {
    background: #f4f6f7;
  }
  & .line {
    content: '';
    display: inline-block;
    background: #8c8c8a;
    width: 1px;
    height: 32px;
  }
  & .user-icon {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #bfbfbd;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & .user-profile {
    display flex;
    align-items:center;
  }
`;
