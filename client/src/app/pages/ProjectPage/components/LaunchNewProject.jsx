import { useState } from 'react';
import { Row, Col, Modal, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { StyledModalTitle } from 'app/components/Layout/PageLayout.style';
import {
  StyledProjectLaunchList,
  StyledProjectLaunchTitle,
  StyledProjectLaunchTypeInfo,
  StyledProjectLaunchType,
} from './LaunchNewProject.style';

const LaunchNewProject = () => {
  const history = useHistory();
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
      <Button onClick={showModal} type="primary" className="icon-btn">
        <AddIcon style={{ fontSize: '14px' }} className="mr-2" />
        <span>{'プロジェクトの作成'}</span>
      </Button>
      <Modal
        title={<StyledModalTitle>{'プロジェクトタイプの選択'}</StyledModalTitle>}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={960}
        className="modalStyle"
        cancelText="キャンセル"
        okText="登録する"
        footer={null}
      >
        <Row className="item mb-5" gutter={16}>
          <Col span={8}>
            <StyledProjectLaunchType
              onClick={() => history.push(`/app/projects/new-project?type=1`)}
            >
              <StyledProjectLaunchTypeInfo color="#EFF7EB" className="mb-5">
                {'通常の寄付・会費を集める'}
              </StyledProjectLaunchTypeInfo>
              <StyledProjectLaunchTitle
                className="mb-5"
                style={{
                  color: '#63B233',
                }}
              >
                {'ベーシック'}
              </StyledProjectLaunchTitle>
              <StyledProjectLaunchList>
                <ul className="project-info">
                  <li>
                    <strong>{'単発、毎月、毎年の3種類の寄付を1つのページで'}</strong>
                    {'募集できます'}
                  </li>
                  <li>{'募集期間の指定はできません'}</li>
                  <li>{'目標金額、寄付状況の表示はできません'}</li>
                </ul>
              </StyledProjectLaunchList>
            </StyledProjectLaunchType>
          </Col>
          <Col span={8}>
            <StyledProjectLaunchType onClick={() => history.push(`/app/projects/new?type=2`)}>
              <StyledProjectLaunchTypeInfo color="#E9F1FA" className="mb-5">
                {'短期で集中的に集める'}
              </StyledProjectLaunchTypeInfo>
              <StyledProjectLaunchTitle
                className="mb-5"
                style={{
                  color: '#2878CB',
                }}
              >
                {'クラウドファンディング'}
              </StyledProjectLaunchTitle>
              <StyledProjectLaunchList>
                <ul className="project-info">
                  <li>
                    <strong>{'単発寄付のみ'}</strong>
                    {'を募集できます'}
                  </li>
                  <li>{'指定する必要があります'}</li>
                  <li>{'目標金額、寄付状況を表示できます'}</li>
                </ul>
              </StyledProjectLaunchList>
            </StyledProjectLaunchType>
          </Col>
          <Col span={8}>
            <StyledProjectLaunchType onClick={() => history.push(`/app/projects/new?type=3`)}>
              <StyledProjectLaunchTypeInfo color="#F9EAEA" className="mb-5">
                {'マンスリーサポーターを増やす'}
              </StyledProjectLaunchTypeInfo>
              <StyledProjectLaunchTitle
                className="mb-5"
                style={{
                  color: '#C72A32',
                }}
              >
                {'マンスリーファンディング'}
              </StyledProjectLaunchTitle>
              <StyledProjectLaunchList>
                <ul className="project-info">
                  <li>
                    <strong>{'単発寄付のみ'}</strong>
                    {'を募集できます'}
                  </li>
                  <li>{'募集期間の指定はできません'}</li>
                  <li>{'目標金額、寄付状況の表示はできません'}</li>
                </ul>
              </StyledProjectLaunchList>
            </StyledProjectLaunchType>
          </Col>
        </Row>
        <Row>
          <Col flex="auto" align="center">
            <strong style={{ color: '#FF4D4F' }}>
              {'プロジェクトタイプは、あとから変更することはできません。'}
            </strong>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default LaunchNewProject;
