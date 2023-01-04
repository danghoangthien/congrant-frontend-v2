// ANTD
import { Row, Col, Tag, Button } from 'antd';
// STYLE
import styled from 'styled-components/macro';
// LAYOUT
import { PageLayout } from 'app/components/Layout/PageLayout.style';
// TABLE
import HistoryDetailTable from './components/HistoryDetailTable';
import Breadcumd from 'app/components/Breadcumd';
import { HEADER_BREADCUMD_DATA, HeaderWithBreadcumd } from './consts';
export const StyledTag = styled(Tag)`
  width: 40px;
  height: 40px;
  border-radius: 4px;
`;

const DETAIL_BREADCUMD_DATA = [
  ...HEADER_BREADCUMD_DATA,
  {
    id: 3,
    title: '2023-04-01 12:34:56',
    uri: '',
  },
];
const History = () => {
  return (
    <>
      <HeaderWithBreadcumd
        Breadcumd={<Breadcumd data={DETAIL_BREADCUMD_DATA} active={DETAIL_BREADCUMD_DATA[2].id} />}
      />
      <PageLayout>
        <Row className="mb-6" justify="space-between" align="middle">
          <Col>
            <div className="sub-page-title">{'領収書作成履歴'}</div>
          </Col>
          <Col>
            <Button
              type="primary"
              className="icon-btn"
              icon={<span className="material-symbols-outlined fill-icon">receipt</span>}
            >
              領収書一括ダウンロード
            </Button>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col span={24}>
            <HistoryDetailTable />
          </Col>
        </Row>
      </PageLayout>
    </>
  );
};

export default History;
