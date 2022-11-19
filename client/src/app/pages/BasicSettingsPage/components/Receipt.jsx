import { Row, Col, Button, Space, Table, Radio, Checkbox, DatePicker } from 'antd';
import { EditOutlined, EyeFilled } from '@ant-design/icons';
import {
  SettingsInputContainer,
  SettingInput,
  SettingInfoLabel,
} from '../../CorporationSettingPage/components/Sprites';
import { StyledUploadPicture, StyledForm } from '../BasicSettingsPage.style';
import ReceiptTemplate from './ReceiptTemplate';

const dataSource = Array.from(Array(3).keys()).map(i => ({
  i: `${i}`,
  is_default: true,
  name: '賛助会員（都度更新)',
  amount: `5,000円/月`,
}));

const columnMap = {
  is_default: {
    width: 80,
    title: 'デフォルト',
    render: ({ is_default }) => (
      <div style={{ width: '80px', textAlign: 'center' }}>
        <Radio checked={is_default} />
      </div>
    ),
  },
  name: {
    title: '名称',
    dataIndex: 'name',
  },
  action: {
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
            <span className="page-title">{'領収書'}</span>
          </Col>
        </Row>
        {/* 寄付決済 */}
        <Row className="item mb-5">
          <Col className="item mb-2" sm={24} md={24} lg={24}>
            <span className="page-sub-title">{'基本設定'}</span>
          </Col>
        </Row>
        <StyledForm>
          <Row className="item mb-5">
            {/*  印影 */}
            <SettingsInputContainer label={<SettingInfoLabel label={'印影'} />}>
              <StyledUploadPicture>
                <div className="upload-picture">
                  <Space direction="vertical" align="center" style={{ width: 'max-content' }}>
                    <span className="upload-picture-title">{'+'}</span>
                    <span className="upload-picture-title">{'アップロード'}</span>
                  </Space>
                </div>
              </StyledUploadPicture>
            </SettingsInputContainer>
            {/*  認定通知書番号 */}
            <SettingsInputContainer label={<SettingInfoLabel label={'認定通知書番号'} />}>
              <SettingInput placeholder={''} />
            </SettingsInputContainer>
            {/*  認定年月日 */}
            <SettingsInputContainer label={<SettingInfoLabel label={'認定年月日'} />}>
              <DatePicker placeholder={'yyyy-mm-dd'} style={{ width: '600px' }} />
            </SettingsInputContainer>
          </Row>
        </StyledForm>
        {/* テンプレート */}
        <Row className="item mb-5">
          <Col className="item mb-2" sm={24} md={24} lg={24}>
            <span className="page-sub-title">{'テンプレート'}</span>
          </Col>
        </Row>
        <Row className="item mb-5">
          <Col className="item mb-2" sm={24} md={20} lg={24}>
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
