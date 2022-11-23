import { Col, Space } from 'antd';
import {
  StyledRequired,
  StyledLabel,
  StyledInput,
  StyledTextarea,
  StyledSelect,
  StyledSettingLabel,
  StyledRangePicker,
  StyledInputWrapper,
} from 'app/components/Layout/SettingsLayout.style';

import InfoIcon from '@mui/icons-material/Info';

const SettingsInputContainer = ({ children, label }) => {
  return (
    <>
      <Col className="item mb-2" sm={24} md={24} lg={24}>
        <Space align="center">{label}</Space>
      </Col>
      <Col className="item" sm={24} md={24} lg={24}>
        {children}
      </Col>
    </>
  );
};

const SettingsInputWrapper = ({ children, label }) => {
  return <StyledInputWrapper size={16}>{children}</StyledInputWrapper>;
};

const SettingLabel = ({ label, required, info }) => (
  <StyledLabel>
    <Space size={4}>
      {required && <StyledRequired>{'*'}</StyledRequired>}
      <>{label}</>
      {info && <>{info}</>}
    </Space>
  </StyledLabel>
);

const SettingInfoLabel = ({ label, required }) => (
  <StyledSettingLabel>
    <SettingLabel
      required={required || false}
      label={label}
      info={<InfoIcon className="info-icon" />}
    />
  </StyledSettingLabel>
);

const SettingInput = ({ placeholder, ...rest }) => (
  <StyledInput placeholder={placeholder} {...rest} />
);

const SettingTextarea = ({ placeholder, ...rest }) => (
  <StyledTextarea placeholder={placeholder} {...rest} />
);

const SettingSelect = ({ placeholder, ...rest }) => (
  <StyledSelect placeholder={placeholder} {...rest} />
);

const SettingRangePicker = ({ placeholder, ...rest }) => (
  <StyledRangePicker placeholder={placeholder} {...rest} />
);

export {
  SettingsInputContainer,
  SettingLabel,
  SettingInfoLabel,
  SettingInput,
  SettingTextarea,
  SettingSelect,
  SettingRangePicker,
  SettingsInputWrapper,
};
