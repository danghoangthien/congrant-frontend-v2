import { useState } from 'react';
import { Row, Col, Tag } from 'antd';
import { PageEditStyle } from './PageEdit.style';
import styled from 'styled-components/macro';
import { useMountEffect } from 'hook/useMountEffect';

import ArticleEditor from 'utils/article-editor/article-editor';
console.log(ArticleEditor);

export const StyledTag = styled(Tag)`
  width: 40px;
  height: 40px;
  border-radius: 4px;
`;

const data = {
  project_id: '163',
  blocks: [
    {
      id: 10314,
      type: 1,
      source: '<h2>みんなの夢AWARD8への支援を募集します</h2>',
    },
    {
      id: 10315,
      type: 2,
      source:
        '<p>「みんなの夢AWARD8」を開催するにあたり、<br />クラウドファンディングで支援してくださる方を募集します。</p><p><strong>みんなをワクワクさせる夢。叶えば、世界がちょっと良くなる夢。<br />あなたの手で、そんなだれかの夢を応援しませんか？</strong></p>',
    },
    {
      id: 10316,
      type: 1,
      source: 'みんなの夢AWARDとは？',
    },
    {
      id: 10317,
      type: 3,
      source: [
        'https://congrant.com/img/groups/2/163/4/2017_02_20_a_017-580x387.jpg',
        'https://congrant.com/img/groups/2/163/7/yume_award001.jpeg',
        'https://congrant.com/img/groups/2/163/7/yume_award001.jpeg',
      ],
    },
    {
      id: 10318,
      type: 2,
      source:
        '<p>「みんなの夢AWARD」は、みんなをワクワクさせ、<br />みんなに夢を与えるすてきな夢に贈られるＡＷＡＲＤです。<br />全国各地から社会をワクワクさせる「夢」が集まります。<br />エントリーされた夢のなかから注目の夢を選んでレポートし、<br />みなさんからの応援投票を受け付けます。<br />さらに、イベントの最後には夢をかなえた先輩たちを審査員として招き、<br />みんなに夢を与えるすてきな夢に「みんなの夢ＡＷＡＲＤ」を贈ります！</p><p>自分自身をワクワクさせる夢があって、<br />夢をかなえるための計画があって、毎日少しずつでも前進している。<br />その夢がかなえば、世界はきっと、ちょっと良くなる。<br />だから、その夢をたくさんの人に話して、知ってもらいたい。<br />そんな人は、ぜひエントリーしてみてください。</p><p>あなたの夢が、だれかを元気にする。<br />あなたの夢が、社会を元気にする。<br />みんなの夢で、「夢っていいね」が広がっていく。</p><p><strong>「みんなの夢AWARD」は、</strong><strong>みんなをワクワクさせるすてきな夢を紹介し、世界に夢を増やします。</strong></p>',
    },
    {
      id: 10319,
      type: 1,
      source: 'これまでの夢AWARDストーリー',
    },
    {
      id: 10320,
      type: 3,
      source: [
        'https://congrant.com/img/groups/2/163/7/yume_award001.jpeg',
        'https://congrant.com/img/groups/2/163/7/yume_award001.jpeg',
      ],
    },
    {
      id: 10321,
      type: 2,
      source:
        '<p><span style="color:#e74c3c"><strong>■みんなの夢アワード2010</strong></span><br />日比谷公会堂を会場に開催され、1400人以上の観衆が集まりました。5名のファイナリストの中から、DVDにおさめた授業を農村部の高校生に届けるという活動をバングラデシュで行っている税所 篤快さんが日本一の夢に選ばれました。</p><p><span style="color:#e74c3c"><strong>■みんなの夢アワード2012</strong></span><br />2回目に開催された「みんなの夢アワード2012」は、中野サンプラザで行われました。立ち見が出るほどの超満員の中、選ばれたのは、きのこのSATO株式会社を経営し、東日本大震災で被災した地元の雇用を生み出したいという思いで活動されている佐藤博文さん。受賞者への夢のサポート資金として、支援金2000万円が渡されました。</p><p><span style="color:#e74c3c"><strong>■みんなの夢AWARD3</strong></span><br />開催を重ねるごとに、会場規模も来場者数も増え、「みんなの夢ＡＷＡＲＤ３」は、日本武道館での開催となりました。7名のファイナリストから選ばれたのは、「日本をユニバーサル先進国にしたい」という夢を語った垣内俊哉さん。8000人の観衆の心を打つ力強いプレゼンテーションでした。</p><p><span style="color:#e74c3c"><strong>■みんなの夢AWARD4</strong></span><br />過去最大の451名の夢が集まった「みんなの夢ＡＷＡＲＤ４」。その中から見事日本一の夢に輝いたのは、家や病院のベッドから動けなくても、『会いたい人に会え、行きたい所へ行け、社会に参加できる』未来を創るという夢に向かって走り出している、ロボットコミュニケーターの吉藤 健太朗さん。現在、支援を表明した企業と一緒に、夢の実現に向け動き出しています。</p><p><span style="color:#e74c3c"><strong>■みんなの夢AWARD5</strong></span><br />全国各地から多くの夢が集まった「みんなの夢ＡＷＡＲＤ５」。今年の日本一の夢に輝いたのは、「カンボジアに映画配達人を100人生み出し、様々な世界を見せてくれる映画を通じて子どもたちの夢の選択肢を広げたい！」という夢を語った教来石小織さん。引き続き夢の実現へむけて、みんなの夢ＡＷＡＲＤでもバックアップしていきます。</p><p><span style="color:#e74c3c"><strong>■みんなの夢AWARD6</strong></span><br />会場を&rdquo;武道の聖地&rdquo;日本武道館から&ldquo;夢の聖地&rdquo;東京ディズニーリゾート舞浜アンフィシアターに移して開催されたみんなの夢ＡＷＡＲＤ６。観客数は全国から集った選りすぐりの意欲の高い学生らを含んだ2,000名。ゲストMCにはガレッジセールを迎え、会場を活かしたサーカスによる演出も行いました。日本一の夢に輝いたのは、「子どもたちを孤独から救うシングルマザーの応援団長」大津たまみさん。シングルマザーハウスを建設して、ひとり親の小さな子どもたちがひとりで過ごす時間を少なくしたい、そんな熱い思いを語りました。</p><p><span style="color:#e74c3c"><strong>■みんなの夢AWARD7</strong></span><br />昨年に引き続き、&ldquo;夢の聖地&rdquo;東京ディズニーリゾート舞浜アンフィシアターにて開催されたみんなの夢ＡＷＡＲＤ７。みんなの夢ＡＷＡＲＤ7「夢ＡＷＡＲＤ」は、「日本の中核となるライフステージに合わせた栄養ステーションの設立！」という夢を語った麻植 有希子さんが受賞しました！麻植 有希子さんは合わせて、ソーシャルビジネス賞も受賞されました！</p>',
    },
    {
      id: 10322,
      type: 1,
      source: 'みんなの夢AWARD主宰　渡邉美樹からのメッセージ',
    },
    {
      id: 10323,
      type: 2,
      source:
        '<p>夢を語る人を集め、夢を支援する人々を集め、<br />「これからの社会」のために<br />「これからの若者」を応援していきたいと考えています。</p><p>夢あふれる社会、<br />ありがとうが飛びかう社会をめざして活動しています。<br />素敵な未来は一人一人の素敵な夢の中にあります。</p><p>「みんなの夢ＡＷＡＲＤ」夢の祭典。<br />1人でも多くの方の御参加をお待ちしております。</p>',
    },
    {
      id: 10324,
      type: 1,
      source: 'みんなの夢AWARD7サポーター一覧',
    },
    {
      id: 10325,
      type: 2,
      source: '<p><span style="color:#e74c3c"><strong>協賛企業</strong></span></p>',
    },
    {
      id: 10326,
      type: 3,
      source: [
        'https://congrant.com/img/groups/2/163/12/8087547b3729d6bb9e44b8baf23180ae1-580x640.jpg',
      ],
    },
    {
      id: 10327,
      type: 2,
      source:
        '<p><span style="color:#e74c3c"><strong>法人サポーター</strong></span><br />カレイトジャパン、クリックネット</p><p><span style="color:#e74c3c"><strong>後援</strong></span><br />経済産業省、総務省、文部科学省、日本取引所グループ、NIPPON ITチャリティ駅伝、認定特定非営利活動法人日本ファンドレイジング協会</p><p><span style="color:#e74c3c"><strong>特別協力</strong></span><br />厚真町（北海道）、帯広市（北海道）、陸前高田市（岩手県）、阿賀町（新潟県）、輪島市（石川県）、白馬村（長野県）、大崎上島町（広島県）、丹波市（兵庫県）、臼杵市（大分県）、久米島町（沖縄県）、今帰仁村（沖縄県）</p><p><span style="color:#e74c3c"><strong>協力</strong></span><br />A-port、オルタナ、Team Woman Ally、日本学生アイドルユニット</p><p><span style="color:#e74c3c"><strong>企画・制作・運営</strong></span><br />株式会社グリーンアップル</p><p><span style="color:#e74c3c"><strong>共催</strong></span><br />一般社団法人ソーシャルビジネス・ドリームパートナーズ、一般社団法人ソーシャルビジネス・ネットワーク</p><p><span style="color:#e74c3c"><strong>主催</strong></span><br />公益財団法人みんなの夢をかなえる会</p><p><span style="color:#e74c3c"><strong>Special Thanks</strong></span><br />中山 加奈子 様、中川 純子 様、 岩渕 美智子 様、大野 隆 様、Yoshimura Ryoji 様、真中 由実子 様、Hotta Kanako 様、五十嵐 裕之 様、江原 智恵子 様、Saito Hiroshi 様、Takaya Yoshie 様、安藤 大成 様、福中 友昭 様、古賀 芳秋 様、Jimbo Hiroyo 様、百村 良治 様、ゆめみらい 株式会社 様、長谷川 ちひろ 様、にゃん ぽんた 様、Kusada Ayaka 様</p><p>（2017年2月現在）</p>',
    },
  ],
};

const result = data.blocks
  .map(value => {
    if (value.type === 3) {
      console.log(value.source.length);
      if (value.source.length === 3) {
        const ex = value.source
          .map(item => {
            return `
            <div class="column column-4">
              <figure>
                <img
                  src=${item}
                  alt=""
                ></img>
              </figure>
            </div>
          `;
          })
          .join('');
        return `<div class="grid">${ex}</div>`;
      } else if (value.source.length === 2) {
        const ex = value.source
          .map(item => {
            return `
            <div class="column column-6">
              <figure>
                <img
                  src=${item}
                  alt=""
                ></img>
              </figure>
            </div>
          `;
          })
          .join('');
        return `<div class="grid">${ex}</div>`;
      } else {
        return value.source.map(item => {
          return `<figure>
          <img
            src=${item}
            alt=""
          ></img>
        </figure>`;
        });
      }
    } else {
      return value.source;
    }
  })
  .join('');

const PageEdit = () => {
  const [editor, setEditor] = useState(null);
  useMountEffect(() => {
    setEditor(
      ArticleEditor('#editor', {
        content: result,
      }),
    );
  });

  return (
    <PageEditStyle>
      <Row className="mb-5">
        <Col sm={24} md={24} lg={24}>
          <span className="page-title">{'ページ編集'}</span>
        </Col>
        <Col span={24} className="mb-10">
          <textarea id="editor"></textarea>
        </Col>
      </Row>
    </PageEditStyle>
  );
};

export default PageEdit;
