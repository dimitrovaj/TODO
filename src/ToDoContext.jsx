import { createContext, useState, useEffect } from "react";

const ToDoContext = createContext();

export function ToDoProvider({ children }) {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const savedLists = JSON.parse(localStorage.getItem("lists"));
    if (savedLists) {
      setLists(savedLists);
    }
  }, []);

  // const addToList = (title, newList) => {
  //   setLists((lists) => [...lists, { title, list: newList }]);
  // };

  const addToList = (title, newList) => {
    const updatedLists = [...lists, { title, list: newList }];
    setLists(updatedLists);
    localStorage.setItem("lists", JSON.stringify(updatedLists));
  };


  return (
    <ToDoContext.Provider value={{ lists, addToList }}>
      {children}
    </ToDoContext.Provider>
  );
}

export default ToDoContext;
