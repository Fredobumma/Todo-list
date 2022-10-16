import React from "react";
import { useNavigate } from "react-router-dom";
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
            <Input
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto w-full"
              id="login"
              title={null}
              type="submit"
              value="Login"
              onClick={() => {
                navigate("/todo-list", { replace: false });
                navigate(0);
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
