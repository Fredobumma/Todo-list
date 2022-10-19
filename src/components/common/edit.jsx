import React from "react";

const Edit = ({ task, onEdit }) => {
  return (
    <span
      className="fa-solid fa-pen-to-square text-blue-300 h-full hover:text-lg hover:w-4.5 mr-2"
      onClick={() => onEdit(task)}
    ></span>
  );
};

export default Edit;
