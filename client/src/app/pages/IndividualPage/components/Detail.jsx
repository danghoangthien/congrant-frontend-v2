import { Tabs } from 'antd';
import { StyledDetail } from './Detail.style';
import SupporterInfo from './SupporterInfo';
import BasicInfo from './BasicInfo';
import CorporationBasicInfo from './CorporationBasicInfo';
import Memo from './Memo';
import Donation from './Donation';
import ContinuousContract from './ContinuousContract';
import Receipt from './Receipt';

export const DETAIL_KEY_MAP = {
  BASIC_INFO: '1',
  MEMO: '2',
  DONATION: '3',
  RECURRING: '4',
  RECEIPT: '5',
};

const Detail = ({ data, closeDrawer, activeKey }) => {
  console.log('Detail data', data);
  const { supporterType = 1 } = data;
  return (
    <StyledDetail>
      <SupporterInfo closeDrawer={closeDrawer} />
      <Tabs defaultActiveKey={activeKey} type="card" tabBarGutter={4} className="mt-6">
        <Tabs.TabPane tab="基本情報" key="1">
          {supporterType == '1' ? <BasicInfo data={data} /> : <CorporationBasicInfo data={data} />}
        </Tabs.TabPane>
        <Tabs.TabPane tab="内部メモ" key="2">
          <Memo />
        </Tabs.TabPane>
        <Tabs.TabPane tab="寄付決済" key="3">
          <Donation />
        </Tabs.TabPane>
        <Tabs.TabPane tab="継続契約" key="4">
          <ContinuousContract />
        </Tabs.TabPane>
        <Tabs.TabPane tab="領収書" key="5">
          <Receipt />
        </Tabs.TabPane>
      </Tabs>
    </StyledDetail>
  );
};

export default Detail;