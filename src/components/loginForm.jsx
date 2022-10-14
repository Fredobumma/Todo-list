import React from "react";

const LoginForm = () => {
  return (
    <div className="w-full max-w-md mx-5">
      <div className="bg-white shadow-md rounded p-8 mb-4">
        {/* <p>TODO</p> */}
        <form>
          <div className="mb-10">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <button
            className="flex self-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto"
            type="button"
          >
            Login
          </button>
        </form>
      </div>
      <p className="text-center text-gray-500 text-xs">
        &copy;2022 A project by Manfred Obumma.
      </p>
    </div>
  );
};

export default LoginForm;
