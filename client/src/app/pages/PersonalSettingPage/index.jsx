import SettingsPage from 'app/components/Layout/SettingsPage';
import BasicInformation from './components/BasicInformation';
import TwoFactor from './components/TwoFactor';
import Notification from './components/Notification';
import LoginHistory from './components/LoginHistory';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

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
  <span className="ml-1 page-title">
    <ManageAccountsIcon className="display-inline-flex mr-1" /> {'個人設定'}
  </span>
);
const PersonalSettingsPage = () => (
  <SettingsPage title={<Title />} settingComponentMap={SETTING_COMPONENT_MAP} />
);

export default PersonalSettingsPage;
