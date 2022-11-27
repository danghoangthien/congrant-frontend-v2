import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Radio, Space, Row, Col, Card } from 'antd';
import { StyledRadioGroup } from './SettingsLayout.style';
import { PageLayout } from './PageLayout.style';

const SettingsPage = ({ meta, title, settingComponentMap }) => {
  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{meta}</title>
          <meta name="description" content={'...'} />
        </Helmet>
      </>
    );
  };

  const [activeSetting, setActiveSetting] = useState(Object.keys(settingComponentMap)[0]);

  const onChange = e => {
    console.log();
    setActiveSetting(e.target.value);
  };

  // console.log('activeSetting', activeSetting);
  const ActiveComponent = settingComponentMap[activeSetting].Component;

  return (
    <>
      {renderPageTitle()}
      <PageLayout>
        <div className="mb-7">{title}</div>
        <div>
          <Card bodyStyle={{ padding: '32px 40px' }}>
            <Row className="setting-wrapper">
              <Col style={{ width: '200px' }}>
                <StyledRadioGroup>
                  <Radio.Group onChange={onChange} defaultValue={activeSetting}>
                    <Space direction="vertical" size={0} style={{ width: '100%' }}>
                      {Object.keys(settingComponentMap).map(componentKey => (
                        <Radio.Button value={componentKey}>
                          {settingComponentMap[componentKey].name}
                        </Radio.Button>
                      ))}
                    </Space>
                  </Radio.Group>
                </StyledRadioGroup>
              </Col>
              <Col className="pl-8" style={{ width: 'calc(100% - 200px)' }}>
                <ActiveComponent />
              </Col>
            </Row>
          </Card>
        </div>
      </PageLayout>
    </>
  );
};

export default SettingsPage;
