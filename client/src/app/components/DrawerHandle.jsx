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

  const onClose = () => {
    setOpen(false);
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
        // title={drawerTitle || 'Drawer'}
        placement="right"
        onClose={onClose}
        visible={open}
      >
        {drawerComponent}
      </Drawer>
    </>
  );
};

export default DrawerHandle;
