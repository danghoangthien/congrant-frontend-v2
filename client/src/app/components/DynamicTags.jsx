import React, { useEffect, useRef, useState } from 'react';
import { Select, Tag, Space } from 'antd';
import { DynamicTagsStyle } from './DynamicTags.style';

const DynamicTags = ({ tagList = [], availableTagList = [], onSuccess, addMoreLabel }) => {
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(true);
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
    <DynamicTagsStyle>
      {/* {tags.map((tag, index) => {
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
      })} */}

      <Select
        mode="multiple"
        value={tags}
        open={open}
        disabled={disabled}
        onChange={setTags}
        style={{ width: '100%' }}
        // showSearch={false}
        allowClear={false}
        options={availableTagList.map(item => ({
          value: item,
          label: item,
        }))}
        onDropdownVisibleChange={() => {
          setOpen(open ? !open : open);
          setDisabled(true);
        }}
        // onBlur={() => setInputVisible(false)}
      />

      {!open && (
        <Tag
          className="site-tag-plus"
          style={{
            border: '1px dashed #d9d9d9',
            color: 'rgba(0, 0, 0, 0.5)',
            borderRadius: '2px',
          }}
          onClick={() => {
            setDisabled(false);
            setOpen(true);
          }}
        >
          <Space size={3}>
            <span class="material-symbols-outlined" style={{ fontSize: '12px', display: 'flex' }}>
              add
            </span>
            {addMoreLabel || 'New Tag'}
          </Space>
        </Tag>
      )}
    </DynamicTagsStyle>
  );
};

export default DynamicTags;
