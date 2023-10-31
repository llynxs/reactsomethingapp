import React, { memo } from 'react';

export const Input = memo(({ type, value, placeholder, onChange, isValid }) => {
  const handleInputData = ({ target }) => onChange(target.value);

  return (
    <input
      className={`input ${isValid}`}
      type={type}
      id={value}
      value={value}
      placeholder={placeholder}
      onChange={handleInputData}
    />
  );
});
