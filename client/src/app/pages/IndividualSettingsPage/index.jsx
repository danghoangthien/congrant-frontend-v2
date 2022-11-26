import SettingsPage from 'app/components/Layout/SettingsPage';
import BasicInformation from './components/BasicInformation';
import TwoFactor from './components/TwoFactor';
import Notification from './components/Notification';
import LoginHistory from './components/LoginHistory';

const SETTING_COMPONENT_MAP = {
  basicInformation: {
    id: 1,
    name: '基本情報',
    Component: BasicInformation,
  },
  twoFactor: {
    id: 2,
    name: '2段階認証',
    Component: TwoFactor,
  },
  notification: {
    id: 3,
    name: '通知設定',
    Component: Notification,
  },
  loginHistory: {
    id: 4,
    name: 'ログイン履歴',
    Component: LoginHistory,
  },
};

console.log('GroupSettingsPage');

const Title = () => (
  <div className="page-title">
    <span className="material-symbols-outlined fill-icon icon">manage_accounts</span>
    <span className="ml-2">{'個人設定'}</span>
  </div>
);
const PersonalSettingsPage = () => (
  <SettingsPage meta="個人設定" title={<Title />} settingComponentMap={SETTING_COMPONENT_MAP} />
);

export default PersonalSettingsPage;
