import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { PageLayout } from 'app/components/Layout/PageLayout.style';
import { Card, Row, Col, Checkbox, Button, Table, Space } from 'antd';
import DrawerHandle from 'app/components/DrawerHandle';
import Detail, { DETAIL_KEY_MAP } from 'app/pages/IndividualPage/components/Detail';
import { DETAIL_MODE } from 'utils/consts';

const Naming = () => {
  const renderPageTitle = () => {
    return (
      <>
        <Helmet>
          <title>{'個人サポーターの名寄せ'}</title>
          <meta name="description" content={'...'} />
        </Helmet>
      </>
    );
  };

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
    postcode: `${'550000' + i}`,
    address: `${'大阪府大阪市西区・・・' + i}`,
  }));

  const columnMap = {
    personal_id: {
      width: 120,
      title: '個人No.',
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
      render: email => <span>{email}</span>,
      csvOutput: ({ email }) => email,
    },
    phone: {
      title: '電話番号',
      dataIndex: 'phone',
      csvOutput: ({ phone }) => phone,
    },
    postcode: {
      title: '郵便番号',
      dataIndex: 'postcode',
      csvOutput: ({ postcode }) => postcode,
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

  const rowSelection = {
    columnWidth: '48px',
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User',
      // Column configuration not to be checked
      name: record.name,
    }),
  };

  return (
    <>
      {renderPageTitle()}
      <PageLayout>
        {/* タイトル・Title */}
        <Row type="flex" align="middle" className="mb-6">
          <Col>
            <div className="sub-page-title">{'個人サポーターの名寄せ'}</div>
          </Col>
        </Row>

        <Card className="mb-6">
          <Row className="mb-3">
            <Col sm={24} md={24} lg={24}>
              <span className="bold" style={{ fontSize: 14 }}>
                {'名寄せ条件（AND）'}
              </span>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col sm={24} md={24} lg={24}>
              <Checkbox.Group options={options} defaultValue={['1']} />
            </Col>
          </Row>
        </Card>

        <Card className="mb-6" bodyStyle={{ padding: 0 }}>
          <Row className="py-4 px-6">
            <Col sm={24} md={20} lg={20}>
              <span style={{ fontSize: '16px', fontWeight: '600' }}>
                {'メールアドレス「tanaka@gmail.com」と氏名「田中 太郎」が一致'}
              </span>
            </Col>
            <Col type="flex" align="right" sm={24} md={4} lg={4}>
              <Link className="sidebar-link" to={`/app/individuals-naming-detail`}>
                <Button type="primary">
                  <span>{'名寄せ先の選択へ'}</span>
                </Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col sm={24} md={24} lg={24}>
              <DrawerHandle drawerTitle="田中 太郎" drawerComponent={<Detail data={{}} />}>
                <Table
                  dataSource={dataSource}
                  columns={columns}
                  rowSelection={{
                    ...rowSelection,
                  }}
                  pagination={false}
                />
              </DrawerHandle>
            </Col>
          </Row>
          <Row className="py-4 px-6">
            <Col type="flex" align="right" sm={24} md={24} lg={24}>
              <Link className="sidebar-link" to={`/app/individuals-naming-detail`}>
                <Button type="primary">
                  <span>{'名寄せ先の選択へ'}</span>
                </Button>
              </Link>
            </Col>
          </Row>
        </Card>

        <Card bodyStyle={{ padding: 0 }}>
          <Row className="py-4 px-6">
            <Col sm={24} md={20} lg={20}>
              <span style={{ fontSize: '16px', fontWeight: '600' }}>
                {'メールアドレス「yamada@gmail.com」と氏名「山田 花子」が一致'}
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
              <DrawerHandle drawerTitle="田中 太郎" drawerComponent={<Detail data={{}} />}>
                <Table
                  tableLayout="fixed"
                  dataSource={dataSource}
                  columns={columns}
                  rowSelection={{
                    ...rowSelection,
                  }}
                  pagination={false}
                />
              </DrawerHandle>
            </Col>
          </Row>
          <Row className="py-4 px-6">
            <Col type="flex" align="right" sm={24} md={24} lg={24}>
              <Button type="primary" disabled>
                <span>{'名寄せ先の選択へ'}</span>
              </Button>
            </Col>
          </Row>
        </Card>
      </PageLayout>
    </>
  );
};

export default Naming;
