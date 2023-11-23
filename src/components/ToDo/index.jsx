import { useContext, useState } from 'react';
import ToDoList from './ToDoList';
import { v4 as uuidv4 } from 'uuid';
import InputItem from './InputItem';
import ToDoContext from '../../ToDoContext';
import InputTitle from './InputTitle';



const ToDo = () => {
  const {addToList} = useContext(ToDoContext);

  const [newTitle, setNewTitle] = useState('');
  const [titles, setTitles] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [selectedItemsArray, setSelectedItemsArray] = useState([]);

  //console.log('context lists:', lists )

  // useEffect(() => {
  //   const savedTodos = JSON.parse(localStorage.getItem("todos"));
  //   if (savedTodos) {
  //     setTodos(savedTodos);
  //   }
  // }, []);

  const handleSaveList = () => {
    if (newTitle.trim() !== '') {
        const newList = todos.map(item => ({ id: uuidv4(), content: item.value }));
        addToList(newTitle, newList);
        setNewTitle('');
        setTodos([]);

    }
};

  const handleTitleInputChange = (event) => {
    setNewTitle(event.target.value);
  };

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleSaveTitle = () => {
    if (newTitle.trim() !== '') {
      const newTitleObj = { id: uuidv4(), value: newTitle };
      setTitles([...titles, newTitleObj]);
      setNewTitle('');
    }
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
      <h1>ToDo Title</h1>
      <InputTitle value={newTitle}
        onChange={handleTitleInputChange}
        onKeyDown={handleOnEnter}
        onClick={handleSaveTitle}/>

      <h1>ToDo List</h1>
      <InputItem value={newTodo}
        onChange={handleInputChange}
        onKeyDown={handleOnEnter}
        onClick={handleSaveTodo} />

      <button onClick={handleDeleteAll}>Delete All</button>
      <button onClick={handleDeleteSelectedTodos}>Delete Selected</button>
      <button onClick={handleSaveList}>Save list</button>
      

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
