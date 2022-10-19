import { useState } from 'react';
import { Drawer } from 'antd';

const DrawerHandle = ({
  children,
  drawerTitle,
  drawerComponent,
  onDrawerClose,
  isOpen = false,
}) => {
  const [open, setOpen] = useState(isOpen);
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
        width="550"
        title={drawerTitle || 'Drawer'}
        placement="right"
        onClose={() => {
          setOpen(false);
          onDrawerClose();
        }}
        visible={open}
      >
        {drawerComponent}
      </Drawer>
    </>
  );
};

export default DrawerHandle;
