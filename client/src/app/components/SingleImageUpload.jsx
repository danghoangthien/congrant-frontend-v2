import React, { useState } from 'react';
import { Space, Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { StyledUploadPicture } from 'app/components/Layout/SettingsLayout.style';

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

const dummyRequest = ({ file, onSuccess }) => {
  setTimeout(() => {
    onSuccess('ok');
  }, 0);
};

const SingleImageUpload = ({ onUploadDone }) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const handleChange = info => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      getBase64(info.file.originFileObj, url => {
        setLoading(false);
        setImageUrl(url);
        onUploadDone(url);
      });
      return;
    }
    // No need in case upload base64 with parent form
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, url => {
        setLoading(false);
        setImageUrl(url);
        onUploadDone(url);
      });
      return;
    }
  };

  return (
    <StyledUploadPicture style={{ width: '600px' }}>
      <Upload
        customRequest={dummyRequest}
        beforeUpload={beforeUpload}
        onChange={handleChange}
        listType="picture-card"
        fileList={[]}
        maxCount={1}
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
          <Space direction="vertical" align="center">
            <span className="upload-picture-title">
              {loading ? <LoadingOutlined /> : <PlusOutlined />}
            </span>
            <span className="upload-picture-title">{'アップロード'}</span>
          </Space>
        )}
      </Upload>
    </StyledUploadPicture>
  );
};

export default SingleImageUpload;
