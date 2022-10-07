import { Anchor, Badge, Descriptions, Row, Col, Button, Tag, Table } from 'antd';
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
import { StyledBadgeDot } from './ContinuousContract.style';

const { Link } = Anchor;

const columnMap = {
  status: {
    title: 'ステータス',
    dataIndex: 'status',
    render: status => (
      <StyledBadgeDot>
        <Badge status="success" text={status} />
      </StyledBadgeDot>
    ),
  },
  issue_date: {
    title: '発行日',
    dataIndex: 'issue_date',
  },
  receipt_id: {
    title: '領収書ID',
    dataIndex: 'receipt_id',
  },
  operation: {
    title: '操作',
    render: () => {
      return (
        <>
          <Button type="link">{'開く'}</Button>
          <Button type="link" className="ml-2">
            {'URLコピー'}
          </Button>
        </>
      );
    },
  },
};

const mockDatasource = [
  {
    key: '1',
    status: '発行済み',
    issue_date: '2022-07-30',
    receipt_id: '123241',
  },
  {
    key: '2',
    status: '発行済み',
    issue_date: '2022-07-29',
    receipt_id: '56546',
  },
];

const columns = Object.keys(columnMap).map(columnName => {
  return columnMap[columnName];
});

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
            <Button icon={<EditOutlined />} type="primary" onClick={() => setMode(EDIT_MODE)}>
              {'編集'}
            </Button>
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

const ReceiptTitle = () => {
  return (
    <>
      <Row className="my-5">
        <Col sm={24} md={24} lg={24}>
          <h4 className="bold display-inline-flex">{'領収書'}</h4>
        </Col>
      </Row>
    </>
  );
};

const DescriptionContainer = ({ children }) => (
  <DescriptionStyle>
    <Descriptions bordered column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}>
      {children}
    </Descriptions>
  </DescriptionStyle>
);

const DonationDetail = ({ data, mode, setMode }) => {
  console.log('DonationDetail render', true);
  return (
    <>
      <Title mode={mode} setMode={setMode} />
      <DescriptionContainer>
        <Descriptions.Item label={<BoldLabel label="寄付ID" />}>
          <CopiableText>{'431051'}</CopiableText>
        </Descriptions.Item>
        <Descriptions.Item label={<BoldLabel label="受領日" />}>
          <CopiableText>{'2022-07-30'}</CopiableText>
        </Descriptions.Item>
        <Descriptions.Item label={<BoldLabel label="寄付タイプ" />}>
          <Tag>{'単発'}</Tag>
        </Descriptions.Item>
        <Descriptions.Item label={<BoldLabel label="プロジェクト" />}>
          {'NPO法人コングラントへのご支援をお願いします！'}
        </Descriptions.Item>

        <Descriptions.Item label={<BoldLabel label="プラン" />}>{'-'}</Descriptions.Item>

        <Descriptions.Item label={<BoldLabel label="単価・口数" />}>
          {'3,000円・1口'}
        </Descriptions.Item>
        <Descriptions.Item label={<BoldLabel label="金額" />}>{'3,000円'}</Descriptions.Item>
        <Descriptions.Item label={<BoldLabel label="受領方法" />}>{'手渡し'}</Descriptions.Item>
        <Descriptions.Item label={<BoldLabel label="登録経路" />}>
          {'インポート（2022-09-10）'}
        </Descriptions.Item>
        <Descriptions.Item label={<BoldLabel label="備考欄" />}>
          <p>
            {'領収書は会社宛に送ってください。 〒0000000 ＊＊＊県＊＊＊市＊＊＊＊＊＊＊＊＊＊'}
            {'＊＊＊＊＊＊＊＊ビル6F ＊＊＊＊株式会社'}
          </p>
        </Descriptions.Item>
      </DescriptionContainer>
      <ExtraFieldTitle />
      <DescriptionContainer>
        <Descriptions.Item label={<BoldLabel label="認知経路" />}>{'SNS'}</Descriptions.Item>
        <Descriptions.Item label={<BoldLabel label="寄付の使用用途" />}>
          {'2022-団体に任せる-30'}
        </Descriptions.Item>
        <Descriptions.Item label={<BoldLabel label="支援経験" />}>{'なし'}</Descriptions.Item>
      </DescriptionContainer>
      <ReceiptTitle />
      <Table dataSource={mockDatasource} columns={columns} />
    </>
  );
};
export default DonationDetail;
