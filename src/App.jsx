import { Route, Routes } from "react-router";
import ToDo from "./components/ToDo/index.jsx";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { ToDoProvider } from "./ToDoContext.jsx";
import NavBar from "./components/navbar/NavBar.jsx";

function App() {

  return (
    <ToDoProvider>
      <NavBar />
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo-list" element={<ToDo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </ToDoProvider>
  );
}

export default App