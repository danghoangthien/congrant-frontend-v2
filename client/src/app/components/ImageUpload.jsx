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

const ImageUpload = ({ onUploadDone = () => {}, width = '100%', maxFiles = 1 }) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [fileList, setFileList] = useState([]);
  const handleChange = info => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      getBase64(info.file.originFileObj, url => {
        setLoading(false);
        setImageUrl(url);
        onUploadDone(url);
        setFileList([
          ...fileList,
          {
            url,
            status: 'done',
          },
        ]);
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
  console.log('maxFiles', maxFiles, fileList);
  return (
    <Upload
      customRequest={dummyRequest}
      beforeUpload={beforeUpload}
      onChange={handleChange}
      listType="picture-card"
      fileList={fileList}
      maxCount={maxFiles}
    >
      {fileList.length < maxFiles && (
        <Space align="center" direction="vertical">
          <span className="upload-picture-title">
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
          </span>
          <span className="upload-picture-title">{'アップロード'}</span>
        </Space>
      )}
    </Upload>
  );
};

export default ImageUpload;
