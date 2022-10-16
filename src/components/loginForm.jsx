import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./common/button";
import Copyright from "./common/copyright";
import Input from "./common/input";

const LoginForm = () => {
  const navigate = useNavigate();

  return (
    <main className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md m-auto ">
        <div className="bg-white shadow-md rounded p-8 mb-4 mx-5">
          {/* <p>TODO</p> */}
          <form>
            <Input
              id="username"
              title="Username"
              type="text"
              placeholder="Username"
              autoFocus="on"
            />
            <Button
              title="Login"
              extraClasses="w-full"
              onClick={(e) => {
                e.preventDefault();
                navigate("/todo-list");
              }}
            />
          </form>
        </div>
        <Copyright />
      </div>
    </main>
  );
};

export default LoginForm;
