import React, { useState } from 'react';
// ANTD
import { Drawer } from 'antd';
import { sleep } from 'utils/helper';
// STYLE
import styled from 'styled-components/macro';

const StyledDrawer = styled(Drawer)`
  & .ant-drawer-content-wrapper {
    min-width: 640px;
  }
`;

const DrawerHandle = ({ children, drawerComponent, onDrawerClose, isOpen = false }) => {
  const [open, setOpen] = useState(isOpen);
  // CLOSE・閉じる時の処理
  const onClose = async () => {
    setOpen(false);
    await sleep(500);
    onDrawerClose();
  };

  return (
    <>
      <span
        onClick={() => {
          setOpen(true);
        }}
      >
        {children}
      </span>

      <StyledDrawer
        bodyStyle={{ padding: '24px 32px 54px' }}
        closable={false}
        width="50%"
        style={{ minWidth: '640px' }}
        placement="right"
        onClose={onClose}
        visible={open}
        mask={false}
      >
        {React.cloneElement(drawerComponent, { closeDrawer: onClose })}
      </StyledDrawer>
    </>
  );
};

export default DrawerHandle;
