import { useState } from 'react';
// STYLE
import { ActionButton } from './Action.style';
import { ActionModal } from './ActionModal.style';
// ANTD
import { Space, Button, Row, Col, Input, Tooltip } from 'antd';
// QR CODE
import { QRCode } from 'react-qrcode-logo';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { sleep } from 'utils/helper';
import IframeBox from './IframeBox';

const { TextArea } = Input;
const APP_URL = process.env.REACT_APP_APP_URL;
const iframeValue = `<iframe src="${APP_URL}" frameborder="0" width="300" height="380"></iframe>`;

const Action = ({ mainColor }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  const [iframeCopied, setIframeCopied] = useState(false);
  const [isEmbedModalOpen, setIsEmbedModalOpen] = useState(false);
  const linkCopiedTitle = linkCopied ? 'コピーしました' : null;
  const iframeCopiedTitle = iframeCopied ? 'コピーしました' : null;

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const showEmbedModal = () => {
    setIsEmbedModalOpen(true);
  };
  const handleEmbedCancel = () => {
    setIsEmbedModalOpen(false);
  };

  const downloadQRCode = () => {
    // Generate download with use canvas and stream
    const canvas = document.getElementById('qr-gen');
    const pngUrl = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
    let downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = `qr-code.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <>
      <Space size={2}>
        <ActionButton type="text">
          <span className="material-symbols-outlined icon">link</span>
          <CopyToClipboard
            text={window.location}
            onCopy={async () => {
              setLinkCopied(true);
              await sleep(2000);
              setLinkCopied(false);
            }}
          >
            <Tooltip title={linkCopiedTitle} visible={!!linkCopied}>
              <span>{'リンクをコピー'}</span>
            </Tooltip>
          </CopyToClipboard>
        </ActionButton>
        <ActionButton type="text" onClick={showModal}>
          <span className="material-symbols-outlined icon">qr_code</span>
          <span>QRコード</span>
        </ActionButton>
        <ActionButton type="text" onClick={showEmbedModal}>
          <span className="material-symbols-outlined icon">code</span>
          <span>埋め込み</span>
        </ActionButton>
      </Space>

      {/* QRモーダル・QR Modal */}
      <ActionModal
        visible={isModalOpen}
        onCancel={handleCancel}
        width={480}
        footer={null}
        closeIcon={
          <span class="material-symbols-outlined" style={{ color: '#1C1B1F' }}>
            close
          </span>
        }
      >
        <div className="modal-title">QRコード</div>
        <div className="modal-content">
          <Row justify="center" className="mb-3">
            <QRCode id="qr-gen" value={window.location} size={200} />
          </Row>
          <Row justify="center">
            <Button
              onClick={downloadQRCode}
              type="primary"
              size="large"
              style={{
                fontSize: 16,
                fontWeight: 700,
                width: 148,
                backgroundColor: mainColor,
                borderColor: mainColor,
              }}
            >
              ダウンロード
            </Button>
          </Row>
        </div>
      </ActionModal>

      {/* 埋め込みモーダル・Embed Modal */}
      <ActionModal
        visible={isEmbedModalOpen}
        onCancel={handleEmbedCancel}
        width={560}
        footer={null}
        closeIcon={
          <span class="material-symbols-outlined" style={{ color: '#1C1B1F' }}>
            close
          </span>
        }
      >
        <div className="modal-title">埋め込み</div>
        <div className="modal-content">
          <Row wrap={false}>
            <Col flex="200px">
              <IframeBox mainColor={mainColor} />
            </Col>
            <Col flex="auto" style={{ paddingLeft: 22 }}>
              <div style={{ fontSize: 12 }} className="mb-3">
                埋め込みコードをコピーして、ホームページやブログのソースに記載してください。
              </div>
              <div className="iframe-copy-box mb-5">
                <TextArea
                  value={iframeValue}
                  // onChange={e => setValue(e.target.value)}
                  placeholder="Controlled autosize"
                  autoSize={{ minRows: 5, maxRows: 5 }}
                />
              </div>
              <div>
                <CopyToClipboard
                  text={iframeValue}
                  onCopy={async () => {
                    setIframeCopied(true);
                    await sleep(2000);
                    setIframeCopied(false);
                  }}
                >
                  <Tooltip title={iframeCopiedTitle} visible={!!iframeCopied}>
                    <Button
                      className="icon-btn"
                      size="large"
                      style={{
                        fontSize: 14,
                        width: '100%',
                        color: '#666666',
                        boxShadow: 'none',
                        justifyContent: 'center',
                      }}
                    >
                      <span
                        className="material-symbols-outlined fill-icon icon"
                        style={{ color: '#929292' }}
                      >
                        content_copy
                      </span>
                      埋め込みコードをコピー
                    </Button>
                  </Tooltip>
                </CopyToClipboard>
              </div>
            </Col>
          </Row>
        </div>
      </ActionModal>
    </>
  );
};

export default Action;
