import { useState } from 'react';
import { Row, Col, Modal, Space, Select } from 'antd';
import useModalActions from 'hook/useModalActions';
import { SettingsInputContainer, SettingLabel } from 'utils/Sprites';
import { StyledModalTitle } from 'app/components/Layout/PageLayout.style';
import { StyledRadioGroup } from 'styles/Element.style';

const attributes = [
  { label: '属性の追加', value: 0 },
  { label: '属性の削除', value: 1 },
];

const options = [
  { label: '属性1', value: 1 },
  { label: '属性1', value: 2 },
  { label: '属性1', value: 3 },
  { label: '属性1', value: 4 },
];

const AddAttribute = () => {
  const [isModalOpen, showModal, handleOk, handleCancel] = useModalActions({});

  const [activeTab, setActiveTab] = useState(attributes[0].value);

  const handleChange = value => {
    console.log(`selected ${value}`);
  };

  const onRadioChange = ({ target: { value } }) => {
    setActiveTab(value);
  };

  return (
    <>
      <Space onClick={() => showModal()}>
        <span
          className="material-symbols-outlined fill-icon"
          style={{ fontSize: '16px', display: 'flex' }}
        >
          sell
        </span>
        <span>{'属性を設定する'}</span>
      </Space>

      <Modal
        title={<StyledModalTitle>{'属性の設定'}</StyledModalTitle>}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={572}
        className="modalStyle"
        cancelText="キャンセル"
        okText="登録する"
        style={{ borderRadius: '8px' }}
      >
        <Row className="mb-6">
          <Col sm={24} md={24} lg={24}>
            <StyledRadioGroup
              options={attributes}
              onChange={onRadioChange}
              value={attributes[activeTab].value}
              optionType="button"
              buttonStyle="solid"
            />
          </Col>
        </Row>

        <Row>
          {activeTab === 0 ? (
            <SettingsInputContainer label={<SettingLabel label={'追加する属性'} />}>
              <Select
                mode="tags"
                style={{
                  width: '100%',
                }}
                placeholder="選択してください"
                onChange={handleChange}
                options={options}
              />
            </SettingsInputContainer>
          ) : (
            <SettingsInputContainer label={<SettingLabel label={'削除する属性'} />}>
              <Select
                mode="tags"
                style={{
                  width: '100%',
                }}
                placeholder="選択してください"
                onChange={handleChange}
                options={options}
              />
            </SettingsInputContainer>
          )}
        </Row>
      </Modal>
    </>
  );
};

export default AddAttribute;
