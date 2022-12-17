import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
// ANTD
import { Segmented, Row, Col, Card, Image, Space, Modal } from 'antd';
import { LearningPageLayout, LearningModal } from 'app/components/Layout/LearningPageLayout.style';
// IMAGE
import logo from 'styles/assets/learning/logo_congrant.svg';
import bnr from 'styles/assets/learning/bnr.png';
import person01 from 'styles/assets/learning/people/person01.png';
import person02 from 'styles/assets/learning/people/person02.png';
import person03 from 'styles/assets/learning/people/person03.png';
import person04 from 'styles/assets/learning/people/person04.png';
import thumb01 from 'styles/assets/learning/thumb01.jpg';
import thumb02 from 'styles/assets/learning/thumb02.jpg';
import thumb03 from 'styles/assets/learning/thumb03.jpg';
import thumb04 from 'styles/assets/learning/thumb04.jpg';
import thumb05 from 'styles/assets/learning/thumb05.jpg';
import thumb06 from 'styles/assets/learning/thumb06.jpg';

const LearningPage = () => {
  const [showType, setShowType] = useState(1);

  const handleSegmentedChange = e => {
    setShowType(e);
  };

  const [isModal1Open, setIsModal1Open] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [isModal3Open, setIsModal3Open] = useState(false);
  const [isModal4Open, setIsModal4Open] = useState(false);
  const [isModal5Open, setIsModal5Open] = useState(false);
  const [isModal6Open, setIsModal6Open] = useState(false);

  const showModal1 = () => {
    setIsModal1Open(true);
  };
  const handleOk1 = () => {
    setIsModal1Open(false);
  };
  const handleCancel1 = () => {
    setIsModal1Open(false);
  };

  const showModal2 = () => {
    setIsModal2Open(true);
  };
  const handleOk2 = () => {
    setIsModal2Open(false);
  };
  const handleCancel2 = () => {
    setIsModal2Open(false);
  };

  const showModal3 = () => {
    setIsModal3Open(true);
  };
  const handleOk3 = () => {
    setIsModal3Open(false);
  };
  const handleCancel3 = () => {
    setIsModal3Open(false);
  };

  const showModal4 = () => {
    setIsModal4Open(true);
  };
  const handleOk4 = () => {
    setIsModal4Open(false);
  };
  const handleCancel4 = () => {
    setIsModal4Open(false);
  };

  const showModal5 = () => {
    setIsModal5Open(true);
  };
  const handleOk5 = () => {
    setIsModal5Open(false);
  };
  const handleCancel5 = () => {
    setIsModal5Open(false);
  };

  const showModal6 = () => {
    setIsModal6Open(true);
  };
  const handleOk6 = () => {
    setIsModal6Open(false);
  };
  const handleCancel6 = () => {
    setIsModal6Open(false);
  };

  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'動画で学ぶファンドレイジング'}</title>
          <meta name="description" content={'...'} />
        </Helmet>
      </>
    );
  };

  return (
    <LearningPageLayout>
      {renderPageTitle()}
      <div className="page-head">
        <div className="bnr">
          <img src={bnr} alt="" />
        </div>
        <div className="head-wrapper">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <h1>動画で学ぶファンドレイジング</h1>
          <div className="head-description">
            ファンドレイジングのスペシャリストたちが提供するセミナー動画を随時更新しています。
            <br />
            コングラント有料プランユーザーなら、全ての動画を無制限でご視聴可能です。
          </div>
        </div>
      </div>
      <div className="segmented">
        <Segmented
          options={[
            {
              label: 'すべて',
              value: 1,
            },
            {
              label: 'CRM',
              value: 2,
            },
            {
              label: 'Canva',
              value: 3,
            },
            {
              label: '寄付チラシ',
              value: 4,
            },
            {
              label: '遺贈寄付',
              value: 5,
            },
            {
              label: '助成金',
              value: 6,
            },
            {
              label: '認証制度',
              value: 7,
            },
          ]}
          onChange={handleSegmentedChange}
        />
      </div>
      <div className="learning-content-wrapper">
        <Row gutter={40}>
          {/* グッドガバナンス認証説明会（ダイジェスト版）～４つのポイントと27の評価基準～ */}
          {/* 認証制度 */}
          {(showType === 7 || showType === 1) && (
            <Col span={8} className="mb-12">
              {/* カード・Card */}
              <Card className="learning-card" bodyStyle={{ padding: 0 }} onClick={showModal1}>
                <div className="mb-3">
                  <Image preview={false} src={thumb02} />
                </div>
                <div className="mb-3">
                  <Space size={14}>
                    <span className="learning-tag">認証制度</span>
                    <span className="learning-date">2022.07.29</span>
                  </Space>
                </div>
                <div className="learning-title mb-3">
                  グッドガバナンス認証説明会（ダイジェスト版）～４つのポイントと27の評価基準～
                </div>
                <div>
                  <Space size={12}>
                    <Image width={48} preview={false} src={person04} />
                    <Space align="center">
                      <div className="learning-txt">
                        （一財）非営利組織評価センター 業務執行理事
                        <br />
                        山田 泰久
                      </div>
                    </Space>
                  </Space>
                </div>
              </Card>
              {/* モーダル・modal */}
              <LearningModal
                visible={isModal1Open}
                onOk={handleOk1}
                onCancel={handleCancel1}
                footer={null}
                bodyStyle={{ padding: 0 }}
                width={960}
                closeIcon={
                  <span className="material-symbols-outlined icon" style={{ fontSize: 40 }}>
                    close
                  </span>
                }
              >
                <div>
                  <iframe
                    title="グッドガバナンス認証説明会（ダイジェスト版）～４つのポイントと27の評価基準～"
                    width="100%"
                    height="540"
                    src="https://v.jp.kollus.com/o4CyhnbH?"
                    frameborder="0"
                    allowfullscreen
                    webkitallowfullscreen
                    mozallowfullscreen
                  ></iframe>
                </div>
                <div className="content-wrapper">
                  <div className="mb-3">
                    <Space size={14}>
                      <span className="learning-tag">認証制度</span>
                      <span className="learning-date">2022.07.29</span>
                    </Space>
                  </div>
                  <div className="learning-title mb-3">
                    グッドガバナンス認証説明会（ダイジェスト版）～４つのポイントと27の評価基準～
                  </div>
                  <div className="mb-5">
                    <Space size={12}>
                      <Image width={48} preview={false} src={person04} />
                      <Space align="center">
                        <div className="learning-txt">
                          （一財）非営利組織評価センター 業務執行理事
                          <br />
                          山田 泰久
                        </div>
                      </Space>
                    </Space>
                  </div>
                  <div className="learning-description">
                    2018年度より運用を開始したグッドガバナンス認証制度。これまでに50を超えるグッドガバナンス認証団体が誕生しました。そして、認証団体が活用できるメリット・サービスも30近くあります。毎月、グッドガバナンス認証制度を紹介する1時間の説明会を開催しています。この動画は、説明会の内容のダイジェスト版になります。NPOのみなさんに、認証制度をご利用いただきたい４つのお薦めポイントと、組織基盤強化の参考となる27の評価基準の体系をご紹介します。
                  </div>
                </div>
              </LearningModal>
            </Col>
          )}

          {/* デザイナー歴20年の私がNPOにCanvaを激推しする3つの理由 */}
          {/* Canva */}
          {(showType === 3 || showType === 1) && (
            <Col span={8} className="mb-12">
              {/* カード・Card */}
              <Card className="learning-card" bodyStyle={{ padding: 0 }} onClick={showModal2}>
                <div className="mb-3">
                  <Image preview={false} src={thumb01} />
                </div>
                <div className="mb-3">
                  <Space size={14}>
                    <span className="learning-tag">Canva</span>
                    <span className="learning-date">2022.07.29</span>
                  </Space>
                </div>
                <div className="learning-title mb-3">
                  デザイナー歴20年の私がNPOにCanvaを激推しする3つの理由
                </div>
                <div>
                  <Space size={12}>
                    <Image width={48} preview={false} src={person01} />
                    <Space align="center">
                      <div className="learning-txt">
                        株式会社ガハハ
                        <br />
                        林田 全弘
                      </div>
                    </Space>
                  </Space>
                </div>
              </Card>
              {/* モーダル・modal */}
              <LearningModal
                visible={isModal2Open}
                onOk={handleOk2}
                onCancel={handleCancel2}
                footer={null}
                bodyStyle={{ padding: 0 }}
                width={960}
                closeIcon={
                  <span className="material-symbols-outlined icon" style={{ fontSize: 40 }}>
                    close
                  </span>
                }
              >
                <div>
                  <iframe
                    title="グッドガバナンス認証説明会（ダイジェスト版）～４つのポイントと27の評価基準～"
                    width="100%"
                    height="540"
                    src="https://v.jp.kollus.com/lyJhgYgZ?"
                    frameborder="0"
                    allowfullscreen
                    webkitallowfullscreen
                    mozallowfullscreen
                  ></iframe>
                </div>
                <div className="content-wrapper">
                  <div className="mb-3">
                    <Space size={14}>
                      <span className="learning-tag">canva</span>
                      <span className="learning-date">2022.07.29</span>
                    </Space>
                  </div>
                  <div className="learning-title mb-3">
                    デザイナー歴20年の私がNPOにCanvaを激推しする3つの理由
                  </div>
                  <div className="mb-5">
                    <Space size={12}>
                      <Image width={48} preview={false} src={person01} />
                      <Space align="center">
                        <div className="learning-txt">
                          株式会社ガハハ
                          <br />
                          林田 全弘
                        </div>
                      </Space>
                    </Space>
                  </div>
                  <div className="learning-description">
                    いろんな人が関わるNPOだからこそ、みんなでデザインできるアプリ「Canva（キャンバ）」がおすすめです。激推し理由を3つに絞ってご紹介します。
                    <br />
                    <br />
                    動画をご覧いただきありがとうございます。
                    <br />
                    <br />
                    ▼最新情報はこちらからどうぞ
                    <br />
                    <a href="https://twitter.com/design4npo" target="_blank" rel="noreferrer">
                      https://twitter.com/design4npo
                    </a>
                    <br />
                    <a href="https://www.facebook.com/design4npo" target="_blank" rel="noreferrer">
                      https://www.facebook.com/design4npo
                    </a>
                    <br />
                    <br />
                    ▼過去の講座スライド無料公開中
                    <br />
                    <a href="https://design4npo.com" target="_blank" rel="noreferrer">
                      https://design4npo.com
                    </a>
                    <br />
                    <br />
                    ▼話すネタのリクエスト、ご感想、講座のご依頼はこちらから
                    <br />
                    <a href="https://design4npo.com/お問い合わせ/" target="_blank" rel="noreferrer">
                      https://design4npo.com/お問い合わせ/
                    </a>
                    <br />
                    <br />
                    ▼林田全弘のプロフィールはこちら
                    <br />
                    1979年、横浜市出身。大阪市在住。
                    <br />
                    大学時代のNPO活動を通じて広報物制作に触れるうち、「NPOにおけるデザイン・広報」の重要性を強く感じてデザイン会社に就職。その後独立し、これまでNPOのロゴやリーフレット、チラシなど、100団体250件以上の広報物を制作。現在は講師活動も精力的に行っており、初心者にもわかりやすく「現場で使える」ワークも取り入れた実践的な講座スタイルは、各地で好評価を得ている。
                  </div>
                </div>
              </LearningModal>
            </Col>
          )}

          {/* 助成金を活用するということ～助成金を捉え直す５つのポイント～【基礎編】 */}
          {/* 助成金 */}
          {(showType === 6 || showType === 1) && (
            <Col span={8} className="mb-12">
              {/* カード・Card */}
              <Card className="learning-card" bodyStyle={{ padding: 0 }} onClick={showModal3}>
                <div className="mb-3">
                  <Image preview={false} src={thumb05} />
                </div>
                <div className="mb-3">
                  <Space size={14}>
                    <span className="learning-tag">助成金</span>
                    <span className="learning-date">2022.07.26</span>
                  </Space>
                </div>
                <div className="learning-title mb-3">
                  助成金を活用するということ～助成金を捉え直す５つのポイント～【基礎編】
                </div>
                <div>
                  <Space size={12}>
                    <Image width={48} preview={false} src={person04} />
                    <Space align="center">
                      <div className="learning-txt">
                        （一財）非営利組織評価センター 業務執行理事
                        <br />
                        山田 泰久
                      </div>
                    </Space>
                  </Space>
                </div>
              </Card>
              {/* モーダル・modal */}
              <LearningModal
                visible={isModal3Open}
                onOk={handleOk3}
                onCancel={handleCancel3}
                footer={null}
                bodyStyle={{ padding: 0 }}
                width={960}
                closeIcon={
                  <span className="material-symbols-outlined icon" style={{ fontSize: 40 }}>
                    close
                  </span>
                }
              >
                <div>
                  <iframe
                    title="グッドガバナンス認証説明会（ダイジェスト版）～４つのポイントと27の評価基準～"
                    width="100%"
                    height="540"
                    src="https://v.jp.kollus.com/7YBvgdG5?"
                    frameborder="0"
                    allowfullscreen
                    webkitallowfullscreen
                    mozallowfullscreen
                  ></iframe>
                </div>
                <div className="content-wrapper">
                  <div className="mb-3">
                    <Space size={14}>
                      <span className="learning-tag">助成金</span>
                      <span className="learning-date">2022.07.26</span>
                    </Space>
                  </div>
                  <div className="learning-title mb-3">
                    助成金を活用するということ～助成金を捉え直す５つのポイント～【基礎編】
                  </div>
                  <div className="mb-5">
                    <Space size={12}>
                      <Image width={48} preview={false} src={person04} />
                      <Space align="center">
                        <div className="learning-txt">
                          （一財）非営利組織評価センター 業務執行理事
                          <br />
                          山田 泰久
                        </div>
                      </Space>
                    </Space>
                  </div>
                  <div className="learning-description">
                    NPOを対象にした助成金は約400件程度あると言われています（全国規模350件、各都道府県の地域限定50件）。助成金は、NPOにとっては大事な資金源の一つです。この講座では、助成金の活用という視点から、あらためて助成金の仕組みを理解するためのものとなっています。5つのシートで助成金に対する考え方の基礎を知ることができます。
                    <br />
                    あわせて、私が所属している（一財）非営利組織評価センターが運営している組織評価と助成金の連携についてご紹介します。
                  </div>
                </div>
              </LearningModal>
            </Col>
          )}

          {/* 何から始めればいい？？遺贈寄付のはじめ方 */}
          {/* 遺贈寄付 */}
          {(showType === 5 || showType === 1) && (
            <Col span={8} className="mb-12">
              {/* カード・Card */}
              <Card className="learning-card" bodyStyle={{ padding: 0 }} onClick={showModal4}>
                <div className="mb-3">
                  <Image preview={false} src={thumb06} />
                </div>
                <div className="mb-3">
                  <Space size={14}>
                    <span className="learning-tag">認証制度</span>
                    <span className="learning-date">2022.07.26</span>
                  </Space>
                </div>
                <div className="learning-title mb-3">何から始めればいい？？遺贈寄付のはじめ方</div>
                <div>
                  <Space size={12}>
                    <Image width={48} preview={false} src={person02} />
                    <Space align="center">
                      <div className="learning-txt">
                        遺贈寄附推進機構株式会社
                        <br />
                        齋藤 弘道
                      </div>
                    </Space>
                  </Space>
                </div>
              </Card>
              {/* モーダル・modal */}
              <LearningModal
                visible={isModal4Open}
                onOk={handleOk4}
                onCancel={handleCancel4}
                footer={null}
                bodyStyle={{ padding: 0 }}
                width={960}
                closeIcon={
                  <span className="material-symbols-outlined icon" style={{ fontSize: 40 }}>
                    close
                  </span>
                }
              >
                <div>
                  <iframe
                    title="グッドガバナンス認証説明会（ダイジェスト版）～４つのポイントと27の評価基準～"
                    width="100%"
                    height="540"
                    src="https://v.jp.kollus.com/31fYgYh4?"
                    frameborder="0"
                    allowfullscreen
                    webkitallowfullscreen
                    mozallowfullscreen
                  ></iframe>
                </div>
                <div className="content-wrapper">
                  <div className="mb-3">
                    <Space size={14}>
                      <span className="learning-tag">遺贈寄付</span>
                      <span className="learning-date">2022.07.26</span>
                    </Space>
                  </div>
                  <div className="learning-title mb-3">
                    何から始めればいい？？遺贈寄付のはじめ方
                  </div>
                  <div className="mb-5">
                    <Space size={12}>
                      <Image width={48} preview={false} src={person02} />
                      <Space align="center">
                        <div className="learning-txt">
                          遺贈寄附推進機構株式会社
                          <br />
                          齋藤 弘道
                        </div>
                      </Space>
                    </Space>
                  </div>
                  <div className="learning-description">
                    遺贈寄付には大きな可能性を感じるけれど、団体として何から始めたら良いのかわからない、という方に、遺贈寄付に取り組み始める手順についてお話します。
                  </div>
                </div>
              </LearningModal>
            </Col>
          )}

          {/* NPOキャリア10年以上の知見に基づくファンドレイジングにおけるバックオフィスの重要性 */}
          {/* CRM */}
          {(showType === 2 || showType === 1) && (
            <Col span={8} className="mb-12">
              {/* カード・Card */}
              <Card className="learning-card" bodyStyle={{ padding: 0 }} onClick={showModal5}>
                <div className="mb-3">
                  <Image preview={false} src={thumb04} />
                </div>
                <div className="mb-3">
                  <Space size={14}>
                    <span className="learning-tag">CRM</span>
                    <span className="learning-date">2022.07.26</span>
                  </Space>
                </div>
                <div className="learning-title mb-3">
                  NPOキャリア10年以上の知見に基づくファンドレイジングにおけるバックオフィスの重要性
                </div>
                <div>
                  <Space size={12}>
                    <Image width={48} preview={false} src={person03} />
                    <Space align="center">
                      <div className="learning-txt">
                        NPOコンサルタント
                        <br />
                        北村 政記
                      </div>
                    </Space>
                  </Space>
                </div>
              </Card>
              {/* モーダル・modal */}
              <LearningModal
                visible={isModal5Open}
                onOk={handleOk5}
                onCancel={handleCancel5}
                footer={null}
                bodyStyle={{ padding: 0 }}
                width={960}
                closeIcon={
                  <span className="material-symbols-outlined icon" style={{ fontSize: 40 }}>
                    close
                  </span>
                }
              >
                <div>
                  <iframe
                    title="NPOキャリア10年以上の知見に基づくファンドレイジングにおけるバックオフィスの重要性"
                    width="100%"
                    height="540"
                    src="https://v.jp.kollus.com/cPRAgdBZ?"
                    frameborder="0"
                    allowfullscreen
                    webkitallowfullscreen
                    mozallowfullscreen
                  ></iframe>
                </div>
                <div className="content-wrapper">
                  <div className="mb-3">
                    <Space size={14}>
                      <span className="learning-tag">CRM</span>
                      <span className="learning-date">2022.07.26</span>
                    </Space>
                  </div>
                  <div className="learning-title mb-3">
                    NPOキャリア10年以上の知見に基づく
                    <br />
                    ファンドレイジングにおけるバックオフィスの重要性
                  </div>
                  <div className="mb-5">
                    <Space size={12}>
                      <Image width={48} preview={false} src={person03} />
                      <Space align="center">
                        <div className="learning-txt">
                          NPOコンサルタント
                          <br />
                          北村 政記
                        </div>
                      </Space>
                    </Space>
                  </div>
                  <div className="learning-description">
                    ファンドレイジングというと、いくら集めるのか？が焦点になりやすいですが、どんなバックオフィス体制を構築するのか？が中長期の法人運営では重要になります。
                    <br />
                    <br />
                    NPOキャリア10年以上で得た知見に基づき、バックオフィスの重要性に言及しつつ、どんなNPOでも適切なバックオフィス体制を構築できるコングラントの可能性についてご紹介します。
                    <br />
                    <br />
                    ----------
                    <br />
                    ベネフィット・ワン、認定NPO法人ノーベルファンドレイザー等を経て19年4月に独立。
                    <br />
                    WEBマーケティング、DX等を軸に複数NPOへのコンサルティングを実行し、2億円以上のご寄付が集まる仕組みづくりに寄与している。
                    <br />
                    プライベートでは3児の父で、趣味を生かして琵琶湖で釣りガイドの会社も経営している。
                    <br />
                    <br />
                    <a href="https://npo-consultant.jp/" target="_blank" rel="noreferrer">
                      https://npo-consultant.jp/
                    </a>
                  </div>
                </div>
              </LearningModal>
            </Col>
          )}

          {/* 寄付チラシを50件制作してわかった、寄付を集め続けるNPOに共通する㊙︎準備術 */}
          {/* 寄付チラシ */}
          {(showType === 4 || showType === 1) && (
            <Col span={8} className="mb-12">
              {/* カード・Card */}
              <Card className="learning-card" bodyStyle={{ padding: 0 }} onClick={showModal6}>
                <div className="mb-3">
                  <Image preview={false} src={thumb03} />
                </div>
                <div className="mb-3">
                  <Space size={14}>
                    <span className="learning-tag">寄付チラシ</span>
                    <span className="learning-date">2022.07.26</span>
                  </Space>
                </div>
                <div className="learning-title mb-3">
                  寄付チラシを50件制作してわかった、寄付を集め続けるNPOに共通する㊙︎準備術
                </div>
                <div>
                  <Space size={12}>
                    <Image width={48} preview={false} src={person01} />
                    <Space align="center">
                      <div className="learning-txt">
                        株式会社ガハハ
                        <br />
                        林田全弘
                      </div>
                    </Space>
                  </Space>
                </div>
              </Card>
              {/* モーダル・modal */}
              <LearningModal
                visible={isModal6Open}
                onOk={handleOk6}
                onCancel={handleCancel6}
                footer={null}
                bodyStyle={{ padding: 0 }}
                width={960}
                closeIcon={
                  <span className="material-symbols-outlined icon" style={{ fontSize: 40 }}>
                    close
                  </span>
                }
              >
                <div>
                  <iframe
                    title="グッドガバナンス認証説明会（ダイジェスト版）～４つのポイントと27の評価基準～"
                    width="100%"
                    height="540"
                    src="https://v.jp.kollus.com/VliSgYgS?"
                    frameborder="0"
                    allowfullscreen
                    webkitallowfullscreen
                    mozallowfullscreen
                  ></iframe>
                </div>
                <div className="content-wrapper">
                  <div className="mb-3">
                    <Space size={14}>
                      <span className="learning-tag">寄付チラシ</span>
                      <span className="learning-date">2022.07.26</span>
                    </Space>
                  </div>
                  <div className="learning-title mb-3">
                    寄付チラシを50件制作してわかった、寄付を集め続けるNPOに共通する㊙︎準備術
                  </div>
                  <div className="mb-5">
                    <Space size={12}>
                      <Image width={48} preview={false} src={person01} />
                      <Space align="center">
                        <div className="learning-txt">
                          株式会社ガハハ
                          <br />
                          林田 全弘
                        </div>
                      </Space>
                    </Space>
                  </div>
                  <div className="learning-description">
                    寄付チラシで結果を残すNPOでは、共通してあることを実践していました。チラシを作る前に外すことができない準備とは？
                    <br />
                    <br />
                    動画をご覧いただきありがとうございます。
                    <br />
                    <br />
                    ▼寄付チラシについてもっと知りたい方はこちら
                    <br />
                    「すぐに寄付チラシをつくらなくてはいけなくなった」
                    <br />
                    「郵便振込書付チラシってどうやってつくるの？」
                    <br />
                    という方のために、寄付チラシの基礎知識をまとめました。
                    <br />
                    <a href="https://kifufu.net/kb/" target="_blank" rel="noreferrer">
                      https://kifufu.net/kb/
                    </a>
                    <br />
                    <br />
                    ▼最新情報はこちらからどうぞ
                    <br />
                    <a href="https://twitter.com/kifufu_gahaha" target="_blank" rel="noreferrer">
                      https://twitter.com/kifufu_gahaha
                    </a>
                    <br />
                    <a href="https://www.facebook.com/kifufufu" target="blank">
                      https://www.facebook.com/kifufufu
                    </a>
                    <br />
                    <br />
                    ▼過去の講座スライド無料公開中
                    <br />
                    <a href="https://kifufu.net/document/">https://kifufu.net/document/</a>
                    <br />
                    <br />
                    ▼林田全弘のプロフィールはこちら
                    <br />
                    1979年、横浜市出身。大阪市在住。2006年からNPOの広報物デザインを開始し、これまでNPOや中間支援組織、地域団体のロゴやリーフレット、チラシなど、100団体250件以上の広報物を手がける。2018年より株式会社ガハハに所属。
                  </div>
                </div>
              </LearningModal>
            </Col>
          )}
        </Row>
      </div>
    </LearningPageLayout>
  );
};

export default LearningPage;
