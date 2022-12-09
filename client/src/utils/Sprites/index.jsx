import { Col, Space, Image, Descriptions, Tooltip } from 'antd';
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
  StyledFormCourseRadio,
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

import { TEXT_COLOR } from 'styles/StyleConstants';

import { StyledSegmented } from 'styles/Element.style';

// import InfoIcon from '@mui/icons-material/Info';

const InfoIcon = () => (
  <span
    class="material-symbols-outlined fill-icon"
    style={{ fontSize: 13, display: 'flex', color: TEXT_COLOR }}
  >
    info
  </span>
);

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

const SettingInfoLabel = ({ label, required, info = null }) => (
  <StyledSettingLabel>
    <SettingLabel
      required={required || false}
      label={label}
      info={
        <Tooltip title={info || label}>
          <div>
            <InfoIcon />
          </div>
        </Tooltip>
      }
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

const FormCourseRadio = ({ value, label, image, required, fontSize, money, stock, ...rest }) => (
  <StyledFormCourseRadio value={value} {...rest} className={stock === 0 && 'disabled'}>
    <div className="label" style={{ fontSize: fontSize }}>
      <Descriptions
        title={label}
        colon={false}
        size="small"
        labelStyle={{ color: '#737373', fontWeight: '500', fontSize: '13px' }}
        contentStyle={{ fontWeight: '700', fontSize: '15px' }}
      >
        <Descriptions.Item span={1} label="金額">
          {money}円
        </Descriptions.Item>
        <Descriptions.Item span={1} label="在庫">
          {stock === 0 ? '受付終了' : stock}
        </Descriptions.Item>
      </Descriptions>
      <div className="description">
        コースの説明文が入ります。コースの説明文が入ります。コースの説明文が入ります。コースの説明文が入ります。コースの説明文が入ります。コースの説明文が入ります。コースの説明文が入ります。コースの説明文が入ります。
      </div>
    </div>
    {image && (
      <div>
        <div className="img-cover">
          <img preview={false} src={image} alt="" />
        </div>
      </div>
    )}
  </StyledFormCourseRadio>
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
  FormCourseRadio,
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
