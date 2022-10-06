import { useRouteMatch } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import BalloonBlockEditor from '@ckeditor/ckeditor5-build-balloon-block';
// import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
// import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
// import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
// import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import { CkeditorPageStyle } from './CkeditorPage.style';

const CkeditorPage = () => {
  const { path } = useRouteMatch();

  console.log('path', path);
  return (
    <>
      <CkeditorPageStyle>
        <div className="editor-wrapper">
          <CKEditor
            editor={BalloonBlockEditor}
            config={{
              blockToolbar: [
                'heading',
                '|',
                'bulletedList',
                'numberedList',
                '|',
                'outdent',
                'indent',
                '|',
                'uploadImage',
                'blockQuote',
                'insertTable',
                'mediaEmbed',
                'htmlEmbed',
                '|',
                'undo',
                'redo',
                '|',
                'link',
                '|',
              ],
              // plugins: [Paragraph, Bold, Italic, Essentials],
              // toolbar: ['bold', 'italic'],
              // language: 'ja',
            }}
            data={`<h2>２０１７年</h2>
<table border="2">
	<tbody>
		<tr>
			<td>12月</td>
			<td>・「メガネで見る字幕ガイド」常時貸出映画館の調整</td>
		</tr>
		<tr>
			<td>11月</td>
			<td>
			<p>・第２３回東京都中途失聴・難聴者の集い　機器展示<br />
			・おこ助講座開催</p>
			</td>
		</tr>
		<tr>
			<td>10月<br />
			9月</td>
			<td>
			<p>・劇場公開映画「三度目の殺人」より「メガネで観る字幕ガイド」開始</p>

			<p>　スマートグラスMOVERIOによる字幕表示対応。全国4劇場にて機器の貸出を実施<br />
			　当事者アンケート、劇場スタッフアンケートを実施し、本格稼働に向け、課題の整理を行った</p>

			<p>・おこ助講座開催</p>
			</td>
		</tr>
		<tr>
			<td>8月</td>
			<td>・全国盲青年協議会の全国大会 in 鹿児島 UDCast講習会</td>
		</tr>
		<tr>
			<td>7月</td>
			<td>・ろう難聴教育研究大会にて『おこ助』を使った動画字幕作成について」講演<br />
			・香川県 点字図書館 研修会：「映画館に行こう！」UDCast講習会</td>
		</tr>
		<tr>
			<td>5月</td>
			<td>
			<p>・日本財団「パラリンピックとアーツ」スタディグループにて「映画の鑑賞支援～セクターを超えた体制づくりと技術開発」講演</p>
			</td>
		</tr>
		<tr>
			<td>3月</td>
			<td>
			<p>・横浜能楽堂「バリアフリー能」MOVERIO字幕表示協力</p>
			</td>
		</tr>
		<tr>
			<td>2月</td>
			<td>
			<p>・東放学園映画専門学校にて「映像のバリアフリーとは？」講義<br />
			・2016年度　日本語字幕・音声ガイド作品一覧作成・公開</p>
			</td>
		</tr>
	</tbody>
</table>

<p><strong>２０１６年</strong>：全国興行生活衛生同業組合連合会主催　全国各地の映画館関係者にメガネ型端末、スマホ等を使用した鑑賞体験・劇場対応マニュアルについての説明を行う。映画館でのUDCast対応を本格的にスタートするための準備を整えた。<br />
<strong>２０１５年</strong>：経済産業省　平成２７年度コンテンツ産業強化対策支援事業。<br />
（映画上映に関するバリアフリー対応に向けた障害者の視聴環境の在り方に関する調査事業）協力。<br />
「メガネで観る字幕ガイド」・「スマホで聴く音声ガイド」実証実験。<br />
<strong>２０１４年</strong>：バリアフリー視聴システム「UDcast」（パラブラに移管）のサービスを開始するとともに、江戸東京博物館映像ホールにて展示映像を使っての実証実験を実施。<br />
<strong>２０１３年</strong>：東京国際映画祭 のバリアフリー上映企画「武士の献立」＆シンポジウムにて、新開発の「音声電子透かし技術」を使ったバリアフリー上映システムの提案を行う。<br />
<strong>２０１２年</strong>：テレビ放送における情報保障の状況把握および研究のため、BS放送の聴覚障害者用字幕、視覚障害者用音声ガイドの制作を開始。<br />
<strong>２０１１年</strong>：東京国際映画祭 バリアフリー企画 「幸福の黄色いハンカチ」バリアフリー上映＆シンポジウムに全面協力。開発中のオリンパス製ＨＭＤを使用した、日本語・英語切替可能な劇場配信字幕表示システムを披露。<br />
<strong>２０１０年</strong>：国内初 最新の邦画への連続定期バリアフリー上映鑑賞サポートを毎週日曜日実施。<br />
<strong>２００９年</strong>：MASC設立　劇場バリアフリー字幕配信システム実証実験（NIKON製HMDを使用）</p>
`}
            onReady={editor => {
              // You can store the "editor" and use when it is needed.
              console.log('Editor1 is ready to use!', editor);
            }}
          />
        </div>
      </CkeditorPageStyle>
    </>
  );
};

export default CkeditorPage;
