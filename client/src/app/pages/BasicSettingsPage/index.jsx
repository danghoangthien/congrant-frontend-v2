import { useState } from 'react';
import SettingsPage from 'app/components/Layout/SettingsPage';
import DonationPlan from './components/DonationPlan';
import SupportAttribute from './components/SupportAttribute';
import ReceiptMethod from './components/ReceiptMethod';
import CustomField from './components/CustomField';
import AccessAnalysis from './components/AccessAnalysis';
import Receipt from './components/Receipt';

const SETTING_COMPONENT_MAP = {
  donationPlan: {
    id: 1,
    name: '寄付プラン',
    Component: DonationPlan,
  },
  supportAttribute: {
    id: 2,
    name: 'サポーター属性',
    Component: SupportAttribute,
  },
  receiptMethod: {
    id: 3,
    name: '受領方法',
    Component: ReceiptMethod,
  },
  customField: {
    id: 4,
    name: 'カスタム項目',
    Component: CustomField,
  },
  accessAnalysis: {
    id: 5,
    name: 'アクセス解析',
    Component: AccessAnalysis,
  },
  receipt: {
    id: 6,
    name: '領収書',
    Component: Receipt,
  },
};
const BasicSettingsPage = () => <SettingsPage settingComponentMap={SETTING_COMPONENT_MAP} />;

export default BasicSettingsPage;
