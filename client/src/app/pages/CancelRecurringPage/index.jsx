import { Helmet } from 'react-helmet-async';
// ANTD
import { Card, Row, Col, Space, Button } from 'antd';
// COMPONENT
import RecurringCancelFormLayout from 'app/components/Layout/RecurringCancelForm';
import {
  SettingsInputContainer,
  SettingLabel,
  SettingTextarea,
  SettingCheckbox,
  SettingHepler,
} from 'utils/Sprites/RecurringFormElement';
// STYLE
import styled from 'styled-components/macro';
import { EXTRA_LIGHT_GRAY } from 'styles/StyleConstants';

const StyledFormCard = styled(Card)`
  border: none;
  border-radius: 0;

  .card-title {
    text-align: center;
    font-weight: 700;
    font-size: 21px;
    margin-bottom: 16px;
  }

  .card-description {
    line-height: 1.7;
    margin-bottom: 50px;
  }

  .money-box {
    background: ${EXTRA_LIGHT_GRAY};
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    padding: 12px 10px;
  }

  .send-btn {
    width: 100%;
    height: 56px;
    font-weight: 700;
  }
`;

const CancelRecurringPage = () => {
  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'継続決済解約フォーム'}</title>
          <meta name="description" content={'...'} />
        </Helmet>
      </>
    );
  };

  return (
    <>
      {renderPageTitle()}
      <RecurringCancelFormLayout>
        <Row justify="center">
          <StyledFormCard style={{ width: '100%', maxWidth: 580 }} bodyStyle={{ padding: 40 }}>
            <div className="card-title">継続決済の解約</div>
            <div className="card-description">
              いつもご支援くださり誠にありがとうございます。継続決済の解約をご希望の場合はこちらのフォームからお申し込みください。
              <br />
              これは<a href="http://localhost:9001/keizoku-cancel/form">荒木雄大様専用</a>
              の解約フォームです。決して第三者に共有しないようにご注意ください。
            </div>
            <Row className="mb-12">
              <Col span={24} className="mb-7">
                <SettingsInputContainer label={<SettingLabel label={'現在の支援金額'} />}>
                  <div className="money-box">3,000円 / 月</div>
                </SettingsInputContainer>
              </Col>
              <Col span={24} className="mb-7">
                <SettingsInputContainer
                  label={<SettingLabel label={'解約理由（複数選択可）'} required />}
                >
                  <Space direction="vertical">
                    <SettingCheckbox>{'寄付による成果が見えた'}</SettingCheckbox>
                    <SettingCheckbox>{'寄付が支援につながっている実感が持てない'}</SettingCheckbox>
                    <SettingCheckbox>{'団体からの活動報告が不十分'}</SettingCheckbox>
                    <SettingCheckbox>{'団体の活動に共感できなくなった'}</SettingCheckbox>
                    <SettingCheckbox>{'団体の対応に不満がある'}</SettingCheckbox>
                    <SettingCheckbox>{'寄付先の変更'}</SettingCheckbox>
                    <SettingCheckbox>{'生活環境の変化'}</SettingCheckbox>
                    <SettingCheckbox>{'その他'}</SettingCheckbox>
                  </Space>
                </SettingsInputContainer>
              </Col>
              <Col span={24} className="mb-7">
                <SettingsInputContainer label={<SettingLabel label={'解約理由（詳細）'} />}>
                  <SettingHepler className="mb-1">
                    よろしければ解約理由の詳細を教えてください。
                  </SettingHepler>
                  <SettingTextarea rows={4} />
                </SettingsInputContainer>
              </Col>
              <Col span={24}>
                <SettingsInputContainer label={<SettingLabel label={'確認事項'} />}>
                  <div className="mb-3" style={{ fontWeight: 700 }}>
                    この解約申請は取り消せません。再度支援を行う場合は新たに申し込みが必要になります。
                  </div>
                  <SettingCheckbox>{'上記の確認事項に同意する'}</SettingCheckbox>
                </SettingsInputContainer>
              </Col>
            </Row>
            <Row>
              <Button type="primary" size="large" className="send-btn">
                解約する
              </Button>
            </Row>
          </StyledFormCard>
        </Row>
      </RecurringCancelFormLayout>
    </>
  );
};

export default CancelRecurringPage;
