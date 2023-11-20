import React from 'react';
import InputItem from './InputItem';

const ToDoList = ({ todos, newTodo, handleInputChange, handleOnEnter, handleSaveTodo }) => {
  return (
    <div>
      <h2>Todo List</h2>
      <InputItem
        value={newTodo}
        onChange={handleInputChange}
        onKeyDown={handleOnEnter}
        onClick={handleSaveTodo}
      />
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
