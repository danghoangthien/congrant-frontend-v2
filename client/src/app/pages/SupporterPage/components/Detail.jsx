import { Tabs } from 'antd';

import BasicInfo from './BasicInfo';
import Memo from './Memo';
import Donation from './Donation';
import ContinuousContract from './ContinuousContract';
import Receipt from './Receipt';

const Detail = ({ data }) => {
  console.log('Detail data', data);
  return (
    <Tabs type="card">
      <Tabs.TabPane tab="基本情報" key="item-1">
        <BasicInfo />
      </Tabs.TabPane>
      <Tabs.TabPane tab="メモ" key="item-2">
        <Memo />
      </Tabs.TabPane>
      <Tabs.TabPane tab="寄付" key="item-3">
        <Donation />
      </Tabs.TabPane>
      <Tabs.TabPane tab="継続契約" key="item-4">
        <ContinuousContract />
      </Tabs.TabPane>
      <Tabs.TabPane tab="領収書" key="item-5">
        <Receipt />
      </Tabs.TabPane>
    </Tabs>
  );
};

export default Detail;
