import React from "react";
import Task from "./task";

const TaskSection = ({ label, content }) => {
  return (
    <div className="mb-10">
      <h2 className="text-lg sm:text-xl p-3 px-5">{label}</h2>
      <Task content={content} />
    </div>
  );
};

export default TaskSection;
