import React from "react";
import _ from "lodash";

const TaskName = ({ task: { checkBox, name } }) => {
  return (
    <span className={`${(checkBox && "line-through") || ""} truncate ...`}>
      {_.capitalize(name)}
    </span>
  );
};

export default TaskName;
