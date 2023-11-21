import React, { useState } from 'react';
import InputItem from './InputItem';

const ToDoList = ({
    todos,
    newTodo,
    handleInputChange,
    handleOnEnter,
    handleSaveTodo,
    handleDeleteAll,
    handleDeleteTodo,
    handleDeleteSelectedTodos,
    selectedItemsArray,
    setSelectedItemsArray
}) => {
    const [hoveredId, setHoveredId] = useState(null);

    const handleItemCheckboxChange = (id) => {
        const updatedSelectedItems = selectedItemsArray.includes(id)
            ? selectedItemsArray.filter(itemId => itemId !== id)
            : [...selectedItemsArray, id];
        setSelectedItemsArray(updatedSelectedItems);
    };

    return (
        <div>
            <h2>Todo List</h2>
            <InputItem
                value={newTodo}
                onChange={handleInputChange}
                onKeyDown={handleOnEnter}
                onClick={handleSaveTodo}
            />
            <button onClick={handleDeleteAll}>Delete All</button>
            <button onClick={handleDeleteSelectedTodos}>Delete Selected</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} onMouseEnter={() => setHoveredId(todo.id)} onMouseLeave={() => setHoveredId(null)}>
                        <input
                            type="checkbox"
                            checked={selectedItemsArray.includes(todo.id)}
                            onChange={() => handleItemCheckboxChange(todo.id)}
                        />
                        <span>{todo.value}</span>
                        {hoveredId === todo.id && <button onClick={() => handleDeleteTodo(todo.id)}>X</button>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;
