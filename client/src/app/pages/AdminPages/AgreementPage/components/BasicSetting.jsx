import { Row, Col, Radio, DatePicker, Space } from 'antd';
import {
  SettingsInputContainer,
  SettingLabel,
  SettingTextarea,
  SettingHepler,
  SettingSelect,
} from 'utils/Sprites';
import styled from 'styled-components/macro';
import ImageUpload from 'app/components/ImageUpload';

// Styles
export const StyledRadioGroup = styled(Radio.Group)`
  width: 100%;
  .ant-radio-button-wrapper {
    width: 50%;
  }
`;

const BasicSetting = () => {
  return (
    <>
      <Row className="mb-8">
        <Col sm={24} md={24} lg={24}>
          <span className="page-title01">{'基本設定'}</span>
        </Col>
      </Row>
      <Row className="mb-6">
        <SettingsInputContainer label={<SettingLabel label={'公開ステータス'} required />}>
          <Col className="item mb-5" sm={24} md={24} lg={24}>
            <Radio.Group onChange={() => {}} value={1}>
              <Space direction="horizontal">
                <Radio value={1}>{'公開'}</Radio>
                <Radio value={2}>{'非公開'}</Radio>
              </Space>
            </Radio.Group>
          </Col>
        </SettingsInputContainer>
      </Row>
      <Row className="mb-6">
        <SettingsInputContainer label={<SettingLabel label={'公開範囲'} required />}>
          <Col className="item mb-5" sm={24} md={24} lg={24}>
            <Radio.Group onChange={() => {}} value={1}>
              <Space direction="horizontal">
                <Radio value={1}>{'全体'}</Radio>
                <Radio value={2}>{'登録ユーザー'}</Radio>
              </Space>
            </Radio.Group>
          </Col>
        </SettingsInputContainer>
      </Row>
      <Row className="mb-6">
        <SettingsInputContainer label={<SettingLabel label={'お知らせタイトル'} required />}>
          <SettingTextarea
            showCount
            rows={2}
            maxLength={400}
            style={{ width: '600px' }}
            value={
              'お知らせのタイトルが入ります。お知らせのタイトルが入ります。お知らせのタイトルが入ります。'
            }
          />
        </SettingsInputContainer>
      </Row>
      <Row className="mb-6">
        <SettingsInputContainer label={<SettingLabel label={'タグ'} required />}>
          <SettingSelect
            mode="multiple"
            placeholder="Please select"
            defaultValue={['重要', 'お知らせ']}
            onChange={() => {}}
            style={{ width: '600px' }}
            options={[
              {
                value: '重要',
                label: '重要',
              },
              {
                value: 'お知らせ',
                label: 'お知らせ',
              },
            ]}
          />
        </SettingsInputContainer>
      </Row>
      <Row className="mb-6">
        <SettingsInputContainer label={<SettingLabel label={'概要文'} />}>
          <SettingTextarea
            showCount
            rows={5}
            maxLength={400}
            style={{ width: '600px' }}
            value={''}
          />
        </SettingsInputContainer>
      </Row>
      <Row>
        <SettingsInputContainer label={<SettingLabel label={'公開日時'} />}>
          <Col sm={24} md={24} lg={24}>
            <DatePicker size="large" placeholder={'yyyy-mm-dd'} style={{ width: '600px' }} />
            <SettingHepler>{'未入力の場合、公開した日が公開日として登録されます。'}</SettingHepler>
          </Col>
        </SettingsInputContainer>
      </Row>
      <Row className="mb-8">
        <SettingsInputContainer label={<SettingLabel label={'OGP画像'} />}>
          <ImageUpload />
        </SettingsInputContainer>
      </Row>
    </>
  );
};

export default BasicSetting;
