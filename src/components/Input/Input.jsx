import React from 'react';
import './Input.css';

const Input = ({ name, ...props }) => {
  return (
    <div className="input-container">
      <input type="text" {...props} className="search-input" name={name} />
    </div>
  );
};

export default Input;
