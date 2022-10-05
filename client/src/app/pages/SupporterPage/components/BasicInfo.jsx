import { useEffect, useMemo, useState } from 'react';
import { Badge, Descriptions, Row, Col, Button, Tag } from 'antd';
import { DescriptionStyle } from './BasicInfo.style';
import { CopyOutlined, EditOutlined, SaveOutlined } from '@ant-design/icons';

const VIEW_MODE = 0;
const EDIT_MODE = 1;

const BasicInfoTitle = ({ mode, setMode }) => {
  console.log('BasicInfoTitle mode', mode);
  const actionByMode = mode => {
    if (mode === VIEW_MODE) {
      return (
        <>
          <Button icon={<EditOutlined />} type="primary" onClick={() => setMode(EDIT_MODE)}>
            {'編集'}
          </Button>
          <Button className="ml-2">{'...'}</Button>
        </>
      );
    } else {
      return (
        <>
          <Button onClick={() => setMode(VIEW_MODE)}>{'キャンセル'}</Button>
          <Button className="ml-2" icon={<SaveOutlined />} type="primary">
            {'保存'}
          </Button>
        </>
      );
    }
  };
  return (
    <Row className="mt-2">
      <Col sm={24} md={12} lg={12}>
        <h3 className="bold">{'基本情報'}</h3>
      </Col>
      <Col type="flex" align="right" sm={24} md={12} lg={12}>
        {actionByMode(mode)}
      </Col>
    </Row>
  );
};

const BoldLabel = ({ label }) => {
  return <span className="bold">{label}</span>;
};

const CopiableText = ({ children }) => {
  return (
    <Row className="mt-2">
      <Col sm={24} md={12} lg={12}>
        {children}
      </Col>
      <Col type="flex" align="right" sm={24} md={12} lg={12}>
        <CopyOutlined
          className="display-inline-flex"
          style={{ color: '#c0c0c0' }}
          onClick={() => {}}
        />
      </Col>
    </Row>
  );
};

const DescriptionContainer = ({ children, mode, setMode }) => (
  <Descriptions
    title={<BasicInfoTitle mode={mode} setMode={setMode} />}
    bordered
    column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
  >
    {children}
  </Descriptions>
);

const ViewModeContent = ({ data, mode, setMode }) => {
  console.log('ViewModeContent', true);
  return (
    <DescriptionContainer mode={mode} setMode={setMode}>
      <Descriptions.Item label={<BoldLabel label="個人ID" />}>
        <CopiableText>{'123456'}</CopiableText>
      </Descriptions.Item>
      <Descriptions.Item label={<BoldLabel label="氏名" />}>
        <CopiableText>田中 太郎</CopiableText>
      </Descriptions.Item>
      <Descriptions.Item label={<BoldLabel label="ふりがな" />}>たなか たろう</Descriptions.Item>
      <Descriptions.Item label={<BoldLabel label="広報物への氏名掲載" />}>可</Descriptions.Item>

      <Descriptions.Item label={<BoldLabel label="性別" />}>男性</Descriptions.Item>

      <Descriptions.Item label={<BoldLabel label="生年月日" />}>1991-08-01</Descriptions.Item>
      <Descriptions.Item label={<BoldLabel label="メールアドレス" />}>
        <CopiableText>{'tanaka.taro@gmail.com'}</CopiableText>
      </Descriptions.Item>
      <Descriptions.Item label={<BoldLabel label="電話番号" />}>
        <CopiableText>08012345678</CopiableText>
      </Descriptions.Item>
      <Descriptions.Item label={<BoldLabel label="住所" />}>
        <CopiableText>
          <p>
            〒5500002
            <br />
            大阪府大阪市西区江戸堀
            <br />
            1-2-3＊＊＊＊＊マンション301号室
          </p>
        </CopiableText>
      </Descriptions.Item>
      <Descriptions.Item label={<BoldLabel label="郵送物送付" />}>可（1部)</Descriptions.Item>
      <Descriptions.Item label={<BoldLabel label="属性" />}>
        <Tag>理事</Tag>
        <Tag>ボランティア</Tag>
      </Descriptions.Item>
      <Descriptions.Item label={<BoldLabel label="備考" />}>
        <p>
          あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。またそのなかでいっしょになったたくさんのひとたち、ファゼーロとロザーロ、羊飼のミーロや、顔の赤いこどもたち、地主のテーモ、山猫博士のボーガント・デストゥパーゴなど、いまこの暗い巨きな石の建物のなかで考えていると、みんなむかし風のなつかしい青い幻燈のように思われます。では、わたくしはいつかの小さなみだしをつけながら、しずかにあの年のイーハトーヴォの五月から十月までを書きつけましょう。
        </p>
      </Descriptions.Item>
    </DescriptionContainer>
  );
};

const EditModeContent = ({ data, mode, setMode }) => (
  <DescriptionContainer mode={mode} setMode={setMode}>
    <Descriptions.Item label={<BoldLabel label="EDIT" />}>{'EDIT MODE'}</Descriptions.Item>
  </DescriptionContainer>
);

const BasicInfo = ({ data }) => {
  console.log('BasicInfo');
  const [mode, setMode] = useState(VIEW_MODE);
  console.log('BasicInfo mode', mode);
  return (
    <DescriptionStyle>
      {mode == VIEW_MODE ? (
        <ViewModeContent data={data} mode={mode} setMode={setMode} />
      ) : (
        <EditModeContent data={data} mode={mode} setMode={setMode} />
      )}
    </DescriptionStyle>
  );
};

export default BasicInfo;
