import React, { useState } from "react";
import Joi from "joi-browser";
import PropTypes from "prop-types";
import AppLogo from "./common/appLogo";
import WelcomeMessage from "./common/welcomeMessage";
import Copyright from "./common/copyright";
import { getHooks } from "../utilities/getHooks";

const LoginForm = ({ form, navigate }) => {
  const [data, setData] = useState({ username: "" });
  const [errors, setErrors] = useState({});
  const schema = {
    username: Joi.string().min(5).max(30).required().label("Username"),
  };
  const doSubmit = () => navigate("/todo-list", { state: { data } });
  const validate = new form(data, setData, errors, setErrors, schema, doSubmit);

  return (
    <main className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md m-auto">
        <AppLogo />
        <WelcomeMessage />
        <div className="bg-white shadow-md rounded p-8 mb-4 mx-5">
          <form onSubmit={validate.handleSubmit}>
            {validate.renderInput(
              "username",
              "Username",
              "text",
              "Enter Username",
              "username",
              "on"
            )}
            {validate.renderButton("Login")}
          </form>
        </div>
        <Copyright />
      </div>
    </main>
  );
};

LoginForm.propTypes = {
  form: PropTypes.func,
  navigate: PropTypes.func,
};

export default getHooks(LoginForm);
