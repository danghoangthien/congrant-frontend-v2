import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
// ANTD
import { Row, Col, Checkbox } from 'antd';
// COMPONENT
import {
  SettingsInputContainer,
  FormInput,
  FormLabel,
  FormRadio,
  SettingTextarea,
  FormRadioButtonGroup,
  FormRadioButton,
  FormCheckbox,
  FormHepler,
  FormSelect,
  HorizontalInputContainer,
} from 'utils/Sprites';
import NoticeModal from 'app/components/Modal/NoticeModal';
// STYLE
import {
  StyledButton,
  StyledBackButton,
  StyledPrivacyCard,
  StyledNoticeList,
  StyledCheckboxWrapper,
} from './PaymentPage.style';
// MODEL
import './Models/index';

const Step2 = ({ project_type }) => {
  const [type, setType] = useState('1');
  const [destination, setDestination] = useState(false);
  const [anonymous, setAnonymous] = useState(false);
  const { method } = useSelector(state => state['paymentMethod']);
  const dispatch = useDispatch();
  // プロジェクトのテーマカラー・Project Theme Color
  const onChange = e => {
    setType(e.target.value);
  };
  const handleChangeDestination = e => {
    setDestination(e.target.checked);
  };
  const handleChangeAnonymous = e => {
    console.log(e.target.checked);
    setAnonymous(e.target.checked);
  };

  return (
    <>
      {/* 申込者情報 */}
      <div className="box-wrapper">
        <Row>
          <Col span={24}>
            <div className="payment-form-title">申込者情報</div>
          </Col>
          {/* 個人 / 法人 */}
          <Col className="mb-7" span={24}>
            <StyledCheckboxWrapper>
              <Checkbox onChange={handleChangeAnonymous}>匿名で申し込む</Checkbox>
            </StyledCheckboxWrapper>
          </Col>

          {/* 個人 / 法人 */}
          {anonymous === false && (
            <Col className="mb-7" span={24}>
              <SettingsInputContainer label={<FormLabel required label={'個人 / 法人'} />}>
                <FormRadioButtonGroup defaultValue="1" onChange={onChange}>
                  <FormRadioButton value="1" label="個人" />
                  <FormRadioButton value="2" label="法人" />
                </FormRadioButtonGroup>
              </SettingsInputContainer>
            </Col>
          )}

          {/* メールアドレス */}
          <Col span={24}>
            <SettingsInputContainer label={<FormLabel required label={'メールアドレス'} />}>
              <FormInput size="large" required placeholder="tanaka@congrant.com" />
            </SettingsInputContainer>
            <FormHepler>
              メールを確実にお届けするために、PCメールアドレスをご利用ください。
            </FormHepler>
          </Col>

          {anonymous === false && (
            <>
              {type === '1' && (
                <>
                  {/* 個人はここから・Individual */}
                  {/* 氏名 */}
                  <Col className="mt-7 mb-7" span={24}>
                    <SettingsInputContainer label={<FormLabel label={'氏名'} required />}>
                      <Col span={24}>
                        <Row gutter={10}>
                          <Col span={12}>
                            <FormInput
                              required
                              size="large"
                              placeholder={'姓'}
                              style={{ width: '100%' }}
                            />
                          </Col>
                          <Col span={12}>
                            <FormInput
                              required
                              size="large"
                              placeholder={'名'}
                              style={{ width: '100%' }}
                            />
                          </Col>
                        </Row>
                      </Col>
                    </SettingsInputContainer>
                  </Col>

                  {/* ふりがな */}
                  <Col className="mb-7" span={24}>
                    <SettingsInputContainer label={<FormLabel label={'ふりがな'} required />}>
                      <Col span={24}>
                        <Row gutter={10}>
                          <Col span={12}>
                            <FormInput
                              required
                              size="large"
                              placeholder={'せい'}
                              style={{ width: '100%' }}
                            />
                          </Col>
                          <Col span={12}>
                            <FormInput
                              required
                              size="large"
                              placeholder={'めい'}
                              style={{ width: '100%' }}
                            />
                          </Col>
                        </Row>
                      </Col>
                    </SettingsInputContainer>
                  </Col>
                </>
              )}

              {type === '2' && (
                <>
                  {/* 法人はここから・Corporation */}
                  {/* 法人名 */}
                  <Col className="mb-7" span={24}>
                    <SettingsInputContainer label={<FormLabel label={'法人名'} required />}>
                      <FormInput
                        required
                        size="large"
                        placeholder={'コングラント株式会社'}
                        style={{ width: '100%' }}
                      />
                    </SettingsInputContainer>
                  </Col>

                  {/* 担当者名 */}
                  <Col className="mb-7" span={24}>
                    <SettingsInputContainer label={<FormLabel label={'担当者名'} required />}>
                      <Col span={24}>
                        <Row gutter={10}>
                          <Col span={12}>
                            <FormInput
                              required
                              size="large"
                              placeholder={'姓'}
                              style={{ width: '100%' }}
                            />
                          </Col>
                          <Col span={12}>
                            <FormInput
                              required
                              size="large"
                              placeholder={'名'}
                              style={{ width: '100%' }}
                            />
                          </Col>
                        </Row>
                      </Col>
                    </SettingsInputContainer>
                  </Col>

                  {/* 担当者名（ふりがな） */}
                  <Col className="mb-7" span={24}>
                    <SettingsInputContainer
                      label={<FormLabel label={'担当者名（ふりがな）'} required />}
                    >
                      <Col span={24}>
                        <Row gutter={10}>
                          <Col span={12}>
                            <FormInput
                              required
                              size="large"
                              placeholder={'せい'}
                              style={{ width: '100%' }}
                            />
                          </Col>
                          <Col span={12}>
                            <FormInput
                              required
                              size="large"
                              placeholder={'めい'}
                              style={{ width: '100%' }}
                            />
                          </Col>
                        </Row>
                      </Col>
                    </SettingsInputContainer>
                  </Col>

                  <Col className="mb-7" span={24}>
                    <SettingsInputContainer label={<FormLabel label={'担当者名 部署・肩書き'} />}>
                      <FormInput
                        size="large"
                        placeholder={'コングラント株式会社'}
                        style={{ width: '100%' }}
                      />
                    </SettingsInputContainer>
                  </Col>
                </>
              )}

              {/* 広報物への掲載 */}
              <Col className="mb-7" span={24}>
                <SettingsInputContainer label={<FormLabel label={'広報物への掲載'} />}>
                  <Col span={24}>
                    <Checkbox checked>広報物への氏名掲載を許可する</Checkbox>
                  </Col>
                </SettingsInputContainer>
              </Col>

              {type === '1' && (
                <>
                  {/* 性別・個人・Indiviual */}
                  <Col className="mb-7" span={24}>
                    <HorizontalInputContainer label={<FormLabel required label={'性別'} />}>
                      <Row gutter={10} className="horizontal-input-wrapper">
                        <Col span={8}>
                          <FormRadio value="a" style={{ width: '100%' }} label="男性" />
                        </Col>
                        <Col span={8}>
                          <FormRadio value="b" style={{ width: '100%' }} label="女性" />
                        </Col>
                        <Col span={8}>
                          <FormRadio value="b" style={{ width: '100%' }} label="その他" />
                        </Col>
                      </Row>
                    </HorizontalInputContainer>
                  </Col>

                  {/* 生年月日 */}
                  <Col className="mb-7" span={24}>
                    <HorizontalInputContainer label={<FormLabel required label={'生年月日'} />}>
                      <Row gutter={10} className="horizontal-input-wrapper">
                        <Col span={8}>
                          <FormSelect
                            style={{ width: '100%' }}
                            required
                            size="large"
                            placeholder="年"
                          ></FormSelect>
                        </Col>
                        <Col span={8}>
                          <FormSelect
                            style={{ width: '100%' }}
                            required
                            size="large"
                            placeholder="月"
                          ></FormSelect>
                        </Col>
                        <Col span={8}>
                          <FormSelect
                            style={{ width: '100%' }}
                            required
                            size="large"
                            placeholder="日"
                          ></FormSelect>
                        </Col>
                      </Row>
                    </HorizontalInputContainer>
                  </Col>
                </>
              )}

              {/* 電話番号 */}
              <Col className="mb-7" span={24}>
                <SettingsInputContainer label={<FormLabel label={'電話番号'} />}>
                  <FormInput size="large" placeholder="08012345678" />
                </SettingsInputContainer>
              </Col>

              {/* 住所 */}
              <Col className="mb-7" span={24} id="address">
                <SettingsInputContainer
                  label={<FormLabel label={type === '1' ? '住所' : '所在地'} required />}
                >
                  <Col span={24} className="mb-3">
                    <FormSelect
                      style={{ width: '100%' }}
                      required
                      size="large"
                      defaultValue="日本"
                      getPopupContainer={() => document.getElementById('address')}
                      options={[
                        {
                          value: '日本',
                          label: '日本',
                        },
                        {
                          value: 'アメリカ',
                          label: 'アメリカ',
                        },
                      ]}
                    ></FormSelect>
                  </Col>
                  <Col span={24} className="mb-3">
                    <Row gutter={10}>
                      <Col span={12}>
                        <FormInput
                          size="large"
                          addonBefore="〒"
                          placeholder={'0000000'}
                          style={{ width: '100%' }}
                        />
                      </Col>
                      <Col span={12}>
                        <FormInput
                          size="large"
                          disabled
                          placeholder={'都道府県'}
                          style={{ width: '100%' }}
                        />
                      </Col>
                    </Row>
                  </Col>
                  <Col span={24} className="mb-3">
                    <FormInput size="large" required placeholder="市区町村" />
                  </Col>
                  <Col span={24} className="mb-3">
                    <FormInput size="large" required placeholder="番地・建物名・部屋番号等" />
                  </Col>
                  <Col span={24}>
                    <FormCheckbox onChange={handleChangeDestination}>
                      郵便物の送付先を別途指定する
                    </FormCheckbox>
                  </Col>
                </SettingsInputContainer>
              </Col>

              {/* 郵便物の送付先 */}
              {destination && (
                <Col className="mb-7" span={24}>
                  <SettingsInputContainer label={<FormLabel label={'郵便物の送付先'} required />}>
                    <Col span={24} className="mb-3">
                      <FormSelect
                        style={{ width: '100%' }}
                        required
                        size="large"
                        defaultValue="日本"
                        options={[
                          {
                            value: '日本',
                            label: '日本',
                          },
                          {
                            value: 'アメリカ',
                            label: 'アメリカ',
                          },
                        ]}
                      ></FormSelect>
                    </Col>
                    <Col span={24} className="mb-3">
                      <Row gutter={10}>
                        <Col span={12}>
                          <FormInput
                            size="large"
                            addonBefore="〒"
                            placeholder={'0000000'}
                            style={{ width: '100%' }}
                          />
                        </Col>
                        <Col span={12}>
                          <FormInput
                            size="large"
                            disabled
                            placeholder={'都道府県'}
                            style={{ width: '100%' }}
                          />
                        </Col>
                      </Row>
                    </Col>
                    <Col span={24} className="mb-3">
                      <FormInput size="large" required placeholder="市区町村" />
                    </Col>
                    <Col span={24} className="mb-3">
                      <FormInput size="large" required placeholder="番地・建物名・部屋番号等" />
                    </Col>
                    <Col span={24} className="mb-3">
                      <FormInput size="large" required placeholder="会社名・所属" />
                    </Col>
                    <Col span={24} className="mb-3">
                      <FormInput size="large" required placeholder="宛名" />
                    </Col>
                  </SettingsInputContainer>
                </Col>
              )}

              {/* お子様のお名前 */}
              <Col className="mb-7" span={24}>
                <SettingsInputContainer label={<FormLabel label={'お子様のお名前'} />}>
                  <FormHepler className="mb-2">
                    あなたが施設利用者の場合、お子様のお名前を教えてください。
                  </FormHepler>
                  <FormInput size="large" placeholder="氏名" />
                </SettingsInputContainer>
              </Col>

              {/* 認知経路 */}
              <Col className="mb-7" span={24}>
                <SettingsInputContainer label={<FormLabel label={'認知経路'} />}>
                  <FormHepler className="mb-2">当団体をどこで知りましたか？</FormHepler>
                  <FormSelect
                    style={{ width: '100%' }}
                    size="large"
                    placeholder="選択してください"
                  ></FormSelect>
                </SettingsInputContainer>
              </Col>

              {/* 備考欄 */}
              <Col span={24}>
                <SettingsInputContainer label={<FormLabel label={'備考欄'} />}>
                  <FormHepler className="mb-2">質問・確認事項があれば記入してください。</FormHepler>
                  <SettingTextarea size="large" rows={3} />
                </SettingsInputContainer>
              </Col>
            </>
          )}
        </Row>
      </div>

      {/* 応援コメント */}
      <div className="box-wrapper">
        <Row className="mb-8">
          <Col span={24}>
            <div className="payment-form-title">応援コメント</div>
          </Col>
          <Col className="mb-6" span={24}>
            <SettingsInputContainer label={<FormLabel label={'コメント'} />}>
              <FormHepler className="mb-2">
                いただいたコメントはプロジェクトページで公開されます。公開を希望しない場合は「コメントの公開を許可する」のチェックを外してください。
              </FormHepler>
              <SettingTextarea size="large" rows={3} />
            </SettingsInputContainer>
          </Col>
          <Col className="mb-6" span={24}>
            <FormCheckbox>コメントの公開を許可する</FormCheckbox>
          </Col>
          <Col span={24}>
            <SettingsInputContainer label={<FormLabel label={'公開するお名前'} />}>
              <FormInput size="large" placeholder={'田中 太郎'} style={{ width: '100%' }} />
            </SettingsInputContainer>
          </Col>
        </Row>
      </div>

      {/* ボタン */}
      <div>
        {method === '2' && ( // 銀行振込
          <div className="box-wrapper">
            {/* 合計金額 */}
            {/* <Col span={24} className="mb-8">
            <Row className="mb-5" align="middle" justify="space-between">
              <span className="total-money-title">合計金額</span>
              <span className="total-money-amount">3,000円</span>
            </Row>
            <Divider />
          </Col> */}
            <Row>
              <Col span={24}>
                <div className="payment-form-title">同意事項</div>
              </Col>

              {/* 同意事項・Agreement */}
              <Col span={24} className="mb-4">
                <Checkbox>
                  決済サービスの
                  <a
                    className="external-link"
                    href="https://www.google.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    利用規約
                  </a>
                  ・
                  <a
                    className="external-link"
                    href="https://www.google.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    プライバシーポリシー
                  </a>
                  に同意します
                </Checkbox>
              </Col>

              <Col span={24} className="mb-6">
                <StyledNoticeList>
                  <li>
                    <NoticeModal
                      text="寄付決済サービスについて"
                      title="寄付決済サービスについて"
                      content="本ページはコングラント株式会社が提供する寄付決済・管理サービス「コングラント」を利用して作成されています。「コングラント」は利用団体に提供されるシステムであり、コングラント株式会社は利用団体の寄付募集の実行には関与しておりません。"
                    />
                  </li>
                  <li>
                    <NoticeModal
                      text="クレジットカード決済について"
                      title="クレジットカード決済について"
                      content="決済者のクレジットカード情報はコングラントが提携する決済代行会社が適切に管理します。"
                    />
                  </li>
                  <li>
                    <NoticeModal
                      text="決済のキャンセル・返金について"
                      title="決済のキャンセル・返金について"
                      content="お客様の事情による決済後のキャンセル・返金はお受けできません。あらかじめご了承ください。"
                    />
                  </li>
                </StyledNoticeList>
              </Col>

              <Col span={24} className="mb-4">
                <Checkbox>支援先からの確認事項に同意します</Checkbox>
              </Col>

              <Col span={24}>
                <StyledPrivacyCard>
                  <div className="title">支援先からの確認事項</div>
                  <div className="content">
                    ・団体が設定した同意事項が入ります。団体が設定した同意事項が入ります。団体が設定した同意事項が入ります。団体が設定した同意事項が入ります。団体が設定した同意事項が入ります。団体が設定した同意事項が入ります。団体が設定した同意事項が入ります。団体が設定した同意事項が入ります。
                    <br />
                    ・団体が設定した同意事項が入ります。団体が設定した同意事項が入ります。団体が設定した同意事項が入ります。団体が設定した同意事項が入ります。団体が設定した同意事項が入ります。団体が設定した同意事項が入ります。団体が設定した同意事項が入ります。
                  </div>
                </StyledPrivacyCard>
              </Col>
            </Row>
          </div>
        )}
      </div>

      {/* ボタン */}
      {project_type !== 'monthly' && (
        <div>
          <Row>
            <Col span={24}>
              <Row justify="space-between">
                <StyledBackButton
                  size="large"
                  onClick={() => {
                    dispatch.paymentStep.setActive('1');
                  }}
                >
                  <span className="material-symbols-outlined icon">arrow_back_ios</span>
                  申込内容を修正
                </StyledBackButton>
                <StyledButton
                  type="primary"
                  size="large"
                  style={{ width: '114px' }}
                  onClick={() => {
                    dispatch.paymentStep.setActive(`${method === '2' ? '4' : '3'}`);
                  }}
                >
                  {`${method === '2' ? '申し込む' : '次へ'}`}
                </StyledButton>
              </Row>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
};

export default Step2;
