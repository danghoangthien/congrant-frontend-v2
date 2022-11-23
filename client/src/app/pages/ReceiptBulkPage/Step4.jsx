import { Row, Col, Image, Space, Button } from 'antd';
import { useDispatch } from 'react-redux';
import './Models/index';
// IMAGE
import ReceiptCompleteImage from 'styles/assets/receipt_complete.png';

const Step4 = () => {
  const dispatch = useDispatch();

  return (
    <div className="py-6">
      {/* タイトル・TITLE */}
      <Row className="mb-8">
        <Col sm={24} md={24} lg={24} type="flex" align="center">
          <Space direction="vertical" align="center">
            <span className="page-title01" style={{ lineHeight: '1.33' }}>
              領収書作成が完了しました。
              <br />
              領収書をダウンロード もしくは メールで送付してください。
            </span>
          </Space>
        </Col>
      </Row>

      {/* 画像・IMAGE */}
      <Row className="mb-8">
        <Col sm={24} md={24} lg={24} type="flex" align="center">
          <Image preview={false} width={390} height={309} src={ReceiptCompleteImage} />
        </Col>
      </Row>

      {/* BUTTONS */}
      <Row>
        <Col sm={24} md={24} lg={24} type="flex" align="center">
          <Space>
            {/* ダウンロード（zip） */}
            <Button
              size="large"
              onClick={() => {}}
              className="icon-btn"
              icon={<span class="material-symbols-outlined">download</span>}
              type="primary"
              style={{ fontWeight: '600' }}
            >
              {'ダウンロード（zip）'}
            </Button>

            {/* メールで送る */}
            <Button
              size="large"
              onClick={() => {}}
              className="icon-btn"
              icon={<span class="material-symbols-outlined fill-icon">send</span>}
              type="primary"
              style={{ fontWeight: '600' }}
            >
              {'メールで送る'}
            </Button>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default Step4;
