import React from "react";
import CheckBox from "./checkBox";
import Edit from "./edit";
import Delete from "./delete";
import TaskName from "./taskName";

const Task = ({ tasks, onCheck, onEdit, onDelete }) => {
  if (!tasks.length)
    return <p className="font-medium p-5 text-xs -mt-3">No tasks added yet</p>;

  return (
    <span>
      {tasks.map((task) => (
        <ul key={tasks.indexOf(task)}>
          <li className="flex flex-col items-end p-5 shadow-md rounded-xl bg-slate-50 mx-3 lg:mx-2 xl:mx-0 mb-3">
            <span className="inline-flex items-center w-full">
              <CheckBox task={task} onCheck={onCheck} />
              <TaskName task={task} />
            </span>
            <span className="flex justify-between items-center text-xl sm:text-md w-16 h-8">
              <Edit task={task} onEdit={onEdit} />
              <Delete task={task} onDelete={onDelete} />
            </span>
          </li>
        </ul>
      ))}
    </span>
  );
};

export default Task;
