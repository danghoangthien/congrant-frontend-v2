import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
// ANTD
import { Input, Row, Col, Button, Space, Radio, Tag, Checkbox, Tooltip } from 'antd';
// STYLE
import styled from 'styled-components/macro';
// COMPONENT
import {
  SettingsInputContainer,
  SettingLabel,
  SettingInfoLabel,
} from '../../CorporationSettingPage/components/Sprites';
import Draggable from 'app/components/DraggableItems';
import { DraggableInputItem } from 'app/pages/BasicSettingsPage/components/Sprites';
import AddIcon from '@mui/icons-material/Add';
import InfoIcon from '@mui/icons-material/Info';
// TABLE
import IndividualItemTable from './IndividualItemTable';
import CorporationItemTable from './CorporationItemTable';
// CONST
import { EXTRA_LIGHT_GRAY, PRIMARY_COLOR } from 'styles/StyleConstants';

export const StyledTag = styled(Tag)`
  width: 40px;
  height: 40px;
  border-radius: 4px;
`;

export const StyledCheckboxes = styled(Checkbox.Group)`
  display: flex;
  flex-direction: column;

  .ant-checkbox-wrapper {
    margin: 2px 0;
  }
`;

export const CourseNoteBox = styled.div`
  text-align: center;
  background: ${EXTRA_LIGHT_GRAY};
  border-radius: 4px;
  padding: 23px 10px;
  font-size: 16px;

  .text {
    font-weight: 600;
    color: ${PRIMARY_COLOR};
  }
`;

const FormEdit = () => {
  const params = useParams();
  const [donateType, setDonateType] = useState(1);

  const handleTypeChange = e => {
    setDonateType(e.target.value);
  };

  const onChange = checkedValues => {
    console.log('checked = ', checkedValues);
  };

  const planOptions = [
    { label: 'ブロンズサポーター（1,000円/月）', value: 'ブロンズサポーター（1,000円/月）' },
    { label: 'シルバーサポーター（3,000円/月）', value: 'シルバーサポーター（3,000円/月）' },
    { label: 'ゴールドサポーター（5,000円/月）', value: 'ゴールドサポーター（5,000円/月）' },
    { label: '法人応援団（10,000円/月）', value: '法人応援団（10,000円/月）' },
    { label: '法人パートナー（30,000円/月）', value: '法人パートナー（30,000円/月）' },
  ];

  return (
    <>
      <div style={{ width: '100%', maxWidth: 600 }}>
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
          <SettingsInputContainer
            label={<SettingLabel label={'募集するサポーター種別'} required />}
          >
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

        {/* 募集形式 */}
        <div className="mb-14">
          <Row className="mb-4">
            <SettingsInputContainer label={<SettingInfoLabel label={'募集形式'} required />}>
              <Radio.Group onChange={handleTypeChange} value={donateType}>
                <Radio value={1}>{'自由入力'}</Radio>
                <Radio value={2}>{'金額選択'}</Radio>
                {params?.id === '1' && <Radio value={3}>{'プラン選択'}</Radio>}
                {params?.id === '2' && <Radio value={4}>{'コース選択'}</Radio>}
              </Radio.Group>
            </SettingsInputContainer>
          </Row>

          {/* 金額選択 */}
          {donateType === 2 && (
            <>
              <Row className="mb-6">
                <Draggable
                  entries={[
                    <DraggableInputItem
                      InputComponent={<Input size="large" value={'1000'} suffix={'円'} />}
                    />,
                    <DraggableInputItem
                      InputComponent={<Input size="large" value={'3000'} suffix={'円'} />}
                    />,
                    <DraggableInputItem
                      InputComponent={<Input size="large" value={'17000'} suffix={'円'} />}
                    />,
                  ]}
                />
              </Row>
              <Row className="mb-8 pl-8">
                <Col span={24}>
                  <Space align="center">
                    <Input size="large" placeholder={'3,000'} suffix={'円'} />
                    <Button className="ml-2 icon-btn" type="primary">
                      <AddIcon />
                      <span>{'追加'}</span>
                    </Button>
                  </Space>
                </Col>
              </Row>
              <Row>
                <SettingsInputContainer label={<SettingInfoLabel label={'金額の自由入力'} />}>
                  <Row className="mb-2">
                    <Checkbox checked>{'自由入力の寄付を受け付ける'}</Checkbox>
                  </Row>
                  <Row>
                    <Space className="ml-5" size={18}>
                      <span style={{ fontWeight: '300' }}>{'下限金額'}</span>
                      <Input
                        size="large"
                        placeholder="1,000"
                        suffix={'円'}
                        style={{ width: '160px' }}
                      />
                      <Space size={8}>
                        <span style={{ fontWeight: '300' }} className="ml-12">
                          {'参考金額'}
                        </span>
                        <Tooltip title="下限金額">
                          <InfoIcon className="info-icon" style={{ width: 13 }} />
                        </Tooltip>
                      </Space>
                      <Input
                        size="large"
                        placeholder="3,000"
                        suffix={'円'}
                        style={{ width: '160px' }}
                      />
                    </Space>
                  </Row>
                </SettingsInputContainer>
              </Row>
            </>
          )}

          {/* 金額の自由入力 */}
          {donateType === 1 && (
            <Row>
              <Space className="ml-5" size={18}>
                <span style={{ fontWeight: '300' }}>{'下限金額'}</span>
                <Input size="large" placeholder="1,000" suffix={'円'} style={{ width: '160px' }} />
                <Space size={8}>
                  <span style={{ fontWeight: '300' }} className="ml-10">
                    {'参考金額'}
                  </span>
                  <Tooltip title="下限金額">
                    <InfoIcon className="info-icon" style={{ width: 13 }} />
                  </Tooltip>
                </Space>
                <Input size="large" placeholder="3,000" suffix={'円'} style={{ width: '160px' }} />
              </Space>
            </Row>
          )}

          {/* プラン選択 */}
          {params?.id === '1' && donateType === 3 && (
            <>
              <StyledCheckboxes
                className="pl-6 mb-6"
                options={planOptions}
                defaultValue={['Apple']}
                onChange={onChange}
              />
              <Row className="mb-6">
                <SettingsInputContainer label={<SettingInfoLabel label={'金額の自由入力'} />}>
                  <Row>
                    <Checkbox checked>{'自由入力の寄付を受け付ける'}</Checkbox>
                  </Row>
                </SettingsInputContainer>
              </Row>
              <Row>
                <SettingsInputContainer label={<SettingInfoLabel label={'口数の指定'} />}>
                  <Row>
                    <Checkbox checked>{'複数口の支援を受け付ける'}</Checkbox>
                  </Row>
                </SettingsInputContainer>
              </Row>
            </>
          )}

          {params?.id === '2' && donateType === 4 && (
            <>
              <Row className="mb-8">
                <Col span={24}>
                  <CourseNoteBox>
                    <span className="text">コースのタブ</span>でコースを登録してください。
                  </CourseNoteBox>
                </Col>
              </Row>
              <Row className="mb-6">
                <SettingsInputContainer label={<SettingInfoLabel label={'金額の自由入力'} />}>
                  <Row>
                    <Checkbox checked>{'自由入力の寄付を受け付ける'}</Checkbox>
                  </Row>
                </SettingsInputContainer>
              </Row>
              <Row>
                <SettingsInputContainer label={<SettingInfoLabel label={'口数の指定'} />}>
                  <Row>
                    <Checkbox checked>{'複数口の支援を受け付ける'}</Checkbox>
                  </Row>
                </SettingsInputContainer>
              </Row>
            </>
          )}
        </div>

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
      </div>
    </>
  );
};

export default FormEdit;
