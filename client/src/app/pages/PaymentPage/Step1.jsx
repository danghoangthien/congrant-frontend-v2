import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// ANTD
import { Row, Col, Space, Divider, Checkbox } from 'antd';
// COMPONENT
import {
  SettingsInputContainer,
  FormSelect,
  FormLabel,
  FormRadio,
  FormCourseRadio,
  FormRadioGroup,
  FormRadioButtonGroup,
  FormRadioButton,
  FormInput,
} from 'utils/Sprites';
// STYLE
import { StyledChangeButton, StyledPrivacyCard, StyledButton } from './PaymentPage.style';
// IMAGE
import PaymentImage from 'styles/assets/icon_payment.svg';
// MODEL
import './Models/index';

const Step1 = ({ type }) => {
  // const [method, setMethod] = useState('1');
  const { method } = useSelector(state => state['paymentMethod']);
  const dispatch = useDispatch();
  const params = useParams();
  console.log(params);

  const onMethodChange = e => {
    console.log(e.target.value);
    // setMethod(e.target.value);
    dispatch.paymentMethod.setMethod(e.target.value);
  };

  return (
    <>
      <div className="payment-form-title">申込内容</div>
      <Row>
        {/* 決済方法・Payment Method */}
        <Col className="mb-7" span={24}>
          <SettingsInputContainer label={<FormLabel required label={'決済方法'} />}>
            <FormRadioGroup
              defaultValue={method}
              style={{ width: '100%' }}
              onChange={onMethodChange}
            >
              <FormRadio value="1" label="クレジットカード / ウォレット" image={PaymentImage} />
              <FormRadio value="2" label="銀行振込" />
            </FormRadioGroup>
          </SettingsInputContainer>
        </Col>
        {/* 決済の頻度・Payment Frequency */}
        <Col className="mb-7" span={24}>
          <SettingsInputContainer label={<FormLabel required label={'決済の頻度'} />}>
            {type === '1' ? (
              <FormRadioButtonGroup defaultValue="1">
                <FormRadioButton value="1" label="今回のみ" />
              </FormRadioButtonGroup>
            ) : (
              <FormRadioButtonGroup defaultValue="1">
                <FormRadioButton value="1" label="今回のみ" />
                {method === '1' && (
                  <>
                    <FormRadioButton value="2" label="毎月" />
                    <FormRadioButton value="3" label="毎年" />
                  </>
                )}
              </FormRadioButtonGroup>
            )}
          </SettingsInputContainer>
        </Col>

        {/* 金額・Money Amount */}
        {type === '1' ? (
          <Col className="mb-7" span={24}>
            <SettingsInputContainer label={<FormLabel required label={'コース'} />}>
              <FormRadioGroup
                defaultValue={'a'}
                style={{ width: '100%' }}
                // onChange={onMethodChange}
              >
                <FormCourseRadio
                  value="a"
                  label="Aコース"
                  image={`https://media.istockphoto.com/id/624183176/photo/terraced-rice-field-in-mu-cang-chai-vietnam.jpg?s=612x612&w=0&k=20&c=8r_qT3g_x58wtOr6WKNtZDN7D1c4yKWttcfLJDnB9EA=`}
                  money={`5,000`}
                  stock={`無制限`}
                />
                <FormCourseRadio
                  value="b"
                  label="Bコース"
                  image={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2zsFFjwcC0OxTOXI19SHnSAv8f2m11tUDXA&usqp=CAU`}
                  money={`5,000`}
                  stock={`9/10個`}
                />
                <FormCourseRadio
                  disabled
                  value="c"
                  label="Cコース"
                  image={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbbP3rMrl58MRc-KTePEPtvuNlHE9l9sz5RA&usqp=CAU`}
                  money={`5,000`}
                  stock={0}
                />
              </FormRadioGroup>
            </SettingsInputContainer>
          </Col>
        ) : (
          <Col className="mb-7" span={24}>
            <SettingsInputContainer label={<FormLabel required label={'金額'} />}>
              <FormSelect
                required
                style={{ width: 300 }}
                size="large"
                placeholder="選択してください"
              ></FormSelect>
            </SettingsInputContainer>
          </Col>
        )}

        {/* 口数選択・Number of items */}
        <Col className="mb-7" span={24}>
          <SettingsInputContainer label={<FormLabel required label={'口数選択'} />}>
            <Space size={14}>
              <StyledChangeButton className="change-amount-button">
                <span
                  class="material-symbols-outlined fill-icon icon"
                  style={{ color: 'rgba(34, 34, 34, 0.4)' }}
                >
                  do_not_disturb_on
                </span>
              </StyledChangeButton>
              <FormInput
                required
                style={{
                  width: 80,
                  // display: 'flex',
                  // flexDirection: 'row-reverse',
                  // paddingLeft: 0,
                  // paddingRight: 11,
                }}
                size="large"
                defaultValue={1}
                suffix="口"
              ></FormInput>
              <StyledChangeButton className="change-amount-button">
                <span class="material-symbols-outlined fill-icon icon">add_circle</span>
              </StyledChangeButton>
            </Space>
          </SettingsInputContainer>
        </Col>
        {/* 合計金額・Sum Money */}
        <Col span={24} className="mb-2">
          <Row align="middle" justify="space-between">
            <span className="total-money-title">合計金額</span>
            <span className="total-money-amount">3,000円</span>
          </Row>
          <Divider />
        </Col>
        {/* ポリシー・Policy */}
        <Col span={24} className="mb-4">
          <Checkbox>
            <a href="/" target="_blank">
              利用規約・プライバシーポリシー
            </a>
            に同意します
          </Checkbox>
        </Col>
        {/* 同意事項・Agreement */}
        <Col span={24} className="mb-8">
          <Checkbox>以下の同意事項に同意します</Checkbox>
        </Col>
        <Col span={24} className="mb-8">
          <StyledPrivacyCard>
            <div className="title">同意事項</div>
            <div className="content">
              ・団体が設定した同意事項が入ります。団体が設定した同意事項が入ります。団体が設定した同意事項が入ります。団体が設定した同意事項が入ります。団体が設定した同意事項が入ります。団体が設定した同意事項が入ります。団体が設定した同意事項が入ります。団体が設定した同意事項が入ります。
              <br />
              ・団体が設定した同意事項が入ります。団体が設定した同意事項が入ります。団体が設定した同意事項が入ります。団体が設定した同意事項が入ります。団体が設定した同意事項が入ります。団体が設定した同意事項が入ります。団体が設定した同意事項が入ります。
            </div>
          </StyledPrivacyCard>
        </Col>
        {/* 送信ボタン・Next Button */}
        <Col span={24}>
          <Row justify="end">
            <StyledButton
              type="primary"
              size="large"
              style={{ width: '112px' }}
              onClick={() => {
                dispatch.paymentStep.setActive('2');
              }}
            >
              次へ
            </StyledButton>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Step1;
