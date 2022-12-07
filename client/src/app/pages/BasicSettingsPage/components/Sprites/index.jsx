import { Space, Badge } from 'antd';
import { TEXT_GRAY_COLOR, DANGER_COLOR, LIGHT_GRAY } from 'styles/StyleConstants';

export const DraggableInputItem = ({ count, InputComponent }) => (
  <Space align="center">
    <span className="material-symbols-outlined" style={{ color: TEXT_GRAY_COLOR }}>
      menu
    </span>
    {InputComponent}
    {/* <Badge
      count={'99'}
      className="roboto-mono"
      style={{ backgroundColor: LIGHT_GRAY, color: TEXT_GRAY_COLOR }}
    /> */}
    <span
      className="material-symbols-outlined fill-icon"
      style={{ color: DANGER_COLOR, fontSize: '18px', display: 'flex' }}
    >
      delete
    </span>
  </Space>
);
