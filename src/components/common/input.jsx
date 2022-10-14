import React from "react";

const Input = ({ id, title, ...rest }) => {
  return (
    <div className="mb-10">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={id}
      >
        {title}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={id}
        {...rest}
      />
    </div>
  );
};

export default Input;
