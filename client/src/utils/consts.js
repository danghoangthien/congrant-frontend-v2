import { DARK_GRAY, SUCCESS_COLOR, WARNING_COLOR, PRIMARY_COLOR } from 'styles/StyleConstants';

export const LIST_MODE = 0;
export const DETAIL_MODE = 1;
export const EDIT_MODE = 2;

const RECEIPT_METHODS = {
  1: 'カード決済',
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
  3: [DARK_GRAY],
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

const PROJECT_STATUS_CLASSES = {
  1: 'public',
  2: 'review',
  3: 'non-public',
  4: 'non-public',
};

const PROJECT_TARGETS = {
  1: '金額',
  2: 'サポーター数',
};

const RECEIPT_STATUSES = {
  0: '未発行', // unissued
  1: '発行済み', // issued
  2: '未作成', // not created yet
};

const RECEIPT_STATUS_COLOR = {
  0: 'warning',
  1: 'success',
  2: '',
};

const PLANS = {
  0: '-',
  1: 'ゴールドサポーター',
};

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
};
