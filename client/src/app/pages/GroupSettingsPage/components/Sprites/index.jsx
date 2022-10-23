import { Col, Space } from 'antd';
import {
  StyledRequired,
  StyledLabel,
  StyledInput,
} from 'app/components/Layout/SettingsLayout.style';

const SettingsInputContainer = ({ children, label }) => {
  return (
    <>
      <Col className="item my-2" sm={24} md={24} lg={24}>
        <Space align="center">{label}</Space>
      </Col>
      <Col className="item my-2" sm={24} md={24} lg={24}>
        {children}
      </Col>
    </>
  );
};

const SettingLabel = ({ label, required }) => (
  <StyledLabel>
    {required && <StyledRequired className="mr-1">{'*'}</StyledRequired>}
    <>{label}</>
  </StyledLabel>
);

const SettingInput = ({ placeholder, ...rest }) => (
  <StyledInput placeholder={placeholder} {...rest} />
);

export { SettingsInputContainer, SettingLabel, SettingInput };
