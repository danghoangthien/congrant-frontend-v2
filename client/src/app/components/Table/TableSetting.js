import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Button, Modal, Checkbox, Select } from 'antd';
import SettingsIcon from '@mui/icons-material/Settings';

import { setWithExpiry } from 'utils/localStorageHandler';

const TableSetting = ({ model, columnMap, localstorageKey }) => {
  const dispatch = useDispatch();
  const { column_setting } = useSelector(state => state[model]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const renderColumns = () => {
    return Object.keys(columnMap).map(columnName => {
      return (
        <Col span={6} className="mb-2">
          <Checkbox value={columnName}>{columnMap[columnName].title}</Checkbox>
        </Col>
      );
    });
  };

  const onCheckboxGroupChange = checkedValues => {
    if (checkedValues.length == 0) {
      onReset();
      return;
    }
    setWithExpiry(localstorageKey, checkedValues, 9_000_000_000);
    dispatch[model].setData({
      column_setting: checkedValues,
    });
  };

  const onReset = () => {
    //console.log('onReset', true);
    setWithExpiry(localstorageKey, Object.keys(columnMap), 9_000_000_000);
    dispatch[model].setData({
      column_setting: Object.keys(columnMap),
    });
  };

  const onSelectChange = value => {
    console.log(value);
  };

  return (
    <>
      {/* SETTING BUTTONS */}
      <Button onClick={showModal}>
        <Row align="middle">
          <SettingsIcon className="mr-2 custom-icon" style={{ width: '16px' }} />
          {'表示設定'}
        </Row>
      </Button>

      {/* SETTING MODAL */}
      <Modal
        title="表示設定"
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={572}
        className="modalStyle"
        cancelText="キャンセル"
        okText="保存する"
      >
        <Row className="mb-8">
          <Col span={24} className="mb-2">
            <div style={{ fontSize: '14px', color: 'rgba(0, 0, 0, 0.5)' }} className="bold">
              {'表示件数'}
            </div>
          </Col>
          <Col span={24}>
            <Select
              defaultValue={{
                value: '1',
              }}
              style={{
                width: '100%',
              }}
              onChange={onSelectChange}
            >
              <Select.Option value="1">50件</Select.Option>
            </Select>
          </Col>
        </Row>
        <Row className="mb-3" align="middle" justify="space-between">
          <Col>
            <div style={{ fontSize: '14px' }} className="bold">
              {'表示項目'}
            </div>
          </Col>
          <Col>
            <Button onClick={onReset}>{'リセット'}</Button>
          </Col>
        </Row>
        <Row className="mb-8">
          <Col span={24}>
            <Checkbox.Group
              key={Math.random()}
              style={{
                width: '100%',
              }}
              onChange={onCheckboxGroupChange}
              defaultValue={column_setting}
            >
              <Row>{renderColumns()}</Row>
            </Checkbox.Group>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default TableSetting;
