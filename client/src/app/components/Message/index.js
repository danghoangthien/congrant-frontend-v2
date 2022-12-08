import { message } from 'antd';
export const openMessage = ({ type, content, icon }) => {
  const [messageApi] = message.useMessage();
  messageApi.open({
    type,
    content,
    duration: null,
    icon,
  });
};
