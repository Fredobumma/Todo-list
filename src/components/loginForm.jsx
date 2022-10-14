import React from "react";
import Button from "./common/button";
import Copyright from "./common/copyright";
import Input from "./common/input";

const LoginForm = () => {
  return (
    <div className="w-full max-w-md mx-5">
      <div className="bg-white shadow-md rounded p-8 mb-4">
        {/* <p>TODO</p> */}
        <form>
          <Input
            id="username"
            title="Username"
            type="text"
            placeholder="Username"
          />
          <Button title="Login" />
        </form>
      </div>
      <Copyright />
    </div>
  );
};

export default LoginForm;
