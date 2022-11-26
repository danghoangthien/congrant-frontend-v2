// IMAGE
import Image from 'styles/assets/logo_congrant.svg';
import { Space } from 'antd';

const LogoBox = () => {
  return (
    <Space className="mb-8" align="center">
      <img className="logo-icon" src={Image} alt="コングラントロゴ" />
    </Space>
  );
};

export { LogoBox };
