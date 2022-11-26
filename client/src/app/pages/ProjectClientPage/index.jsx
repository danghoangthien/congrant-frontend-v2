import { Helmet } from 'react-helmet-async';
// ANTD
import { Row, Col, Tabs, Badge, Space } from 'antd';
import DonationInfo from './components/DonationInfo';
import OrganizationInfo from './components/OrganizationInfo';
import CourseInfo from './components/CourseInfo';
import Carousel from './components/Carousel';
import Share from './components/Share';
import Action from './components/Action';
import ProjectClientPageLayout from 'app/components/Layout/ProjectClientPage';
import HomeTab from './components/HomeTab';
import ActivityTab from './components/ActivityTab';
import CommentTab from './components/CommentTab';

const ProjectClientPage = () => {
  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'タイトル'}</title>
          <meta name="description" content={'...'} />
        </Helmet>
      </>
    );
  };

  return (
    <>
      {renderPageTitle()}
      <ProjectClientPageLayout>
        <div className="project-client-container">
          <Row>
            <h1 className="project-title">日本こども支援協会をサポーターとして支えてください</h1>
          </Row>

          <Row className="project-content-container" wrap={false}>
            <Col className="project-content-main" flex="auto">
              {/* スライダー・Slider */}
              <Row className="mb-5">
                <Carousel />
              </Row>

              {/* 概要文・Description Text */}
              <Row className="mb-5">
                <div className="project-description">
                  虐待を次世代に相続させない最も有効な事は、虐待を受けたこどもに「特定の大人との愛着」を丁寧に時間をかけてしっかり形成し直し、そのこども達がやがて成人して親になれるよう、健全に育つ土壌を整えることです。根本的に虐待が防止できる社会を、一緒に実現しませんか？
                </div>
              </Row>

              <Row className="mb-6">
                {/* SNSシェアー・Share Buttons */}
                <Col className="mr-6">
                  <Share />
                </Col>
                {/* 操作ボタン・Action Buttons */}
                <Col>
                  <Action />
                </Col>
              </Row>

              {/* メインコンテンツ・Main Content */}
              <Row>
                <Col span={24}>
                  <Tabs defaultActiveKey="1" className="content-tabs" tabBarGutter={30}>
                    {/* ホーム・Home */}
                    <Tabs.TabPane tab="Home" key="1">
                      <HomeTab />
                    </Tabs.TabPane>
                    {/* 活動報告・Activity */}
                    <Tabs.TabPane
                      tab={
                        <Space className="badge">
                          <span>活動報告</span>
                          <Badge
                            className="roboto-mono"
                            count={99}
                            style={{
                              backgroundColor: '#dddddd',
                              boxShadow: 'none',
                              color: '#929292',
                            }}
                          ></Badge>
                        </Space>
                      }
                      key="2"
                    >
                      <ActivityTab />
                    </Tabs.TabPane>
                    {/* 応援コメント・Comment */}
                    <Tabs.TabPane
                      tab={
                        <Space className="badge">
                          <span>応援コメント</span>
                          <Badge
                            className="roboto-mono"
                            count={99}
                            style={{
                              backgroundColor: '#dddddd',
                              boxShadow: 'none',
                              color: '#929292',
                            }}
                          ></Badge>
                        </Space>
                      }
                      key="3"
                    >
                      <CommentTab />
                    </Tabs.TabPane>
                  </Tabs>
                </Col>
              </Row>
            </Col>
            {/* サイダー・Sider（クラファンのみ・Crowdfundding only） */}
            <Col flex="300px">
              {/* 寄付情報・ゲージ・Donation Info and Progress bar */}
              <DonationInfo />
              {/* 団体情報・Organization Info */}
              <OrganizationInfo />
              {/* コース・Course（クラファンのみ・Crowdfunding only） */}
              <CourseInfo />
            </Col>
          </Row>
        </div>
      </ProjectClientPageLayout>
    </>
  );
};

export { ProjectClientPage };

export default ProjectClientPage;
