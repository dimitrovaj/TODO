import { useState } from 'react';
import ToDoList from './ToDoList';
import { v4 as uuidv4 } from 'uuid';
import InputItem from './InputItem';


const ToDo = () => {

  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [selectedItemsArray, setSelectedItemsArray] = useState([]);

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleSaveTodo = () => {
    if (newTodo.trim() !== '') {
      const newTodoObj = { id: uuidv4(), value: newTodo };
      setTodos([...todos, newTodoObj]);
      setNewTodo('');
    }
  };

  const handleOnEnter = (event) => {
    if (event.key === 'Enter') {
      handleSaveTodo();
    }
  };

  const handleDeleteAll = () => {
    setTodos([]);
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleDeleteSelectedTodos = () => {
    const updatedTodos = todos.filter(todo => !selectedItemsArray.includes(todo.id));
    setTodos(updatedTodos);
    setSelectedItemsArray([]);
  };

  return (
    <>
      <h1>Todo List</h1>
      <InputItem value={newTodo}
        onChange={handleInputChange}
        onKeyDown={handleOnEnter}
        onClick={handleSaveTodo} />

      <button onClick={handleDeleteAll}>Delete All</button>
      <button onClick={handleDeleteSelectedTodos}>Delete Selected</button>

      <ToDoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        selectedItemsArray={selectedItemsArray}
        setSelectedItemsArray={setSelectedItemsArray}
      />
    </>
  );
};

export default ToDo;
