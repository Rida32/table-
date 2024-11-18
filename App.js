
import { BrowserRouter , Route , Routes} from "react-router-dom";
import "./App.css";
import React, { useEffect, useState } from "react";
import StudentTable from "./StudentTable";
import ToDo from "./components/ToDo";
import Task from "./components/Task";



function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<StudentTable/>}/>
        <Route path="/todo" element={<ToDo/>}/>
        <Route path="/task" element={<Task/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
