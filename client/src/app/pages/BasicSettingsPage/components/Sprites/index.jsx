import { Space, Badge } from 'antd';
import { MenuOutlined, DeleteFilled } from '@ant-design/icons';

export const DraggableInputItem = ({ count, InputComponent }) => (
  <Space align="center">
    <MenuOutlined className="display-inline-flex" />
    {InputComponent}
    <Badge
      count={count}
      className="display-inline-flex"
      style={{ backgroundColor: '#F0F0EE', color: '#000000', opacity: '0.5' }}
    />
    <DeleteFilled className="display-inline-flex" style={{ color: '#FF4D4F' }} />
  </Space>
);
