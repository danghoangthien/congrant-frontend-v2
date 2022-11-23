import { Row, Col, Button, Space, Table, Radio, Checkbox, DatePicker, Dropdown, Menu } from 'antd';
import {
  SettingsInputContainer,
  SettingInput,
  SettingInfoLabel,
} from '../../CorporationSettingPage/components/Sprites';
import { StyledUploadPicture, StyledForm } from '../BasicSettingsPage.style';
import ReceiptTemplate from './ReceiptTemplate';

// レコードアクションメニュー・Record Action Menu
const menu = (
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

const dataSource = Array.from(Array(3).keys()).map(i => ({
  i: `${i}`,
  is_default: true,
  name: '標準領収書)',
  amount: `5,000円/月`,
}));

const columnMap = {
  is_default: {
    width: 100,
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
    width: 300,
    title: 'アクション',
    render: row => (
      <Space align="center">
        <Button
          disabled
          className="icon-btn less-shadow-btn"
          icon={<span class="material-symbols-outlined fill-icon">edit</span>}
        >
          {'編集'}
        </Button>
        <Button
          className="icon-btn less-shadow-btn"
          icon={<span class="material-symbols-outlined fill-icon">visibility</span>}
        >
          {'プレビュー'}
        </Button>
        <Dropdown overlay={menu} placement="bottomRight">
          <Button
            className="more-menu-btn"
            icon={<span className="material-symbols-outlined">more_horiz</span>}
          />
        </Dropdown>
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
      <Row className="mb-8">
        <Col sm={24} md={24} lg={24}>
          <span className="page-title01">{'領収書'}</span>
        </Col>
      </Row>

      {/* 寄付決済 */}
      <Row className="mb-5">
        <Col className="mb-2" sm={24} md={24} lg={24}>
          <span className="page-sub-title">{'基本設定'}</span>
        </Col>
      </Row>

      <StyledForm>
        <Row className="mb-14">
          {/*  印影 */}
          <Col span={24} className="mb-6">
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
          </Col>
          {/*  認定通知書番号 */}
          <Col span={24} className="mb-6">
            <SettingsInputContainer label={<SettingInfoLabel label={'認定通知書番号'} />}>
              <SettingInput placeholder={''} />
            </SettingsInputContainer>
          </Col>
          {/*  認定年月日 */}
          <Col span={24} className="mb-6">
            <SettingsInputContainer label={<SettingInfoLabel label={'認定年月日'} />}>
              <DatePicker size="large" placeholder={'yyyy-mm-dd'} style={{ width: '160px' }} />
            </SettingsInputContainer>
          </Col>
        </Row>
      </StyledForm>

      {/* テンプレート */}
      <Row className="mb-5">
        <span className="page-sub-title">{'テンプレート'}</span>
      </Row>

      <Row className="mb-6">
        <Col className="mb-2" sm={24} md={20} lg={24}>
          <Table tableLayout="fixed" dataSource={dataSource} columns={columns} pagination={false} />
        </Col>
      </Row>
      <Row className="mb-15">
        <Col sm={24} md={24} lg={24}>
          <ReceiptTemplate />
        </Col>
      </Row>

      {/* 自動送付 */}
      <Row className="mb-4">
        <span className="page-sub-title">{'自動送付'}</span>
      </Row>
      <Row className="mb-5">
        <Col className="mb-2" sm={24} md={24} lg={24}>
          <Checkbox.Group defaultValue={[1]}>
            <Space direction="vertical" align="center">
              <Checkbox value={1}>{'「単発寄付」の領収書を自動送付する'}</Checkbox>
              <Checkbox value={2}>{'「単発寄付」の領収書を自動送付する'}</Checkbox>
              <Checkbox value={3}>{'「単発寄付」の領収書を自動送付する'}</Checkbox>
            </Space>
          </Checkbox.Group>
        </Col>
      </Row>
      <Row>
        <Col sm={24} md={24} lg={24}>
          <Button className="active" type="primary">
            <span style={{ fontWeight: '600' }}>{'保存する'}</span>
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Receipt;
