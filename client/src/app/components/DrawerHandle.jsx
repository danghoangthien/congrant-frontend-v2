import React, { useState } from 'react';
import { Drawer } from 'antd';
import { sleep } from 'utils/helper';

const DrawerHandle = ({
  children,
  drawerTitle,
  drawerComponent,
  onDrawerClose,
  isOpen = false,
}) => {
  const [open, setOpen] = useState(isOpen);

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
      <Drawer
        closable={false}
        width="50%"
        //title={drawerTitle || 'Drawer'}
        placement="right"
        onClose={onClose}
        visible={open}
      >
        {React.cloneElement(drawerComponent, { closeDrawer: onClose })}
      </Drawer>
    </>
  );
};

export default DrawerHandle;
