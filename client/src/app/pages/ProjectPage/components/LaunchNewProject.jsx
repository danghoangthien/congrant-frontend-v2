import React, { useState } from 'react';
import { Row, Col, Modal, Button, Tag, Space, Input, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { StyledModalTitle } from 'app/components/Layout/PageLayout.style';
//ProjectLaunchType
import {
  ProjectLaunchType as StyledProjectLaunchType,
  ProjectTitle as StyledProjectTitle,
  ProjectLaunchTypeInfo as StyledProjectLaunchTypeInfo,
} from './../index.style';
const { TextArea } = Input;

const LaunchNewProject = () => {
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

  return (
    <>
      <Button onClick={showModal} type="primary">
        <PlusOutlined className="display-inline-flex" />
        <span>{'個人サポーターの登録'}</span>
      </Button>
      <Modal
        title={<StyledModalTitle>{'プロジェクトタイプの選択'}</StyledModalTitle>}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={950}
        className="modalStyle"
        cancelText="キャンセル"
        okText="登録する"
        footer={null}
      >
        <Row className="item mb-5">
          <Col flex="auto">
            <Space>
              <StyledProjectLaunchType>
                <Space direction="vertical" align="center">
                  <StyledProjectLaunchTypeInfo color="success" className="mb-5">
                    {'通常の寄付・会費を集める'}
                  </StyledProjectLaunchTypeInfo>
                  <StyledProjectTitle
                    className="mb-5"
                    style={{
                      color: '#63B233',
                    }}
                  >
                    {'ベーシック'}
                  </StyledProjectTitle>
                  <ul
                    style={{
                      height: '100px',
                      paddingLeft: '30px',
                    }}
                  >
                    <li>
                      <strong>{'単発、毎月、毎年の3種類の寄付を1つのページで'}</strong>
                      {'募集できます'}
                    </li>
                    <li>{'募集期間の指定はできません'}</li>
                    <li>{'目標金額、寄付状況の表示はできません'}</li>
                  </ul>
                </Space>
              </StyledProjectLaunchType>
              <StyledProjectLaunchType>
                <Space direction="vertical" align="center">
                  <StyledProjectLaunchTypeInfo color="processing" className="mb-5">
                    {'短期で集中的に集める'}
                  </StyledProjectLaunchTypeInfo>
                  <StyledProjectTitle
                    className="mb-5"
                    style={{
                      color: '#2878CB',
                    }}
                  >
                    {'クラウドファンディング'}
                  </StyledProjectTitle>
                  <ul
                    style={{
                      height: '100px',
                      paddingLeft: '30px',
                    }}
                  >
                    <li>
                      <strong>{'単発寄付のみ'}</strong>
                      {'を募集できます'}
                    </li>
                    <li>{'指定する必要があります'}</li>
                    <li>{'目標金額、寄付状況を表示できます'}</li>
                  </ul>
                </Space>
              </StyledProjectLaunchType>
              <StyledProjectLaunchType>
                <Space direction="vertical" align="center">
                  <StyledProjectLaunchTypeInfo color="magenta" className="mb-5">
                    {'マンスリーサポーターを増やす'}
                  </StyledProjectLaunchTypeInfo>
                  <StyledProjectTitle
                    className="mb-5"
                    style={{
                      color: 'magenta',
                    }}
                  >
                    {'マンスリーファンディング'}
                  </StyledProjectTitle>
                  <ul
                    style={{
                      height: '100px',
                      paddingLeft: '30px',
                    }}
                  >
                    <li>
                      <strong>{'単発寄付のみ'}</strong>
                      {'を募集できます'}
                    </li>
                    <li>{'募集期間の指定はできません'}</li>
                    <li>{'目標金額、寄付状況の表示はできません'}</li>
                  </ul>
                </Space>
              </StyledProjectLaunchType>
            </Space>
          </Col>
        </Row>
        <Row>
          <Col flex="auto" align="center">
            <strong style={{ color: 'red' }}>
              {'プロジェクトタイプは、あとから変更することはできません。'}
            </strong>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default LaunchNewProject;
