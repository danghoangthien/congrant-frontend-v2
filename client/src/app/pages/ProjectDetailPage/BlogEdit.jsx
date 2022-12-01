import { Tabs, Row, Col, Card, Button, Select, Space } from 'antd';
import { Link } from 'react-router-dom';
import BasicSetting from './components/Activity/BasicSetting';
import PageEdit from './components/Activity/PageEdit';
import SaveIcon from '@mui/icons-material/Save';
// Styles
import { PageLayout } from 'app/components/Layout/PageLayout.style';

export const DETAIL_KEY_MAP = {
  BASIC_SETTING: '1',
  PAGE_EDIT: '2',
};

const Edit = ({ activeKey }) => {
  return (
    <>
      <PageLayout>
        {/* Should create a component for this */}
        <Row justify="space-between" align="middle" className="item mb-5">
          {/* 左の部分・Left Part */}
          <Col>
            <Row type="flex" align="middle">
              <Col className="mr-6">
                <div className="sub-page-title">{'活動報告'}</div>
              </Col>
            </Row>
          </Col>

          {/* 右の部分・Right Part */}
          <Col>
            <Space>
              <Select
                defaultValue={{
                  value: 1,
                }}
                style={{
                  width: '100%',
                }}
              >
                <Select.Option value={1}>{'下書き'}</Select.Option>
              </Select>
              <Link className="sidebar-link" to={``}>
                <Button type="primary" className="icon-btn">
                  <SaveIcon style={{ fontSize: '14px' }} className="mr-2" />
                  <span>{'保存'}</span>
                </Button>
              </Link>
            </Space>
          </Col>
        </Row>
        {/* 活動報告 */}
        <Card>
          <Tabs defaultActiveKey={activeKey} type="card" tabBarGutter={4} className="mt-6">
            <Tabs.TabPane tab="基本設定" key="1">
              <BasicSetting />
            </Tabs.TabPane>
            <Tabs.TabPane tab="ページ編集" key="2">
              <PageEdit />
            </Tabs.TabPane>
          </Tabs>
        </Card>
      </PageLayout>
    </>
  );
};

export default Edit;