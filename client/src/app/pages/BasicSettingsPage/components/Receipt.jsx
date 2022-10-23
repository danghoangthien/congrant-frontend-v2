import { Row, Col, Tag, Button, Input, Space, Table, Radio, Checkbox } from 'antd';
import { EditOutlined, InfoCircleFilled, EyeFilled } from '@ant-design/icons';

import { StyledUploadPicture, StyledForm } from '../BasicSettingsPage.style';
import ReceiptTemplate from './ReceiptTemplate';

const dataSource = Array.from(Array(3).keys()).map(i => ({
  i: `${i}`,
  is_default: true,
  name: '賛助会員（都度更新',
  amount: `5,000円/月`,
}));

const columnMap = {
  is_default: {
    width: 120,
    title: 'デフォルト',
    render: ({ is_default }) => <Radio checked={is_default} />,
  },
  name: {
    title: '名称',
    dataIndex: 'name',
  },
  action: {
    width: 80,
    title: 'アクション',
    render: row => (
      <Space align="center">
        <Button icon={<EditOutlined />}>{'編集'}</Button>
        <Button icon={<EyeFilled />}>{'プレビュー集'}</Button>
        <Button>{'...'}</Button>
      </Space>
    ),
  },
};
const columns = Object.keys(columnMap).map(columnName => {
  return columnMap[columnName];
});

const Receipt = () => {
  return (
    <>
      <div className="item ml-5">
        <Row className="mb-5">
          <Col sm={24} md={24} lg={24}>
            <span className="page-title">{'名寄せ先の選択'}</span>
          </Col>
        </Row>
        {/* 寄付決済 */}
        <Row className="item mb-5">
          <Col className="item mb-2" sm={24} md={24} lg={24}>
            <span className="page-sub-title">{'寄付決済'}</span>
          </Col>
        </Row>
        <StyledForm>
          {/*  印影 */}
          <Row className="item mb-5">
            <Col className="item mb-2" sm={24} md={24} lg={24}>
              <Space align="center">
                <span className="form-title">{'印影'}</span>
                <InfoCircleFilled className="display-inline-flex" />
              </Space>
            </Col>
            <Col className="item mb-2" sm={24} md={24} lg={24}>
              <StyledUploadPicture>
                <div className="upload-picture">
                  <Space direction="vertical" align="center" style={{ width: 'max-content' }}>
                    <span className="upload-picture-title">{'+'}</span>
                    <span className="upload-picture-title">{'アップロード'}</span>
                  </Space>
                </div>
              </StyledUploadPicture>
            </Col>
          </Row>
          {/*  認定通知書番号 */}
          <Row className="item mb-5">
            <Col className="item mb-2" sm={24} md={24} lg={24}>
              <Space align="center">
                <span className="form-title">{'認定通知書番号'}</span>
                <InfoCircleFilled className="display-inline-flex" />
              </Space>
            </Col>
            <Col className="item mb-2" sm={24} md={24} lg={24}>
              <Space align="center">
                <Input placeholder={''} />
              </Space>
            </Col>
          </Row>
          {/*  認定年月日 */}
          <Row className="item mb-5">
            <Col className="item mb-2" sm={24} md={24} lg={24}>
              <Space align="center">
                <span className="form-title">{'認定年月日'}</span>
                <InfoCircleFilled className="display-inline-flex" />
              </Space>
            </Col>
            <Col className="item my-2" sm={24} md={24} lg={24}>
              <Space align="center">
                <Input placeholder={''} />
              </Space>
            </Col>
          </Row>
        </StyledForm>
        {/* テンプレート */}
        <Row className="item mb-5">
          <Col className="item mb-2" sm={24} md={24} lg={24}>
            <span className="page-sub-title">{'テンプレート'}</span>
          </Col>
        </Row>
        <Row className="item mb-5">
          <Col className="item mb-2" sm={24} md={20} lg={12}>
            <Table dataSource={dataSource} columns={columns} pagination={false} />
          </Col>
        </Row>
        <Row className="item mb-8">
          <Col sm={24} md={24} lg={24}>
            <ReceiptTemplate />
          </Col>
        </Row>
        {/* 自動送付 */}
        <Row className="item mb-5">
          <Col className="item mb-2" sm={24} md={24} lg={24}>
            <span className="page-sub-title">{'自動送付'}</span>
          </Col>
        </Row>
        <Row className="item mb-5">
          <Col className="item mb-2" sm={24} md={24} lg={24}>
            <Checkbox.Group defaultValue={[1]}>
              <Space direction="vertical" align="center">
                <Checkbox value={1}>{'「単発寄付」の領収書を自動送付する'}</Checkbox>
                <Checkbox value={2}>{'「単発寄付」の領収書を自動送付する'}</Checkbox>
                <Checkbox value={3}>{'「単発寄付」の領収書を自動送付する'}</Checkbox>
              </Space>
            </Checkbox.Group>
          </Col>
        </Row>
        <Row className="item">
          <Col sm={24} md={24} lg={24}>
            <Button className="active" type="primary">
              <span className="ml-2">{'保存する'}</span>
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Receipt;
