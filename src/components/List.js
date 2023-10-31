import React, { useState, memo } from 'react';

export const List = memo(({ list, onDeleteItem }) => {
  const handleItemDelete = ({ target }) => onDeleteItem(target.dataset.id);

  return (
    <div className="App-item-list">
      <ul>
        {
          list.length
          ? list.map((el, i) => {
            const { id, title } = el;
            return (
              <li className="App-item-list-item" key={id + i}>
                <span className="App-item-list-title">{title}</span>
                {
                  onDeleteItem &&
                  <button
                    data-id={id}
                    className="App-item-list-button"
                    onClick={handleItemDelete}
                  >
                    Delete
                  </button>
                }
              </li>
            );
          })
          : <div>Empty</div>
        }
      </ul>
    </div>
  );
});
