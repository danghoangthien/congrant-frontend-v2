import SettingsPage from 'app/components/Layout/SettingsPage';
import GroupInformation from './components/GroupInformation';
import Representative from './components/Representative';
import Administrator from './components/Administrator';
import AccountInformation from './components/AccountInformation';
import UserManagement from './components/UserManagement';
import { PayCircleOutlined } from '@ant-design/icons';

const SETTING_COMPONENT_MAP = {
  groupInformation: {
    id: 1,
    name: '団体情報',
    Component: GroupInformation,
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

console.log('GroupSettingsPage');

const Title = () => (
  <span className="ml-1 page-title">
    <PayCircleOutlined className="display-inline-flex mr-1" /> {'法人サポーター'}
  </span>
);
const GroupSettingsPage = () => (
  <SettingsPage title={<Title />} settingComponentMap={SETTING_COMPONENT_MAP} />
);

export default GroupSettingsPage;
