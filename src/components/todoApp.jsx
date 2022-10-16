import React from "react";
// import LoginForm from "./loginForm";
import TodoList from "./todoList";

const TodoApp = () => {
  // const [username, setUsername] = useState("");

  return (
    <React.Fragment>
      {/* <main className="flex items-center justify-center h-screen"> */}
      {/* <LoginForm /> */}
      <TodoList />
      {/* </main> */}
    </React.Fragment>
  );
};

export default TodoApp;
