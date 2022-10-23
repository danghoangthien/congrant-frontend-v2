import { useState } from 'react';
import { Radio, Space, Row, Col, Card } from 'antd';
import { StyledRadioGroup } from './SettingsLayout.style';
import { PageLayout } from './PageLayout.style';

const SettingsPage = ({ settingComponentMap }) => {
  const [activeSetting, setActiveSetting] = useState(Object.keys(settingComponentMap)[0]);
  const onChange = e => {
    console.log();
    setActiveSetting(e.target.value);
  };
  // console.log('activeSetting', activeSetting);
  const ActiveComponent = settingComponentMap[activeSetting].Component;
  return (
    <>
      <PageLayout>
        <div className="item">
          <Card className="ma-5" style={{ minWidth: '1000px' }}>
            <Row>
              <Col sm={24} md={5} lg={5} style={{ minWidth: '300px' }}>
                <StyledRadioGroup>
                  <Radio.Group onChange={onChange} defaultValue={activeSetting}>
                    <Space direction="vertical" size={0}>
                      {Object.keys(settingComponentMap).map(componentKey => (
                        <Radio.Button value={componentKey}>
                          {settingComponentMap[componentKey].name}
                        </Radio.Button>
                      ))}
                    </Space>
                  </Radio.Group>
                </StyledRadioGroup>
              </Col>
              <Col sm={24} md={12} lg={12} style={{ minWidth: '650px' }}>
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
