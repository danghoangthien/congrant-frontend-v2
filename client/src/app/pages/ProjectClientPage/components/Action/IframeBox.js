// ANTD
import { Button, Row } from 'antd';
// STYLE
import styled from 'styled-components/macro';

export const StyledIframeBoxDiv = styled.div`
  border-radius: 4px;
  border: 1px solid #dddddd;
  background: #ffffff;
  width: 200px;

  .iframe-img {
    height: 111px;

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

  .iframe-content {
    padding: 8px 8px 16px;
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
      <div className="iframe-content">
        <div className="iframe-title">「わたし、きょうもいきたよ」1歳のあおちゃんに心臓移植を</div>
        <Row justify="center">
          <Button
            href={process.env.PUBLIC_URL + '/project/client_name/1/1'}
            type="link"
            // size="large"
            style={{
              fontSize: 14,
              fontWeight: 700,
              width: 200,
              borderRadius: 7,
              backgroundColor: mainColor,
              borderColor: mainColor,
              color: '#ffffff',
            }}
          >
            詳細をみる
          </Button>
        </Row>
      </div>
    </StyledIframeBoxDiv>
  );
};

export default IframeBox;
