// ANTD
import { Space, Col } from 'antd';
import {
  StyledRequired,
  StyledLabel,
  StyledTextarea,
  StyledCheckbox,
  StyledHelper,
} from 'styles/RecurringCancelFormElement.style';
// CONST
// import { TEXT_COLOR, TEXT_GRAY_COLOR, DANGER_COLOR } from 'styles/StyleConstants';

//継続決済解約フォーム用
const SettingsInputContainer = ({ children, label }) => {
  return (
    <>
      {label && (
        <Col className="item mb-3" sm={24} md={24} lg={24}>
          <Space align="center">{label}</Space>
        </Col>
      )}
      <Col className="item" sm={24} md={24} lg={24}>
        {children}
      </Col>
    </>
  );
};

const SettingLabel = ({ label, required, info }) => (
  <StyledLabel>
    <Space size={4}>
      <>
        {label}
        {required && <StyledRequired>{'必須'}</StyledRequired>}
      </>
      {info && <>{info}</>}
    </Space>
  </StyledLabel>
);

const SettingTextarea = ({ placeholder, ...rest }) => (
  <StyledTextarea placeholder={placeholder} {...rest} />
);

const SettingCheckbox = ({ ...rest }) => <StyledCheckbox {...rest} />;

const SettingHepler = ({ placeholder, ...rest }) => (
  <StyledHelper placeholder={placeholder} {...rest} />
);

export { SettingsInputContainer, SettingLabel, SettingTextarea, SettingHepler, SettingCheckbox };
