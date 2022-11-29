import { Col, Space, Image } from 'antd';
import {
  StyledRequired,
  StyledLabel,
  StyledInput,
  StyledTextarea,
  StyledSelect,
  StyledSettingLabel,
  StyledRangePicker,
  StyledInputWrapper,
  StyledHelper,
  StyledFormLabel,
  StyledFormLabelRequired,
  StyledFormRadio,
  StyledFormRadioGroup,
  StyledFormRadioButton,
  StyledFormRadioButtonGroup,
  StyledFormInputNumber,
  StyledFormInput,
  StyledFormCheckbox,
  StyledFormSelect,
  StyledFormHelper,
  StyledFormElementContainer,
  StyledFormRadioGroupHorizontal,
} from 'styles/FormElement.style';

import { StyledSegmented } from 'styles/Element.style';

import InfoIcon from '@mui/icons-material/Info';

const SettingsInputContainer = ({ children, label }) => {
  return (
    <>
      {label && (
        <Col className="item mb-2" sm={24} md={24} lg={24}>
          <Space align="center">{label}</Space>
        </Col>
      )}
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

const SettingInput = ({ placeholder, required, ...rest }) => (
  <StyledInput className={required && 'required'} placeholder={placeholder} {...rest} />
);

const SettingTextarea = ({ placeholder, ...rest }) => (
  <StyledTextarea placeholder={placeholder} {...rest} />
);

const SettingSelect = ({ placeholder, required, ...rest }) => (
  <StyledSelect className={required && 'required'} placeholder={placeholder} {...rest} />
);

const SettingRangePicker = ({ placeholder, ...rest }) => (
  <StyledRangePicker placeholder={placeholder} {...rest} />
);

const SettingHepler = ({ placeholder, ...rest }) => (
  <StyledHelper placeholder={placeholder} {...rest} />
);

const BoldLabel = ({ label }) => {
  return <span style={{ fontWeight: 600 }}>{label}</span>;
};

const CustomSegmented = () => {
  return <StyledSegmented />;
};

//申し込みフォーム用・Payment Page
const FormLabel = ({ label, required, info }) => (
  <StyledFormLabel>
    <Space size={4}>
      <>{label}</>
      {required && <StyledFormLabelRequired>{'必須'}</StyledFormLabelRequired>}
      {info && <>{info}</>}
    </Space>
  </StyledFormLabel>
);

const FormRadio = ({ value, label, image, required, fontSize, gap, ...rest }) => (
  <StyledFormRadio value={value} {...rest}>
    <Space direction="vertical" size={gap}>
      <div className="label" style={{ fontSize: fontSize }}>
        {label}
      </div>
      {image && <Image preview={false} src={image} />}
    </Space>
  </StyledFormRadio>
);

const FormRadioGroup = ({ children, defaultValue, ...rest }) => (
  <StyledFormRadioGroup defaultValue={defaultValue} {...rest}>
    {children}
  </StyledFormRadioGroup>
);

const FormRadioGroupHorizontal = ({ children, defaultValue, ...rest }) => (
  <StyledFormRadioGroupHorizontal defaultValue={defaultValue}>
    {children}
  </StyledFormRadioGroupHorizontal>
);

const FormRadioButton = ({ value, label, image, required, ...rest }) => (
  <StyledFormRadioButton value={value}>{label}</StyledFormRadioButton>
);

const FormRadioButtonGroup = ({ children, defaultValue, ...rest }) => (
  <StyledFormRadioButtonGroup defaultValue={defaultValue} {...rest}>
    {children}
  </StyledFormRadioButtonGroup>
);

const FormInputNumber = ({ placeholder, required, ...rest }) => (
  <StyledFormInputNumber className={required && 'required'} placeholder={placeholder} {...rest} />
);

const FormInput = ({ placeholder, required, ...rest }) => (
  <StyledFormInput className={required && 'required'} placeholder={placeholder} {...rest} />
);

const FormSelect = ({ placeholder, required, ...rest }) => (
  <StyledFormSelect className={required && 'required'} placeholder={placeholder} {...rest} />
);

const FormCheckbox = ({ placeholder, required, ...rest }) => (
  <StyledFormCheckbox className={required && 'required'} placeholder={placeholder} {...rest} />
);

const FormHepler = ({ placeholder, ...rest }) => (
  <StyledFormHelper placeholder={placeholder} {...rest} />
);

const FormElementContainer = ({ children, defaultValue, ...rest }) => (
  <StyledFormElementContainer>{children}</StyledFormElementContainer>
);

const HorizontalInputContainer = ({ children, label }) => {
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

export {
  SettingsInputContainer,
  SettingLabel,
  SettingInfoLabel,
  SettingInput,
  SettingTextarea,
  SettingSelect,
  SettingRangePicker,
  SettingsInputWrapper,
  SettingHepler,
  BoldLabel,
  CustomSegmented,
  FormLabel,
  FormRadio,
  FormInputNumber,
  FormRadioGroup,
  FormRadioButton,
  FormRadioButtonGroup,
  FormInput,
  FormCheckbox,
  FormSelect,
  FormHepler,
  FormElementContainer,
  FormRadioGroupHorizontal,
  HorizontalInputContainer,
};
