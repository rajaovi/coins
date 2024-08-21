import React, { useState } from 'react';

const Input = (type, value, placeholder) => {
  const [inputValue, setInputValue] = useState('');
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };
  return <input type={type} value={inputValue} onChange={handleInput} placeholder={placeholder} />;
};

export default Input;
