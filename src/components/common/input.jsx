import React from "react";

const Input = ({ id, title, error, ...rest }) => {
  return (
    <div className="mb-10">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={id}
      >
        {title}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-2 focus:outline-blue-500 focus:shadow-outline"
        id={id}
        {...rest}
      />
      {error && (
        <div className="m-2 -mb-5 rounded-md p-2 px-3 bg-rose-300 text-red-900">
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
