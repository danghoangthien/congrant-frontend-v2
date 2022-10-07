import moment from 'moment';
import { Descriptions, Row, Col, Button, Input, Checkbox, Radio, DatePicker, Select } from 'antd';
import { StyledPrimaryIcon } from 'styles/global-styles';
import { MinusOutlined, CloseOutlined, SaveOutlined } from '@ant-design/icons';
import { BoldLabel, CopiableText } from './Sprites';
import { LIST_MODE, DETAIL_MODE } from '../consts';
import { DescriptionStyle } from './BasicInfo.style';

const dateFormat = 'YYYY-MM-DD';

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
            {'寄付詳細'}
          </h3>
        </Col>
        <Col type="flex" align="right" sm={24} md={12} lg={12}>
          <>
            <Button onClick={() => setMode(DETAIL_MODE)}>{'キャンセル'}</Button>
            <Button className="ml-2" icon={<SaveOutlined />} type="primary">
              {'保存'}
            </Button>
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

const ExtraFieldTitle = () => {
  return (
    <>
      <Row className="my-5">
        <Col sm={24} md={24} lg={24}>
          <h4 className="bold display-inline-flex">{'カスタム項目'}</h4>
        </Col>
      </Row>
    </>
  );
};

const DescriptionContainer = ({ children, mode, setMode }) => (
  <DescriptionStyle>
    <Descriptions bordered column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}>
      {children}
    </Descriptions>
  </DescriptionStyle>
);

const DonationEdit = ({ data, mode, setMode }) => {
  console.log('DonationDetail render', true);
  return (
    <>
      <Title mode={mode} setMode={setMode} />
      <DescriptionContainer>
        <Descriptions.Item label={<BoldLabel label="寄付ID" />}>
          <CopiableText>{'431051'}</CopiableText>
        </Descriptions.Item>
        <Descriptions.Item label={<BoldLabel label="受領日" />}>
          <DatePicker defaultValue={moment('2022-07-30', dateFormat)} format={dateFormat} />
        </Descriptions.Item>
        <Descriptions.Item label={<BoldLabel label="寄付タイプ" />}>
          <Row>
            <Col className="mb-2" sm={24} md={24} lg={24}>
              <Select
                mode="multiple"
                allowClear
                placeholder="Please select"
                defaultValue={[1]}
                onChange={() => {}}
              >
                <Select.Option value={1}>{'単発'}</Select.Option>
              </Select>
            </Col>
          </Row>
        </Descriptions.Item>
        <Descriptions.Item label={<BoldLabel label="プロジェクト" />}>
          <Select placeholder={'選択してください'} onChange={() => {}} defaultValue={1}>
            <Select.Option value={1}>{'NPO法人コングラント'}</Select.Option>
          </Select>
        </Descriptions.Item>
        <Descriptions.Item label={<BoldLabel label="プラン" />}>
          <Select placeholder={'選択してください'} onChange={() => {}}>
            <Select.Option value={1}>{'-'}</Select.Option>
          </Select>
        </Descriptions.Item>

        <Descriptions.Item label={<BoldLabel label="単価・口数" />}>
          <Row>
            <Col className="mb-2" sm={12} md={12} lg={12}>
              <Input suffix="円" value={'3000'} />
            </Col>
            <Col className="pl-2 mb-2" sm={12} md={12} lg={12}>
              <Input suffix="口" value={'1'} />
            </Col>
          </Row>
        </Descriptions.Item>
        <Descriptions.Item label={<BoldLabel label="金額" />}>{'3,000円'}</Descriptions.Item>
        <Descriptions.Item label={<BoldLabel label="受領方法" />}>
          <Radio.Group onChange={() => {}} value={1}>
            <Radio value={1}>{'手渡し'}</Radio>
            <Radio value={2}>{'募金箱'}</Radio>
            <Radio value={3}>{'口座振替'}</Radio>
          </Radio.Group>
        </Descriptions.Item>
        <Descriptions.Item label={<BoldLabel label="登録経路" />}>
          {'インポート（2022-09-10）'}
        </Descriptions.Item>
        <Descriptions.Item label={<BoldLabel label="備考欄" />}>
          <Input.TextArea
            style={{
              height: 250,
            }}
            value={
              '領収書は会社宛に送ってください。 〒0000000 ＊＊＊県＊＊＊市＊＊＊＊＊＊＊＊＊＊' +
              '＊＊＊＊＊＊＊＊ビル6F ＊＊＊＊株式会社'
            }
          />
        </Descriptions.Item>
      </DescriptionContainer>
      <ExtraFieldTitle />
      <DescriptionContainer>
        <Descriptions.Item label={<BoldLabel label="認知経路" />}>
          <Select placeholder={'選択してください'} onChange={() => {}} defaultValue={1}>
            <Select.Option value={1}>{'SNS'}</Select.Option>
          </Select>
        </Descriptions.Item>
        <Descriptions.Item label={<BoldLabel label="寄付の使用用途" />}>
          <Select placeholder={'選択してください'} onChange={() => {}} defaultValue={1}>
            <Select.Option value={1}>{'団体に任せる'}</Select.Option>
          </Select>
        </Descriptions.Item>
        <Descriptions.Item label={<BoldLabel label="支援経験" />}>
          <Select placeholder={'選択してください'} onChange={() => {}} defaultValue={1}>
            <Select.Option value={1}>{'なし'}</Select.Option>
          </Select>
        </Descriptions.Item>
        <Descriptions.Item label={<BoldLabel label="寄付理由" />}>
          <Input.TextArea
            style={{
              height: 50,
            }}
            value={''}
          />
        </Descriptions.Item>
      </DescriptionContainer>
      <Row className="my-5">
        <Col type="flex" align="right" sm={24} md={24} lg={24}>
          <>
            <Button onClick={() => setMode(DETAIL_MODE)}>{'キャンセル'}</Button>
            <Button className="ml-2" icon={<SaveOutlined />} type="primary">
              {'保存'}
            </Button>
          </>
        </Col>
      </Row>
    </>
  );
};
export default DonationEdit;
