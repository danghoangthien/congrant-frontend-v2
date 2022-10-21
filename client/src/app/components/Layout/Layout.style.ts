import styled from 'styled-components/macro';
import { StyleConstants, ScreenSizes, PRIMARY_COLOR } from 'styles/StyleConstants';

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
    display: flex;
    align-items: center;
  }
  & .sidebar-link:hover {
    cursor: pointer;
  }

  & .sidebar-wrapper {
    padding: 16px 24px;
  }

  & .menu-txt {
    margin-left: 10px;
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
  & .menu-item {
    text-overflow: clip;
    white-space: nowrap;
    padding: 12px 24px;
    transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  & .sidebar-link {
    cursor: pointer;
  }
  & .logo-wrapper {
    display: flex;
    align-items: center;

    .logo-icon {
      margin-right: 5px;
    }
  }
  & .menu-btn {
    cursor: pointer;
  }
  & .menu-txt,
  .logo-text {
    opacity: 1;
    transition: opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  & .sidebar-link {
    &:hover {
      color: ${PRIMARY_COLOR};
    }
  }
  & .ant-layout-sider-collapsed {
    .menu-txt,
    .logo-text {
      opacity: 0;
      display: inline-block;
    }
  }

  // & .page-content-wrapper {
  //   padding: 0 24px;
  // }
`;

export const SlyledHeader = styled.div<{}>`
  & .ant-layout-header {
    background: #f4f6f7;
  }
  & .line {
    content: '';
    display: inline-block;
    background: #d9d9f7;
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
    margin-right: 8px;
  }
  & .user-profile {
    display flex;
    align-items:center;
  }
  & .nav-item {
    display: flex;
    align-items: center;

    .icon {
      font-size: 16px;
      display: inline-block;
      margin-right: 9px;
    }
  }

  & .name-wrapper {
    line-height: 1.57;

    .txt {
      font-size: 14px;
    }
  }
`;
