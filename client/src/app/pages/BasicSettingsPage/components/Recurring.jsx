// ANTD
import { Row, Col, Checkbox, Space } from 'antd';
import styled from 'styled-components/macro';

export const StyledDetailSpace = styled(Space)`
  background: #fafaf8;
  border: 1px solid #d9d9d7;
  border-radius: 4px;
  padding: 16px;
  gap: 24px;
  font-weight: 300;
  font-size: 12px;
  line-height: 22px;
  width: 600px;
`;

const Recurring = () => {
  return (
    <>
      <Row className="mb-8">
        <Col sm={24} md={24} lg={24}>
          <span className="page-title01">{'継続決済'}</span>
        </Col>
      </Row>

      {/* 寄付決済 */}
      <Row className="mb-6">
        <Col className="mb-4" sm={24} md={24} lg={24}>
          <span className="page-sub-title">{'解約フォーム'}</span>
        </Col>
        <Col className="mb-4" sm={24} md={24} lg={24}>
          <Checkbox checked>{'解約フォームを決済完了メールに掲載する'}</Checkbox>
        </Col>
        <Col sm={24} md={24} lg={24}>
          <StyledDetailSpace direction="vertical">
            {'■チェックをつけた場合' +
              '毎月・毎年の継続決済の解約フォームが決済完了メールに掲載され、サポーターのタイミングで解約を申し込めるようになります。'}
            {'■チェックを外した場合' +
              '解約フォームは決済完了メールには掲載されません。サポーターからの解約依頼を受けた場合は団体側で管理画面から解約処理をおこなってください。'}
          </StyledDetailSpace>
        </Col>
      </Row>
    </>
  );
};

export default Recurring;
