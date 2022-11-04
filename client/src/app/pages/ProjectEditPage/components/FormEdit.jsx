import { Input, Row, Col, Button, DatePicker, Space, Radio, Tag, Checkbox, Badge } from 'antd';
import { MenuOutlined, InfoCircleFilled, PlusOutlined } from '@ant-design/icons';
import styled from 'styled-components/macro';
import {
  SettingsInputContainer,
  SettingLabel,
  SettingInfoLabel,
  SettingInput,
  SettingTextarea,
  SettingSelect,
} from '../../GroupSettingsPage/components/Sprites';
import { DraggableInputItem } from 'app/pages/BasicSettingsPage/components/Sprites';

import InputItemTable from './InputItemTable';

export const StyledTag = styled(Tag)`
  width: 40px;
  height: 40px;
  border-radius: 4px;
`;

const FormEdit = () => {
  return (
    <>
      <div className="item ml-5">
        <Row className="mb-5">
          <Col sm={24} md={24} lg={24}>
            <span className="page-title">{'フォーム編集'}</span>
          </Col>
        </Row>
        <Row className="mb-2">
          <SettingsInputContainer label={<SettingLabel label={'募集する寄付タイプ'} required />}>
            <Checkbox checked disabled>
              {'単発'}
            </Checkbox>
            <Checkbox disabled>{'毎月'}</Checkbox>
            <Checkbox disabled>{'毎年'}</Checkbox>
          </SettingsInputContainer>
        </Row>
        <Row className="mb-5">
          <SettingsInputContainer
            label={<SettingLabel label={'募集するサポーター種別'} required />}
          >
            <Checkbox checked>{'個人'}</Checkbox>
            <Checkbox>{'法人'}</Checkbox>
          </SettingsInputContainer>
        </Row>
        <Row className="mb-5">
          <Col sm={24} md={24} lg={24}>
            <span className="page-sub-title">{'金額設定（単発）'}</span>
          </Col>
        </Row>
        <Row className="mb-2">
          <SettingsInputContainer
            label={<SettingInfoLabel label={'募集するサポーター種別'} required />}
          >
            <Radio checked>{'金額を指定する'}</Radio>
            <Radio>{'コースを設定する'}</Radio>
          </SettingsInputContainer>
        </Row>
        <Row className="item mb-2">
          <Col sm={24} md={24} lg={24}>
            <DraggableInputItem InputComponent={<Input value={'1000'} suffix={'円'} />} />
          </Col>
        </Row>
        <Row className="item mb-2">
          <Col sm={24} md={24} lg={24}>
            <DraggableInputItem InputComponent={<Input value={'3000'} suffix={'円'} />} />
          </Col>
        </Row>
        <Row className="item mb-2">
          <Col sm={24} md={24} lg={24}>
            <DraggableInputItem InputComponent={<Input value={'17000'} suffix={'円'} />} />
          </Col>
        </Row>
        <Row className="item mb-2">
          <Col sm={24} md={24} lg={24}>
            <Space align="center">
              <MenuOutlined className="display-inline-flex" style={{ color: '#ffffff' }} />
              <Input placeholder={'手渡し'} />
              <Button className="active ml-2" type="primary">
                <PlusOutlined className="display-inline-flex" />
                <span className="ml-2">{'追加'}</span>
              </Button>
            </Space>
          </Col>
        </Row>
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingInfoLabel label={'金額の初期設定値'} required />}>
            <SettingSelect placeholder={'寄付をする'}></SettingSelect>
          </SettingsInputContainer>
        </Row>
        <Row className="item mb-2">
          <SettingsInputContainer label={<SettingInfoLabel label={'金額の自由入力'} required />}>
            <Row className="mb-2">
              <Checkbox checked>{'自由入力の寄付を受け付ける'}</Checkbox>
            </Row>
            <Row>
              <Space className="ml-5">
                <span>{'下限金額'}</span>
                <Input placeholder="1000" suffix={'円'} style={{ width: '100px' }} />
                <span className="ml-8">{'参考金額'}</span>
                <InfoCircleFilled className="display-inline-flex ml-1" />
                <Input placeholder="3000" suffix={'円'} style={{ width: '100px' }} />
              </Space>
            </Row>
          </SettingsInputContainer>
        </Row>
        <Row className="mb-5">
          <Col sm={24} md={24} lg={24}>
            <span className="page-sub-title">{'入力項目'}</span>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col sm={24} md={24} lg={24}>
            <span className="bold">{'個人'}</span>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col sm={12} md={12} lg={12}>
            <InputItemTable />
          </Col>
        </Row>
        <Row className="mb-5">
          <Col sm={24} md={24} lg={24}>
            <span className="bold">{'法人'}</span>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col sm={12} md={12} lg={12}>
            <InputItemTable />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default FormEdit;
