
import { Route, Routes } from "react-router";
import ToDo from "./components/ToDo/index.jsx";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {

    return (
      <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/ToDoList" element={<ToDo />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
      </>
      // <div>
      //   <ToDo />
      // </div>
    );
}

export default App