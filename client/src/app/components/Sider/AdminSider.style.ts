import styled from 'styled-components/macro';
import { Layout } from 'antd';
import {
  GRAY_COLOR,
  TEXT_COLOR,
  EXTRA_LIGHT_GRAY_COLOR,
  PRIMARY_ADMIN_COLOR,
} from 'styles/StyleConstants';
const { Sider } = Layout;

export const StyledSidebar = styled(Sider)`
  background: #ffffff;
  border-right: 1px solid ${GRAY_COLOR};

  .ant-menu-sub.ant-menu-inline > .ant-menu-item,
  .ant-menu-sub.ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title {
    padding: 0 40px !important;
    background: ${EXTRA_LIGHT_GRAY_COLOR};
    border-top: none;
    font-size: 14px;
  }

  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected,
  .ant-menu-item:active, .ant-menu-submenu-title:active {
    background: rgba(40, 120, 203, 0.1);
  }

  .ant-menu-inline .ant-menu-item::after {
    border-color: ${PRIMARY_ADMIN_COLOR};
  }

  .ant-menu-item:hover,
  .ant-menu-submenu-title:hover,
  .ant-menu-submenu:hover > .ant-menu-submenu-title > .ant-menu-submenu-arrow,
  .ant-menu-submenu-selected,
  .ant-menu-item a:hover,
  .ant-menu-item-selected a,
  .ant-menu-item-selected a:hover,
  .ant-menu-item-selected {
    color: ${PRIMARY_ADMIN_COLOR};
  }

  .collapsed-wrapper {
    display: none;
  }

  .will-collapsed-item {
    transition: all 0.3s ease;
  }

  & .user-box {
    padding: 16px 24px;
    border-top: 1px solid ${GRAY_COLOR};

    .user-name {
      font-size: 12px;
      margin-bottom: 6px;
      line-height: 1;
    }

    .representative-name {
      font-size: 14px;
    }
  }

  & .menu-btn {
    cursor: pointer;
    transition: all 0.3s ease;
    margin-bottom: 16px;
    width: 36px;
    margin-left: -8px;
  }

  & .logo-wrapper {
    display: flex;
    transition: all 0.3s ease;
    align-items: center;
    padding-left: 2px;
    margin-left: -3px;

    .logo-icon {
      margin-right: 5px;
    }
  }

  .sider-menu-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
  }

  .main-menu {
    flex: 1 1 0%;
    overflow: hidden auto;
    // margin-right: -15px;

    svg {
      font-size: 18px;
    }

    .ant-menu-item {
      font-size: 16px;
    }
  }

  & .user-box-wrapper {
    // position: absolute;
    // bottom: 0;
    width: 100%;
    min-width: 200px;
    white-space: nowrap;
    overflow: hidden;
    transition: all 0.1s ease;

    & .user-box-item {
      transition: all 0.1s ease;
    }

    & .sub-menu-link {
      font-size: 12px;
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-right: 24px;
      word-break: break-all;
      white-space: pre-wrap;
      line-height: 1.83;
      width: 100%;
      margin: 0;
      padding: 8px 24px !important;
      height: auto;
      border-top: 1px solid ${GRAY_COLOR};
      color: ${TEXT_COLOR};

      .icon {
        font-size: 16px;
        margin-left: 15px;
      }

      &:hover {
        color: ${PRIMARY_ADMIN_COLOR};
      }

      svg {
        font-size: 12px;
        position: absolute;
        right: 24px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }

  &.ant-layout-sider-collapsed {
    & .collapsed-wrapper {
      display: block;
    }

    & .menu-btn,
    & .logo-wrapper {
      margin-left: 0;
    }

    & .user-box-wrapper {
      // height: 0;
      // opacity: 0;
      // visibility: hidden;
      // width: 0;
      // min-width: auto;
      // display: none;
      // transition: all 0.1s ease;
    }

    & .will-collapsed-item {
      // width: 0;
      // opacity: 0;
      // min-height: 0;
      // visibility: hidden;
      // height: 0;
      // margin: 0;
      // padding: 0;
      display: none;

      &.-fast {
        display: none;
      }
    }
  }
`;
