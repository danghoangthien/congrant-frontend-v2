import { Link, useParams } from 'react-router-dom';
import { Button, Image } from 'antd';
import Share from 'app/components/Share';
// STYLE
import styled from 'styled-components/macro';

const ActivityDetailStyle = styled.div`
  > .date {
    font-size: 14px;
    color: #8c8c8c;
  }

  > .title {
    font-size: 26px;
    font-weight: 700;
    line-height: 1.46;
  }

  > .text {
    font-size: 16px;
    line-height: 1.6875;
  }
`;

const ActivityDetail = ({ mainColor }) => {
  const params = useParams();
  return (
    <ActivityDetailStyle>
      <div className="date mb-2">2022/12/09</div>
      <div className="title mb-2">
        （募金活動・中止）12/11 仙台エリアにて募金活動は中止とさせて頂きます。
      </div>
      <div className="text mb-8">
        あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。またそのなかでいっしょになったたくさんのひとたち、ファゼーロとロザーロ、羊飼のミーロや、顔の赤いこどもたち、地主のテーモ、山猫博士のボーガント・デストゥパーゴなど、いまこの暗い巨きな石の建物のなかで考えていると、みんなむかし風のなつかしい青い幻燈のように思われます。では、わたくしはいつかの小さなみだしをつけながら、しずかにあの年のイーハトーヴォの五月から十月までを書きつけましょう。
      </div>
      <div className="mb-10">
        <Image
          preview={false}
          className="thumb-image"
          src="https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80"
          alt=""
        />
      </div>
      <div className="editor-content mb-6">エディターのコンテンツが入ります。</div>
      <div className="mb-10">
        <Share
          twitter={`https://github.com/nygardk/react-share`}
          facebook={`https://github.com/nygardk/react-share`}
          line={`https://github.com/nygardk/react-share`}
        />
      </div>
      <div>
        <Link to={`/project/client_name/${params.id}/2`}>
          <Button
            size="large"
            className="icon-btn"
            icon={<span className="material-symbols-outlined">chevron_left</span>}
            style={{ color: '#666666', boxShadow: 'none' }}
          >
            活動報告一覧に戻る
          </Button>
        </Link>
      </div>
    </ActivityDetailStyle>
  );
};

export default ActivityDetail;
