import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Form from "./components/common/form";
import LoginForm from "./components/loginForm";
import TodoList from "./components/todoList";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="/login"
          element={<LoginForm replace={true} form={Form} />}
        />
        <Route path="/todo-list" element={<TodoList />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
