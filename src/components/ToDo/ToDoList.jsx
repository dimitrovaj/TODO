import ToDoItem from './ListItem';

const ToDoList = ({
    todos,
    handleDeleteTodo,
    selectedItemsArray,
    setSelectedItemsArray
}) => {

return (
    <ul>
        {todos.map((todo) => (
            <ToDoItem
                key={todo.id}
                todo={todo}
                handleDeleteTodo={handleDeleteTodo}
                selectedItemsArray={selectedItemsArray}
                setSelectedItemsArray={setSelectedItemsArray} />
        ))}
    </ul>
);
};

export default ToDoList;
