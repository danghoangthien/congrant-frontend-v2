import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Table, Row, Col, Pagination, Button } from 'antd';
import { push } from 'connected-react-router';

import { useHistory } from 'react-router-dom';
import TableSetting from './TableSetting';
import { columns as mockColumns } from '../mockData';
import '../Models/unclaimed';

const PAGE_SIZE_OPTIONS = [10, 20, 50, 100];
const columns = mockColumns;

const FundingTable = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const { items, pagination } = useSelector(state => state.unclaimedFundingList);
  const {
    location: { query, pathname, search },
  } = useSelector(state => state.router);
  const loading = useSelector(state => state.loading.models.unclaimedFundingList);

  const usp = new URLSearchParams(search);

  useMemo(() => {
    dispatch.unclaimedFundingList.list(query);
  }, [dispatch, query]);

  const onSelectChange = newSelectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;

  function onPageChange(page) {
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

  const renderPagination = () => (
    <Pagination
      className="decoupled-pagination"
      {...{
        defaultPageSize: pagination.limit,
        current: pagination.current_page,
        total: pagination.total_items,
        onChange: onPageChange,
        pageSizeOptions: PAGE_SIZE_OPTIONS,
        onShowSizeChange,
        showTotal: total => `Total ${total} items`,
      }}
    />
  );

  return (
    <Card title="Funding list">
      <Row className="mb-5">
        <Col sm={24} md={12} lg={10}>
          filters
        </Col>
        <Col sm={24} md={10} lg={12}>
          {renderPagination()}
        </Col>
        <Col sm={24} md={2} lg={2} className="text-center">
          <TableSetting />
        </Col>
      </Row>
      <Table
        columns={columns}
        rowKey={columns[0].dataIndex}
        rowSelection={rowSelection}
        loading={loading}
        dataSource={items}
        pagination={false}
      />
      <Row className="mb-5">
        <Col sm={24} md={12} lg={12}></Col>
        <Col sm={24} md={12} lg={12}>
          {renderPagination()}
        </Col>
      </Row>
      <span
        style={{
          marginLeft: 8,
        }}
      >
        {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
      </span>
    </Card>
  );
};

export default FundingTable;
