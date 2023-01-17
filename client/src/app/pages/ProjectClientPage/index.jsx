import { Helmet } from 'react-helmet-async';
import { useHistory, useParams } from 'react-router-dom';
// ANTD
import { Row, Col, Tabs, Badge, Space } from 'antd';
import DonationInfo from './components/DonationInfo';
import OrganizationInfo from './components/OrganizationInfo';
import CourseInfo from './components/CourseInfo';
import Carousel from './components/Carousel';
import Share from 'app/components/Share';
import Action from './components/Action/Action';
import ProjectClientPageLayout from 'app/components/Layout/ProjectClientPage';
import HomeTab from './components/HomeTab';
import ActivityTab from './components/ActivityTab';
import ActivityDetail from './components/ActivityDetail';
import CommentTab from './components/CommentTab';
import Media from 'react-media';

// STYLE
import styled from 'styled-components/macro';
import { ScreenSizes } from 'styles/StyleConstants';
// UTILS
import { hexToRgbA } from 'utils/helper';

const ProjectClientPage = ({ link }) => {
  const history = useHistory();
  const usp = new URLSearchParams(window.location.search);
  const activity_id = usp.get('activity_id');
  const Logo = 'https://npojcsa.com/data/media/npojcsa/common/logo.png';
  const MAIN_COLOR = '#e34855';
  const RGBA_MAIN_COLOR = hexToRgbA(MAIN_COLOR, 0.08);

  const ProjectStyle = styled.div`
    .swiper-slide-thumb-active:after {
      border: 2px solid ${MAIN_COLOR};
    }

    .content-tabs {
      .ant-tabs-ink-bar {
        background: ${MAIN_COLOR};
      }
      .ant-tabs-tab-active {
        .ant-tabs-tab-btn {
          color: ${MAIN_COLOR};
        }

        .ant-badge-count {
          background-color: ${MAIN_COLOR} !important;
          color: #ffffff !important;
        }
      }
    }
  `;

  const Ellipse1 = styled.div`
    position: absolute;
    width: 350px;
    height: 350px;
    left: 100%;
    top: 156px;

    /* メインカラー（グリーン） */

    background: ${RGBA_MAIN_COLOR};
    filter: blur(100px);
    border-radius: 350px;

    @media screen and (max-width: ${ScreenSizes.medium}) {
      right: -175px;
      left: auto;
      top: -150px;
    }
  `;

  const Ellipse2 = styled.div`
    position: absolute;
    width: 350px;
    height: 350px;
    right: 100%;
    top: 428px;

    /* メインカラー（グリーン） */

    background: ${RGBA_MAIN_COLOR};
    filter: blur(100px);
    border-radius: 350px;

    @media screen and (max-width: ${ScreenSizes.medium}) {
      left: -175px;
      top: 506px;
    }
  `;

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
    <ProjectStyle>
      {renderPageTitle()}
      <ProjectClientPageLayout>
        <div className={`project-client-container ${project_type}`}>
          <Ellipse1></Ellipse1>
          <Ellipse2></Ellipse2>
          <Row>
            <h1 className="project-title">日本こども支援協会をサポーターとして支えてください</h1>
          </Row>

          <div className={`project-content-container ${params?.id === '1' && 'basic'}`}>
            <div className={`project-content-main`}>
              {/* スライダー・Slider */}
              <Row className="mb-8">
                <Carousel />
              </Row>

              <Media
                query="(max-width: 991px)"
                render={() => (
                  <Row className="mb-5">
                    <Col span={24}>
                      <DonationInfo link={link} />
                    </Col>
                  </Row>
                )}
              />

              {/* 概要文・Description Text */}
              <Row>
                <div className="project-description">
                  虐待を次世代に相続させない最も有効な事は、虐待を受けたこどもに「特定の大人との愛着」を丁寧に時間をかけてしっかり形成し直し、そのこども達がやがて成人して親になれるよう、健全に育つ土壌を整えることです。根本的に虐待が防止できる社会を、一緒に実現しませんか？
                </div>
              </Row>

              <Row className="mb-7" align="middle">
                {/* SNSシェアー・Share Buttons */}
                <Col className="share-container">
                  <Share
                    twitter={`https://github.com/nygardk/react-share`}
                    facebook={`https://github.com/nygardk/react-share`}
                    line={`https://github.com/nygardk/react-share`}
                  />
                </Col>
                {/* 操作ボタン・Action Buttons */}
                <Media
                  query="(min-width: 992px)"
                  render={() => (
                    <Col className="action-container">
                      <Action mainColor={MAIN_COLOR} />
                    </Col>
                  )}
                />
              </Row>

              {/* メインコンテンツ・Main Content */}
              <Row>
                <Col span={24}>
                  <Tabs
                    defaultActiveKey={params?.tabId || '1'}
                    className="content-tabs"
                    tabBarGutter={28}
                    onTabClick={key => history.push(`/project/client_name/${params?.id}/${key}`)}
                  >
                    {/* ホーム・Home */}
                    <Tabs.TabPane tab="HOME" key="1">
                      <HomeTab />
                    </Tabs.TabPane>
                    {/* 活動報告・Activity */}
                    <Tabs.TabPane
                      tab={
                        <Space className="badge" size={4}>
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
                      {activity_id ? <ActivityDetail /> : <ActivityTab mainColor={MAIN_COLOR} />}
                    </Tabs.TabPane>
                    {/* 応援コメント・Comment */}
                    <Tabs.TabPane
                      tab={
                        <Space className="badge" size={4}>
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
            </div>

            {params?.id === '1' && (
              <Row span={24}>
                <OrganizationInfo logo={Logo} />
              </Row>
            )}

            {/* サイダー・Sider（クラファンのみ・Crowdfundding only） */}
            {params?.id === '2' || params?.id === '3' ? (
              <div className="project-sider">
                {/* 寄付情報・ゲージ・Donation Info and Progress bar */}
                <Media
                  query="(min-width: 992px)"
                  render={() => (
                    <div style={{ marginBottom: '115px' }}>
                      <DonationInfo link={link} />
                    </div>
                  )}
                />
                {/* 団体情報・Organization Info */}
                <OrganizationInfo logo={Logo} />
                {params?.id === '3' && (
                  <Media query="(min-width: 992px)" render={() => <CourseInfo />} />
                )}
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </ProjectClientPageLayout>
    </ProjectStyle>
  );
};

export { ProjectClientPage };

export default ProjectClientPage;
