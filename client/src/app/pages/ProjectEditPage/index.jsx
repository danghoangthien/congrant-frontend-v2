import { useParams } from 'react-router-dom';
// ANTD
import { Tabs, Card, Row, Col, Button, Dropdown, Menu } from 'antd';
// STYLE
import { PageLayout } from 'app/components/Layout/PageLayout.style';
// COMPONENT
import BasicSetting from './components/BasicSetting';
import AdvanceSetting from './components/AdvanceSetting';
import PageEdit from './components/PageEdit';
import FormEdit from './components/FormEdit';
import Course from './components/Course';
// ICON
import SaveIcon from '@mui/icons-material/Save';
import { DownOutlined } from '@ant-design/icons';
// CONST
import { PLACEHOLDER_COLOR } from 'styles/StyleConstants';
import Breadcumd from 'app/components/Breadcumd';
import { HEADER_BREADCUMD_DATA, ProjectDetailHeader } from 'app/pages/ProjectDetailPage/consts';
// META
import { Helmet } from 'react-helmet-async';

export const EDIT_KEY_MAP = {
  BASIC_INFO: '1',
  MEMO: '2',
  DONATION: '3',
  RECURRING: '4',
  RECEIPT: '5',
};

// 下書きメニュー（SAVE MENU）
const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <>
            <span>{'オプション1オプション1'}</span>
          </>
        ),
      },
      {
        key: '2',
        label: (
          <>
            {' '}
            <span>{'オプション2'}</span>
          </>
        ),
      },
      {
        key: '3',
        label: (
          <>
            <span>{'オプション3'}</span>
          </>
        ),
      },
    ]}
  />
);

const ProjectEditPage = ({ activeKey }) => {
  const params = useParams();
  const BREADCUMD_DATA = [
    HEADER_BREADCUMD_DATA[0],
    {
      id: 2,
      title: 'プロジェクトトップ',
      uri: `/app/projects/${params.id}/summary`,
    },
    {
      id: 3,
      title: 'プロジェクト編集',
      uri: null,
    },
  ];
  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'プロジェクト編集'}</title>
          <meta name="description" content={'プロジェクト編集'} />
        </Helmet>
      </>
    );
  };
  return (
    <>
      {renderPageTitle()}
      <ProjectDetailHeader
        Breadcumd={<Breadcumd data={BREADCUMD_DATA} active={BREADCUMD_DATA[2].id} />}
      />
      <PageLayout>
        {/* Heading */}
        <Row justify="space-between" align="middle" className="item mb-5">
          {/* 左の部分・Left Part */}
          <Col>
            <Row type="flex" align="middle">
              <Col className="mr-6">
                <div className="sub-page-title">{'プロジェクト編集'}</div>
              </Col>
            </Row>
          </Col>
          {/* 右の部分・Right Part */}
          <Col>
            <Row>
              <Dropdown overlay={menu} placement="bottomRight">
                <Button>
                  下書き
                  <DownOutlined style={{ color: PLACEHOLDER_COLOR }} />
                </Button>
              </Dropdown>
              <Button icon={<SaveIcon />} className="ml-2 icon-btn" type="primary">
                {'保存'}
              </Button>
            </Row>
          </Col>
        </Row>

        {/* Main Content */}
        <Card bodyStyle={{ padding: '32px 40px' }} style={{ overflow: 'initial' }}>
          <Tabs
            defaultActiveKey={activeKey}
            type="card"
            tabBarGutter={4}
            className="project-edit-tab"
          >
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
            {/* クラファンのみ（Crowdfunding only） */}
            {params?.id === '2' && (
              <Tabs.TabPane tab="コース" key="5">
                <Course />
              </Tabs.TabPane>
            )}
          </Tabs>
        </Card>
      </PageLayout>
    </>
  );
};

export default ProjectEditPage;
