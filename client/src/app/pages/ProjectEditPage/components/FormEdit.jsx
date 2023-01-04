import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
// ANTD
import { Input, Row, Col, Button, Space, Radio, Checkbox, Tooltip } from 'antd';
// STYLE
import styled from 'styled-components/macro';
// COMPONENT
import {
  SettingsInputContainer,
  SettingLabel,
  SettingInfoLabel,
  VerticalCheckboxContainer,
  DraggableInputItem,
  InfoIcon,
} from 'utils/Sprites';
import Draggable from 'app/components/DraggableItems';
// TABLE
import IndividualItemTable from './IndividualItemTable';
import CorporationItemTable from './CorporationItemTable';
// CONST
import {
  EXTRA_LIGHT_GRAY_COLOR,
  PRIMARY_COLOR,
  EXTRA_LIGHT_RED_COLOR,
} from 'styles/StyleConstants';

const StyledBox = styled.div`
  padding: 16px;
  background: ${EXTRA_LIGHT_RED_COLOR};
`;

// コース選択の通知枠
export const CourseNoteBox = styled.div`
  text-align: center;
  background: ${EXTRA_LIGHT_GRAY_COLOR};
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
  const searchParam = new URLSearchParams(window.location.search);
  const project_type = searchParam.get('type');
  // console.log(project_type);
  const [donateType, setDonateType] = useState(1);

  const handleTypeChange = e => {
    setDonateType(e.target.value);
    console.log(donateType);
  };

  const onChange = checkedValues => {
    console.log('checked = ', checkedValues);
  };

  // コースの選択肢・Course Options
  const courseOptions = [
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
            <Checkbox disabled={project_type === '3' && true}>{'単発'}</Checkbox>
            <Checkbox>{'毎月'}</Checkbox>
            <Checkbox disabled={project_type === '3' && true}>{'毎年'}</Checkbox>
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
            <SettingsInputContainer
              label={
                <SettingInfoLabel
                  label={project_type === '2' ? '募集する金額・コース' : '募集形式'}
                  required
                />
              }
            >
              <Radio.Group onChange={handleTypeChange} value={donateType}>
                <Radio value={1}>{'自由入力'}</Radio>
                <Radio value={2}>{'金額選択'}</Radio>
                {(project_type === '1' || project_type === '3') && (
                  <Radio value={3}>{'プラン選択'}</Radio>
                )}
                {project_type === '2' && <Radio value={4}>{'コース選択'}</Radio>}
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
                      <span className="material-symbols-outlined">add</span>
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
                          <Row>
                            <InfoIcon />
                          </Row>
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
                    <Row>
                      <InfoIcon />
                    </Row>
                  </Tooltip>
                </Space>
                <Input size="large" placeholder="3,000" suffix={'円'} style={{ width: '160px' }} />
              </Space>
            </Row>
          )}

          {/* プラン選択 */}
          {donateType === 3 && (
            <>
              <VerticalCheckboxContainer
                className="pl-6 mb-6"
                options={courseOptions}
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

          {donateType === 4 && (
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
        <Row className="mb-8">
          <Col span={24}>
            <CorporationItemTable />
          </Col>
        </Row>

        <Row>
          <Col span={24} className="mb-4">
            <span className="page-sub-title">{'匿名寄付機能'}</span>
          </Col>
          <Col span={24} className="mb-2">
            <SettingsInputContainer>
              <Checkbox checked style={{ fontSize: 16 }}>
                {'匿名寄付を受け付ける'}
              </Checkbox>
            </SettingsInputContainer>
          </Col>
          <Col span={24}>
            <StyledBox>
              <div>匿名寄付機能とは</div>
              <div>
                匿名寄付機能は、決済フォームでの詳細情報の入力をユーザー自身でスキップできる機能です。上で設定した入力項目の必須・任意設定に関わらず、ユーザーは「メールアドレス」のみで決済を申し込めるようになります。
                匿名寄付を受け付ける設定にすると、決済フォームに「匿名で申し込む」のチェックボックスが表示されます
                ユーザーがチェックをつけると、メールアドレス以外の入力フォームが非表示になり、最低限の入力で申し込みを完了できます
              </div>
            </StyledBox>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default FormEdit;
