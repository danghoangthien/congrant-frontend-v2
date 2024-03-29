import { useState } from 'react';
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
  Space,
  Dropdown,
  Menu,
} from 'antd';
import { DescriptionStyle } from './BasicInfo.style';
import { BoldLabel, CopiableText } from 'utils/Sprites';
import { DETAIL_MODE, EDIT_MODE } from 'utils/consts';

const action_menu = (
  <Menu
    items={[
      {
        key: '1',
        label: 'アクション1',
      },
      {
        key: '2',
        label: 'アクション2',
      },
    ]}
  />
);

const dateFormat = 'YYYY-MM-DD';

const Title = ({ mode, setMode }) => {
  const actionByMode = mode => {
    if (mode === DETAIL_MODE) {
      return (
        <Space size={8}>
          <Button
            className="icon-btn"
            icon={<span className="material-symbols-outlined fill-icon">edit</span>}
            type="primary"
            onClick={() => setMode(EDIT_MODE)}
          >
            {'編集'}
          </Button>
          <Dropdown overlay={action_menu} placement="bottomRight">
            <Button
              className="more-menu-btn"
              icon={<span className="material-symbols-outlined">more_horiz</span>}
            />
          </Dropdown>
        </Space>
      );
    } else {
      return (
        <Space>
          <Button onClick={() => setMode(DETAIL_MODE)}>{'キャンセル'}</Button>
          <Button
            className="icon-btn"
            icon={<span className="material-symbols-outlined fill-icon">save</span>}
            type="primary"
          >
            {'保存する'}
          </Button>
        </Space>
      );
    }
  };
  return (
    <Row justify="space-between" align="middle">
      <Col>
        <div className="sub-page-title -sml">{'基本情報'}</div>
      </Col>
      <Col>{actionByMode(mode)}</Col>
    </Row>
  );
};

const DescriptionContainer = ({ children, mode, setMode }) => (
  <DescriptionStyle className="no-border">
    <Descriptions
      title={<Title mode={mode} setMode={setMode} />}
      bordered
      column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
    >
      {children}
    </Descriptions>
  </DescriptionStyle>
);

const ViewModeContent = ({ data, mode, setMode }) => {
  return (
    <>
      <DescriptionContainer mode={mode} setMode={setMode}>
        <Descriptions.Item label={<BoldLabel label="法人No." />}>
          <CopiableText>{'123456'}</CopiableText>
        </Descriptions.Item>
        <Descriptions.Item label={<BoldLabel label="法人名" />}>
          <CopiableText>田中 太郎</CopiableText>
        </Descriptions.Item>
        <Descriptions.Item label={<BoldLabel label="法人名（ふりがな）" />}>
          {'たなか たろう'}
        </Descriptions.Item>
        <Descriptions.Item label={<BoldLabel label="担当者部署・肩書き" />}>
          {'営業部 部長'}
        </Descriptions.Item>
        {/* 担当者名 */}
        <Descriptions.Item label={<BoldLabel label="担当者名" />}>{'遠藤 恵子'}</Descriptions.Item>
        {/* 担当者名（ふりがな） */}
        <Descriptions.Item label={<BoldLabel label="担当者名（ふりがな）" />}>
          {'えんどう けいこ'}
        </Descriptions.Item>
        {/* 広報物への法人名掲載 */}
        <Descriptions.Item label={<BoldLabel label="広報物への法人名掲載" />}>
          <CopiableText>{'許可'}</CopiableText>
        </Descriptions.Item>
        <Descriptions.Item label={<BoldLabel label="メールアドレス" />}>
          <CopiableText>{'tanaka.taro@gmail.com'}</CopiableText>
        </Descriptions.Item>
        <Descriptions.Item label={<BoldLabel label="電話番号" />}>
          <CopiableText>08012345678</CopiableText>
        </Descriptions.Item>
        <Descriptions.Item label={<BoldLabel label="住所" />}>
          <CopiableText>
            <div>
              〒5500002
              <br />
              大阪府大阪市西区江戸堀
              <br />
              1-2-3＊＊＊＊＊マンション301号室
            </div>
          </CopiableText>
        </Descriptions.Item>
        <Descriptions.Item label={<BoldLabel label="郵送物送付先" />}>
          <CopiableText>
            <div>
              〒5500002
              <br />
              大阪府大阪市西区江戸堀
              <br />
              1-2-3＊＊＊＊＊ビル4F
              <br />
              ◯◯株式会社
              <br />
              代表取締役社長 田中 太郎
            </div>
          </CopiableText>
        </Descriptions.Item>
        <Descriptions.Item label={<BoldLabel label="郵送物の送付" />}>
          {'許可する（1部）'}
        </Descriptions.Item>
        <Descriptions.Item label={<BoldLabel label="属性" />}>
          <Tag>理事</Tag>
          <Tag>ボランティア</Tag>
        </Descriptions.Item>
      </DescriptionContainer>
      <DescriptionStyle className="mt-10">
        <Descriptions
          title={<span className="page-sub-title">{'カスタム項目'}</span>}
          bordered
          column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
        >
          <Descriptions.Item label={<BoldLabel label="代表者名" />}>{'佐藤正隆'}</Descriptions.Item>
          <Descriptions.Item label={<BoldLabel label="代表者名（ふりがな）" />}>
            {'さとうまさたか'}
          </Descriptions.Item>
        </Descriptions>
      </DescriptionStyle>
    </>
  );
};

const EditModeContent = ({ data, mode, setMode, handleChangeSendaddr, sendadrr }) => (
  <>
    <DescriptionContainer mode={mode} setMode={setMode}>
      <Descriptions.Item label={<BoldLabel label="法人No." />}>
        <CopiableText>{'123456'}</CopiableText>
      </Descriptions.Item>
      {/* 法人名 */}
      <Descriptions.Item label={<BoldLabel label="法人名" />}>
        <Row>
          <Col span={24}>
            <Input value={'リタワークス株式会社'} />
          </Col>
        </Row>
      </Descriptions.Item>
      {/* 法人名（ふりがな） */}
      <Descriptions.Item label={<BoldLabel label="法人名（ふりがな）" />}>
        <Row>
          <Col span={24}>
            <Input value={'りたわーくすかぶしきがいしゃ'} />
          </Col>
        </Row>
      </Descriptions.Item>

      {/* 担当者部署・肩書き */}
      <Descriptions.Item label={<BoldLabel label="担当者部署・肩書き" />}>
        <Row>
          <Col span={24}>
            <Input value={'営業部 部長'} />
          </Col>
        </Row>
      </Descriptions.Item>
      {/* 担当者名 */}
      <Descriptions.Item label={<BoldLabel label="担当者名" />}>
        <Row>
          <Col sm={24} md={12} lg={12}>
            <Input value={'田中'} />
          </Col>
          <Col className="pl-2" sm={24} md={12} lg={12}>
            <Input value={'太郎'} />
          </Col>
        </Row>
      </Descriptions.Item>
      {/* 担当者名（ふりがな） */}
      <Descriptions.Item label={<BoldLabel label="担当者名（ふりがな）" />}>
        <Row>
          <Col sm={24} md={12} lg={12}>
            <Input value={'たなか'} />
          </Col>
          <Col className="pl-2" sm={24} md={12} lg={12}>
            <Input value={'たろう'} />
          </Col>
        </Row>
      </Descriptions.Item>

      <Descriptions.Item label={<BoldLabel label="広報物への氏名掲載" />}>
        <Checkbox checked>{'許可'}</Checkbox>
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
          <Col sm={24} md={24} lg={24}>
            <Checkbox onChange={handleChangeSendaddr}>{'郵送物の送付先を別途指定する'}</Checkbox>
          </Col>
        </Row>
      </Descriptions.Item>
      {/* 郵送物送付先 */}
      {sendadrr && (
        <Descriptions.Item label={<BoldLabel label="郵送物送付先" />}>
          <Row>
            <Col className="mb-2" sm={24} md={24} lg={24}>
              <Select placeholder={'選択してください'} onChange={() => {}} defaultValue={1}>
                <Select.Option value={1}>{'日本'}</Select.Option>
              </Select>
            </Col>
            <Col className="mb-2" sm={12} md={12} lg={12}>
              <Input addonBefore="〒" value={'5500002'} />
            </Col>
            <Col className="pl-2 mb-2" sm={12} md={12} lg={12}>
              <Select
                disabled
                placeholder={'選択してください'}
                onChange={() => {}}
                defaultValue={1}
              >
                <Select.Option value={1}>{'大阪府'}</Select.Option>
              </Select>
            </Col>
            <Col className="mb-2" sm={24} md={24} lg={24}>
              <Input value={'大阪市西区江戸堀'} />
            </Col>
            <Col className="mb-2" sm={24} md={24} lg={24}>
              <Input value={'1-2-3＊＊＊＊＊ビル4F'} />
            </Col>
            <Col className="mb-2" sm={24} md={24} lg={24}>
              <Input value={'◯◯株式会社'} />
            </Col>
            <Col sm={24} md={24} lg={24}>
              <Input value={'代表取締役社長 田中 太郎'} />
            </Col>
          </Row>
        </Descriptions.Item>
      )}
      <Descriptions.Item label={<BoldLabel label="郵送物送付" />}>
        <Row>
          <Col className="mb-2" span={24}>
            <Checkbox checked>{'許可'}</Checkbox>
          </Col>
          <Col span={24}>
            <Input suffix="部" value={'1'} style={{ width: '100%' }} />
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
    </DescriptionContainer>

    <DescriptionStyle className="my-8">
      <Descriptions
        title={<span className="page-sub-title">{'カスタム項目'}</span>}
        bordered
        column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
      >
        <Descriptions.Item label={<BoldLabel label="代表者名" />}>
          <Input value={'佐藤正隆'} />
        </Descriptions.Item>
        <Descriptions.Item label={<BoldLabel label="代表者名（ふりがな）" />}>
          <Input value={'さとうまさたか'} />
        </Descriptions.Item>
      </Descriptions>
    </DescriptionStyle>
    <Row justify="end">
      <Space>
        <Button onClick={() => setMode(DETAIL_MODE)}>{'キャンセル'}</Button>
        <Button
          className="icon-btn"
          icon={<span className="material-symbols-outlined fill-icon">save</span>}
          type="primary"
        >
          {'保存する'}
        </Button>
      </Space>
    </Row>
  </>
);

const BasicInfo = ({ data }) => {
  const [mode, setMode] = useState(DETAIL_MODE);
  const [sendadrr, setSendadrr] = useState(false);

  const handleChangeSendaddr = () => {
    setSendadrr(!sendadrr);
  };

  return (
    <>
      {mode === DETAIL_MODE ? (
        <ViewModeContent data={data} mode={mode} setMode={setMode} />
      ) : (
        <EditModeContent
          data={data}
          mode={mode}
          setMode={setMode}
          handleChangeSendaddr={handleChangeSendaddr}
          sendadrr={sendadrr}
        />
      )}
    </>
  );
};

export default BasicInfo;
