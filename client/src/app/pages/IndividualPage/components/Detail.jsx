import { Tabs } from 'antd';
import { StyledDetail } from './Detail.style';
import SupporterInfo from './SupporterInfo';
import BasicInfo from './BasicInfo';
import CorporationBasicInfo from './CorporationBasicInfo';
import Memo from './Memo';
import Donation from './Donation';
import ContinuousContract from './ContinuousContract';
import Receipt from './Receipt';
import { randomOutput } from 'utils/helper';
import { LIST_MODE } from '../consts';

export const DETAIL_KEY_MAP = {
  BASIC_INFO: '1',
  MEMO: '2',
  DONATION: '3',
  RECURRING: '4',
  RECEIPT: '5',
};

const Detail = ({ data, closeDrawer, activeKey, viewMode = LIST_MODE }) => {
  console.log('Detail data', data);
  console.log('Detail activeKey', activeKey);
  const { supporterType = randomOutput([1, 2]) } = data;
  return (
    <StyledDetail>
      <SupporterInfo closeDrawer={closeDrawer} />
      <Tabs defaultActiveKey={activeKey} type="card" tabBarGutter={4} className="mt-3">
        <Tabs.TabPane tab="基本情報" key="1">
          {supporterType === 1 ? <BasicInfo data={data} /> : <CorporationBasicInfo data={data} />}
        </Tabs.TabPane>
        <Tabs.TabPane tab="内部メモ" key="2">
          <Memo />
        </Tabs.TabPane>
        <Tabs.TabPane tab="寄付決済" key="3">
          <Donation viewMode={viewMode} data={data} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="継続契約" key="4">
          <ContinuousContract viewMode={viewMode} data={data} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="領収書" key="5">
          <Receipt viewMode={viewMode} data={data} />
        </Tabs.TabPane>
      </Tabs>
    </StyledDetail>
  );
};

export default Detail;
