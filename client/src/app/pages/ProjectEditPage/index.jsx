import { useParams } from 'react-router-dom';
import { Tabs, Card, Row, Col, Button } from 'antd';
import { PageLayout } from 'app/components/Layout/PageLayout.style';
import BasicSetting from './components/BasicSetting';
import AdvanceSetting from './components/AdvanceSetting';
import PageEdit from './components/PageEdit';
import FormEdit from './components/FormEdit';
import Course from './components/Course';
import { SaveFilled } from '@ant-design/icons';

export const EDIT_KEY_MAP = {
  BASIC_INFO: '1',
  MEMO: '2',
  DONATION: '3',
  RECURRING: '4',
  RECEIPT: '5',
};

const ProjectEditPage = ({ activeKey }) => {
  const params = useParams();
  return (
    <PageLayout>
      <Row justify="space-between" align="middle" className="item mb-5">
        {/* 左の部分・Left Part */}
        <Col>
          <Row type="flex" align="middle">
            <Col className="mr-6">
              <span className="page-title">
                <span className="ml-1 page-title">{'プロジェクト編集'}</span>
              </span>
            </Col>
          </Row>
        </Col>
        {/* 右の部分・Right Part */}
        <Col>
          <Button className="active">{'下書き'}</Button>
          <Button icon={<SaveFilled fontSize="small" />} className="ml-2" type="primary">
            {'保存'}
          </Button>
        </Col>
      </Row>
      <Card className="item">
        <Tabs defaultActiveKey={activeKey} type="card" tabBarGutter={4} className="mt-6">
          <Tabs.TabPane tab="基本情報" key="1">
            <BasicSetting />
          </Tabs.TabPane>
          <Tabs.TabPane tab="ページ編集" key="2">
            <PageEdit />
          </Tabs.TabPane>
          <Tabs.TabPane tab="フォーム編集" key="3">
            <FormEdit />
          </Tabs.TabPane>
          <Tabs.TabPane tab="詳細設定" key="4">
            <AdvanceSetting />
          </Tabs.TabPane>
          {params?.id == 2 && (
            <Tabs.TabPane tab="コース" key="5">
              <Course />
            </Tabs.TabPane>
          )}
        </Tabs>
      </Card>
    </PageLayout>
  );
};

export default ProjectEditPage;
