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
  height: 100%;
  & .ant-layout-has-sider {
    height: 100%;
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
`;
