import React from "react";
import _ from "lodash";

const TaskName = ({ text }) => {
  return <span className="truncate ...">{_.capitalize(text)}</span>;
};

export default TaskName;
