import { Helmet } from 'react-helmet-async';
import { Button, Row, Col, Descriptions, Card, Space, Select } from 'antd';
import { PageLayout } from 'app/components/Layout/PageLayout.style';
import styled from 'styled-components/macro';

// Styles
export const StyledDescriptions = styled(Descriptions)`
  .ant-descriptions-item-label {
    font-weight: 600;
  }
`;

const ChangePaymentDatePage = () => {
  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'入金日設定'}</title>
          <meta name="description" content={'...'} />
        </Helmet>
      </>
    );
  };

  return (
    <>
      {renderPageTitle()}
      <PageLayout>
        <Row className="mb-6" justify="space-between" align="middle">
          {/* 左の部分・Left Part */}
          <Col>
            <div className="page-title">{'入金日設定'}</div>
          </Col>
        </Row>
        {/* ページコンテンツ・Page Content */}
        <Card bodyStyle={{ padding: '24px 24px 0' }}>
          <Row justify="space-between" align="middle" className="mb-8">
            {/* 左の部分・Left Part */}
            <Col>
              <Row type="flex" align="middle">
                <Col>
                  <Select
                    defaultValue={{
                      value: '1',
                    }}
                    onChange={() => {}}
                    style={{
                      width: '256px',
                    }}
                  >
                    <Select.Option value="1">{'2023年'}</Select.Option>
                  </Select>
                </Col>
              </Row>
            </Col>

            {/* 右の部分・Right Part */}
            <Col>
              <Space>
                <Button type="primary">{'編集'}</Button>
              </Space>
            </Col>
          </Row>

          <Row>
            <Col span={24} style={{ maxWidth: 544 }}>
              <StyledDescriptions className="mb-6" column={1} bordered>
                <Descriptions.Item label="2023-01">{'19日'}</Descriptions.Item>
                <Descriptions.Item label="2023-02">{'19日'}</Descriptions.Item>
                <Descriptions.Item label="2023-03">{'19日'}</Descriptions.Item>
                <Descriptions.Item label="2023-04">{'19日'}</Descriptions.Item>
                <Descriptions.Item label="2023-05">{'19日'}</Descriptions.Item>
                <Descriptions.Item label="2023-06">{'19日'}</Descriptions.Item>
                <Descriptions.Item label="2023-07">{'19日'}</Descriptions.Item>
                <Descriptions.Item label="2023-08">{'19日'}</Descriptions.Item>
                <Descriptions.Item label="2023-09">{'19日'}</Descriptions.Item>
                <Descriptions.Item label="2023-10">{'19日'}</Descriptions.Item>
                <Descriptions.Item label="2023-11">{'19日'}</Descriptions.Item>
                <Descriptions.Item label="2023-12">{'19日'}</Descriptions.Item>
              </StyledDescriptions>
            </Col>
          </Row>
        </Card>
      </PageLayout>
    </>
  );
};

export default ChangePaymentDatePage;
