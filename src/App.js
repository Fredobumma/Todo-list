import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import TodoApp from "./components/todoApp";
import TodoList from "./components/todoList";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<TodoApp replace={true} />} />
        <Route path="/todo-list" element={<TodoList />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
