import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Table, Row, Col, Pagination, Button, Checkbox, Select } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { push } from 'connected-react-router';

import { useHistory } from 'react-router-dom';
import TableSetting from './TableSetting';
import Download from './Download';
import { getRenderColumns } from '../mockDataReceived';
import '../Models/received';

const PAGE_SIZE_OPTIONS = [10, 20, 50, 100];
let columns = getRenderColumns();

const FundingTable = ({ model }) => {
  const dispatch = useDispatch();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  console.log('selectedRowKeys', selectedRowKeys);
  const { items, pagination, column_setting } = useSelector(state => state[model]);

  const {
    location: { query, pathname, search },
  } = useSelector(state => state.router);
  const loading = useSelector(state => state.loading.models[model]);

  const usp = new URLSearchParams(search);

  useMemo(() => {
    dispatch[model].list(query);
  }, [dispatch, query]);

  useEffect(() => {
    if (column_setting !== null) {
      columns = getRenderColumns();
      dispatch[model].list(query);
    }
  }, [column_setting]);

  const onSelectChange = newSelectedRowKeys => {
    console.log('newSelectedRowKeys', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;

  function onPageChange(page) {
    setSelectedRowKeys([]);
    const usp = new URLSearchParams(search);
    if (page) {
      usp.set('page', page);
    } else {
      usp.delete('page');
    }

    dispatch(push(`${pathname}?${usp}`));
  }

  function onShowSizeChange(_, size) {
    const usp = new URLSearchParams(search);
    if (size) {
      usp.set('limit', size);
    } else {
      usp.delete('limit');
    }

    dispatch(push(`${pathname}?${usp}`));
  }

  const renderPagination = () => {
    console.log('pagination', pagination);
    return (
      <Pagination
        className="decoupled-pagination"
        key={Math.random()}
        {...{
          defaultPageSize: pagination.limit,
          current: parseInt(pagination.current_page),
          total: parseInt(pagination.total_items),
          onChange: onPageChange,
          pageSizeOptions: PAGE_SIZE_OPTIONS,
          onShowSizeChange,
          showTotal: total => `全${total}件`,
        }}
      />
    );
  };

  return (
    <Card className="ma-5">
      <Row className="mb-5 mx-5">
        <Col sm={24} md={12} lg={10}>
          {'受領済み寄付一覧'} <Download model={model} />
        </Col>
        <Col sm={24} md={10} lg={12}>
          {renderPagination()}
        </Col>
        <Col sm={24} md={2} lg={2} className="text-center">
          <TableSetting model={model} />
        </Col>
      </Row>
      <Table
        key={Math.random()}
        columns={columns}
        rowKey={columns[0].dataIndex} /** must be unique, ex: ID or seq */
        rowSelection={{ ...rowSelection }}
        loading={loading}
        dataSource={items}
        pagination={false}
      />
      <Row className="mb-5 mx-5">
        <Col sm={24} md={12} lg={12}></Col>
        <Col sm={24} md={12} lg={12}>
          {renderPagination()}
        </Col>
      </Row>
      <Row className="mb-5 selected-status-ops py-2 px-2">
        <Col sm={24} md={24} lg={24}>
          <Checkbox
            checked={selectedRowKeys.length == items.length}
            onChange={e => {
              if (e.target.checked) {
                setSelectedRowKeys(
                  items.map(item => {
                    return item[columns[0].dataIndex];
                  }),
                );
              } else {
                setSelectedRowKeys([]);
              }
            }}
          >
            全件選択
          </Checkbox>
          <span className="ml-5">{hasSelected ? `${selectedRowKeys.length} 件選択中` : ''}</span>
          <Button className="ml-5" icon={<MailOutlined />}>
            {'メールを送る'}
          </Button>
          <Select
            className="ml-5"
            defaultValue={{
              value: '1',
            }}
            style={{
              width: 155,
            }}
            onChange={onSelectChange}
          >
            <Select.Option value="1">{'その他の一括操作'}</Select.Option>
          </Select>
        </Col>
      </Row>
    </Card>
  );
};

export default FundingTable;
