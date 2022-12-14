import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
// ANTD
import { Card, Table, Row, Col, Pagination, Checkbox, Select, Dropdown, Menu, Space } from 'antd';
// DOWNLOAD・ダウンロード
import Download from './Download';
// TABLE DISPLAY SETTING・テーブル表示設定
import TableSetting from './TableSetting';
// STYLE
import { TableStyle } from './Table.style';
// DETAIL DRAWER・詳細ページ
import DrawerHandle from 'app/components/DrawerHandle';

const PAGE_SIZE_OPTIONS = [10, 20, 50, 100];

const DataTable = ({
  model,
  metaData,
  Detail = null,
  contextButtons = [],
  TableName = null,
  hasTableSetting,
  showDownLoad = true,
  ExtraTitle = null,
  contextDropdownItems = () => {},
}) => {
  const dispatch = useDispatch();
  const [activeRow, setActiveRow] = useState(null);
  const [isAllRecordsSelected, setIsAllRecordsSelected] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const { items, pagination, column_setting } = useSelector(state => state[model]);
  let columns = metaData.getRenderColumns();
  const {
    location: { query, pathname, search },
  } = useSelector(state => state.router);
  const loading = useSelector(state => state.loading.models[model]);
  const usp = new URLSearchParams(window.location.search);
  const hasSelected = selectedRowKeys.length > 0;

  const onSelectChange = newSelectedRowKeys => {
    if (newSelectedRowKeys.length < selectedRowKeys.length) {
      setIsAllRecordsSelected(false);
    }
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    columnWidth: '48px',
  };

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
          showSizeChanger: false,
          showTotal: (total, range) => `${range[0]}〜${range[1]}件/${total}件`,
        }}
      />
    );
  };

  useMemo(() => {
    dispatch[model].list(query);
  }, [dispatch, query]);

  useEffect(() => {
    if (column_setting !== null) {
      columns = metaData.getRenderColumns();
      dispatch[model].list(query);
    }
  }, [column_setting]);

  function onPageChange(page) {
    setSelectedRowKeys([]);
    const usp = new URLSearchParams(window.location.search);
    if (page) {
      usp.set('page', page);
    } else {
      usp.delete('page');
    }

    dispatch(push(`${pathname}?${usp}`));
  }

  function onShowSizeChange(_, size) {
    const usp = new URLSearchParams(window.location.search);
    if (size) {
      usp.set('limit', size);
    } else {
      usp.delete('limit');
    }

    dispatch(push(`${pathname}?${usp}`));
  }

  return (
    <TableStyle>
      <>
        <Card bodyStyle={{ padding: 0 }} className={hasSelected && 'mb-14'}>
          {/* カードタイトル・Card Head */}
          <Row className="py-4 px-6" justify="space-between">
            <Col>
              <Space size={24}>
                <span className="table-title">{TableName}</span>
                {showDownLoad && <Download model={model} columnMap={metaData.columnMap} />}
              </Space>
            </Col>
            {ExtraTitle && (
              <Col type="flex" align="right">
                {ExtraTitle}
              </Col>
            )}
            {hasTableSetting && (
              <Col>
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

          {/* テーブル・Table */}
          <Row className="index-table-wrapper">
            <Col span={24}>
              <Table
                className="clickable-table"
                sticky={true}
                key={Math.random()}
                columns={columns}
                scroll={{
                  // x: '100vw',
                  x: 1200,
                  // y: '100vh',
                }}
                rowKey={'key'} /** must be unique, ex: ID or seq */
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

          {/* ページネーション・Pagination */}
          <Row className="my-4 mx-6" justify="end">
            <Col>{renderPagination()}</Col>
          </Row>

          {/* 詳細ページ・Detail Drawer */}
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

        {/* 選択時の操作バー・Selected Tool Bar */}
        {hasSelected && (
          <div className="index-table-toolbar" style={{ zIndex: '900' }}>
            <Row align="middle" className="selected-status-ops py-3 px-6">
              <Checkbox
                style={{ fontSize: '16px', fontWeight: '600' }}
                checked={selectedRowKeys.length}
                onChange={e => {
                  if (e.target.checked) {
                    setSelectedRowKeys(
                      items.map(item => {
                        return item.key;
                      }),
                    );
                  } else {
                    setSelectedRowKeys([]);
                    setIsAllRecordsSelected(false);
                  }
                }}
              ></Checkbox>
              <span className="mx-4">
                {hasSelected
                  ? `${
                      isAllRecordsSelected ? pagination.total_items : selectedRowKeys.length
                    }件選択中`
                  : ''}
              </span>
              <span
                className="check-all-btn mr-8"
                onClick={e => {
                  console.log('DEBUG', selectedRowKeys.length, items.length);
                  if (selectedRowKeys.length) {
                    setSelectedRowKeys(
                      items.map(item => {
                        return item.key;
                      }),
                    );
                    setIsAllRecordsSelected(true);
                    /**
                     * TODO - Implement <select all record in dataset> logic here
                     * - select all from items then store into state
                     */
                  } else {
                    setSelectedRowKeys([]);
                  }
                }}
              >
                {isAllRecordsSelected ? '' : '全件選択'}
              </span>
              {contextButtons.map(Component => {
                return <Component selectedRowKeys={selectedRowKeys} />;
              })}

              {/* 操作メニュー */}
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
                  value={'その他の操作'}
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
