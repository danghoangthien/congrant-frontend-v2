import { Descriptions, Row, Col, Button, Tag } from 'antd';
import { StyledPrimaryIcon } from 'styles/global-styles';
import {
  CopyOutlined,
  MailOutlined,
  MinusOutlined,
  CloseOutlined,
  EditOutlined,
} from '@ant-design/icons';
import { BoldLabel, CopiableText } from './Sprites';
import { LIST_MODE, EDIT_MODE } from '../consts';
import { DescriptionStyle } from './BasicInfo.style';

const Title = ({ mode, setMode }) => {
  return (
    <>
      <Row className="my-5">
        <Col sm={24} md={24} lg={24}>
          <CloseOutlined
            className="display-inline-flex"
            onClick={() => {
              setMode(LIST_MODE);
            }}
          />
        </Col>
      </Row>
      <Row className="my-5">
        <Col sm={24} md={12} lg={12}>
          <h3 className="bold display-inline-flex">
            <StyledPrimaryIcon>
              <MinusOutlined className="display-inline-flex bold mr-2" />
            </StyledPrimaryIcon>
            {'領収書詳細'}
          </h3>
        </Col>
        <Col type="flex" align="right" sm={24} md={12} lg={12}>
          <>
            <Button icon={<EditOutlined />} type="primary" onClick={() => setMode(EDIT_MODE)}>
              {'編集'}
            </Button>
            <Button icon={<MailOutlined />} className="ml-2" />
            <Button icon={<CopyOutlined />} className="ml-2" />
            <Button className="ml-2">{'...'}</Button>
          </>
        </Col>
      </Row>
      <Row className="">
        <Col sm={24} md={24} lg={24}>
          <h4 className="bold display-inline-flex">{'基本情報'}</h4>
        </Col>
      </Row>
    </>
  );
};

const DescriptionContainer = ({ children, mode, setMode }) => (
  <DescriptionStyle>
    <Descriptions
      title={<Title mode={mode} setMode={setMode} />}
      bordered
      column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
    >
      {children}
    </Descriptions>
  </DescriptionStyle>
);

const ReceiptDetail = ({ data, mode, setMode }) => {
  console.log('ReceiptDetail render', true);
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

      <Descriptions.Item label={<BoldLabel label="性別" />}>{'男性'}</Descriptions.Item>

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
export default ReceiptDetail;
