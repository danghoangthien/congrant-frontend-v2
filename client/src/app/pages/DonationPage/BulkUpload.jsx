import { Helmet } from 'react-helmet-async';
// ANTD
import { Row, Col, Button, Card, Space, Radio } from 'antd';
// SPRITE
import { SettingsInputContainer, SettingLabel, SettingSelect } from 'utils/Sprites';
// COMPONENT
import ItemAssociation from './components/ItemAssociation';
import DraggerUpload from 'app/components/DraggerUpload';
// STYLE
import { PageLayout } from 'app/components/Layout/PageLayout.style';

const BulkUpload = () => {
  // META情報
  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'一括アップロード（寄付決済）'}</title>
          <meta name="description" content={'...'} />
        </Helmet>
      </>
    );
  };

  return (
    <>
      {renderPageTitle()}
      <PageLayout>
        <div className="mb-7">
          <Row justify="space-between" align="middle">
            {/* 左の部分・Left Part */}
            <Col>
              <Row type="flex" align="middle">
                <Col className="mr-6">
                  <div className="sub-page-title">{'一括アップロード（寄付決済）'}</div>
                </Col>
              </Row>
            </Col>
            {/* 右の部分・Right Part */}
            <Col />
          </Row>
        </div>

        <Card bodyStyle={{ padding: '48px 32px' }}>
          <div className="item">
            <Row className="mb-5">
              <Col sm={24} md={24} lg={24}>
                <div className="page-title" style={{ fontSize: 24 }}>
                  {'アップロードするファイル'}
                </div>
              </Col>
            </Row>
            <Row className="item mb-6">
              <Button
                className="icon-btn less-shadow-btn"
                icon={<span className="material-symbols-outlined">download</span>}
              >
                {'サンプルファイル（寄付決済用）をダウンロード'}
              </Button>
            </Row>
            <Row className="item mb-14" style={{ width: '100%', maxWidth: 695 }}>
              <SettingsInputContainer label={<SettingLabel label={'ファイルアップロード'} />}>
                <DraggerUpload />
              </SettingsInputContainer>
            </Row>
            <Row className="mb-5">
              <Col sm={24} md={24} lg={24}>
                <span className="page-title" style={{ fontSize: 24 }}>
                  {'処理方法'}
                </span>
              </Col>
            </Row>
            <Row className="item mb-6">
              <SettingsInputContainer
                label={<SettingLabel label={'アップロードしたファイルの処理方法'} required />}
              >
                <Radio.Group onChange={() => {}} defaultValue={2}>
                  <Space direction="horizontal">
                    <Radio value={1}>{'新規レコードとして登録する'}</Radio>
                    <Radio value={2}>{'既存レコードは更新する'}</Radio>
                  </Space>
                </Radio.Group>
              </SettingsInputContainer>
            </Row>
            <Row className="item mb-6">
              <SettingsInputContainer
                label={<SettingLabel label={'レコードIDを記載した列の項目名'} required />}
              >
                <SettingSelect
                  style={{ width: '100%', maxWidth: 210 }}
                  size="large"
                  placeholder={'選択してください'}
                />
              </SettingsInputContainer>
              <p
                style={{
                  color: 'rgba(0, 0, 0, 0.5)',
                }}
              >
                {
                  '既存のレコードを更新するためには、アップロードファイルにレコードIDを記載する必要があります。'
                }
                <br />
                {'レコードIDを記載したファイルの項目名を選択してください。'}
              </p>
            </Row>
            <Row className="mb-5">
              <Col sm={24} md={24} lg={24}>
                <span className="page-title" style={{ fontSize: 24 }}>
                  {'項目の関連づけ'}
                </span>
              </Col>
            </Row>
            <Row className="mb-5">
              <ItemAssociation />
            </Row>
            <Row className="mt-15">
              <Col sm={24} md={24} lg={24} type="flex" align="center">
                <Button type="primary" style={{ fontWeight: 600 }} size="large">
                  {'アップロード'}
                </Button>
              </Col>
            </Row>
          </div>
        </Card>
      </PageLayout>
    </>
  );
};

export default BulkUpload;
