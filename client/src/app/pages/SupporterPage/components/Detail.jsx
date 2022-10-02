import { Tabs } from 'antd';

import BasicInfo from './BasicInfo';

const Detail = ({ data }) => {
  console.log('Detail data', data);
  return (
    <Tabs type="card">
      <Tabs.TabPane tab="基本情報" key="item-1">
        <BasicInfo />
      </Tabs.TabPane>
      <Tabs.TabPane tab="メモ" key="item-2">
        メモ
      </Tabs.TabPane>
      <Tabs.TabPane tab="寄付" key="item-3">
        寄付
      </Tabs.TabPane>
      <Tabs.TabPane tab="継続契約" key="item-4">
        継続契約
      </Tabs.TabPane>
      <Tabs.TabPane tab="領収書" key="item-5">
        領収書
      </Tabs.TabPane>
    </Tabs>
  );
};

export default Detail;
