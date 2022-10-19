import React from "react";

const Delete = ({ task, onDelete }) => {
  return (
    <span
      className="fa-solid fa-trash-can text-slate-500 hover:text-slate-900 transition-all duration-150"
      onClick={() => onDelete(task)}
    ></span>
  );
};

export default Delete;
