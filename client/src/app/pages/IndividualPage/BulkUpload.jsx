import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Row, Col, Button, Card, Space, Radio } from 'antd';
import { SettingsInputContainer, SettingLabel, SettingSelect } from 'utils/Sprites';
import ItemAssociation from './components/ItemAssociation';
import DraggerUpload from 'app/components/DraggerUpload';
import { PageLayout } from 'app/components/Layout/PageLayout.style';

const IndividualPage = () => {
  // META情報
  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'一括アップロード（個人サポーター）'}</title>
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
                  <div className="page-title">
                    <span className="material-symbols-outlined icon fill-icon">person</span>
                    <span className="ml-2">{'一括アップロード（個人サポーター）'}</span>
                  </div>
                </Col>
              </Row>
            </Col>
            {/* 右の部分・Right Part */}
            <Col />
          </Row>
        </div>

        <Card className="px-1">
          <div className="item">
            <Row className="mb-5">
              <Col sm={24} md={24} lg={24}>
                <span className="page-title">{'口座情報'}</span>
              </Col>
            </Row>
            <Row className="item mb-6">
              <Button
                className="icon-btn"
                icon={<span class="material-symbols-outlined">download</span>}
              >
                {'サンプルファイル（個人サポーター用）をダウンロード'}
              </Button>
            </Row>
            <Row className="item mb-6" style={{ width: '100%', maxWidth: 695 }}>
              <SettingsInputContainer label={<SettingLabel label={'ファイルアップロード'} />}>
                <DraggerUpload />
              </SettingsInputContainer>
            </Row>
            <Row className="mb-5">
              <Col sm={24} md={24} lg={24}>
                <span className="page-title">{'処理方法'}</span>
              </Col>
            </Row>
            <Row className="item mb-6">
              <SettingsInputContainer
                label={<SettingLabel label={'アップロードしたファイルの処理方法'} required />}
              >
                <Radio.Group defaultValue={2}>
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
                  size="large"
                  placeholder={'選択してください'}
                  style={{ width: 210 }}
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
                <span className="page-title">{'項目の関連づけ'}</span>
              </Col>
            </Row>
            <Row className="mb-8">
              <Col span={24} style={{ width: '100%', maxWidth: 695 }}>
                <ItemAssociation />
              </Col>
            </Row>
            <Row>
              <Col span={24} style={{ width: '100%', maxWidth: 695 }} type="flex" align="end">
                <Button type="primary" size="large" style={{ fontWeight: '600' }}>
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

export default IndividualPage;
