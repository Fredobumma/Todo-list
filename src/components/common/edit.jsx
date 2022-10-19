import React from "react";

const Edit = ({ task, onEdit }) => {
  return (
    <span
      className="fa-solid fa-pen-to-square text-blue-300 hover:text-blue-500 transition-all duration-150"
      onClick={() => onEdit(task)}
    ></span>
  );
};

export default Edit;
