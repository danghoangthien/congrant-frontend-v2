import { useEffect, useMemo, useState } from 'react';
import moment from 'moment';
import {
  Descriptions,
  Row,
  Col,
  Button,
  Tag,
  Input,
  Checkbox,
  Radio,
  DatePicker,
  Select,
} from 'antd';
import { DescriptionStyle } from './BasicInfo.style';
import { EditOutlined, SaveOutlined } from '@ant-design/icons';
import { BoldLabel, CopiableText } from './Sprites';
import { LIST_MODE, DETAIL_MODE, EDIT_MODE } from '../consts';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const dateFormat = 'YYYY-MM-DD';
const BasicInfoTitle = ({ mode, setMode }) => {
  console.log('BasicInfoTitle mode', mode);
  const actionByMode = mode => {
    if (mode === DETAIL_MODE) {
      return (
        <>
          <Row align="middle">
            <Button icon={<EditOutlined />} type="primary" onClick={() => setMode(EDIT_MODE)}>
              {'編集'}
            </Button>
            <Button className="ml-2 icon-only-btn">
              <MoreHorizIcon />
            </Button>
          </Row>
        </>
      );
    } else {
      return (
        <>
          <Button onClick={() => setMode(DETAIL_MODE)}>{'キャンセル'}</Button>
          <Button className="ml-2" icon={<SaveOutlined />} type="primary">
            {'保存'}
          </Button>
        </>
      );
    }
  };
  return (
    <Row justify="space-between" align="middle" className="mt-4 mb-3">
      <Col>
        <h3 className="supporter-detail-ttl">{'基本情報'}</h3>
      </Col>
      <Col>{actionByMode(mode)}</Col>
    </Row>
  );
};

const DescriptionContainer = ({ children, mode, setMode }) => (
  <DescriptionStyle>
    <Descriptions
      title={<BasicInfoTitle mode={mode} setMode={setMode} />}
      bordered
      column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
    >
      {children}
    </Descriptions>
  </DescriptionStyle>
);

const ViewModeContent = ({ data, mode, setMode }) => {
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

const EditModeContent = ({ data, mode, setMode }) => (
  <DescriptionContainer mode={mode} setMode={setMode}>
    <Descriptions.Item label={<BoldLabel label="個人ID" />}>
      <CopiableText>{'123456'}</CopiableText>
    </Descriptions.Item>
    <Descriptions.Item label={<BoldLabel label="氏名" />}>
      <Row>
        <Col sm={24} md={12} lg={12}>
          <Input value={'田中'} />
        </Col>
        <Col className="pl-2" sm={24} md={12} lg={12}>
          <Input value={'太郎'} />
        </Col>
      </Row>
    </Descriptions.Item>
    <Descriptions.Item label={<BoldLabel label="ふりがな" />}>
      <Input value={'たなか たろう'} />
    </Descriptions.Item>
    <Descriptions.Item label={<BoldLabel label="広報物への氏名掲載" />}>
      <Checkbox checked>{'許可'}</Checkbox>
    </Descriptions.Item>

    <Descriptions.Item label={<BoldLabel label="性別" />}>
      <Radio.Group onChange={() => {}} value={1}>
        <Radio value={1}>{'男性'}</Radio>
        <Radio value={2}>{'女性'}</Radio>
        <Radio value={3}>{'その他'}</Radio>
      </Radio.Group>
    </Descriptions.Item>

    <Descriptions.Item label={<BoldLabel label="生年月日" />}>
      <DatePicker defaultValue={moment('1991-08-01', dateFormat)} format={dateFormat} />
    </Descriptions.Item>
    <Descriptions.Item label={<BoldLabel label="メールアドレス" />}>
      <Input value={'tanaka.taro@gmail.com'} />
    </Descriptions.Item>
    <Descriptions.Item label={<BoldLabel label="電話番号" />}>
      <Input value={'08012345678'} />
    </Descriptions.Item>
    <Descriptions.Item label={<BoldLabel label="住所" />}>
      <Row>
        <Col className="mb-2" sm={24} md={24} lg={24}>
          <Select placeholder={'選択してください'} onChange={() => {}} defaultValue={1}>
            <Select.Option value={1}>{'日本'}</Select.Option>
          </Select>
        </Col>
        <Col className="mb-2" sm={12} md={12} lg={12}>
          <Input prefix="〒" value={'5500002'} />
        </Col>
        <Col className="pl-2 mb-2" sm={12} md={12} lg={12}>
          <Select placeholder={'選択してください'} onChange={() => {}} defaultValue={1}>
            <Select.Option value={1}>{'大阪府'}</Select.Option>
          </Select>
        </Col>
        <Col className="mb-2" sm={24} md={24} lg={24}>
          <Input value={'大阪市西区江戸堀'} />
        </Col>
        <Col className="mb-2" sm={24} md={24} lg={24}>
          <Input value={'1-2-3＊＊＊＊＊マンション301号室'} />
        </Col>
      </Row>
    </Descriptions.Item>
    <Descriptions.Item label={<BoldLabel label="郵送物送付" />}>
      <Row>
        <Col sm={24} md={12} lg={12}>
          <Checkbox checked>{'許可'}</Checkbox>
        </Col>
        <Col className="pl-2" sm={24} md={12} lg={12}>
          <Input suffix="部" value={'1'} />
        </Col>
      </Row>
    </Descriptions.Item>
    <Descriptions.Item label={<BoldLabel label="属性" />}>
      <Select
        mode="multiple"
        allowClear
        placeholder="Please select"
        defaultValue={[1, 2]}
        onChange={() => {}}
      >
        <Select.Option value={1}>理事</Select.Option>
        <Select.Option value={2}>ボランティア</Select.Option>
      </Select>
    </Descriptions.Item>
    <Descriptions.Item label={<BoldLabel label="備考" />}>
      <Input.TextArea
        style={{
          height: 250,
        }}
        value={
          'あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。またそのなかでいっしょになったたくさんのひとたち、ファゼーロとロザーロ、羊飼のミーロや、顔の赤いこどもたち、地主のテーモ、山猫博士のボーガント・デストゥパーゴなど、いまこの暗い巨きな石の建物のなかで考えていると、みんなむかし風のなつかしい青い幻燈のように思われます。では、わたくしはいつかの小さなみだしをつけながら、しずかにあの年のイーハトーヴォの五月から十月までを書きつけましょう。'
        }
      />
    </Descriptions.Item>
  </DescriptionContainer>
);

const BasicInfo = ({ data }) => {
  console.log('BasicInfo');
  const [mode, setMode] = useState(DETAIL_MODE);
  console.log('BasicInfo mode', mode);
  return (
    <>
      {mode === DETAIL_MODE ? (
        <ViewModeContent data={data} mode={mode} setMode={setMode} />
      ) : (
        <EditModeContent data={data} mode={mode} setMode={setMode} />
      )}
    </>
  );
};

export default BasicInfo;
