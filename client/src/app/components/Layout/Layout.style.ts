import styled from 'styled-components/macro';
import { PRIMARY_COLOR, GRAY, TEXT_COLOR } from 'styles/StyleConstants';

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
  & .menu-item {
    text-overflow: clip;
    white-space: nowrap;
    padding: 12px 24px;
    transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  & .sidebar-link {
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
    .logo-text {
      opacity: 0;
      width: 0;
      display: inline-block;
    }

    // & .menu-btn {
    //   margin-left: 4px;
    // }
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

  // & .user-box-wrapper {
  //   position: absolute;
  //   bottom: 0;
  //   width: 216px;
  //   min-width: 216px;
  //   white-space; no-wrap;
  //   overflow: hidden;
  //   transition: all .1s ease;

  //   & .sub-menu-link {
  //     font-size: 12px;
  //     position: relative;
  //     display: block;
  //     padding-right: 24px;
  //     word-break: break-all;
  //     white-space: pre-wrap;
  //     line-height: 1.83;
  //     width: 100%;
  //     margin: 0;
  //     padding: 8px 24px !important;
  //     height: auto;
  //     border-top: 1px solid ${GRAY};
  //     color: ${TEXT_COLOR};

  //     &:hover {
  //       color: ${PRIMARY_COLOR};
  //     }
  
  //     svg {
  //       font-size: 12px;
  //       position: absolute;
  //       right: 24px;
  //       top: 50%;
  //       transform: translateY(-50%);
  //     }
  //   }

  //   & .user-box {
  //     padding: 16px 24px;
  //     border-top: 1px solid ${GRAY};
  
  //     .user-name {
  //       font-size: 12px;
  //       margin-bottom: 6px;
  //       line-height: 1;
  //     }
  
  //     .representative-name {
  //       font-size: 14px;
  //     }
  //   }
  // }

  // & .ant-layout-sider-collapsed {
  //   & .user-box-wrapper {
  //     opacity: 0;
  //     visibility: hidden;
  //     width: 0;
  //     min-width: auto;
  //   }
  // }

  // & .user-wrapper {
  //   & .ant-menu-submenu-title {
  //     height: auto;
  //     line-height: initial;
  //     padding: 0;
  //     margin: 0;
  //     padding: 0 !important;
  //   }

  //   & .ant-menu {
  //     border-right: none;
  //   }
  // }
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
