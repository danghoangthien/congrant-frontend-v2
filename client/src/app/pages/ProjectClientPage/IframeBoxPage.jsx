import { Space, Button, Row, Col, Input, Tooltip } from 'antd';
import IframeBox from './components/Action/IframeBox';

const IframeBoxPage = () => {
  const MAIN_COLOR = '#e34855';
  return (
    <Row wrap={false}>
      <Col flex="200px">
        <IframeBox mainColor={MAIN_COLOR} />
      </Col>
    </Row>
  );
};

export default IframeBoxPage;
