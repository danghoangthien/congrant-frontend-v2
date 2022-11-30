import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
// ANTD
import { Row, Col, Tabs, Badge, Space } from 'antd';
import DonationInfo from './components/DonationInfo';
import OrganizationInfo from './components/OrganizationInfo';
import CourseInfo from './components/CourseInfo';
import Carousel from './components/Carousel';
import Share from 'app/components/Share';
import Action from './components/Action';
import ProjectClientPageLayout from 'app/components/Layout/ProjectClientPage';
import HomeTab from './components/HomeTab';
import ActivityTab from './components/ActivityTab';
import CommentTab from './components/CommentTab';
import Media from 'react-media';

const ProjectClientPage = () => {
  const Logo = 'https://npojcsa.com/data/media/npojcsa/common/logo.png';

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

  const params = useParams();
  console.log(params);

  let project_type;
  // and conditionally update it as required like below -
  if (params?.id === '1') {
    project_type = 'basic';
  } else if (params?.id === '2') {
    project_type = 'monthly';
  } else if (params?.id === '3') {
    project_type = 'crownfunding';
  }

  return (
    <>
      {renderPageTitle()}
      <ProjectClientPageLayout>
        <div className={`project-client-container ${project_type}`}>
          <Row>
            <h1 className="project-title">日本こども支援協会をサポーターとして支えてください</h1>
          </Row>

          <Row className="project-content-container" justify="space-between">
            <Col className="project-content-main" xs={24} lg={params?.id === '1' ? 24 : 16}>
              {/* スライダー・Slider */}
              <Row className="mb-5">
                <Carousel />
              </Row>

              <Media
                query="(max-width: 991px)"
                render={() => (
                  <Row className="mb-5">
                    <Col span={24}>
                      <DonationInfo />
                    </Col>
                  </Row>
                )}
              />

              {/* 概要文・Description Text */}
              <Row className="mb-5">
                <div className="project-description">
                  虐待を次世代に相続させない最も有効な事は、虐待を受けたこどもに「特定の大人との愛着」を丁寧に時間をかけてしっかり形成し直し、そのこども達がやがて成人して親になれるよう、健全に育つ土壌を整えることです。根本的に虐待が防止できる社会を、一緒に実現しませんか？
                </div>
              </Row>

              <Row className="mb-6" align="middle">
                {/* SNSシェアー・Share Buttons */}
                <Col className="share-container">
                  <Share
                    twitter={`https://github.com/nygardk/react-share`}
                    facebook={`https://github.com/nygardk/react-share`}
                    line={`https://github.com/nygardk/react-share`}
                  />
                </Col>
                {/* 操作ボタン・Action Buttons */}
                <Col className="action-container">
                  <Action />
                </Col>
              </Row>

              {/* メインコンテンツ・Main Content */}
              <Row>
                <Col span={24}>
                  <Tabs defaultActiveKey="1" className="content-tabs" tabBarGutter={30}>
                    {/* ホーム・Home */}
                    <Tabs.TabPane tab="HOME" key="1">
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

            {params?.id === '1' && (
              <Row span={24}>
                <OrganizationInfo logo={Logo} />
              </Row>
            )}

            {/* サイダー・Sider（クラファンのみ・Crowdfundding only） */}
            {params?.id === '2' || params?.id === '3' ? (
              <Col xs={24} lg={7}>
                {/* 寄付情報・ゲージ・Donation Info and Progress bar */}
                <Media
                  query="(min-width: 992px)"
                  render={() => (
                    <div style={{ marginBottom: '115px' }}>
                      <DonationInfo />
                    </div>
                  )}
                />
                {/* 団体情報・Organization Info */}
                <OrganizationInfo logo={Logo} />
                <Media query="(min-width: 992px)" render={() => <CourseInfo />} />
              </Col>
            ) : (
              ''
            )}
          </Row>
        </div>
      </ProjectClientPageLayout>
    </>
  );
};

export { ProjectClientPage };

export default ProjectClientPage;
