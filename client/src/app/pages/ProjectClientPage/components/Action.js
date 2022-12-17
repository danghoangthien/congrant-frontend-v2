import { useState } from 'react';
// STYLE
import { ActionButton } from './Action.style';
import { ActionModal } from './ActionModal.style';
// ANTD
import { Space, Button, Row, Col, Input } from 'antd';
// QR CODE
import { QRCode } from 'react-qrcode-logo';

const { TextArea } = Input;

const Action = ({ mainColor }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEmbedModalOpen, setIsEmbedModalOpen] = useState(false);

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

  return (
    <>
      <Space size={2}>
        <ActionButton type="text">
          <span className="material-symbols-outlined icon">link</span>
          <span>リンクをコピー</span>
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
            <QRCode value="https://github.com/gcoro/react-qrcode-logo" size={200} />
          </Row>
          <Row justify="center">
            <Button
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
              <div className="iframe-box">
                <div className="iframe-img">
                  <img
                    src="https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80"
                    alt=""
                  />
                </div>
                <div className="iframe-title">
                  「わたし、きょうもいきたよ」1歳のあおちゃんに心臓移植を
                </div>
                <Row>
                  <Row justify="center">
                    <Button
                      type="primary"
                      size="large"
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        width: 200,
                        borderRadius: 7,
                        backgroundColor: mainColor,
                        borderColor: mainColor,
                      }}
                    >
                      詳細を見る
                    </Button>
                  </Row>
                </Row>
              </div>
            </Col>
            <Col flex="auto" style={{ paddingLeft: 22 }}>
              <div style={{ fontSize: 12 }} className="mb-3">
                埋め込みコードをコピーして、ホームページやブログのソースに記載してください。
              </div>
              <div className="iframe-copy-box mb-5">
                <TextArea
                  value={`<iframe src="https://congrant.com/project_iframe/aosukuukai/5423" frameborder="0" width="300" height="380"></iframe>`}
                  // onChange={e => setValue(e.target.value)}
                  placeholder="Controlled autosize"
                  autoSize={{ minRows: 3, maxRows: 5 }}
                />
              </div>
              <div>
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
                  <span class="material-symbols-outlined fill-icon icon">content_copy</span>
                  埋め込みコードをコピー
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </ActionModal>
    </>
  );
};

export default Action;
