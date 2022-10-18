import React from "react";

const CheckBox = ({ task, onClick }) => {
  return (
    <span
      className={`text-xl text-blue-500 mr-3 sm:mr-5 ${
        (task.checkBox && "fa-solid fa-square-check") || "fa-regular fa-square"
      }`}
      onClick={() => onClick(task)}
    ></span>
  );
};

export default CheckBox;
