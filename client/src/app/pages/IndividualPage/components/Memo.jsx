import { useEffect, useMemo, useState } from 'react';
import { Row, Col, Button, Input } from 'antd';
import { MemoStyle } from './Memo.style';
import { PRIMARY_COLOR, TEXT_GRAY_COLOR } from 'styles/StyleConstants';
import styled from 'styled-components/macro';

const MemoInput = styled.div`
  position: relative;

  & .ant-input {
    padding-right: 50px;
    border-radius: 4px;
  }

  & .btn {
    display: flex;
    align-items: center;
    width: auto;
    height: auto;
    border: none;
    box-shadow: none;
    position: absolute;
    top: 19px;
    right: 22px;

    .icon {
      font-size: 20px;
    }

    &:hover {
      .icon {
        color: ${PRIMARY_COLOR} !important;
      }
    }
  }
`;

const Title = () => {
  return (
    <Row className="mb-6">
      <Col>
        <h3 className="supporter-detail-ttl">{'内部メモ'}</h3>
      </Col>
    </Row>
  );
};

const Memo = ({ data }) => {
  const [showSendBtn, setShowSendBtn] = useState(false);
  return (
    <>
      <MemoStyle>
        <Title />

        {/* メモの入力欄・Memo Input Field */}
        <Row className="mb-6">
          <Col sm={24} md={24} lg={24}>
            <MemoInput>
              <Input.TextArea
                placeholder="メモを入力してください"
                autoSize={{ minRows: 2, maxRows: 6 }}
                onMouseOver={() => {
                  setShowSendBtn(true);
                }}
              />
              {showSendBtn && (
                <Button
                  className="btn"
                  onClick={() => {}}
                  icon={
                    <span
                      className="material-symbols-outlined fill-icon icon"
                      style={{ color: TEXT_GRAY_COLOR }}
                    >
                      send
                    </span>
                  }
                ></Button>
              )}
            </MemoInput>
          </Col>
        </Row>

        {/* メモコンテンツ・Memo List */}
        <>
          {Array.from(Array(5).keys()).map(i => (
            <MemoItem />
          ))}
        </>
      </MemoStyle>
    </>
  );
};

const MemoItem = () => {
  const [showActionButtons, setShowActionButtons] = useState(false);
  return (
    <Row
      className="mb-8"
      onMouseEnter={() => setShowActionButtons(true)}
      onMouseLeave={() => setShowActionButtons(false)}
    >
      <Col span={24} className="mb-2">
        <Row justify="space-between" align="middle">
          <Col style={{ height: '24px' }}>
            <Row align="middle">
              <span className="memo-date">{'2022-09-01 12:23:56'}</span>
              <span className="memo-person">
                <span className="material-symbols-outlined fill-icon icon">person</span>
                荒木 雄大
              </span>
            </Row>
          </Col>
          <Col style={{ height: '24px' }}>
            <Row align="middle">
              {showActionButtons && (
                <>
                  <Button
                    className="memo-action-button edit-button mr-2"
                    icon={
                      <span
                        className="material-symbols-outlined icon fill-icon"
                        style={{ color: '#ffffff' }}
                      >
                        edit
                      </span>
                    }
                  ></Button>
                  <Button
                    className="memo-action-button delete-button"
                    icon={
                      <span
                        className="material-symbols-outlined icon fill-icon"
                        style={{ color: PRIMARY_COLOR }}
                      >
                        delete
                      </span>
                    }
                  ></Button>
                </>
              )}
            </Row>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <div>
          {
            '田中さんの紹介で会社の同僚の鈴木さんという方が寄付を検討してくれているようです。次回のイベントに参加されるということなので声かけをしてみます。次回田中さんにお会いした時にお礼を伝えます。'
          }
        </div>
      </Col>
    </Row>
  );
};

export default Memo;
