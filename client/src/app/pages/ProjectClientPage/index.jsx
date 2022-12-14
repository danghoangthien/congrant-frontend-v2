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
// import ellipse1 from 'styles/assets/ellipse1';
import { ScreenSizes } from 'styles/StyleConstants';

const ProjectClientPage = ({ link }) => {
  const history = useHistory();
  const usp = new URLSearchParams(window.location.search);
  const activity_id = usp.get('activity_id');
  const Logo = 'https://npojcsa.com/data/media/npojcsa/common/logo.png';
  const MAIN_COLOR = '#e34855';

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
    left: 0;
    top: 0;
    z-index: -1;

    @media screen and (max-width: ${ScreenSizes.medium}) {
      display: none;
    }
  `;

  const Ellipse2 = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;

    @media screen and (max-width: ${ScreenSizes.medium}) {
      display: none;
    }
  `;

  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'????????????'}</title>
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
        <Ellipse1>
          <svg
            width="487"
            height="721"
            viewBox="0 0 487 721"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="133" cy="360.5" rx="354" ry="360.5" fill="url(#paint0_radial_224_375)" />
            <defs>
              <radialGradient
                id="paint0_radial_224_375"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(133 360.5) rotate(90) scale(360.5 354)"
              >
                <stop offset="0.328125" stop-color="#FFF2F2" />
                <stop offset="1" stop-color="#F9F1F7" stop-opacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </Ellipse1>

        <Ellipse2>
          <svg
            width="456"
            height="641"
            viewBox="0 0 456 641"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M708 280C708 479.099 549.509 640.5 354 640.5C158.491 640.5 0 479.099 0 280C0 80.9014 158.491 -80.5 354 -80.5C549.509 -80.5 708 80.9014 708 280Z"
              fill="url(#paint0_radial_400_1570)"
            />
            <defs>
              <radialGradient
                id="paint0_radial_400_1570"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(309 319.5) rotate(90) scale(360.5 354)"
              >
                <stop stop-color="#FFF4F4" />
                <stop offset="1" stop-color="#F9F1F7" stop-opacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </Ellipse2>

        <div className={`project-client-container ${project_type}`}>
          <Row>
            <h1 className="project-title">???????????????????????????????????????????????????????????????????????????</h1>
          </Row>

          <div className={`project-content-container ${params?.id === '1' && 'basic'}`}>
            <div className={`project-content-main`}>
              {/* ??????????????????Slider */}
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

              {/* ????????????Description Text */}
              <Row className="mb-6">
                <div className="project-description">
                  ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                </div>
              </Row>

              <Row className="mb-6" align="middle">
                {/* SNS???????????????Share Buttons */}
                <Col className="share-container">
                  <Share
                    twitter={`https://github.com/nygardk/react-share`}
                    facebook={`https://github.com/nygardk/react-share`}
                    line={`https://github.com/nygardk/react-share`}
                  />
                </Col>
                {/* ??????????????????Action Buttons */}
                <Col className="action-container">
                  <Action mainColor={MAIN_COLOR} />
                </Col>
              </Row>

              {/* ???????????????????????????Main Content */}
              <Row>
                <Col span={24}>
                  <Tabs
                    defaultActiveKey={params?.tabId || '1'}
                    className="content-tabs"
                    tabBarGutter={28}
                    onTabClick={key => history.push(`/project/client_name/${params?.id}/${key}`)}
                  >
                    {/* ????????????Home */}
                    <Tabs.TabPane tab="HOME" key="1">
                      <HomeTab />
                    </Tabs.TabPane>
                    {/* ???????????????Activity */}
                    <Tabs.TabPane
                      tab={
                        <Space className="badge" size={4}>
                          <span>????????????</span>
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
                    {/* ?????????????????????Comment */}
                    <Tabs.TabPane
                      tab={
                        <Space className="badge" size={4}>
                          <span>??????????????????</span>
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

            {/* ???????????????Sider???????????????????????????Crowdfundding only??? */}
            {params?.id === '2' || params?.id === '3' ? (
              <div className="project-sider">
                {/* ???????????????????????????Donation Info and Progress bar */}
                <Media
                  query="(min-width: 992px)"
                  render={() => (
                    <div style={{ marginBottom: '115px' }}>
                      <DonationInfo link={link} />
                    </div>
                  )}
                />
                {/* ???????????????Organization Info */}
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
