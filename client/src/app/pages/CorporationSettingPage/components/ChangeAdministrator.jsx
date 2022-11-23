import React, { useState } from 'react';
// ANTD
import { Row, Col, Modal, Button, DatePicker, Upload, message } from 'antd';
// ICON
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
// COMPONENT
import {
  SettingsInputContainer,
  SettingLabel,
  SettingInput,
  SettingsInputWrapper,
} from './Sprites';
// STYLE
import { StyledModalTitle } from 'app/components/Layout/PageLayout.style';
// CONTS
import { TEXT_GRAY_COLOR } from 'styles/StyleConstants';

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = file => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

const ChangeAdministrator = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const handleChange = info => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, url => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* ボタン */}
      <Button onClick={showModal}>
        <span>{'管理者の変更（要再審査）'}</span>
      </Button>

      {/* モーダル */}
      <Modal
        title={<StyledModalTitle>{'管理者の変更'}</StyledModalTitle>}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={572}
        cancelText="キャンセル"
        okText="変更する"
      >
        <Row>
          <Col span={24}>
            <Row className="mb-2">新しい管理者の情報を登録してください</Row>

            {/* 氏名 */}
            <Row className="mb-6">
              <SettingsInputContainer label={<SettingLabel label={'氏名'} required />}>
                <Col sm={24} md={24} lg={24}>
                  <SettingsInputWrapper>
                    <SettingInput placeholder={'例：田中'} style={{ width: '100%' }} />
                    <SettingInput placeholder={'例：太郎'} style={{ width: '100%' }} />
                  </SettingsInputWrapper>
                </Col>
              </SettingsInputContainer>
            </Row>

            {/* 氏名（カナ表記) */}
            <Row className="mb-6">
              <SettingsInputContainer label={<SettingLabel label={'氏名（カナ表記)'} required />}>
                <Col sm={24} md={24} lg={24}>
                  <SettingsInputWrapper>
                    <SettingInput placeholder={'例：タナカ'} style={{ width: '100%' }} />
                    <SettingInput placeholder={'例：タロウ'} style={{ width: '100%' }} />
                  </SettingsInputWrapper>
                </Col>
              </SettingsInputContainer>
            </Row>

            {/* 生年月日 */}
            <Row className="mb-6">
              <SettingsInputContainer label={<SettingLabel label={'生年月日'} required />}>
                <Col sm={24} md={24} lg={24}>
                  <DatePicker placeholder={'yyyy-mm-dd'} style={{ width: '100%' }} />
                </Col>
              </SettingsInputContainer>
            </Row>

            {/* 役職 */}
            <Row className="mb-6">
              <SettingsInputContainer label={<SettingLabel label={'役職'} required />}>
                <Col sm={24} md={24} lg={24}>
                  <SettingInput placeholder={'例：事務局長'} />
                </Col>
              </SettingsInputContainer>
            </Row>

            {/* メールアドレス */}
            <Row className="mb-6">
              <SettingsInputContainer label={<SettingLabel label={'メールアドレス'} required />}>
                <Col sm={24} md={24} lg={24}>
                  <SettingInput placeholder={'例：03-1234-5678'} />
                </Col>
              </SettingsInputContainer>
            </Row>

            {/* 電話番号 */}
            <Row className="mb-6">
              <SettingsInputContainer label={<SettingLabel label={'電話番号'} required />}>
                <SettingInput placeholder={'例：03-1234-5678'} />
              </SettingsInputContainer>
            </Row>

            {/* 所在 */}
            <Row className="mb-6">
              <SettingsInputContainer label={<SettingLabel label={'住所'} required />}>
                <Col className="mb-4" sm={24} md={24} lg={24}>
                  <SettingsInputWrapper size={16}>
                    <SettingInput
                      size="large"
                      addonBefore="〒"
                      placeholder={'0000000'}
                      style={{ width: '100%' }}
                    />
                    <SettingInput
                      size="large"
                      disabled
                      placeholder={'都道府県'}
                      style={{ width: '100%' }}
                    />
                  </SettingsInputWrapper>
                </Col>
                <Col className="mb-4" sm={24} md={24} lg={24}>
                  <SettingInput size="large" placeholder={'市区町村'} />
                </Col>
                <Col sm={24} md={24} lg={24}>
                  <SettingInput size="large" placeholder={'番地・建物名・部屋番号'} />
                </Col>
              </SettingsInputContainer>
            </Row>

            {/* 住所（カナ表記） */}
            <Row className="mb-6">
              <SettingsInputContainer label={<SettingLabel label={'住所（カナ表記）'} required />}>
                <Col className="mb-4" sm={24} md={24} lg={24}>
                  <SettingsInputWrapper>
                    <SettingInput
                      size="large"
                      addonBefore="〒"
                      placeholder={'0000000'}
                      style={{ width: '100%' }}
                    />
                    <SettingInput
                      size="large"
                      disabled
                      placeholder={'都道府県'}
                      style={{ width: '100%' }}
                    />
                  </SettingsInputWrapper>
                </Col>
                <Col className="mb-4" sm={24} md={24} lg={24}>
                  <SettingInput size="large" placeholder={'市区町村（カナ)'} />
                </Col>
                <Col sm={24} md={24} lg={24}>
                  <SettingInput size="large" placeholder={'番地・建物名・部屋番号（カナ)'} />
                </Col>
              </SettingsInputContainer>
            </Row>

            {/* 身分証明書等 */}
            <Row className="mb-6">
              <Col span={24} className="mb-2">
                <SettingsInputContainer label={<SettingLabel label={'身分証明書等'} required />}>
                  <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    beforeUpload={beforeUpload}
                    onChange={handleChange}
                  >
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt="avatar"
                        style={{
                          width: '100%',
                        }}
                      />
                    ) : (
                      uploadButton
                    )}
                  </Upload>
                </SettingsInputContainer>
              </Col>
              <div style={{ color: TEXT_GRAY_COLOR }}>
                有効な身分証明書：
                <br />
                日本旅券 (日本国パスポート)
                <br />
                運転免許証
                <br />
                在留カード・特別永住者証明書
                <br />
                マイナンバーカード (顔写真付き)
                <br />
                住民票
                <br />
                <br />
                ファイル準備の際には、以下の点にご注意ください：
                <br />
                ファイル形式が JPG、JPEG または PNG であること
                <br />
                身分証全体のカラー画像であること
                <br />
                ピントが合っていて記載内容が判別できること
                <br />
                撮影時にフラッシュを使用しない
              </div>
            </Row>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default ChangeAdministrator;
