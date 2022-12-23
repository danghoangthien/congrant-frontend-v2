import { Helmet } from 'react-helmet-async';
// ANTD
import { Button, message, notification, Space, Row, Col, Card } from 'antd';
import { DANGER_COLOR, BLUE_COLOR } from 'styles/StyleConstants';
import { PageLayout } from 'app/components/Layout/PageLayout.style';
import { openNotification } from 'app/components/Notification';

const APP_URL = process.env.REACT_APP_APP_URL;
const embedCode = `<iframe src="${APP_URL}/project_iframe/client_name/1" frameborder="0" width="300" height="380" onload="this.style.height=(this.contentWindow.document.body.scrollHeight)+'px';console.log('onloaded')"></iframe>'
`;

const HomePage = () => {
  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'ホーム'}</title>
          <meta name="description" content={'...'} />
        </Helmet>
      </>
    );
  };

  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a success message',
      duration: null,
    });
  };
  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'This is an error message',
      duration: null,
    });
  };
  const warning = () => {
    messageApi.open({
      type: 'warning',
      content: 'This is a warning message',
      duration: null,
    });
  };
  const loading = () => {
    messageApi.open({
      type: 'loading',
      content: 'This is a loading message',
      duration: null,
    });
  };
  const info = () => {
    messageApi.open({
      type: 'info',
      content: 'This is a info message',
      duration: null,
      icon: (
        <span
          className="material-symbols-outlined fill-icon icon"
          style={{ color: BLUE_COLOR, fontSize: '20px' }}
        >
          info
        </span>
      ),
    });
  };

  return (
    <>
      {renderPageTitle()}
      {contextHolder}
      <PageLayout>
        <Card>
          <Row>
            {/* 確認ダイアログ */}
            <Col className="mb-4" span={24}>
              <Button
                type="primary"
                onClick={() =>
                  openNotification({
                    key: 'infoNotication',
                    message: '確認ダイアログ',
                    description: 'Some contents...',
                    btn: (
                      <Space>
                        <Button
                          type="primary"
                          onClick={() => {
                            console.log('On Ok Notification');
                            notification.close('infoNotication');
                          }}
                        >
                          {'OK'}
                        </Button>
                      </Space>
                    ),
                    status: 'info',
                    onClick: () => {
                      console.log('On Click Notification');
                      notification.close('infoNotication');
                    },
                  })
                }
              >
                確認ダイアログ
              </Button>
            </Col>
            {/* 完了ダイアログ */}
            <Col className="mb-4" span={24}>
              <Button
                type="primary"
                onClick={() =>
                  openNotification({
                    key: 'successNotication',
                    message: '完了ダイアログ',
                    description: 'Some contents...',
                    btn: (
                      <Space>
                        <Button
                          type="primary"
                          onClick={() => {
                            console.log('On Ok Notification');
                            notification.close('successNotication');
                          }}
                        >
                          {'OK'}
                        </Button>
                      </Space>
                    ),
                    status: 'success',
                    onClick: () => {
                      console.log('On Click Notification');
                      notification.close('successNotication');
                    },
                  })
                }
              >
                完了ダイアログ
              </Button>
            </Col>
            {/* 注意ダイアログ */}
            <Col className="mb-4" span={24}>
              <Button
                type="primary"
                onClick={() =>
                  openNotification({
                    key: 'warningNotication',
                    message: '注意ダイアログ',
                    description: 'Some contents...',
                    btn: (
                      <Space>
                        <Button
                          type="primary"
                          onClick={() => {
                            console.log('On Ok Notification');
                            notification.close('warningNotication');
                          }}
                        >
                          {'OK'}
                        </Button>
                      </Space>
                    ),
                    status: 'warning',
                    onClick: () => {
                      console.log('On Click Notification');
                      notification.close('warningNotication');
                    },
                  })
                }
              >
                注意ダイアログ
              </Button>
            </Col>
            {/* エラーダイアログ */}
            <Col className="mb-4" span={24}>
              <Button
                type="primary"
                onClick={() =>
                  openNotification({
                    key: 'errorNotication',
                    message: 'エラーダイアログ',
                    description: 'Some contents...',
                    btn: (
                      <Space>
                        <Button
                          type="primary"
                          onClick={() => {
                            console.log('On Ok Notification');
                            notification.close('errorNotication');
                          }}
                        >
                          {'OK'}
                        </Button>
                      </Space>
                    ),
                    status: 'error',
                    onClick: () => {
                      console.log('On Click Notification');
                      notification.close('errorNotication');
                    },
                  })
                }
              >
                エラーダイアログ
              </Button>
            </Col>
            {/* 削除ダイアログ */}
            <Col className="mb-4" span={24}>
              <Button
                type="primary"
                onClick={() =>
                  openNotification({
                    key: 'deleteNotication',
                    message: '削除ダイアログ',
                    description: 'Some contents...',
                    btn: (
                      <Space>
                        <Button
                          style={{ border: 'none', boxShadow: 'none' }}
                          onClick={() => {
                            console.log('On Cancel Notification');
                            notification.close('deleteNotication');
                          }}
                        >
                          {'キャンセル'}
                        </Button>
                        <Button
                          type="primary"
                          style={{ backgroundColor: DANGER_COLOR }}
                          onClick={() => {
                            console.log('On Ok Notification');
                            notification.close('deleteNotication');
                          }}
                        >
                          {'削除する'}
                        </Button>
                      </Space>
                    ),
                    status: 'warn',
                    onClick: () => {
                      console.log('On Click Notification');
                      notification.close('deleteNotication');
                    },
                  })
                }
              >
                削除ダイアログ
              </Button>
            </Col>
            <Col span={24}>
              <Space>
                <Button onClick={success}>Success</Button>
                <Button onClick={error}>Error</Button>
                <Button onClick={warning}>Warning</Button>
                <Button onClick={info}>Info</Button>
                <Button onClick={loading}>Loading</Button>
              </Space>
            </Col>
            {<div dangerouslySetInnerHTML={{ __html: embedCode }} />}
          </Row>
        </Card>
        <iframe
          title="test"
          src={process.env.PUBLIC_URL + '/project_iframe/client_name/1'}
          // frameborder="0"
          width="200"
        ></iframe>
      </PageLayout>
    </>
  );
};

export { HomePage };

export default HomePage;
