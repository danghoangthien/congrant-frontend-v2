import { useEffect, useMemo, useState } from 'react';
import { Badge, Descriptions, Row, Col, Button, Table, Tag, Input } from 'antd';
import { StyledWarningIcon, StyledPrimaryIcon } from 'styles/global-styles';
import { DeleteFilled, EditFilled, SendOutlined, MinusOutlined } from '@ant-design/icons';

const Title = () => {
  return (
    <Row className="mt-2">
      <Col sm={24} md={24} lg={24}>
        <h3 className="bold">
          <StyledPrimaryIcon>
            <MinusOutlined className="display-inline-flex bold mr-2" />
          </StyledPrimaryIcon>
          {'基本情報'}
        </h3>
      </Col>
    </Row>
  );
};

const Memo = ({ data }) => {
  console.log('Memo');
  return (
    <>
      <Title />
      <Row className="mt-2">
        <Col sm={24} md={24} lg={24}>
          <Input
            placeholder="メモを入力してください"
            suffix={
              <StyledPrimaryIcon>
                <SendOutlined className="display-inline-flex" />
              </StyledPrimaryIcon>
            }
          />
        </Col>
      </Row>
      <>
        <Row className="mt-7">
          <Col sm={12} md={12} lg={12}>
            <span>{'2022-09-01 12:23:56'}</span>
          </Col>
          <Col type="flex" align="right" sm={12} md={12} lg={12}>
            <StyledPrimaryIcon>
              <EditFilled className="display-inline-flex" />
            </StyledPrimaryIcon>
            <StyledWarningIcon>
              <DeleteFilled className="display-inline-flex ml-2" />
            </StyledWarningIcon>
          </Col>
          <Col sm={24} md={24} lg={24} className="mt-5">
            <p>
              {
                '田中さんの紹介で会社の同僚の鈴木さんという方が寄付を検討してくれているようです。次回のイベントに参加されるということなので声かけをしてみます。次回田中さんにお会いした時にお礼を伝えます。'
              }
            </p>
          </Col>
        </Row>
        <Row className="mt-7">
          <Col sm={12} md={12} lg={12}>
            <span>{'2022-09-01 12:23:56'}</span>
          </Col>
          <Col type="flex" align="right" sm={12} md={12} lg={12}>
            <StyledPrimaryIcon>
              <EditFilled className="display-inline-flex" />
            </StyledPrimaryIcon>
            <StyledWarningIcon>
              <DeleteFilled className="display-inline-flex ml-2" />
            </StyledWarningIcon>
          </Col>
          <Col sm={24} md={24} lg={24} className="mt-5">
            <p>
              {'電話で寄付の増額の連絡があった。山田が対応して金額変更の方法をお伝えしました。'}
            </p>
          </Col>
        </Row>
        <Row className="mt-7">
          <Col sm={12} md={12} lg={12}>
            <span>{'2022-09-01 12:23:56'}</span>
          </Col>
          <Col type="flex" align="right" sm={12} md={12} lg={12}>
            <StyledPrimaryIcon>
              <EditFilled className="display-inline-flex" />
            </StyledPrimaryIcon>
            <StyledWarningIcon>
              <DeleteFilled className="display-inline-flex ml-2" />
            </StyledWarningIcon>
          </Col>
          <Col sm={24} md={24} lg={24} className="mt-5">
            <p>
              {
                '****のイベントに参加して名刺交換。そこからホームページを見てくれて寄付をしてくれた。'
              }
            </p>
          </Col>
        </Row>
      </>
    </>
  );
};

export default Memo;
