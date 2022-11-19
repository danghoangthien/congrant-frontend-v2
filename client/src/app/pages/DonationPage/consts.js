const RECEIPT_METHODS = {
  1: 'カード決済',
};

const DONATION_TYPES = {
  1: '単発',
  2: '毎月',
  3: '毎年',
};

const DONATION_TYPE_COLORS = {
  1: ['#E9F1FA', '#94BCE5', '#2878CB'], // background, border, color
  2: ['#FCF0EB', '#EFB29B', '#DE6536'],
  3: ['#FBEAF4', '#EA96C6', '#D42C8E'],
};

const RECEIPT_STATUSES = {
  0: '未発行',
  1: '発行済み',
};

const RECEIPT_STATUS_COLOR = {
  0: 'warning',
  1: 'success',
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
