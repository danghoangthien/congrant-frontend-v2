import { notification } from 'antd';
import { PRIMARY_COLOR, BLUE_COLOR, WARNING_COLOR, DANGER_COLOR } from 'styles/StyleConstants';

export const openNotification = ({ key, btn, message, description, onClose, onClick, status }) => {
  let icon;

  // 確認ダイアログ
  if (status === 'info') {
    icon = (
      <span
        className="material-symbols-outlined fill-icon"
        style={{ color: BLUE_COLOR, fontSize: '20px' }}
      >
        info
      </span>
    );
  }
  // 完了ダイアログ
  if (status === 'success') {
    icon = (
      <span
        className="material-symbols-outlined fill-icon"
        style={{ color: PRIMARY_COLOR, fontSize: '20px' }}
      >
        check_circle
      </span>
    );
  }
  // 注意ダイアログ
  if (status === 'warning') {
    icon = (
      <span
        className="material-symbols-outlined fill-icon"
        style={{ color: WARNING_COLOR, fontSize: '20px' }}
      >
        error
      </span>
    );
  }
  // エラーダイアログ
  if (status === 'error') {
    icon = (
      <span
        className="material-symbols-outlined fill-icon"
        style={{ color: DANGER_COLOR, fontSize: '20px' }}
      >
        cancel
      </span>
    );
  }
  // 削除ダイアログ
  if (status === 'warn') {
    icon = (
      <span
        className="material-symbols-outlined fill-icon"
        style={{ color: DANGER_COLOR, fontSize: '20px' }}
      >
        error
      </span>
    );
  }

  notification[`${status}`]({
    className: 'custom-nofitication',
    message,
    description,
    duration: null,
    btn,
    key,
    onClose,
    onClick,
    icon,
  });
};
