import { Link } from 'react-router-dom';
// ANTD
import { Badge, Space } from 'antd';
// STYLE
import { StyledBadgeDot, StyledPaymentTypeTag } from './OrganizationPage.style';
// UTILS
import { randomOutput } from 'utils/helper';
import { getWithExpiry } from 'utils/localStorageHandler';
// CONST
import { CG_VERIFICATION, ST_VERIFICATION, VERIFICATION_STATUS, USING_PAYMENT } from 'utils/consts';

const dataSource = [
  {
    key: '1',
    organization_id: '12345678',
    organization_name: '認定NPO法人コングラント',
    test: 'テスト',
    discount: 'TSJ',
    plan: 'スタンダード（TSJ）',
    plan_end_date: '2022-12-31',
    next_plan: 'スタンダード',
    cg_verification: 1,
    st_verification: 1,
    verification_status: 1,
    using_payment: [1],
    cg_payment_money: '1,123,000,000',
    cg_payment_number: '10,000',
    public_porjects: 3,
    no_public_porjects: 10,
    register_date: '2022-12-17 12:12:12',
    verify_end_date: '2022-12-17 12:12:12',
  },
  {
    key: '2',
    organization_id: '12345678',
    organization_name: '認定NPO法人コングラント',
    test: 'テスト',
    discount: 'TSJ',
    plan: 'スタンダード（TSJ）',
    plan_end_date: '2022-12-31',
    next_plan: 'スタンダード',
    cg_verification: 1,
    st_verification: 1,
    verification_status: 1,
    using_payment: [1, 2],
    cg_payment_money: '1,123,000,000',
    cg_payment_number: '10,000',
    public_porjects: 3,
    no_public_porjects: 10,
    register_date: '2022-12-17 12:12:12',
    verify_end_date: '2022-12-17 12:12:12',
  },
  {
    key: '3',
    organization_id: '12345678',
    organization_name: '認定NPO法人コングラント',
    test: 'テスト',
    discount: 'TSJ',
    plan: 'スタンダード（TSJ）',
    plan_end_date: '2022-12-31',
    next_plan: 'スタンダード',
    cg_verification: 1,
    st_verification: 1,
    verification_status: 1,
    using_payment: [2],
    cg_payment_money: '1,123,000,000',
    cg_payment_number: '10,000',
    public_porjects: 3,
    no_public_porjects: 10,
    register_date: '2022-12-17 12:12:12',
    verify_end_date: '2022-12-17 12:12:12',
  },
  {
    key: '4',
    organization_id: '12345678',
    organization_name: '認定NPO法人コングラント',
    test: 'テスト',
    discount: 'TSJ',
    plan: 'スタンダード（TSJ）',
    plan_end_date: '2022-12-31',
    next_plan: 'スタンダード',
    cg_verification: 1,
    st_verification: 1,
    verification_status: 1,
    using_payment: [],
    cg_payment_money: '1,123,000,000',
    cg_payment_number: '10,000',
    public_porjects: 3,
    no_public_porjects: 10,
    register_date: '2022-12-17 12:12:12',
    verify_end_date: '2022-12-17 12:12:12',
  },
];

const columnMap = {
  // 団体ID
  organization_id: {
    fixed: 'left',
    width: 120,
    title: '団体ID.',
    dataIndex: 'organization_id',
  },
  // 団体名
  organization_name: {
    width: 280,
    title: '団体名',
    render: ({ organization_name, organization_id }) => (
      <Link to={`/admin/organisations/${organization_id}`} className="admin-link">
        {organization_name}
      </Link>
    ),
  },
  // テスト
  test: {
    width: 80,
    title: 'テスト',
    dataIndex: 'test',
  },
  // 割引設定
  discount: {
    width: 120,
    title: '割引設定',
    dataIndex: 'discount',
  },
  // 今のプラン
  plan: {
    width: 200,
    title: '今のプラン',
    render: ({ plan }) => (
      <Link to={'/admin/home'} className="admin-link">
        {plan}
      </Link>
    ),
  },
  // 今のプランの終了予定日
  plan_end_date: {
    width: 200,
    title: '今のプランの終了予定日',
    dataIndex: 'plan_end_date',
  },
  // 次のプラン
  next_plan: {
    width: 200,
    title: '次のプラン',
    render: ({ next_plan }) => (
      <Link to={'/admin/home'} className="admin-link">
        {next_plan}
      </Link>
    ),
  },
  // CG審査
  cg_verification: {
    width: 120,
    title: 'CG審査',
    dataIndex: 'cg_verification',
    render: cg_verification => (
      <StyledBadgeDot>
        <Badge
          color={CG_VERIFICATION[cg_verification][1]}
          text={CG_VERIFICATION[cg_verification][0]}
        />
      </StyledBadgeDot>
    ),
  },
  // St審査
  st_verification: {
    width: 120,
    title: 'St審査',
    dataIndex: 'st_verification',
    render: st_verification => (
      <StyledBadgeDot>
        <Badge
          color={ST_VERIFICATION[st_verification][1]}
          text={ST_VERIFICATION[st_verification][0]}
        />
      </StyledBadgeDot>
    ),
  },
  // 審査状況
  verification_status: {
    width: 120,
    title: '審査状況',
    dataIndex: 'st_verification',
    render: verification_status => (
      <StyledBadgeDot>
        <Badge
          color={VERIFICATION_STATUS[verification_status][1]}
          text={VERIFICATION_STATUS[verification_status][0]}
        />
      </StyledBadgeDot>
    ),
  },
  // 利用中の決済
  using_payment: {
    width: 160,
    title: '利用中の決済',
    dataIndex: 'using_payment',
    render: using_payment => (
      <Space>
        {using_payment.includes(1) ? (
          <StyledPaymentTypeTag color={USING_PAYMENT[1][1]}>
            {USING_PAYMENT[1][0]}
          </StyledPaymentTypeTag>
        ) : (
          <StyledPaymentTypeTag color={'#d9d9d7'}>{USING_PAYMENT[1][0]}</StyledPaymentTypeTag>
        )}
        {using_payment.includes(2) ? (
          <StyledPaymentTypeTag color={USING_PAYMENT[2][1]}>
            {USING_PAYMENT[2][0]}
          </StyledPaymentTypeTag>
        ) : (
          <StyledPaymentTypeTag color={'#d9d9d7'}>{USING_PAYMENT[2][0]}</StyledPaymentTypeTag>
        )}
      </Space>
    ),
  },
  // CG決済（金額/件数）
  cg_payment_money_and_cg_payment_number: {
    width: 240,
    title: 'CG決済（金額/件数）',
    render: ({ cg_payment_money, cg_payment_number }) => {
      return (
        <>
          <span>
            {cg_payment_money}円/{cg_payment_number}件
          </span>
        </>
      );
    },
  },
  // 公開PJ
  public_porjects: {
    width: 80,
    title: '公開PJ',
    dataIndex: 'public_porjects',
  },
  // 非公開PJ
  no_public_porjects: {
    width: 120,
    title: '非公開PJ',
    dataIndex: 'no_public_porjects',
  },
  // 登録日時
  register_date: {
    width: 200,
    title: '登録日時',
    dataIndex: 'register_date',
  },
  // 審査完了日時
  verify_end_date: {
    width: 200,
    title: '審査完了日時',
    dataIndex: 'verify_end_date',
  },
};

const COLUMN_SETTING_LOCALSTORAGE = 'organization_list_column_setting';

const getRenderColumns = () => {
  let visibleColumns = Object.keys(columnMap);
  const columnsInSetting = getWithExpiry(COLUMN_SETTING_LOCALSTORAGE);
  if (columnsInSetting) {
    visibleColumns = visibleColumns.filter(columnName => {
      return columnsInSetting.includes(columnName);
    });
  }
  const renderColumns = visibleColumns.map(columnName => {
    return columnMap[columnName];
  });
  return renderColumns;
};

const pagination = {
  current_page: 1,
  limit: 50,
  total_items: 500,
  total_page: 10,
};

export { getRenderColumns, dataSource, pagination, COLUMN_SETTING_LOCALSTORAGE, columnMap };
