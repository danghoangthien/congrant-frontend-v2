import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { List } from 'antd';
import ReactDragListView from 'react-drag-listview';

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
        <List
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
