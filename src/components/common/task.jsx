import React from "react";
import CheckBox from "./checkBox";
import Edit from "./edit";
import Delete from "./delete";
import TaskName from "./taskName";

const Task = ({ content, onClick }) => {
  if (!content.length)
    return <p className="font-medium p-5 text-xs -mt-3">No tasks added yet</p>;

  return (
    <span>
      {content.map((text) => (
        <ul key={content.indexOf(text)}>
          <li className="flex flex-col items-end p-5 shadow-md rounded-xl bg-slate-50 mx-3 lg:mx-2 xl:mx-0 mb-3">
            <span className="inline-flex w-full">
              <CheckBox onClick={onClick} text={text} />
              <TaskName text={text} />
            </span>
            <span className="text-xl sm:text-md">
              <Edit />
              <Delete />
            </span>
          </li>
        </ul>
      ))}
    </span>
  );
};

export default Task;
