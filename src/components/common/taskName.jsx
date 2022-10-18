import React from "react";
import _ from "lodash";

const TaskName = ({ taskName }) => {
  return <span className="truncate ...">{_.capitalize(taskName)}</span>;
};

export default TaskName;
