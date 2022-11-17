import { Row, Col, Input, Space, Radio, Tag, Checkbox } from 'antd';
import { InfoCircleFilled } from '@ant-design/icons';
import {
  SettingsInputContainer,
  SettingInfoLabel,
  SettingTextarea,
} from '../../GroupSettingsPage/components/Sprites';

import styled from 'styled-components/macro';

export const StyledTag = styled(Tag)`
  width: 40px;
  height: 40px;
  border-radius: 4px;
`;

const AdvanceSetting = () => {
  return (
    <>
      <div className="item ml-5">
        <Row className="mb-5">
          <Col sm={24} md={24} lg={24}>
            <span className="page-title">{'詳細設定'}</span>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col sm={24} md={24} lg={24}>
            <span className="page-sub-title">{'フォーム画面'}</span>
          </Col>
        </Row>
        <Row className="item mb-2">
          <SettingsInputContainer
            label={<SettingInfoLabel label={'フォーム画面の説明文'} required />}
          >
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <Checkbox checked>{'フォーム画面の説明文を編集する'}</Checkbox>
            </Col>
            <Col className="item mb-5" sm={24} md={24} lg={24}>
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
        <Row className="item mb-5">
          <SettingsInputContainer
            label={<SettingInfoLabel label={'完了画面のメッセージ'} required />}
          >
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <Checkbox checked>{'完了画面のメッセージを編集する'}</Checkbox>
            </Col>
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <SettingTextarea
                rows="3"
                placeholder={
                  'ご支援のお申し込み、誠にありがとうございました\nご登録いただいたメールアドレス宛に申し込み完了のメールが送信されておりますのでご確認お願いします。。'
                }
              />
            </Col>
          </SettingsInputContainer>
        </Row>
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingInfoLabel label={'SNSシェア'} required />}>
            <Checkbox checked>{'SNSシェアの案内を表示する'}</Checkbox>
          </SettingsInputContainer>
        </Row>
        <Row className="mb-2">
          <Col sm={24} md={24} lg={24}>
            <span className="page-sub-title">{'自動返信メール'}</span>
          </Col>
        </Row>
        <Row className="item mb-2">
          <SettingsInputContainer
            label={<SettingInfoLabel label={'決済完了メールの内容'} required />}
          >
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <Checkbox checked>{'決済完了メールの内容を編集する'}</Checkbox>
            </Col>
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <SettingTextarea
                rows="3"
                placeholder={
                  'NPO法人XXXです\n当団体をご支援くださり誠にありがとうございました\n今後とも応援いただけますと幸いです。'
                }
              />
            </Col>
          </SettingsInputContainer>
        </Row>
        <Row className="mb-2">
          <Col sm={24} md={24} lg={24}>
            <span className="page-sub-title">{'銀行振込の振込先口座'}</span>
          </Col>
        </Row>
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingInfoLabel label={'口座情報'} required />}>
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <Checkbox checked>{'銀行振込希望のサポーターに案内する口座情報を編集する'}</Checkbox>
            </Col>
            <Col className="item mb-5" sm={24} md={24} lg={24}>
              <SettingTextarea
                rows="6"
                placeholder={
                  '下記口座に1週間以内にお振込ください。\n\n金融機関名：\n支店名　　：\n口座番号　：\n口座名義　：'
                }
              />
            </Col>
          </SettingsInputContainer>
        </Row>
        <Row className="mb-2">
          <Col sm={24} md={24} lg={24}>
            <span className="page-sub-title">{'限定公開'}</span>
          </Col>
        </Row>
        <Row className="item mb-2">
          <SettingsInputContainer>
            <Row className="mb-2">
              <Space>
                <Checkbox checked>{'プロジェクトを限定公開にする'}</Checkbox>
                <InfoCircleFilled className="display-inline-flex ml-1" />
              </Space>
            </Row>
            <Row className="mb-2">
              <Space>
                <Checkbox checked>{'プロジェクトに閲覧パスワードを設定する'}</Checkbox>
                <InfoCircleFilled className="display-inline-flex ml-1" />
              </Space>
            </Row>
            <Row>
              <Space className="">
                <span>{'パスワード'}</span>
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
