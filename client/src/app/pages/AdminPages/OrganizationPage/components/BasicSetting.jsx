import { Row, Col, Radio, Descriptions, Badge, Space } from 'antd';
import styled from 'styled-components/macro';
import { SUCCESS_COLOR } from 'styles/StyleConstants';
import { StyledProjectPaymentTypeTag } from 'styles/Tag.style';
import { StyledBadgeDot } from './../OrganizationPage.style';
import { PROJECT_PAYMENT_TYPES } from 'utils/consts';
import Table from 'app/components/Table';
import * as contractPlanMetaData from './../../ContractPlanPage/lightMetaData';
import * as projectMetaData from './../../ProjectPage/lightMetaData';
import './../../ContractPlanPage/Models/light';
import './../../ProjectPage/Models/light';
// Styles
export const StyledRadioGroup = styled(Radio.Group)`
  width: 100%;
  .ant-radio-button-wrapper {
    width: 50%;
  }
`;

export const StyledDescriptions = styled(Descriptions)`
  .ant-descriptions-item-label {
    font-weight: 600;
  }
`;

const BasicSetting = () => {
  return (
    <>
      <Row className="mb-8">
        <Col sm={24} md={24} lg={24}>
          <span className="page-title01">{'基本設定'}</span>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col sm={24} md={12} lg={12}>
          <StyledDescriptions className="mb-6" title={'登録・審査'} column={1} bordered>
            <Descriptions.Item label="登録完了日時">{'2022-12-17 12:12'}</Descriptions.Item>
            <Descriptions.Item label="審査状況">
              <StyledBadgeDot>
                <Badge color={SUCCESS_COLOR} text={'StOK'} />
              </StyledBadgeDot>
            </Descriptions.Item>
            <Descriptions.Item label="コングラント審査">
              <StyledBadgeDot>
                <Badge color={SUCCESS_COLOR} text={'OK'} />
              </StyledBadgeDot>
            </Descriptions.Item>
            <Descriptions.Item label="Stripe審査">
              <StyledBadgeDot>
                <Badge color={SUCCESS_COLOR} text={'OK'} />
              </StyledBadgeDot>
            </Descriptions.Item>
            <Descriptions.Item label="審査完了日時">{'2022-12-17 12:12'}</Descriptions.Item>
          </StyledDescriptions>
          <StyledDescriptions className="mb-6" title={'アカウント設定'} column={1} bordered>
            <Descriptions.Item label="アカウント設定">{'TSJ'}</Descriptions.Item>
            <Descriptions.Item label="テスト">{'19日'}</Descriptions.Item>
          </StyledDescriptions>
        </Col>
        <Col sm={24} md={12} lg={12}>
          <StyledDescriptions className="mb-6" title={'プラン'} column={1} bordered>
            <Descriptions.Item label="今のプラン">{'スタンダード（TSJ）'}</Descriptions.Item>
            <Descriptions.Item label="今のプランの終了日">{'2022-12-31'}</Descriptions.Item>
            <Descriptions.Item label="次のプラン">{'スタンダード（TSJ）'}</Descriptions.Item>
          </StyledDescriptions>
          <StyledDescriptions className="mb-6" title={'利用状況'} column={1} bordered>
            <Descriptions.Item label="利用中の決済">
              <Space>
                <StyledProjectPaymentTypeTag projectPaymentType={1}>
                  {PROJECT_PAYMENT_TYPES[1]}
                </StyledProjectPaymentTypeTag>
                <StyledProjectPaymentTypeTag projectPaymentType={2}>
                  {PROJECT_PAYMENT_TYPES[2]}
                </StyledProjectPaymentTypeTag>
              </Space>
            </Descriptions.Item>
            <Descriptions.Item label="公開プロジェクト数">{3}</Descriptions.Item>
            <Descriptions.Item label="非公開プロジェクト数">{10}</Descriptions.Item>
            <Descriptions.Item label="コングラント決済（金額）">
              {'1,123,000,000円'}
            </Descriptions.Item>
            <Descriptions.Item label="コングラント決済（件数）">{'10,000件'}</Descriptions.Item>
          </StyledDescriptions>
        </Col>
      </Row>
      <Row className="mb-6">
        <Table
          className="clickable-table"
          tableLayout="fixed"
          TableName="契約一覧"
          model="contractPlanLightList"
          metaData={contractPlanMetaData}
          showRowSelection={false}
          showDownLoad={false}
        />
      </Row>
      <Row className="mb-6">
        <Table
          className="clickable-table"
          tableLayout="fixed"
          TableName="契約一覧"
          model="adminProjectLightList"
          metaData={projectMetaData}
          showRowSelection={false}
          showDownLoad={false}
        />
      </Row>
    </>
  );
};

export default BasicSetting;
