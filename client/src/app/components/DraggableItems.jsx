import React, { useState } from 'react';
import { List } from 'antd';
import ReactDragListView from 'react-drag-listview';
import styled from 'styled-components/macro';

const StyledList = styled(List)`
  .ant-list-item {
    padding: 4px 0;
  }
`;

const Draggable = ({ entries = [], onDragEnded }) => {
  const [data, setData] = useState(entries);
  const onDragEnd = (fromIndex, toIndex) => {
    if (toIndex < 0) return; // Ignores if outside designated area

    const items = [...data];
    const item = items.splice(fromIndex, 1)[0];
    items.splice(toIndex, 0, item);
    setData(items);
    onDragEnded && onDragEnded();
  };

  return (
    <div>
      <ReactDragListView nodeSelector=".ant-list-item.draggble" onDragEnd={onDragEnd}>
        <StyledList
          size="small"
          split={false}
          dataSource={data}
          renderItem={item => {
            return <List.Item className={'draggble'}>{item}</List.Item>;
          }}
        />
      </ReactDragListView>
    </div>
  );
};

export default Draggable;
