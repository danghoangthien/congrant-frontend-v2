import React, { useState } from 'react';
// ANTD
import { Drawer, Space } from 'antd';
import { sleep } from 'utils/helper';
// STYLE
import styled from 'styled-components/macro';

const DrawerHandle = ({
  children,
  drawerComponent,
  onDrawerClose,
  isOpen = false,
  bodyStyle = null,
}) => {
  const [open, setOpen] = useState(isOpen);
  const StyledDrawer = styled(Drawer)`
    & .ant-drawer-content-wrapper {
      ${open && `min-width: 640px;`}
    }
  `;
  // CLOSE・閉じる時の処理
  const onClose = async () => {
    setOpen(false);
    //document.querySelectorAll('.ant-drawer').forEach(el => el.remove());
    await sleep(500);
    onDrawerClose && onDrawerClose();
  };

  return (
    <span onClick={e => e.stopPropagation()}>
      <span
        onClick={e => {
          setOpen(true);
        }}
      >
        {children}
      </span>

      <StyledDrawer
        bodyStyle={bodyStyle || { padding: '32px 32px 54px' }}
        closable={false}
        placement="right"
        onClose={onClose}
        visible={open}
        mask={true}
      >
        {React.cloneElement(drawerComponent, { closeDrawer: onClose })}
      </StyledDrawer>
    </span>
  );
};

export default DrawerHandle;
