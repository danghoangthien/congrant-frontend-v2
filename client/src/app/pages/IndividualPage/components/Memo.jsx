import { useEffect, useMemo, useState } from 'react';
import { Badge, Descriptions, Row, Col, Button, Table, Tag, Input } from 'antd';
import { StyledWarningIcon, StyledPrimaryIcon } from 'styles/global-styles';
import { DeleteFilled, EditFilled, SendOutlined, MinusOutlined } from '@ant-design/icons';
import { MemoStyle } from './Memo.style';
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Title = () => {
  return (
    <Row className="mt-4 mb-1">
      <Col>
        <h3 className="supporter-detail-ttl">{'内部メモ'}</h3>
      </Col>
    </Row>
  );
};

const Memo = ({ data }) => {
  console.log('Memo');
  return (
    <>
      <MemoStyle>
        <Title />

        {/* メモの入力欄・Memo Input Field */}
        <Row className="mt-2">
          <Col sm={24} md={24} lg={24}>
            <Input.TextArea
              placeholder="メモを入力してください"
              autoSize={{ minRows: 2, maxRows: 6 }}
              suffix={
                <StyledPrimaryIcon>
                  <SendOutlined className="display-inline-flex" />
                </StyledPrimaryIcon>
              }
            />
          </Col>
        </Row>

        {/* メモコンテンツ・Memo List */}
        <>
          <Row className="mt-8">
            <Col span={24} className="mb-3">
              <Row justify="space-between" align="middle">
                <Col>
                  <Row align="middle">
                    <span className="memo-date">{'2022-09-01 12:23:56'}</span>
                    <span className="memo-person">
                      <PersonIcon className="icon" />
                      荒木 雄大
                    </span>
                  </Row>
                </Col>
                <Col>
                  <Row align="middle">
                    <span className="memo-action-button edit-button mr-2">
                      <EditIcon />
                    </span>
                    <span className="memo-action-button delete-button">
                      <DeleteIcon />
                    </span>
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
          <Row className="mt-8">
            <Col span={24} className="mb-3">
              <Row justify="space-between" align="middle">
                <Col>
                  <Row align="middle">
                    <span className="memo-date">{'2022-09-01 12:23:56'}</span>
                    <span className="memo-person">
                      <PersonIcon className="icon" />
                      荒木 雄大
                    </span>
                  </Row>
                </Col>
                <Col>
                  <Row align="middle">
                    <span className="memo-action-button edit-button mr-2">
                      <EditIcon />
                    </span>
                    <span className="memo-action-button delete-button">
                      <DeleteIcon />
                    </span>
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
          <Row className="mt-8">
            <Col span={24} className="mb-3">
              <Row justify="space-between" align="middle">
                <Col>
                  <Row align="middle">
                    <span className="memo-date">{'2022-09-01 12:23:56'}</span>
                    <span className="memo-person">
                      <PersonIcon className="icon" />
                      荒木 雄大
                    </span>
                  </Row>
                </Col>
                <Col>
                  <Row align="middle">
                    <span className="memo-action-button edit-button mr-2">
                      <EditIcon />
                    </span>
                    <span className="memo-action-button delete-button">
                      <DeleteIcon />
                    </span>
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
          <Row className="mt-8">
            <Col span={24} className="mb-3">
              <Row justify="space-between" align="middle">
                <Col>
                  <Row align="middle">
                    <span className="memo-date">{'2022-09-01 12:23:56'}</span>
                    <span className="memo-person">
                      <PersonIcon className="icon" />
                      荒木 雄大
                    </span>
                  </Row>
                </Col>
                <Col>
                  <Row align="middle">
                    <span className="memo-action-button edit-button mr-2">
                      <EditIcon />
                    </span>
                    <span className="memo-action-button delete-button">
                      <DeleteIcon />
                    </span>
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
          <Row className="mt-8">
            <Col span={24} className="mb-3">
              <Row justify="space-between" align="middle">
                <Col>
                  <Row align="middle">
                    <span className="memo-date">{'2022-09-01 12:23:56'}</span>
                    <span className="memo-person">
                      <PersonIcon className="icon" />
                      荒木 雄大
                    </span>
                  </Row>
                </Col>
                <Col>
                  <Row align="middle">
                    <span className="memo-action-button edit-button mr-2">
                      <EditIcon />
                    </span>
                    <span className="memo-action-button delete-button">
                      <DeleteIcon />
                    </span>
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
        </>
      </MemoStyle>
    </>
  );
};

export default Memo;
