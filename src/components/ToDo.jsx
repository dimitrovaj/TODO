import React, { useState } from 'react';
import ToDoList from './ToDoList';

const ToDo = () => {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleSaveTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const handleOnEnter = (event) => {
    if (event.key === 'Enter') {
      handleSaveTodo();
    }
  };

  return (
    <ToDoList
      todos={todos}
      newTodo={newTodo}
      handleInputChange={handleInputChange}
      handleOnEnter={handleOnEnter}
      handleSaveTodo={handleSaveTodo}
    />
  );
};

export default ToDo;
