import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Button, Modal, Checkbox, Select } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

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
        <Col className="mb-2">
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
      <Button icon={<SettingOutlined />} onClick={showModal}>
        表示設定
      </Button>
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
          <Col sm={24} md={20} lg={24}>
            <h3 className="bold">{'表示設定'}</h3>
          </Col>
          <Col sm={24} md={24} lg={24}>
            <Select
              defaultValue={{
                value: '1',
              }}
              style={{
                width: 65,
              }}
              onChange={onSelectChange}
            >
              <Select.Option value="1">1</Select.Option>
            </Select>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col sm={24} md={20} lg={20}>
            <h3 className="bold">{'表示項目'}</h3>
          </Col>
          <Col type="flex" align="right" sm={24} md={4} lg={4}>
            <Button onClick={onReset}>{'リセット'}</Button>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col sm={24} md={24} lg={20}>
            <span>{'基本項目'}</span>
          </Col>
        </Row>
        <Row className="mb-8">
          <Col sm={24} md={24} lg={24}>
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

        <Row className="mb-3">
          <Col sm={24} md={24} lg={20}>
            <span>{'カスタム項目'}</span>
          </Col>
        </Row>
        <Row>
          <Col sm={24} md={24} lg={24}>
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
