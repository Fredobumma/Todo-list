import React from "react";
import Task from "./task";

const TaskSection = ({ label, content, onCheck: onClick }) => {
  if (!content.length && label === "Completed Tasks") return null;

  return (
    <div className="mb-10">
      <h2 className="text-lg sm:text-xl p-3 px-5 underline decoration-blue-500 decoration-4 underline-offset-8 mb-5">
        {label}
      </h2>
      <Task content={content} onClick={onClick} />
    </div>
  );
};

export default TaskSection;
