import { Col, Space } from 'antd';
import {
  StyledRequired,
  StyledLabel,
  StyledInput,
  StyledTextarea,
  StyledSelect,
  StyledInputPassword,
} from 'app/components/Layout/SettingsLayout.style';
import { InfoCircleFilled } from '@ant-design/icons';

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

const SettingLabel = ({ label, required, info }) => (
  <StyledLabel>
    <Space>
      {required && <StyledRequired>{'*'}</StyledRequired>}
      <>{label}</>
      {info && <>{info}</>}
    </Space>
  </StyledLabel>
);

const SettingInfoLabel = ({ label, required }) => (
  <SettingLabel
    required={required || false}
    label={label}
    info={<InfoCircleFilled className="display-inline-flex" />}
  />
);

const SettingInput = ({ placeholder, ...rest }) => (
  <StyledInput placeholder={placeholder} {...rest} />
);

const SettingInputPassword = ({ placeholder, ...rest }) => (
  <StyledInputPassword placeholder={placeholder} {...rest} />
);

const SettingTextarea = ({ placeholder, ...rest }) => (
  <StyledTextarea placeholder={placeholder} {...rest} />
);

const SettingSelect = ({ placeholder, ...rest }) => (
  <StyledSelect placeholder={placeholder} {...rest} />
);

export {
  SettingsInputContainer,
  SettingLabel,
  SettingInfoLabel,
  SettingInput,
  SettingTextarea,
  SettingSelect,
  SettingInputPassword,
};
