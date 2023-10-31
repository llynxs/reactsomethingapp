import React from 'react';

export const Button = ({ type, value, onClick, disabled }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`button`}
      disabled={disabled}
    >
      {value}
    </button>
  );
};
