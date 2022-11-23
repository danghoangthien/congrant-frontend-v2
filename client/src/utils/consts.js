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

const DONATION_TYPE_COLORS = {
  1: 'blue',
  2: 'green',
  3: 'orange',
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
  RECEIPT_METHODS,
  DONATION_TYPES,
  RECEIPT_STATUSES,
  PLANS,
  DONATION_TYPE_COLORS,
  RECEIPT_STATUS_COLOR,
};
