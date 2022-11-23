import SettingsPage from 'app/components/Layout/SettingsPage';
import CorporationInformation from './components/CorporationInformation';
import Representative from './components/Representative';
import Administrator from './components/Administrator';
import AccountInformation from './components/AccountInformation';
import UserManagement from './components/UserManagement';

const SETTING_COMPONENT_MAP = {
  groupInformation: {
    id: 1,
    name: '団体情報',
    Component: CorporationInformation,
  },
  representative: {
    id: 2,
    name: '代表者',
    Component: Representative,
  },
  administrator: {
    id: 3,
    name: '管理者',
    Component: Administrator,
  },
  accountInformation: {
    id: 4,
    name: '口座情報',
    Component: AccountInformation,
  },
  userManagement: {
    id: 5,
    name: 'ユーザー管理',
    Component: UserManagement,
  },
};

const Title = () => (
  <div className="page-title">
    <span class="material-symbols-outlined fill-icon icon">admin_panel_settings</span>
    <span className="ml-2">{'個人設定'}</span>
  </div>
);
const GroupSettingsPage = () => (
  <SettingsPage title={<Title />} settingComponentMap={SETTING_COMPONENT_MAP} />
);

export default GroupSettingsPage;
