import { Link } from 'react-router-dom';
import { SupporterPageLayout } from './components/SupporterPage.style';
import { Card, Row, Col, Checkbox, Button, Table, Tag } from 'antd';
const Naming = () => {
  const options = [
    { label: 'メールアドレスが一致', value: '1' },
    { label: '氏名が一致', value: '2' },
    { label: '電話番号が一致', value: '3' },
    { label: '郵便番号が一致', value: '4' },
  ];
  const dataSource = Array.from(Array(5).keys()).map(i => ({
    key: `${i}`,
    personal_id: `${'20220730' + i}`,
    full_name: '荒木 雄大',
    email: `yamada+${i}@gmail.com`,
    phone: `${'0938354758' + i}`,
    address: `${'大阪府大阪市西区・・・' + i}`,
  }));

  const columnMap = {
    personal_id: {
      title: '個人ID',
      dataIndex: 'personal_id',
      csvOutput: ({ personal_id }) => personal_id,
    },
    full_name: {
      title: '氏名',
      dataIndex: 'full_name',
      csvOutput: ({ full_name }) => full_name,
    },
    email: {
      title: 'メールアドレス',
      dataIndex: 'email',
      csvOutput: ({ email }) => email,
    },
    phone: {
      title: '電話番号',
      dataIndex: 'phone',
      csvOutput: ({ phone }) => phone,
    },
    address: {
      title: '住所',
      dataIndex: 'address',
      csvOutput: ({ address }) => address,
    },
  };
  const columns = Object.keys(columnMap).map(columnName => {
    return columnMap[columnName];
  });
  return (
    <>
      <SupporterPageLayout>
        <div className="item">
          <Card className="ma-5">
            <Row className="mb-3">
              <Col sm={24} md={24} lg={24}>
                <span className="bold">{'名寄せ条件（AND）'}</span>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col sm={24} md={24} lg={24}>
                <Checkbox.Group options={options} defaultValue={['1']} />
              </Col>
            </Row>
          </Card>
        </div>
        <div className="item">
          <Card className="ma-5">
            <Row className="mb-3">
              <Col sm={24} md={20} lg={20}>
                <span className="bold">
                  {'メールアドレス「tanaka@gmail.com」と氏名「田中 太郎」が一致'}
                </span>
              </Col>
              <Col type="flex" align="right" sm={24} md={4} lg={4}>
                <Link className="sidebar-link" to={`/individuals-naming-detail`}>
                  <Button type="primary">
                    <span>{'名寄せ先の選択へ'}</span>
                  </Button>
                </Link>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col sm={24} md={24} lg={24}>
                <Table dataSource={dataSource} columns={columns} />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col type="flex" align="right" sm={24} md={24} lg={24}>
                <Link className="sidebar-link" to={`/individuals-naming-detail`}>
                  <Button type="primary">
                    <span>{'名寄せ先の選択へ'}</span>
                  </Button>
                </Link>
              </Col>
            </Row>
          </Card>
        </div>
        <div className="item">
          <Card className="ma-5">
            <Row className="mb-3">
              <Col sm={24} md={20} lg={20}>
                <span className="bold">
                  {'メールアドレス「yamada@gmail.com」と氏名「田中 太郎」が一致'}
                </span>
              </Col>
              <Col type="flex" align="right" sm={24} md={4} lg={4}>
                <Button type="primary" disabled>
                  <span>{'名寄せ先の選択へ'}</span>
                </Button>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col sm={24} md={24} lg={24}>
                <Table dataSource={dataSource} columns={columns} />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col type="flex" align="right" sm={24} md={24} lg={24}>
                <Button type="primary" disabled>
                  <span>{'名寄せ先の選択へ'}</span>
                </Button>
              </Col>
            </Row>
          </Card>
        </div>
      </SupporterPageLayout>
    </>
  );
};

export default Naming;
