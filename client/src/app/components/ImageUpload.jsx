import React, { useState } from 'react';
import { Modal, Space, Upload, message } from 'antd';
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
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');

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

  const onRemove = file => {
    const index = fileList.indexOf(file);
    const newFileList = fileList.slice();
    newFileList.splice(index, 1);
    setFileList(newFileList);
  };

  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async file => {
    console.log('[handlePreview]file', file);
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };

  console.log('maxFiles', maxFiles, fileList);
  return (
    <>
      <Upload
        customRequest={dummyRequest}
        beforeUpload={beforeUpload}
        onChange={handleChange}
        onRemove={onRemove}
        listType="picture-card"
        fileList={fileList}
        maxCount={maxFiles}
        onPreview={handlePreview}
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
      <Modal visible={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img
          alt="example"
          style={{
            width: '100%',
          }}
          src={previewImage}
        />
      </Modal>
    </>
  );
};

export default ImageUpload;
