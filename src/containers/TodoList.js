import React, { useState, useCallback } from 'react';
import { Input, List, Button } from '../components';

export function TodoList() {
  const [listData, setListData] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInput = data => setInputValue(data);

  const handleDeleteItem = useCallback(data => {
    const newList = listData.filter((el, i) => el.id !== data);
    setListData(newList);
  }, [listData]);

  const handleCollectData = () => {
    if (!inputValue) return;

    setListData(prev => {
      const filteredArray = prev.filter(el => el.id !== inputValue);

      return [
        ...filteredArray,
        {
          id: inputValue,
          title: inputValue
        },
      ]
    });

    setInputValue('');
  };

  return (
    <div className="App-list">
      <h3>To Do List</h3>
      <div className="App-input">
        <Input
          type="text"
          onChange={handleInput}
          value={inputValue}
          placeholder={'Add item'}
        />
        <Button value={"Add"} onClick={handleCollectData} />
      </div>
      <List list={listData} onDeleteItem={handleDeleteItem} />
    </div>
  );
};
