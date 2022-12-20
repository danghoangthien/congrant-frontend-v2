import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { ActivityStyle, ActivityItem } from './Activity.style';
import { List, Button, Skeleton, Image, Row, Col, Card } from 'antd';

const count = 5;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

const ActivityTab = ({ mainColor }) => {
  const { url, ...rest } = useRouteMatch();
  console.log('useRouteMatch url', url);
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);

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
    <ActivityStyle>
      <List
        className="activity-list"
        loading={initLoading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={list}
        split={false}
        renderItem={item => (
          <Link to={`${url}?activity_id=1`} target="_self">
            <ActivityItem>
              <Skeleton title={false} loading={item.loading} active>
                <Card>
                  <Row wrap={false}>
                    <Col flex="auto" style={{ paddingRight: 30 }}>
                      <div className="date">2022/12/09</div>
                      <div className="title">
                        （募金活動・中止）12/11 仙台エリアにて募金活動は中止とさせて頂きます。
                      </div>
                      <div className="text">
                        下記の記事でお知らせしていた12/11の募金活動は中止とさせていただきます。
                        12/10は予定通り実施いたしますので、皆様の温かいご支援どうぞよろしくお願いいたします。
                      </div>
                    </Col>
                    <Col flex="200px">
                      <Image
                        height={155}
                        width="100%"
                        preview={false}
                        className="thumb-image"
                        src="https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80"
                        alt=""
                      />
                    </Col>
                  </Row>
                </Card>
              </Skeleton>
            </ActivityItem>
          </Link>
        )}
      />
    </ActivityStyle>
  );
};

export default ActivityTab;
