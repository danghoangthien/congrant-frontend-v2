import { Row, Col, Input, Space, Radio, Tag, Checkbox } from 'antd';
import InfoIcon from '@mui/icons-material/Info';
import {
  SettingsInputContainer,
  SettingInfoLabel,
  SettingTextarea,
} from '../../CorporationSettingPage/components/Sprites';

import styled from 'styled-components/macro';

export const StyledTag = styled(Tag)`
  width: 40px;
  height: 40px;
  border-radius: 4px;
`;

const AdvanceSetting = () => {
  return (
    <>
      <div className="item">
        <Row className="mb-5">
          <Col sm={24} md={24} lg={24}>
            <div className="page-title01">{'詳細設定'}</div>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col sm={24} md={24} lg={24}>
            <span className="page-sub-title">{'フォーム画面'}</span>
          </Col>
        </Row>
        <Row className="item mb-14">
          <SettingsInputContainer label={<SettingInfoLabel label={'フォーム画面の説明文'} />}>
            <Col className="item mb-2" sm={24} md={24} lg={24}>
              <Checkbox checked>{'フォーム画面の説明文を編集する'}</Checkbox>
            </Col>
            <Col className="item" sm={24} md={24} lg={24}>
              <SettingTextarea
                placeholder={
                  '私たちの活動にご関心を寄せてくださり誠にありがとうございます。ぜひ、温かいご支援をお願いいたします。'
                }
              />
            </Col>
          </SettingsInputContainer>
        </Row>

        <Row className="mb-2">
          <Col sm={24} md={24} lg={24}>
            <span className="page-sub-title">{'完了画面'}</span>
          </Col>
        </Row>
        <Row className="item mb-10">
          <SettingsInputContainer label={<SettingInfoLabel label={'完了画面のメッセージ'} />}>
            <Col className="item mb-2" sm={24} md={24} lg={24}>
              <Checkbox checked>{'完了画面のメッセージを編集する'}</Checkbox>
            </Col>
            <Col className="item" sm={24} md={24} lg={24}>
              <SettingTextarea
                placeholder={
                  'ご支援のお申し込み、誠にありがとうございました\nご登録いただいたメールアドレス宛に申し込み完了のメールが送信されておりますのでご確認お願いします。'
                }
              />
            </Col>
          </SettingsInputContainer>
        </Row>

        <Row className="item mb-14">
          <SettingsInputContainer label={<SettingInfoLabel label={'SNSシェア'} />}>
            <Checkbox checked>{'SNSシェアの案内を表示する'}</Checkbox>
          </SettingsInputContainer>
        </Row>

        {/* 自動返信メール */}
        <Row className="mb-2">
          <Col sm={24} md={24} lg={24}>
            <span className="page-sub-title">{'自動返信メール'}</span>
          </Col>
        </Row>
        <Row className="item mb-14">
          <SettingsInputContainer label={<SettingInfoLabel label={'決済完了メールの内容'} />}>
            <Col className="item mb-2" sm={24} md={24} lg={24}>
              <Checkbox checked>{'決済完了メールの内容を編集する'}</Checkbox>
            </Col>
            <Col className="item" sm={24} md={24} lg={24}>
              <SettingTextarea
                rows="3"
                placeholder={
                  'NPO法人XXXです\n当団体をご支援くださり誠にありがとうございました\n今後とも応援いただけますと幸いです。'
                }
              />
            </Col>
          </SettingsInputContainer>
        </Row>

        {/* 銀行振込の振込先口座 */}
        <Row className="mb-2">
          <Col sm={24} md={24} lg={24}>
            <span className="page-sub-title">{'銀行振込の振込先口座'}</span>
          </Col>
        </Row>
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingInfoLabel label={'銀行振込'} />}>
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <Checkbox checked>{'銀行振込での寄付を受け付ける'}</Checkbox>
            </Col>
          </SettingsInputContainer>
        </Row>
        <Row className="item mb-14">
          <SettingsInputContainer label={<SettingInfoLabel label={'口座情報'} />}>
            <Col className="item mb-2" sm={24} md={24} lg={24}>
              <Checkbox checked>{'銀行振込希望のサポーターに案内する口座情報を編集する'}</Checkbox>
            </Col>
            <Col className="item" sm={24} md={24} lg={24}>
              <SettingTextarea
                rows="6"
                placeholder={
                  '下記口座に1週間以内にお振込ください。\n\n金融機関名：\n支店名　　：\n口座番号　：\n口座名義　：'
                }
              />
            </Col>
          </SettingsInputContainer>
        </Row>

        {/* 活動報告・応援コメント */}
        <Row className="mb-2">
          <Col sm={24} md={24} lg={24}>
            <span className="page-sub-title">{'活動報告・応援コメント'}</span>
          </Col>
        </Row>
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingInfoLabel label={'活動報告'} />}>
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <Checkbox checked>{'活動報告機能を利用する'}</Checkbox>
            </Col>
          </SettingsInputContainer>
        </Row>
        <Row className="item mb-14">
          <SettingsInputContainer label={<SettingInfoLabel label={'応援コメント'} />}>
            <Col className="item mb-2" sm={24} md={24} lg={24}>
              <Checkbox checked>{'応援コメント機能を利用する'}</Checkbox>
            </Col>
          </SettingsInputContainer>
        </Row>

        {/* 限定公開 */}
        <Row className="mb-2">
          <Col sm={24} md={24} lg={24}>
            <span className="page-sub-title">{'限定公開'}</span>
          </Col>
        </Row>
        <Row className="item mb-2">
          <SettingsInputContainer>
            <Row className="mb-2">
              <Checkbox checked>{'プロジェクトを限定公開にする'}</Checkbox>
              <InfoIcon style={{ width: '16px' }} />
            </Row>
            <Row className="mb-2">
              <Checkbox checked>{'プロジェクトに閲覧パスワードを設定する'}</Checkbox>
              <InfoIcon style={{ width: '16px' }} />
            </Row>
            <Row>
              <Space size={16}>
                <span style={{ fontSize: '16px' }}>{'パスワード'}</span>
                <Input placeholder="abcd1234" style={{ width: '200px' }} />
              </Space>
            </Row>
          </SettingsInputContainer>
        </Row>
      </div>
    </>
  );
};

export default AdvanceSetting;
