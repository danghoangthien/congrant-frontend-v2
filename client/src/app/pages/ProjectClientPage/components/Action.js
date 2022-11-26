import { ActionButton } from './Action.style';
import { Space } from 'antd';

const Action = () => {
  return (
    <Space size={2}>
      <ActionButton type="text">
        <span class="material-symbols-outlined icon">link</span>
        <span>リンクをコピー</span>
      </ActionButton>
      <ActionButton type="text">
        <span class="material-symbols-outlined icon">qr_code</span>
        <span>QRコード</span>
      </ActionButton>
      <ActionButton type="text">
        <span class="material-symbols-outlined icon">code</span>
        <span>埋め込み</span>
      </ActionButton>
    </Space>
  );
};

export default Action;
