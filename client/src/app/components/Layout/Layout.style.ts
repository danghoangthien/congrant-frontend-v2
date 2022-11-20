import styled from 'styled-components/macro';
import {
  StyleConstants,
  ScreenSizes,
  PRIMARY_COLOR,
  LIGHT_GRAY,
  GRAY,
  TEXT_COLOR,
} from 'styles/StyleConstants';

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
  & .ant-menu-title-content {
    font-size: 16px;
  }
  & .ant-menu-item-icon {
    font-size: 18px;
  }
  & .ant-menu-item {
    display: flex;
    align-items: center;
  }
  & .ant-layout-sider-collapsed {
    & .ant-menu-item-icon {
      font-size: 18px !important;
    }
    & .ant-menu-item {
      padding: 0 calc(50% - 9px);
    }
  }
`;

export const SlyledLayout = styled.div<{}>`
  min-height: 100vh;
  & .ant-layout-has-sider {
    min-height: 100vh;
  }
  & .ant-layout-header {
    background: transparent;
  }
  & .ant-layout-content {
    background: #f0f0ee;
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
    transition: all .3s;
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
    .logo-text {
      opacity: 0;
      width: 0;
      display: inline-block;
    }

    & .menu-btn {
      margin-left: 4px;
    }
  }

  // & .page-content-wrapper {
  //   padding: 0 24px;
  // }

  & .sub-menu {
    background: transparent;

    
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

  // .ant-menu-sub.ant-menu-inline {
  //   background: transparent;
  // }

  // .ant-menu-item {
  //   margin: 0;
  //   padding: 8px 24px !important;
  //   height: auto;
  //   border-top: 1px solid ${GRAY};
  // }

  

  & .sub-menu-item {
    border-top: 1px solid ${GRAY};

    .ant-menu-title-content {
      width: 100%;
    }
  }

  & .main-menu {
    border-right: none;

    .ant-menu-sub.ant-menu-inline {
      background: transparent;
    }

    .ant-menu-sub {
      .ant-menu-item {
        margin: 0;
        padding: 8px 24px !important;
        height: auto;
        border-top: 1px solid ${GRAY};
      }
    }
  }

  & .ant-menu-inline .ant-menu-item, .ant-menu-inline .ant-menu-submenu-title {
    width: 100%;
  }

  & .ant-menu-submenu-title[data-menu-id="rc-menu-uuid-46013-1-sub-menu"] {
    display: none;
  }
  & .ant-menu-item[data-menu-id="rc-menu-uuid-46013-1-g1"] {

  }
  & .ant-menu#rc-menu-uuid-46013-1-sub-menu-popup {
    background: none;
  }

  & .user-box-wrapper {
    position: absolute;
    bottom: 0;
    width: 216px;
    min-width: 216px;
    white-space; no-wrap;
    overflow: hidden;
    transition: all .1s ease;

    & .sub-menu-link {
      font-size: 12px;
      position: relative;
      display: block;
      padding-right: 24px;
      word-break: break-all;
      white-space: pre-wrap;
      line-height: 1.83;
      font-weight: 300;
      width: 100%;
      margin: 0;
      padding: 8px 24px !important;
      height: auto;
      border-top: 1px solid ${GRAY};
      color: ${TEXT_COLOR};

      &:hover {
        color: ${PRIMARY_COLOR};
      }
  
      svg {
        font-size: 12px;
        position: absolute;
        right: 24px;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    & .user-box {
      padding: 16px 24px;
      border-top: 1px solid ${GRAY};
  
      .user-name {
        font-size: 12px;
        font-weight: 300;
        margin-bottom: 6px;
        line-height: 1;
      }
  
      .representative-name {
        font-size: 14px;
        font-weight: 300;
      }
    }
  }

  & .ant-layout-sider-collapsed {
    & .user-box-wrapper {
      opacity: 0;
      visibility: hidden;
      width: 0;
      min-width: auto;
    }
  }

  & .user-wrapper {
    & .ant-menu-submenu-title {
      height: auto;
      line-height: initial;
      padding: 0;
      margin: 0;
      padding: 0 !important;
    }

    & .ant-menu {
      border-right: none;
    }
  }
`;

export const SlyledHeader = styled.div<{}>`
  & .ant-layout-header {
    background: #f0f0ee;
  }
  & .line {
    content: '';
    display: inline-block;
    background: #d9d9f7;
    width: 1px;
    height: 32px;
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
