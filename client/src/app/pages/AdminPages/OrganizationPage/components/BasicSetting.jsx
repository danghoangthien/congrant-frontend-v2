import { Link } from 'react-router-dom';
import { Row, Col, Radio, Descriptions, Badge, Space, Table, Button, Tag } from 'antd';
import styled from 'styled-components/macro';
import {
  SUCCESS_COLOR,
  PLACEHOLDER_COLOR,
  EXTRA_LIGHT_GRAY_COLOR,
  GRAY_COLOR,
} from 'styles/StyleConstants';
import { StyledProjectPaymentTypeTag } from 'styles/Tag.style';
import { StyledBadgeDot } from './../OrganizationPage.style';
import { PROJECT_PAYMENT_TYPES } from 'utils/consts';
// import Table from 'app/components/Table';
// import * as contractPlanMetaData from '../../AgreementPage/lightMetaData';
// import * as projectMetaData from './../../ProjectPage/lightMetaData';
// import '../../AgreementPage/Models/light';
// import './../../ProjectPage/Models/light';
// UTILS
import { randomOutput } from 'utils/helper';
// STYLE
// CONST
import { PRIMARY_ADMIN_COLOR } from 'styles/StyleConstants';
import {
  CONTRACT_PLANS,
  CONTRACT_PLAN_STATUSES,
  PROJECT_TYPES,
  ADMIN_PROJECT_STATUSES,
  DONATION_TYPES,
} from 'utils/consts';
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

  .ant-descriptions-header {
    margin-bottom: 8px;
  }

  .ant-descriptions-small .ant-descriptions-row > th,
  .ant-descriptions-small .ant-descriptions-row > td {
    border-left: none;
    border-right: none;
  }
`;

const dataSource = Array.from(Array(5).keys()).map(i => ({
  key: `${i}`,
  contract_id: `${i + 12345678}`,
  plan: randomOutput([1, 2, 3, 4]),
  status: randomOutput([1, 2, 3]),
  start_date: randomOutput([
    <Space direction="veritcal" size={0}>
      <span>2023-01-09</span>
    </Space>,
  ]),
  end_date: randomOutput([
    <Space direction="veritcal" size={0}>
      <span>2023-01-09</span>
    </Space>,
  ]),
  discount: randomOutput(['TSJ', '']),
  created_at: randomOutput([
    <Space direction="vertical" size={0}>
      <span>2023-01-09</span>
      <span>12:34:56</span>
    </Space>,
  ]),
  updated_at: randomOutput([
    <Space direction="vertical" size={0}>
      <span>2023-01-09</span>
      <span>12:34:56</span>
    </Space>,
  ]),
  last_updated: randomOutput(['荒木雄大']),
}));

const columns = [
  {
    title: '契約ID',
    width: 120,
    dataIndex: 'contract_id',
    key: 'contract_id',
  },
  {
    title: 'プラン',
    width: 328,
    key: 'plan',
    render: ({ plan }) => {
      return (
        <Link to={'/admin/home'} className="admin-link">
          {CONTRACT_PLANS[plan][0] || ''}
        </Link>
      );
    },
  },
  {
    title: 'ステータス',
    width: 120,
    key: 'status',
    render: ({ status }) => (
      <StyledBadgeDot>
        <Badge color={CONTRACT_PLAN_STATUSES[status][1]} text={CONTRACT_PLAN_STATUSES[status][0]} />
      </StyledBadgeDot>
    ),
  },
  {
    title: '契約開始日',
    width: 120,
    key: 'start_date',
    dataIndex: 'start_date',
  },
  {
    title: '契約終了日',
    width: 120,
    key: 'end_date',
    dataIndex: 'end_date',
  },
  {
    title: '割引',
    width: 80,
    key: 'discount',
    dataIndex: 'discount',
  },
  {
    title: '作成日時',
    width: 120,
    key: 'created_at',
    dataIndex: 'created_at',
  },
  {
    title: '更新日時',
    width: 120,
    key: 'updated_at',
    dataIndex: 'updated_at',
  },
];

const dataSource2 = Array.from(Array(5).keys()).map(i => ({
  key: `${i}`,
  project_id: `${i + 123456}`,
  project_name: randomOutput(['NPO法人コングラントをサポーターとして支えてください。']),
  status: randomOutput([1, 2, 3]),
  organization_id: randomOutput([12345678]),
  organization_name: randomOutput(['認定NPO法人コングラント']),
  plan: randomOutput([1, 2, 3, 4]),
  discount: randomOutput(['TSJ', '']),
  usage_fee: randomOutput(['76,800円', '48,000円', '96,000円', '0円']),
  payment_method: randomOutput(['カード決済', '銀行振込']),
  // プロジェクトタイプ
  project_type: PROJECT_TYPES[randomOutput([1, 2, 3])],
  // 受付期間
  reception_period: randomOutput([
    <Space size={0} direction="vertical">
      <span>2023-01-09〜</span>
      <span>2023-02-28</span>
    </Space>,
  ]),
  // 寄付タイプ
  donation_type: randomOutput([[1, 2, 3], [1, 2], [2, 3], [3]]),
  // 決済システム
  payment_system: randomOutput([1, 2]),
  // オプション
  option: randomOutput(['ぷらす８', '-', 'giving100']),
  // 公開申請日
  public_app_date: randomOutput([
    <Space size={0}>
      <span>2023-01-09</span>
      <span>12:34:56</span>
    </Space>,
  ]),
  // 更新日
  updated_at: randomOutput([
    <Space>
      <span>2023-01-09</span>
      <span>12:34:56</span>
    </Space>,
  ]),
}));

const columns2 = [
  // プロジェクトID
  {
    title: 'プロジェクトID',
    width: 169,
    dataIndex: 'project_id',
    key: 'project_id',
  },
  // プロジェクト名
  {
    title: 'プロジェクト名',
    width: 288,
    dataIndex: 'project_name',
    key: 'project_name',
  },
  // リンク
  {
    title: 'リンク',
    width: 120,
    key: 'link',
    dataIndex: 'link',
    render: () => <Button>{randomOutput(['公開リンク', 'プレビュー'])}</Button>,
  },
  // ステータス
  {
    title: 'ステータス',
    width: 120,
    key: 'status',
    dataIndex: 'status',
    render: status => (
      <StyledBadgeDot>
        <Badge color={ADMIN_PROJECT_STATUSES[status][1]} text={ADMIN_PROJECT_STATUSES[status][0]} />
      </StyledBadgeDot>
    ),
  },
  // 編集
  {
    title: '編集',
    width: 80,
    key: 'edit',
    dataIndex: 'edit',
    render: () =>
      randomOutput([
        <Button>{'編集'}</Button>,
        <Button
          type="primary"
          className="fade"
          style={{ backgroundColor: PRIMARY_ADMIN_COLOR, borderColor: PRIMARY_ADMIN_COLOR }}
        >
          {'審査'}
        </Button>,
      ]),
  },
  // プロジェクトタイプ
  {
    title: 'プロジェクトタイプ',
    width: 200,
    key: 'project_type',
    dataIndex: 'project_type',
  },
  // 寄付タイプ
  {
    title: '寄付タイプ',
    width: 160,
    key: 'donation_type',
    dataIndex: 'donation_type',
    render: donation_type => (
      <Space size={0}>
        {donation_type.includes(1) ? (
          <Tag
            style={{
              color: DONATION_TYPES[1][3],
              backgroundColor: DONATION_TYPES[1][1],
              border: `1px solid ${DONATION_TYPES[1][2]}`,
            }}
          >
            {DONATION_TYPES[1][0] || ''}
          </Tag>
        ) : (
          <Tag
            color={EXTRA_LIGHT_GRAY_COLOR}
            style={{ color: PLACEHOLDER_COLOR, borderColor: GRAY_COLOR }}
          >
            {DONATION_TYPES[1][0] || ''}
          </Tag>
        )}

        {donation_type.includes(2) ? (
          <Tag
            style={{
              color: DONATION_TYPES[2][3],
              backgroundColor: DONATION_TYPES[2][1],
              border: `1px solid ${DONATION_TYPES[2][2]}`,
            }}
          >
            {DONATION_TYPES[2][0] || ''}
          </Tag>
        ) : (
          <Tag
            color={EXTRA_LIGHT_GRAY_COLOR}
            style={{ color: PLACEHOLDER_COLOR, borderColor: GRAY_COLOR }}
          >
            {DONATION_TYPES[2][0] || ''}
          </Tag>
        )}

        {donation_type.includes(3) ? (
          <Tag
            style={{
              color: DONATION_TYPES[3][3],
              backgroundColor: DONATION_TYPES[3][1],
              border: `1px solid ${DONATION_TYPES[3][2]}`,
            }}
          >
            {DONATION_TYPES[3][0] || ''}
          </Tag>
        ) : (
          <Tag
            color={EXTRA_LIGHT_GRAY_COLOR}
            style={{ color: PLACEHOLDER_COLOR, borderColor: GRAY_COLOR }}
          >
            {DONATION_TYPES[3][0] || ''}
          </Tag>
        )}
      </Space>
    ),
  },
];

const BasicSetting = () => {
  return (
    <>
      <Row gutter={24} className="mb-8">
        <Col sm={24} md={12} lg={12}>
          <StyledDescriptions
            size="small"
            className="mb-10"
            title={'登録・審査'}
            column={1}
            bordered
          >
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
          <StyledDescriptions size="small" title={'アカウント設定'} column={1} bordered>
            <Descriptions.Item label="アカウント設定">{'TSJ'}</Descriptions.Item>
            <Descriptions.Item label="テスト"></Descriptions.Item>
          </StyledDescriptions>
        </Col>
        <Col sm={24} md={12} lg={12}>
          <StyledDescriptions size="small" className="mb-10" title={'プラン'} column={1} bordered>
            <Descriptions.Item label="今のプラン">
              <Link to={'/admin/home'} className="admin-link">
                スタンダード（TSJ）
              </Link>
            </Descriptions.Item>
            <Descriptions.Item label="今のプランの終了日">{'2022-12-31'}</Descriptions.Item>
            <Descriptions.Item label="次のプラン">
              <Link to={'/admin/home'} className="admin-link">
                スタンダード（TSJ）
              </Link>
            </Descriptions.Item>
          </StyledDescriptions>
          <StyledDescriptions size="small" title={'利用状況'} column={1} bordered>
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
        <Col span={24} className="mb-2">
          <div style={{ fontSize: 16, fontWeight: 600 }}>契約プラン</div>
        </Col>
        <Col span={24}>
          <Table
            tableLayout="fixed"
            className="clickable-table"
            style={{ width: '100%' }}
            key={Math.random()}
            columns={columns}
            dataSource={dataSource}
            pagination={false}
          />
        </Col>
      </Row>

      <Row>
        <Col span={24} className="mb-2">
          <div style={{ fontSize: 16, fontWeight: 600 }}>プロジェクト</div>
        </Col>
        <Col span={24}>
          <Table
            tableLayout="fixed"
            className="clickable-table"
            style={{ width: '100%' }}
            key={Math.random()}
            columns={columns2}
            dataSource={dataSource2}
            pagination={false}
          />
        </Col>
      </Row>
    </>
  );
};

export default BasicSetting;
