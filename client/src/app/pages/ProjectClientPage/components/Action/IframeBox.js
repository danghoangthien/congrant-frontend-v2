// ANTD
import { Button, Row } from 'antd';
import styled from 'styled-components/macro';

export const StyledIframeBoxDiv = styled.div`
  .iframe-img {
    height: 126px;
    margin-bottom: 10px;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .iframe-title {
    font-size: 14px;
    font-weight: 700;
    line-height: 1.5;
    margin-bottom: 10px;
  }
`;
const IframeBox = ({ mainColor }) => {
  return (
    <StyledIframeBoxDiv>
      <div className="iframe-img">
        <img
          src="https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80"
          alt=""
        />
      </div>
      <div className="iframe-title">「わたし、きょうもいきたよ」1歳のあおちゃんに心臓移植を</div>
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
    </StyledIframeBoxDiv>
  );
};

export default IframeBox;
