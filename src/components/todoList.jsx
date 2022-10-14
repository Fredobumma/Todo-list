import React, { useState } from "react";
import LoginForm from "./loginForm";

const TodoList = () => {
  const [username, setUsername] = useState("");

  return (
    <React.Fragment>
      <main className="flex items-center justify-center h-screen">
        <LoginForm username={username} />
      </main>
    </React.Fragment>
  );
};

export default TodoList;
