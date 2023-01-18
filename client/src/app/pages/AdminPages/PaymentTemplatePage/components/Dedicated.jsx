import { Row, Radio, Button } from 'antd';
import styled from 'styled-components/macro';
import GroupExamPending from './GroupExamPending';
import Registration from './Registration';

// Styles
export const StyledRadioGroup = styled(Radio.Group)`
  width: 100%;
  .ant-radio-button-wrapper {
    width: 50%;
  }
`;

const Dedicated = () => {
  return (
    <>
      <Row className="mb-2">
        <div className="page-sub-title">{'団体審査：保留'}</div>
      </Row>
      <Row className="mb-2">
        <GroupExamPending />
      </Row>
      <Registration className="mb-6" />
      <Row className="mb-2">
        <div className="page-sub-title">{'団体審査：NG'}</div>
      </Row>
      <Row className="mb-2">
        <GroupExamPending />
      </Row>
      <Registration className="mb-6" />
      <Row className="mb-2">
        <div className="page-sub-title">{'プロジェクト審査：保留'}</div>
      </Row>
      <Row className="mb-2">
        <GroupExamPending />
      </Row>
      <Registration />
    </>
  );
};

export default Dedicated;
