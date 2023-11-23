import { createContext, useState } from "react";

const ToDoContext = createContext();

export function ToDoProvider({ children }) {
  const [lists, setLists] = useState([]);


  const addToList = (title, newList) => {
    setLists((lists) => [...lists, { title, list: newList }]);
  };


  return (
    <ToDoContext.Provider value={{ lists, addToList }}>
      {children}
    </ToDoContext.Provider>
  );
}

export default ToDoContext;
