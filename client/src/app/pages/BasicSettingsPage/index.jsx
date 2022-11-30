import { Helmet } from 'react-helmet-async';
import SettingsPage from 'app/components/Layout/SettingsPage';
import PublicInfo from './components/PublicInfo';
import DonationPlan from './components/DonationPlan';
import SupportAttribute from './components/SupportAttribute';
import ReceiptMethod from './components/ReceiptMethod';
import CustomField from './components/CustomField';
import AccessAnalysis from './components/AccessAnalysis';
import Receipt from './components/Receipt';
import MailTemplate from './components/MailTemplate';

const renderPageTitle = () => {
  return (
    <>
      <Helmet>
        <title>{'基本設定'}</title>
        <meta name="description" content={'...'} />
      </Helmet>
    </>
  );
};

const SETTING_COMPONENT_MAP = {
  publicInfo: {
    id: 1,
    name: '公開情報',
    Component: PublicInfo,
  },
  donationPlan: {
    id: 2,
    name: '寄付プラン',
    Component: DonationPlan,
  },
  supportAttribute: {
    id: 3,
    name: 'サポーター属性',
    Component: SupportAttribute,
  },
  receiptMethod: {
    id: 4,
    name: '受領方法',
    Component: ReceiptMethod,
  },
  customField: {
    id: 5,
    name: 'カスタム項目',
    Component: CustomField,
  },
  accessAnalysis: {
    id: 6,
    name: 'アクセス解析',
    Component: AccessAnalysis,
  },
  receipt: {
    id: 7,
    name: '領収書',
    Component: Receipt,
  },
  mailTemplate: {
    id: 7,
    name: 'メールテンプレート',
    Component: MailTemplate,
  },
};

const Title = () => (
  <div className="page-title">
    <span className="material-symbols-outlined fill-icon icon">settings</span>
    <span className="ml-2">{'基本設定'}</span>
  </div>
);

const BasicSettingsPage = () => (
  <>
    {renderPageTitle()}
    <SettingsPage title={<Title />} settingComponentMap={SETTING_COMPONENT_MAP} />
  </>
);

export default BasicSettingsPage;
