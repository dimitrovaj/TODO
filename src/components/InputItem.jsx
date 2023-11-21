import React from 'react';

const InputItem = ({ value, onChange, onKeyDown, onClick }) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder="Enter a new Todo"
      />
      <button onClick={onClick}>Save</button>
    </div>
  );
};

export default InputItem;