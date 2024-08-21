import React from 'react';
import './index.scss';

const Button = ({ text, btnSize, btnColor, handleButtonClick }) => {
  const handleButton = (e) => {
    e.preventDefault();
    handleButtonClick();
  };
  return (
    <button onClick={handleButton} className={`button ${btnColor} ${btnSize} `}>
      {text}
    </button>
  );
};

export default Button;
