import React from "react";
import Task from "./task";

const TaskSection = ({ section, tasks, onCheck, onEdit }) => {
  if (!tasks.length && section === "Completed Tasks") return null;

  return (
    <div className="mb-10">
      <h2 className="text-lg sm:text-xl p-3 px-5 underline decoration-blue-500 decoration-4 underline-offset-8 mb-5">
        {section}
      </h2>
      <Task tasks={tasks} onCheck={onCheck} onEdit={onEdit} />
    </div>
  );
};

export default TaskSection;
