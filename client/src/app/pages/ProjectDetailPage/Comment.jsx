import { Link } from 'react-router-dom';
import { Row, Col, Card, Button } from 'antd';
import AddIcon from '@mui/icons-material/Add';
// Styles
import { PageLayout } from 'app/components/Layout/PageLayout.style';
// Components
import CommentTable from './components/CommentTable';

const Summary = () => {
  return (
    <>
      <PageLayout>
        {/* Should create a component for this */}
        <Row justify="space-between" align="middle" className="item mb-5">
          {/* 左の部分・Left Part */}
          <Col>
            <Row type="flex" align="middle">
              <Col className="mr-6">
                <div className="sub-page-title">{'応援コメント'}</div>
              </Col>
            </Row>
          </Col>

          {/* 右の部分・Right Part */}
          <Col />
        </Row>
        {/* 活動報告 */}
        <Card className="mb-5 table-card pb-0" bodyStyle={{ padding: 0 }}>
          <Row>
            <CommentTable />
          </Row>
        </Card>
      </PageLayout>
    </>
  );
};

export default Summary;
