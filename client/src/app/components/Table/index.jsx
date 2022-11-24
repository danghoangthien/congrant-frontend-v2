import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Table, Row, Col, Pagination, Checkbox, Select, Dropdown, Menu, Space } from 'antd';
import { push } from 'connected-react-router';
import Download from './Download';
import TableSetting from './TableSetting';
import { TableStyle } from './Table.style';
import DrawerHandle from 'app/components/DrawerHandle';

const PAGE_SIZE_OPTIONS = [10, 20, 50, 100];

const DataTable = ({
  model,
  metaData,
  Detail = null,
  contextButtons = [],
  contextDropdownItems = () => {},
  TableName = null,
  hasTableSetting,
  showDownLoad = true,
  ExtraTitle = null,
}) => {
  const dispatch = useDispatch();
  const [activeRow, setActiveRow] = useState(null);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  console.log('selectedRowKeys', selectedRowKeys);
  const { items, pagination, column_setting } = useSelector(state => state[model]);
  let columns = metaData.getRenderColumns();
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
      columns = metaData.getRenderColumns();
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
    columnWidth: '48px',
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

  // ページネーション・Pagination
  const renderPagination = () => {
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
          showTotal: (total, range) => `${range[0]}〜${range[1]}件/${total}件`,
        }}
      />
    );
  };

  return (
    <TableStyle>
      <>
        <Card bodyStyle={{ padding: 0 }} className={hasSelected && 'mb-14'}>
          <Row className="py-4 px-6">
            <Col sm={24} md={12} lg={12}>
              <Space size={24}>
                <span className="table-title">{TableName}</span>
                {showDownLoad && <Download model={model} columnMap={metaData.columnMap} />}
              </Space>
            </Col>
            <Col sm={24} md={12} lg={12} type="flex" align="right">
              {ExtraTitle && ExtraTitle}
            </Col>
            {hasTableSetting && (
              <Col sm={24} md={12} lg={14}>
                <Row align="middle" justify="end">
                  <Col className="text-center">
                    <TableSetting
                      model={model}
                      columnMap={metaData.columnMap}
                      localstorageKey={metaData.COLUMN_SETTING_LOCALSTORAGE}
                    />
                  </Col>
                </Row>
              </Col>
            )}
          </Row>
          <Row className="index-table-wrapper">
            <Col span={24}>
              <Table
                sticky={true}
                key={Math.random()}
                columns={columns}
                rowKey={columns[0].dataIndex} /** must be unique, ex: ID or seq */
                rowSelection={{ ...rowSelection }}
                loading={loading}
                dataSource={items}
                pagination={false}
                // showHeader={!hasSelected}
                onRow={(record, rowIndex) => {
                  return {
                    onClick: () => setActiveRow(record),
                  };
                }}
              />
            </Col>
          </Row>
          <Row className="my-4 mx-6" justify="end">
            <Col>{renderPagination()}</Col>
          </Row>
          {activeRow && Detail && (
            <DrawerHandle
              key={Math.random()}
              // drawerTitle={activeRow.full_name}
              drawerComponent={React.cloneElement(Detail, { data: activeRow })}
              isOpen
              onDrawerClose={() => setActiveRow(null)}
            />
          )}
        </Card>
        {hasSelected && (
          <div className="index-table-toolbar">
            <Row align="middle" className="selected-status-ops py-3 px-6">
              <Checkbox
                style={{ fontSize: '16px', fontWeight: '600' }}
                checked={selectedRowKeys.length === items.length}
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
              ></Checkbox>
              <span className="mx-4">{hasSelected ? `${selectedRowKeys.length}件選択中` : ''}</span>
              <span
                className="check-all-btn mr-8"
                onClick={e => {
                  if (selectedRowKeys.length !== items.length) {
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
              </span>
              {contextButtons.map(Component => {
                return <Component selectedRowKeys={selectedRowKeys} />;
              })}
              <Dropdown
                overlay={
                  <Menu
                    className="other-action-menu"
                    items={contextDropdownItems(selectedRowKeys) || []}
                  />
                }
                placement="topRight"
                trigger={['hover']}
              >
                <Select
                  className="ml-5"
                  style={{
                    width: 210,
                  }}
                  placeholder={'その他の一括操作'}
                  open={false}
                />
              </Dropdown>
            </Row>
          </div>
        )}
      </>
    </TableStyle>
  );
};

export default DataTable;
