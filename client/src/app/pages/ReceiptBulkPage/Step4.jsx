import { Row, Col, Image, Space, Descriptions, DatePicker, Button, Table } from 'antd';
import { SendOutlined, DownloadOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import './Models/index';

const Step4 = () => {
  const dispatch = useDispatch();
  return (
    <div className="item ml-5">
      <Row className="mb-10">
        <Col sm={24} md={24} lg={24} type="flex" align="center">
          <Space direction="vertical" align="center">
            <span className="page-title">{'領収書作成が完了しました。'}</span>
            <span>{'領収書をダウンロード もしくは メールで送付してください。'}</span>
          </Space>
        </Col>
      </Row>
      <Row className="mb-10">
        <Col sm={24} md={24} lg={24} type="flex" align="center">
          <Image
            width={390}
            height={309}
            src="/stock-vector-vector-illustration-mailbox-with-letters-receiving-letters-sorting-web-mail-or-mobile-service-1321968527.jpeg"
          />
        </Col>
      </Row>
      <Row className="mb-10">
        <Col sm={24} md={24} lg={24} type="flex" align="center">
          <Space>
            <Button
              onClick={() => dispatch.receiptBulkStep.setActive('5')}
              className="bold"
              icon={<DownloadOutlined />}
              type="primary"
            >
              {'ダウンロード（zip）'}
            </Button>
            <Button
              onClick={() => dispatch.receiptBulkStep.setActive('5')}
              className="bold"
              icon={<SendOutlined />}
              type="primary"
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
