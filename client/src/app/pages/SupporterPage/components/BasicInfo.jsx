import { useEffect, useMemo, useState } from 'react';
import { Badge, Descriptions } from 'antd';
import { DescriptionStyle } from './BasicInfo.style';

const BasicInfo = ({ data }) => {
  console.log('BasicInfo');
  return (
    <DescriptionStyle>
      <Descriptions
        title="基本情報"
        bordered
        column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
      >
        <Descriptions.Item label="個人ID">123456</Descriptions.Item>
        <Descriptions.Item label="氏名">田中 太郎</Descriptions.Item>
        <Descriptions.Item label="ふりがな">たなか たろう</Descriptions.Item>
        <Descriptions.Item label="広報物への氏名掲載">可</Descriptions.Item>

        <Descriptions.Item label="性別">男性</Descriptions.Item>

        <Descriptions.Item label="生年月日">1991-08-01</Descriptions.Item>
        <Descriptions.Item label="メールアドレス">tanaka.taro@gmail.com </Descriptions.Item>
        <Descriptions.Item label="電話番号">08012345678</Descriptions.Item>
        <Descriptions.Item label="住所">
          <p>
            〒5500002
            <br />
            大阪府大阪市西区江戸堀
            <br />
            1-2-3＊＊＊＊＊マンション301号室
          </p>
        </Descriptions.Item>
        <Descriptions.Item label="郵送物送付">可（1部)</Descriptions.Item>
        <Descriptions.Item label="属性">理事 ボランティア</Descriptions.Item>
        <Descriptions.Item label="備考">
          <p>
            あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。またそのなかでいっしょになったたくさんのひとたち、ファゼーロとロザーロ、羊飼のミーロや、顔の赤いこどもたち、地主のテーモ、山猫博士のボーガント・デストゥパーゴなど、いまこの暗い巨きな石の建物のなかで考えていると、みんなむかし風のなつかしい青い幻燈のように思われます。では、わたくしはいつかの小さなみだしをつけながら、しずかにあの年のイーハトーヴォの五月から十月までを書きつけましょう。
          </p>
        </Descriptions.Item>
      </Descriptions>
    </DescriptionStyle>
  );
};

export default BasicInfo;
