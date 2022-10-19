import React from "react";

const CheckBox = ({ task, onCheck }) => {
  return (
    <span
      className={`text-xl text-blue-500 mr-3 sm:mr-5 ${
        (task.checkBox && "fa-solid fa-square-check") || "fa-regular fa-square"
      }`}
      onClick={() => onCheck(task)}
    ></span>
  );
};

export default CheckBox;
