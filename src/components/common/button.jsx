import React from "react";

const Button = ({ title }) => {
  return (
    <button
      className="flex self-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto"
      type="button"
    >
      {title}
    </button>
  );
};

export default Button;
