import { Input, Row, Col, Button, Space, Radio, Tag, Checkbox } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import styled from 'styled-components/macro';
import {
  SettingsInputContainer,
  SettingLabel,
  SettingInfoLabel,
  SettingSelect,
} from '../../CorporationSettingPage/components/Sprites';
import Draggable from 'app/components/DraggableItems';
import { DraggableInputItem } from 'app/pages/BasicSettingsPage/components/Sprites';
import AddIcon from '@mui/icons-material/Add';
import InfoIcon from '@mui/icons-material/Info';

import IndividualItemTable from './IndividualItemTable';
import CorporationItemTable from './CorporationItemTable';

export const StyledTag = styled(Tag)`
  width: 40px;
  height: 40px;
  border-radius: 4px;
`;

const FormEdit = () => {
  return (
    <>
      {/* フォーム編集 */}
      <Row className="mb-8">
        <Col span={24}>
          <span className="page-title">{'フォーム編集'}</span>
        </Col>
      </Row>

      {/* 募集する寄付タイプ */}
      <Row className="mb-8">
        <SettingsInputContainer label={<SettingLabel label={'募集する寄付タイプ'} required />}>
          <Checkbox checked>{'単発'}</Checkbox>
          <Checkbox>{'毎月'}</Checkbox>
          <Checkbox>{'毎年'}</Checkbox>
        </SettingsInputContainer>
      </Row>

      {/* 募集するサポーター種別 */}
      <Row className="mb-14">
        <SettingsInputContainer label={<SettingLabel label={'募集するサポーター種別'} required />}>
          <Checkbox checked>{'個人'}</Checkbox>
          <Checkbox>{'法人'}</Checkbox>
        </SettingsInputContainer>
      </Row>

      {/* 金額設定（単発） */}
      <Row className="mb-8">
        <Col span={24}>
          <span className="page-sub-title">{'金額設定（単発）'}</span>
        </Col>
      </Row>

      {/* 募集する金額・プラン */}
      <Row className="mb-2">
        <SettingsInputContainer
          label={<SettingInfoLabel label={'募集する金額・プラン'} required />}
        >
          <Radio checked>{'金額を指定する'}</Radio>
          <Radio>{'プランを指定する'}</Radio>
        </SettingsInputContainer>
      </Row>
      <div className="mb-6">
        <Row className="item mb-2">
          <Draggable
            entries={[
              <DraggableInputItem InputComponent={<Input value={'1000'} suffix={'円'} />} />,
              <DraggableInputItem InputComponent={<Input value={'3000'} suffix={'円'} />} />,
              <DraggableInputItem InputComponent={<Input value={'17000'} suffix={'円'} />} />,
            ]}
          />
        </Row>
      </div>
      <Row className="item mb-8">
        <Col span={24}>
          <Space align="center">
            <MenuOutlined />
            <Input placeholder={'3,000'} suffix={'円'} />
            <Button className="ml-2 icon-btn" type="primary">
              <AddIcon />
              <span>{'追加'}</span>
            </Button>
          </Space>
        </Col>
      </Row>

      {/* 金額の初期設定値 */}
      <Row className="item mb-8">
        <SettingsInputContainer label={<SettingInfoLabel label={'金額の初期設定値'} />}>
          <SettingSelect placeholder={'選択してください'}></SettingSelect>
        </SettingsInputContainer>
      </Row>

      {/* 金額の自由入力 */}
      <Row className="item mb-14">
        <SettingsInputContainer label={<SettingInfoLabel label={'金額の自由入力'} />}>
          <Row className="mb-2">
            <Checkbox checked>{'自由入力の寄付を受け付ける'}</Checkbox>
          </Row>
          <Row>
            <Space className="ml-5" size={18}>
              <span style={{ fontWeight: '300' }}>{'下限金額'}</span>
              <Input placeholder="1,000" suffix={'円'} style={{ width: '160px' }} />
              <Space size={8}>
                <span style={{ fontWeight: '300' }} className="ml-12">
                  {'参考金額'}
                </span>
                <InfoIcon style={{ width: '16px' }} />
              </Space>
              <Input placeholder="3,000" suffix={'円'} style={{ width: '160px' }} />
            </Space>
          </Row>
        </SettingsInputContainer>
      </Row>

      {/* 入力項目 */}
      <Row className="mb-8">
        <Col span={24}>
          <span className="page-sub-title">{'入力項目'}</span>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col span={24}>
          <span className="bold">{'個人'}</span>
        </Col>
      </Row>
      <Row className="mb-8">
        <Col span={24}>
          <IndividualItemTable />
        </Col>
      </Row>
      <Row className="mb-5">
        <Col span={24}>
          <span className="bold">{'法人'}</span>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col span={24}>
          <CorporationItemTable />
        </Col>
      </Row>
    </>
  );
};

export default FormEdit;
