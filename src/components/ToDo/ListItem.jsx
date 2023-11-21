import { useState } from "react";

function ToDoItem ({
    todo,
    handleDeleteTodo,
    selectedItemsArray,
    setSelectedItemsArray
})  
{
    const [hoveredId, setHoveredId] = useState(null);

    const handleItemCheckboxChange = (id) => {
        const updatedSelectedItems = selectedItemsArray.includes(id)
            ? selectedItemsArray.filter(itemId => itemId !== id)
            : [...selectedItemsArray, id];
        setSelectedItemsArray(updatedSelectedItems);
    };
        return (
            <li key={todo.id} onMouseEnter={() => setHoveredId(todo.id)} onMouseLeave={() => setHoveredId(null)}>
                <input
                    type="checkbox"
                    checked={selectedItemsArray.includes(todo.id)}
                    onChange={() => handleItemCheckboxChange(todo.id)}
                />
                <span>{todo.value}</span>
                {hoveredId === todo.id && <button onClick={() => handleDeleteTodo(todo.id)}>X</button>}
            </li>
        );

    }
export default ToDoItem;