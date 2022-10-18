import React from "react";
import CheckBox from "./checkBox";
import Edit from "./edit";
import Delete from "./delete";
import TaskName from "./taskName";

const Task = ({ content }) => {
  return (
    <span>
      {content.map((text) => (
        <ul key={content.indexOf(text)}>
          <li className="flex flex-col items-end p-5 shadow-md rounded-xl bg-slate-50 mx-3 lg:mx-2 xl:mx-0 mb-3">
            <span className="inline-flex w-full">
              <CheckBox />
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
