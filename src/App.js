import React from "react";
import { Routes, Route } from "react-router-dom";
import TodoApp from "./components/todoApp";
import TodoList from "./components/todoList";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<TodoApp replace={true} />} />
        <Route path="/todo-list" element={<TodoList replace={true} />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
