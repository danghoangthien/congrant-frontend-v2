import {
  DARK_GRAY_COLOR,
  SUCCESS_COLOR,
  WARNING_COLOR,
  ORANGE_COLOR,
  EXTRA_LIGHT_ORANGE_COLOR,
  BLUE_COLOR,
  EXTRA_LIGHT_BLUE_COLOR,
  PRIMARY_COLOR,
  EXTRA_LIGHT_PRIMARY_COLOR,
  PINK_COLOR,
  EXTRA_LIGHT_PINK_COLOR,
  DANGER_COLOR,
} from 'styles/StyleConstants';

export const LIST_MODE = 0;
export const DETAIL_MODE = 1;
export const EDIT_MODE = 2;

const RECEIPT_METHODS = {
  1: 'カード決済',
  2: '銀行振込',
  3: '手渡し',
};

const DONATION_TYPES = {
  1: '単発',
  2: '毎月',
  3: '毎年',
};

const DONATION_TYPE_CLASSES = {
  1: 'once',
  2: 'monthly',
  3: 'yearly',
};

const DONATION_TYPE_COLORS = {
  1: ['#E9F1FA', '#94BCE5', '#2878CB'], // background, border, color
  2: ['#FCF0EB', '#EFB29B', '#DE6536'],
  3: ['#FBEAF4', '#EA96C6', '#D42C8E'],
};

const DONATION_STATUSES = {
  1: '継続中',
  2: '再決済待ち',
  3: '解約',
};

const DONATION_STATUS_COLOR = {
  1: [SUCCESS_COLOR],
  2: [WARNING_COLOR],
  3: [DARK_GRAY_COLOR],
};

const PROJECT_TYPES = {
  1: 'ベーシック',
  2: 'クラウドファンディング',
  3: 'マンスリーファンディング',
};

const PROJECT_TYPE_COLORS = {
  1: ['#EFF7EB', '#B1D999', '#63B233'], // background, border, color
  2: ['#E9F1FA', '#94BCE5', '#2878CB'],
  3: ['#F9EAEA', '#E39599', '#C72A32'],
};

const PROJECT_PAYMENT_TYPES = {
  1: 'Stripe決済',
  2: 'テレコム決済',
};

const PROJECT_PAYMENT_TYPE_COLORS = {
  1: '#635BFF',
  2: '#DB3333',
};

const PROJECT_STATUSES = {
  1: '公開中',
  2: '審査中',
  3: '非公開',
  4: '非公開（引継済）',
};
const ADMIN_PROJECT_STATUSES = {
  1: ['公開', SUCCESS_COLOR],
  2: ['審査待ち', WARNING_COLOR],
  3: ['非公開', DARK_GRAY_COLOR],
  4: ['非公開（引継済）', DARK_GRAY_COLOR],
};

const USER_STATUSES = {
  1: ['有効', SUCCESS_COLOR],
  2: ['無効', DARK_GRAY_COLOR],
};

const PROJECT_STATUS_CLASSES = {
  1: 'public',
  2: 'review',
  3: 'non-public',
  4: 'non-public',
};

const PROJECT_TARGETS = {
  0: '設定しない',
  1: '金額',
  2: 'サポーター数',
};

const RECEIPT_STATUSES = {
  0: '未発行', // unissued
  1: '発行済み', // issued
  2: '未作成', // not created yet
};

const RECEIPT_STATUS_COLOR = {
  0: [WARNING_COLOR],
  1: [SUCCESS_COLOR],
  2: [DARK_GRAY_COLOR],
};

const PLANS = {
  0: '-',
  1: 'ゴールドサポーター',
  2: 'シルバーサポーター',
  3: '賛助会員（都度更新）',
  4: '正会員（自動更新）',
};

const REGISTER_ROUTES = {
  1: 'コングラント経由',
  2: '手動入力',
  3: 'インポート',
};

// 審査ステータス
const INSPECT_STATUES = {
  1: [
    '審査情報未入力',
    ORANGE_COLOR,
    EXTRA_LIGHT_ORANGE_COLOR,
    <>
      必要事項を登録して
      <br />
      審査を開始してください
    </>,
    '審査情報の登録へ進む',
    '/app/verification',
  ],
  2: [
    '審査中',
    BLUE_COLOR,
    EXTRA_LIGHT_BLUE_COLOR,
    <>
      審査完了を待つ間に
      <br />
      プロジェクトページを作成しましょう
    </>,
    'プロジェクトの作成',
    '/app/projects',
  ],
  3: [
    '審査完了',
    PRIMARY_COLOR,
    EXTRA_LIGHT_PRIMARY_COLOR,
    <>
      審査が完了しました
      <br />
      プロジェクトページを公開しましょう
    </>,
    'プロジェクト',
    '/app/projects',
  ],
};

// 現在のプラン
const CONTRACT_PLANS = {
  1: ['お試し中', PINK_COLOR, EXTRA_LIGHT_PINK_COLOR],
  2: ['フリープラン', PRIMARY_COLOR, EXTRA_LIGHT_PRIMARY_COLOR],
  3: ['ライトプラン', BLUE_COLOR, EXTRA_LIGHT_BLUE_COLOR],
  4: ['スタンダードプラン', ORANGE_COLOR, EXTRA_LIGHT_ORANGE_COLOR],
};

// 契約ステータス
const CONTRACT_STATUES = {
  1: [
    <>
      <span style={{ color: DANGER_COLOR }}>プラン未選択</span>
    </>,
  ],
  2: ['契約中'],
  3: [
    <>
      <span style={{ color: DANGER_COLOR }}>更新が必要です</span>
    </>,
  ],
  4: ['更新済み'],
  5: ['自動更新予定'],
  6: ['フリープランへの変更を受け付けました'],
};

const CONTRACT_PLAN_STATUSES = {
  1: ['利用中', SUCCESS_COLOR],
  2: ['開始前', DANGER_COLOR],
  3: ['終了', DARK_GRAY_COLOR],
};
// CG審査
const CG_VERIFICATION = {
  1: ['OK', SUCCESS_COLOR],
  2: ['NG', DANGER_COLOR],
};

// St審査
const ST_VERIFICATION = {
  1: ['OK', SUCCESS_COLOR],
  2: ['保留', WARNING_COLOR],
  3: ['対象外', ''],
};

// 審査状況
const VERIFICATION_STATUS = {
  1: ['StOK', SUCCESS_COLOR],
  2: ['審査中', '#1890FF'],
  3: ['NG', DANGER_COLOR],
  4: ['TelOK', SUCCESS_COLOR],
};

// お知らせステータス
const NEWS_STATUSES = {
  1: ['公開', SUCCESS_COLOR],
  2: ['非公開', DARK_GRAY_COLOR],
};

// お知らせステータス
const AMOUNT_STATUSES = {
  1: ['変更完了', SUCCESS_COLOR],
  2: ['保留', WARNING_COLOR],
  3: ['未完了', DARK_GRAY_COLOR],
};

// お知らせステータス
const MAIL_STATUSES = {
  1: ['送信済み', SUCCESS_COLOR],
  2: ['550エラー', DANGER_COLOR],
};

// 利用中の決済
const USING_PAYMENT = {
  1: ['Stripe', '#635BFF'],
  2: ['テレコム', '#DB3333'],
};

const BASIC_COLOR = '#63B233';
const CROWD_COLOR = '#2878CB';
const MONTHLY_COLOR = '#C72A32';

export {
  PLANS,
  RECEIPT_METHODS,
  RECEIPT_STATUS_COLOR,
  DONATION_TYPES,
  DONATION_TYPE_COLORS,
  DONATION_TYPE_CLASSES,
  DONATION_STATUSES,
  DONATION_STATUS_COLOR,
  RECEIPT_STATUSES,
  PROJECT_TYPES,
  PROJECT_TYPE_COLORS,
  PROJECT_PAYMENT_TYPES,
  PROJECT_PAYMENT_TYPE_COLORS,
  PROJECT_STATUSES,
  PROJECT_STATUS_CLASSES,
  PROJECT_TARGETS,
  BASIC_COLOR,
  CROWD_COLOR,
  MONTHLY_COLOR,
  REGISTER_ROUTES,
  INSPECT_STATUES,
  CONTRACT_PLANS,
  CONTRACT_STATUES,
  CG_VERIFICATION,
  ST_VERIFICATION,
  VERIFICATION_STATUS,
  NEWS_STATUSES,
  MAIL_STATUSES,
  USING_PAYMENT,
  CONTRACT_PLAN_STATUSES,
  ADMIN_PROJECT_STATUSES,
  USER_STATUSES,
  AMOUNT_STATUSES,
};
