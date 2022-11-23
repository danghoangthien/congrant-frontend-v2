import React, { useEffect, useRef, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Input, Select, Tag, Tooltip } from 'antd';

const DynamicTags = ({ tagList = [], availableTagList = [], onSuccess, addMoreLabel }) => {
  const [tags, setTags] = useState(tagList);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [editInputIndex, setEditInputIndex] = useState(-1);
  const [editInputValue, setEditInputValue] = useState('');
  const [selectedItems, setSelectedItems] = useState(tagList);
  const inputRef = useRef(null);
  const editInputRef = useRef(null);

  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);
  useEffect(() => {
    editInputRef.current?.focus();
  }, [inputValue]);
  const handleClose = removedTag => {
    const newTags = tags.filter(tag => tag !== removedTag);
    console.log(newTags);
    setTags(newTags);
    onSuccess && onSuccess(newTags);
  };
  const showInput = () => {
    setInputVisible(true);
  };
  const handleInputChange = e => {
    setInputValue(e.target.value);
  };
  const handleSelect = e => {
    const _inputValue = e.target.value;
    if (_inputValue && tags.indexOf(_inputValue) === -1) {
      const newTags = [...tags, _inputValue];
      setTags(newTags);
      onSuccess && onSuccess(newTags);
    }
    setInputVisible(false);
  };
  const handleInputConfirm = () => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      const newTags = [...tags, inputValue];
      setTags(newTags);
      onSuccess && onSuccess(newTags);
    }
    setInputVisible(false);
    setInputValue('');
  };
  const handleEditInputChange = e => {
    setEditInputValue(e.target.value);
  };
  const handleEditInputConfirm = () => {
    const newTags = [...tags];
    newTags[editInputIndex] = editInputValue;
    setTags(newTags);
    setEditInputIndex(-1);
    setInputValue('');
    onSuccess && onSuccess(newTags);
  };
  return (
    <>
      {tags.map((tag, index) => {
        if (editInputIndex === index) {
          return (
            <Input
              ref={editInputRef}
              key={tag}
              size="small"
              className="tag-input"
              value={editInputValue}
              onChange={handleEditInputChange}
              onBlur={handleEditInputConfirm}
              onPressEnter={handleEditInputConfirm}
            />
          );
        }
        const isLongTag = tag.length > 20;
        const tagElem = (
          <Tag
            className="edit-tag"
            key={tag}
            closable={index !== 0}
            onClose={() => handleClose(tag)}
          >
            <span
              onDoubleClick={e => {
                if (index !== 0) {
                  setEditInputIndex(index);
                  setEditInputValue(tag);
                  e.preventDefault();
                }
              }}
            >
              {isLongTag ? `${tag.slice(0, 20)}...` : tag}
            </span>
          </Tag>
        );
        return isLongTag ? (
          <Tooltip title={tag} key={tag}>
            {tagElem}
          </Tooltip>
        ) : (
          tagElem
        );
      })}
      {inputVisible && (
        <>
          <Select
            mode="multiple"
            value={tags}
            onChange={setTags}
            style={{ width: '100%' }}
            options={availableTagList.map(item => ({
              value: item,
              label: item,
            }))}
            onBlur={() => setInputVisible(false)}
          />
        </>
      )}
      {!inputVisible && (
        <Tag
          className="site-tag-plus"
          style={{
            border: '1px dashed #d9d9d9',
            color: 'rgba(0, 0, 0, 0.5)',
          }}
          onClick={showInput}
        >
          <PlusOutlined /> {addMoreLabel || 'New Tag'}
        </Tag>
      )}
    </>
  );
};

export default DynamicTags;
