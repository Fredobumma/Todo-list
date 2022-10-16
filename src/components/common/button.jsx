import React from "react";

const Button = ({ title, extraClasses, ...rest }) => {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto ${extraClasses}`}
      type="button"
      {...rest}
    >
      {title}
    </button>
  );
};

export default Button;
