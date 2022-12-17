import { useState, useEffect } from 'react';
import { CommentStyle, CommentItem, ResponseList, ResponseItem } from './Comment.style';
import { List, Button, Skeleton, Image, Avatar, Row, Col, Card } from 'antd';

const count = 5;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

const CommentTab = ({ mainColor }) => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);

  const ResponseData = [
    {
      title: 'Ant Design Title 1',
    },
  ];

  useEffect(() => {
    fetch(fakeDataUrl)
      .then(res => res.json())
      .then(res => {
        setInitLoading(false);
        setData(res.results);
        setList(res.results);
      });
  }, []);

  const onLoadMore = () => {
    setLoading(true);
    setList(
      data.concat(
        [...new Array(count)].map(() => ({
          loading: true,
          name: {},
          picture: {},
        })),
      ),
    );
    fetch(fakeDataUrl)
      .then(res => res.json())
      .then(res => {
        const newData = data.concat(res.results);
        setData(newData);
        setList(newData);
        setLoading(false);
        // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
        // In real scene, you can using public method of react-virtualized:
        // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
        window.dispatchEvent(new Event('resize'));
      });
  };

  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button onClick={onLoadMore}>もっと見る</Button>
      </div>
    ) : null;

  return (
    <CommentStyle>
      <List
        className="Comment-list"
        loading={initLoading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={list}
        renderItem={item => (
          <CommentItem>
            <Skeleton title={false} loading={item.loading} active>
              <div className="content-wrapper">
                <div className="box-wrapper">
                  <Row wrap={false} justify="space-between" align="middle" className="mb-2">
                    <Col>
                      <div className="title">オカダデンタルオフィス 岡田淳</div>
                    </Col>
                    <Col>
                      <div className="date">2022/12/09</div>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                      <div className="text">
                        応援しています！テレビで拝見しました。少なくて申し訳ありませんが、少しでもお力添えになれればと願っています。早く元気になるよう、心からご祈念申し上げます。頑張って下さい。
                      </div>
                    </Col>
                  </Row>
                </div>
                <Row>
                  <Col span={24}>
                    <ResponseList
                      className="response-list"
                      itemLayout="horizontal"
                      dataSource={ResponseData}
                      split={false}
                      renderItem={item => (
                        <ResponseItem>
                          <List.Item.Meta
                            avatar={
                              <Avatar src="https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80" />
                            }
                            description={
                              <>
                                こんにちは、ウンコちゃんずプロジェクト実行委員会です。
                                <br />
                                この度は、当プロジェクトにご支援いただき、そしてまた温かい応援メッセージを頂き誠にありがとうございます。
                                <br />
                                残りの２日間も精一杯頑張って参ります！
                                <br />
                                引き続きの応援、情報拡散などのご協力をどうぞ宜しくお願いいたします。
                              </>
                            }
                          />
                        </ResponseItem>
                      )}
                    />
                  </Col>
                </Row>
              </div>
            </Skeleton>
          </CommentItem>
        )}
      />
    </CommentStyle>
  );
};

export default CommentTab;
